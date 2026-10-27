import { useContext } from "react";
import { GlobalContext } from "../../context/globalState";
import Job from "./job";

const JobCards = () => {
  const context = useContext(GlobalContext);

  if (!context) {
    throw new Error("JobCards must be used within GlobalState");
  }

  const { jobs, error, loading } = context;

  if (loading) {
    return <p className="text-xs text-brand">Loading jobs...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (jobs.length === 0) {
    return <p>No jobs found.</p>;
  }
  return (
    <div className="grid grid-cols-1 gap-4 w-full lg:grid-cols-3 lg:gap-6 items-stretch">
      {jobs.map((job) => {
        return <Job key={job._id ?? job.id} jobData={job}/>;
      })}
    </div>
  );
};

export default JobCards;
