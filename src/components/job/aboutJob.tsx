import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { useAuth } from "../../context/authContext";



const AboutJob = () => {
  const {job, fetchJob } = useAuth()
  const {id} = useParams();

  console.log(id);
  console.log(job)

  useEffect(() => {
    if(!id) return;

    fetchJob(id)
  }, [id]);

  if (!job) return <p className="hidden">Loading...</p>;
  return (
    <div className="flex flex-col items-start w-full gap-6 bg-light border border-gray-300 px-6 rounded-lg py-6 flex-2">
      <div className="space-y-3">
        <p className="font-bold text-md tracking-wide">About the role</p>
        <p className="text-muted leading-relaxed">
          {job.desciption}
        </p>
      </div>

      <div className="space-y-3">
        <p className="font-bold text-md tracking-wide">Responsibilities</p>
        <ul className="flex flex-col items-start gap-2 text-muted list-disc px-4">
          {
            job.responsibilities.length > 0 && job.responsibilities.map((task: string, index) => (
              <li key={index}>{task}</li>
            ))
          }
        </ul>
      </div>

      <div className="space-y-3">
        <p className="font-bold text-md tracking-wide">Skills</p>
        <ul className="flex flex-col items-start gap-2 text-muted list-disc px-4">
          {
            job.skills.length > 0 && job.skills.map((skill: string, index: number) => (
              <li key={index}>{skill}</li>
            ))
          }
        </ul>
      </div>

      <Link to={''} className="text-light text-sm rounded-lg p-3 bg-green-700 flex items-center gap-2 hover:bg-brand transition-colors">
        <span>Apply for this role</span>
        <ArrowRight size={16} />
      </Link>
    </div>
  );
};

export default AboutJob;
