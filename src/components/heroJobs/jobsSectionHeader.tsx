import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";




const JobsSectionHeader = () => {
    return (
        <div className="flex flex-col gap-3 w-full">
            <div className="flex items-center justify-between">
                <div className="flex flex-col gap-2">
                    <h2 className="text-2xl sm:text-3xl font-bold">Find your next move</h2>
                    <p className="text-xs text-muted">Fresh opportunities. A future that fits you.</p>
                </div>
                <div className="flex items-center gap-0.5 text-xs text-brand">
                    <Link to={'/jobs'}>View all Jobs</Link>
                    <ArrowRight size={14}/>
                </div>
            </div>

            {/* Categories */}
            <div>
                {}
            </div>
        </div>
    )
}



export default JobsSectionHeader;