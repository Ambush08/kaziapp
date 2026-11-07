import { Search } from "lucide-react";
import JobPageCard from "./jobPageCard";
import { useContext } from "react";
import { GlobalContext } from "../../context/globalState";




const JobsPageCards = () => {

    const context = useContext(GlobalContext);

    if(!context) {
        throw new Error("GlobalContext is not available");
    }

    const { jobs, loading, error } = context;

    if(loading) {
        return <p className="text-xs text-muted">Loading...</p>
    }

    if(error) {
        return <p>{error}</p>
    }

    if(jobs.length === 0) {
        return <p className="text-xs text-muted">No jobs available</p>
    }
    return(
        <div className="flex flex-col items-start gap-4">
            <div className="flex flex-col lg:flex-row items-start lg:items-center lg:justify-between gap-3 w-full">
                <div className="flex flex-col gap-2 items-start">
                    <h3 className="text-2xl font-bold">All open roles</h3>
                    <p className="text-xs font-semibold">6 <span className="text-xs text-muted">of 6</span></p>
                </div>
                <div className="text-muted text-xs border border-gray-300 flex items-center gap-2 rounded-md p-2">
                    <Search size={14}/>
                    <input type="text" placeholder="search jobs" className="outline-0"/>
                </div>
            </div>

            {/* Job card */}
            <div className="flex flex-col gap-4 w-full items-start">
                {
                    jobs.map((job) => (
                        <JobPageCard key={job.job.id} job={job} />
                    ))
                }
            </div>
        </div>
    )
}




export default JobsPageCards;