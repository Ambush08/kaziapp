import { Link } from "react-router-dom";
import { ArrowRight } from 'lucide-react'
import NoSavedJob from "./noSavedJob";
import SavedJobsCards from "./savedJobsCards";



const SavedJobsSection = () => {
    return( 
        <section className="w-full py-8">
            <div className="flex flex-col items-start gap-6 px-6 mx-auto max-w-6xl">
                <div className="flex flex-col items-start gap-3 w-full">
                    <div className="flex items-center justify-between w-full">
                        <h3 className="text-xl font-bold otracking-wide lg:text-2xl">Your saved opportunities</h3>
                        <Link to='/jobs' className="text-brand text-sm font-semibold flex items-center gap-1 hover:text-green-600 transition-all duration-300">
                            <span>Browse all jobs</span>
                            <ArrowRight size={16} />
                        </Link>
                    </div>
                    <p className="text-xs tracking-wide text-muted">Nothing saved yet</p>
                </div>
                
                {/* NO SAVED JOBS */}
                { /*<NoSavedJob /> */}


                {/* SAVED JOBS */}
                <SavedJobsCards />
            </div>
        </section>
    )
}



export default SavedJobsSection;