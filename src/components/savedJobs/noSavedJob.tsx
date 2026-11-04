import { Bookmark, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";



const NoSavedJob = () => {
    return (
        <div className="border border-gray-300 rounded-lg border-dashed p-8 w-full flex flex-col items-center gap-3">
                    <Bookmark size={25} className="text-muted" />
                    <h5 className="text-md font-semibold">No saved jobs yet</h5>
                    <p className="text-xs text-muted tracking-wide text-center">Tap the bookmark icon on any job to keep it here.</p>
                    <Link to='/jobs' className="text-light text-xs bg-green-700 p-3 rounded-lg flex items-center gap-1 hover:bg-green-800 transition-all duration-300">
                        <span>Browse open roles</span>
                        <ArrowRight size={16} />
                    </Link>
                </div>
    )
}



export default NoSavedJob;