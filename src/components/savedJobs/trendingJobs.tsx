import TrendingJob from "./trandingJob";
import { GlobalContext } from "../../context/globalState";
import { useContext } from "react";



const TrendingJobs = () => {

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
        <div className="grid grid-cols-1 gap-4 w-full lg:grid-cols-3 lg:gap-6 items-stretch">
            {
                jobs.map((job) => (
                    <TrendingJob key={job.job.id} job={job}/>
                ))
            }
        </div>
    )
}




export default TrendingJobs;