import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import { Bookmark } from "lucide-react";
import formatTime from "../../utils/formatTime";

const TrendingJob = ({job}: any) => {
  return (
    <div className="flex flex-col p-6 border border-gray-300 rounded-lg hover:border-brand items-start space-y-4">
      <div className="flex justify-between items-center w-full">
        <div className="bg-green-200 py-2 px-3.5 rounded-md text-brand text-2xl font-bold">
          <h1>{job.job.title.charAt(0).toUpperCase()}</h1>
        </div>
        <Bookmark size={16} className="cursor-pointer" />
      </div>

      <div className="felx flex-col space-y-3 border-b border-b-gray-300 w-full pb-6">
        <Link to={"/job/id"} className="text-md font-bold text-brand hover:text-green-800 transition-colors">
          {job.job.title}
        </Link>
        <p className="text-xs text-muted tracking-wide">
          {job.job.location}
        </p>
        <ul className="flex flex-wrap gap-2 items-center text-xs text-muted tracking-wide">
          <li className="bg-gray-100 px-1.5 py-1 rounded-sm">{job.job.jobType}</li>
          <li className="bg-gray-100 px-1.5 py-1 rounded-sm">{job.job.experienceLevel}-level</li>
          <li className="bg-gray-100 px-1.5 py-1 rounded-sm">{job.job.category.name}</li>
          <li className="bg-green-200 text-brand px-1.5 py-1 rounded-sm">{job.job.status}</li>
        </ul>
      </div>

      <div className="flex justify-between items-center w-full">
        <h3 className="flex flex-col items-start gap-1">
          <p className="text-sm font-semibold">
            <span>
            {new Intl.NumberFormat("en-KE", {
              style: "currency",
              currency: "KES",
              maximumFractionDigits: 0,
            }).format(job.job.salaryMin)}
          </span>
          {" - "}
          <span>
            {new Intl.NumberFormat("en-KE", {
              style: "currency",
              currency: "KES",
              maximumFractionDigits: 0,
            }).format(job.job.salaryMax)}
          </span>
          </p>
          <span className="text-xs text-muted">per month</span>
        </h3>

        <Link to={"/job/id"} className="text-brand">
          <FiArrowUpRight />
        </Link>
      </div>

      <h4 className="text-xs text-muted">{formatTime(job.job.createdAt)}</h4>
    </div>
  );
};

export default TrendingJob;
