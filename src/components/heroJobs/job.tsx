import { Bookmark } from "lucide-react";
import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import formatTime from "../../utils/formatTime";

interface JobProps {
  jobData: any;
}

const Job = ({ jobData }: JobProps) => {
  return (
    <div className="flex flex-col p-6 border border-gray-300 rounded-lg hover:border-brand items-start space-y-4">
      <div className="flex justify-between items-center w-full">
        <div className="bg-green-100 py-2 px-3.5 rounded-md text-brand text-2xl font-bold">
          <h1>
            {jobData.job.title.charAt(0).toUpperCase()}
          </h1>
        </div>
        <Bookmark size={16} className="cursor-pointer" />
      </div>

      <div className="felx flex-col space-y-3 border-b border-b-gray-300 w-full pb-6">
        <h4 className="text-lg font-semibold tracking-wide">
          {jobData.job.title}
        </h4>
        <p className="text-xs text-muted tracking-wide">
          <span>{jobData.job.company} </span>
          <span>. {jobData.job.location}</span>
        </p>
        <ul className="flex gap-2 items-center text-xs text-muted tracking-wide">
          <li className="bg-gray-100 px-1.5 py-1 rounded-sm">
            {jobData.job.jobType}
          </li>
          <li className="bg-gray-100 px-1.5 py-1 rounded-sm">
            {jobData.job.experienceLevel}
          </li>
          <li className="bg-gray-100 px-1.5 py-1 rounded-sm">
            {jobData.job.category.name}
          </li>
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
              }).format(jobData.job.salaryMin)}
            </span>

            {" - "}

            <span>
              {new Intl.NumberFormat("en-KE", {
                style: "currency",
                currency: "KES",
                maximumFractionDigits: 0,
              }).format(jobData.job.salaryMax)}
            </span>
          </p>
          <span className="text-xs text-muted">per month</span>
        </h3>

        <Link to={`jobs/:id}`}>
          <FiArrowUpRight />
        </Link>
      </div>

      <h4 className="text-xs text-muted">
        {formatTime(jobData.job.createdAt)}
      </h4>
    </div>
  );
};

export default Job;
