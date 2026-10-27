import { Sparkles, ShieldCheck, Verified } from "lucide-react";
import CardTestimonie from "./cardTestimonie";
import { FaUsers } from "react-icons/fa";
import HeroJobCard from "./heroJobCard";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../context/globalState";

const HeroCard = ({ interval = 3000 }) => {
  const context = useContext(GlobalContext);
  const [currentJob, setCurrentJob] = useState(0);

  if (!context) {
    throw new Error("JobCards must be used within GlobalState");
  }

  const { jobs, error, loading } = context;

  const handleCurrentJob = (index: number) => {
    setCurrentJob(index);
  };

  useEffect(() => {
    if (jobs.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentJob((prev) => (prev + 1) % jobs.length);
    }, interval);

    return () => clearInterval(timer);
  }, [interval, jobs.length]);

  return (
    <div className="flex flex-col space-y-10 items-start">
      <div className="bg-hero-card border border-gray-700 rounded-lg p-6 w-full space-y-8">
        <div className="w-full flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-green-500" aria-hidden="true" />
            <p className="text-light">Recently added</p>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-green-500" />
            <p className="text-green-500 ">Verified employers</p>
          </div>
        </div>

        {/* Job card */}
        <div className="flex flex-col gap-3 items-center w-full">
          <div
            key={currentJob}
            className="w-full"
          >
            {
              jobs.length > 0 ? <HeroJobCard job={jobs[currentJob]} loading={loading} error={error}/> : <p>No jobs at the moment</p>
            }
          </div>
          <div className="flex items-center gap-1 justify-center w-full">
            {jobs.map((_, index) => {
              return (
                <button
                  key={index}
                  className={`p-1 rounded-full transition-colors ${
                    currentJob === index ? "bg-green-500 px-3" : "bg-gray-700"
                  }`}
                  onClick={() => handleCurrentJob(index)}
                ></button>
              );
            })}
          </div>
        </div>

        {/* Card testimonie */}
        <CardTestimonie />

        {/* Hero card info */}
        <div className="border-t border-t-gray-700 w-full pt-4">
          <ul className="flex items-center justify-between text-xs gap-3 w-full">
            <li className="flex items-center gap-2">
              <ShieldCheck size={14} className="text-green-500" />
              <h4 className="text-muted">Verified jobs</h4>
            </li>
            <li className="flex items-center gap-2">
              <FaUsers size={14} className="text-green-500" />
              <h4 className="text-muted">Real connections</h4>
            </li>
            <li className="flex items-center gap-2">
              <Verified size={14} className="text-green-500" />
              <h4 className="text-muted">Free for job seekers</h4>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
