import { Wallet, Layers, Briefcase, Clock, Bookmark } from "lucide-react";
import { FaMapMarkerAlt } from "react-icons/fa"




const JobData = () => {
    return(
        <div className="flex flex-col gap-3 bg-light border border-gray-300 px-6 rounded-lg py-3 w-full flex-1">
            <p className="text-md tracking-wide font-bold">Job overview</p>

            <div className="flex items-center justify-between border-b border-b-gray-300 border-dashed py-3">
                <p className="flex items-center gap-1 text-xs text-muted">
                    <Wallet size={14} />
                    <span>Salary</span>
                </p>

                <p className="text-xs font-semibold">KES 180,000 - 250,000 per month</p>
            </div>

            <div className="flex items-center justify-between border-b border-b-gray-300 border-dashed py-3">
                <p className="flex items-center gap-1 text-xs text-muted">
                    <FaMapMarkerAlt size={14} />
                    <span>Location</span>
                </p>

                <p className="text-xs font-semibold">Nairobi, Kenya</p>
            </div>

            <div className="flex items-center justify-between border-b border-b-gray-300 border-dashed py-3">
                <p className="flex items-center gap-1 text-xs text-muted">
                    <Layers size={14} />
                    <span>Work arrangement</span>
                </p>

                <p className="text-xs font-semibold">Hybrid</p>
            </div>

            <div className="flex items-center justify-between border-b border-b-gray-300 border-dashed py-3">
                <p className="flex items-center gap-1 text-xs text-muted">
                    <Briefcase size={14} />
                    <span>Job type</span>
                </p>

                <p className="text-xs font-semibold">Full-time</p>
            </div>

            <div className="flex items-center justify-between border-b border-b-gray-300 border-dashed py-3">
                <p className="flex items-center gap-1 text-xs text-muted">
                    <Clock size={14} />
                    <span>Experience level</span>
                </p>

                <p className="text-xs font-semibold">Mid-level</p>
            </div>

            <div className="flex items-center justify-between py-3">
                <p className="flex items-center gap-1 text-xs text-muted">
                    <Clock size={14} />
                    <span>Posted</span>
                </p>

                <p className="text-xs font-semibold">2 hours ago</p>
            </div>

            <button className="bg-green-700 text-light flex items-center gap-3 justify-center py-2.5 font-semibold rounded-lg hover:bg-brand transition-colors cursor-pointer">
                <Bookmark size={18} />
                <span>Save job</span>
            </button>
        </div>
    )
}



export default JobData;