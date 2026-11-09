import { ChevronRight, Bookmark, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const JobPageHeader = () => {
  return (
    <div className="flex flex-col items-start gap-4 w-full">
      <h4 className="flex items-center text-green-600 font-semibold gap-1">
        All open roles
        <span className="text-muted font-light">
          <ChevronRight size={14}/>
        </span>
        <span className="text-muted font-light">Junior Node js Developer</span>
      </h4>

      <div className="border border-gray-300 rounded-lg bg-light p-6 flex flex-col items-start gap-4 md:flex-row lg:justify-between w-full">
        <div className="flex items-start gap-4 md:w-3/4">
          <div className="text-2xl lg:text-4xl text-green-600 py-2 px-4 bg-green-100 font-bold rounded-md">J</div>

          <div className="flex flex-col gap-2 items-start w-full">
            <h4
              className="text-xl font-bold text-brand tracking-wide w-full"
            >
              Junior Node js Developer
            </h4>
            <p className="text-muted">Safaricom . Nairobi, Kenya</p>
            <ul className="flex gap-2 py-2 items-center">
              <li className="rounded-md items-center text-xs py-1 px-2 text-muted bg-gray-200">
                Full-time
              </li>

              <li className="rounded-md items-center text-xs py-1 px-2 text-muted bg-gray-200">
                Hybrid
              </li>
              <li className="rounded-md items-center text-xs py-1 px-2 text-brand bg-green-100 font-semibold">
                Tech
              </li>

              <li className="rounded-md items-center text-xs py-1 px-2 text-muted bg-gray-200">
                Mid-level
              </li>
            </ul>
          </div>
        </div>

        <div className="flex items-center justify-start md:justify-end gap-6 w-full">
          
          <Link
            to={`/jobs/job/:id`}
            className="flex items-center cursor-pointer gap-1 text-xs text-light justify-center py-3 rounded-lg font-semibold hover:bg-green-700 bg-brand px-6"
          >
            <span>Apply now</span>
            <ArrowRight size={14} />
          </Link>

          <button className="border border-gray-200 rounded-lg py-3 px-6 flex items-center gap-1">
            <Bookmark size={18} className="cursor-pointer" />
            <span>Save job</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobPageHeader;
