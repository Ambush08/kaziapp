import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SimilarJob from "./similarJob";
import { useAuth } from "../../context/authContext";



const SimilarJobs = () => {
  const { similarJobs, similarError, similarLoading } = useAuth();

  if(similarError){
    return <p className="hidden text-xs">{similarError}</p>
  }

  if(similarLoading){
    return <p className="text-xs hidden">Loading similar jobs</p>
  }


  if(similarJobs.length === 0){
    return <p className="text-xs hidden">No similar jobs at the moment</p>
  }
  
  return (
      <div className="flex flex-col items-sart gap-3 max-w-6xl mx-auto">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <h3 className="text-2xl font-semibold">Similar roles</h3>
            <p className="text-xs text-muted">
              More opportunities worth a look.
            </p>
          </div>
          <Link
            to="/jobs"
            className="text-brand text-xs font-semibold flex items-center gap-1 hover:text-green-600 transition-all duration-300"
          >
            <span>Browse all jobs</span>
            <ArrowRight size={16} />
          </Link>
        </div>


        {/* Similar jobs */}
        <div className="grid grid-cols-1 gap-4 w-full lg:grid-cols-3 lg:gap-6 items-stretch">
            {
              similarJobs.map((job) => (
                <SimilarJob key={job.job.id} job={job}/>
              ))
            }
        </div>
      </div>
  );
};

export default SimilarJobs;
