import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SimilarJob from "./similarJob";
import { GlobalContext } from "../../context/globalState";
import { useContext } from "react";



const SimilarJobs = () => {
  const context = useContext(GlobalContext);

  if(!context){
    throw new Error('Job cards must be used within global context')
  }

  const { jobs, error, loading } = context;

  if(error){
    return <p>{error}</p>
  }

  if(loading){
    return <p>Loading...</p>
  }

  if(jobs.length === 0){
    return <p>No jobs at the moment</p>
  }
  return (
    <section className="w-full py-8 bg-gray-200">
      <div className="flex flex-col items-sart gap-3 max-w-6xl mx-auto px-6">
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
              jobs.map((job) => (
                <SimilarJob key={job.job.id} job={job}/>
              ))
            }
        </div>
      </div>
    </section>
  );
};

export default SimilarJobs;
