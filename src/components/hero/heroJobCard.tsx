import { Wallet } from "lucide-react";
import { FaArrowRight, FaMapMarkerAlt } from "react-icons/fa";
import formatTime from "../../utils/formatTime";

interface JobCardProps {
  job: any;
  loading: boolean,
  error: boolean
}

const HeroJobCard = ({ job, loading, error }: JobCardProps) => {

  if (loading) {
    return <p>An error occured while fetching jobs</p>;
  }

  if (error) {
    return <p>An error occured while fetching jobs</p>;
  }

  return (
    <div className="bg-hero-bg px-4 py-3 border border-green-900 rounded-lg space-y-4 hover:border-green-500 transition-colors w-full animate-job-card">
      {/* Job title */}
      <div className="border-b border-b-gray-700 flex py-2 items-center gap-4">
        <h1 className="text-brand text-4xl font-bold bg-card-highlight rounded-lg py-0.5 px-3">
          {job.job.title.charAt(0).toUpperCase()}
        </h1>
        <div className="flex flex-col items-start gap-2 pb-3">
          <h2 className="text-sm text-light font-bold tracking-wide">
            {job.job.title}
          </h2>
          <h4 className="text-xs text-muted tracking-wide">
            {job.job.company}
          </h4>
        </div>
      </div>

      {/* Job info */}
      <div className="flex items-start flex-col gap-3">
        <h3 className="flex items-center gap-2">
          <span>
            <Wallet size={20} className="text-green-500" />
          </span>
          <h3 className="text-light font-bold text-xs">
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
          </h3>
        </h3>
        <h3 className="flex items-center gap-2">
          <span>
            <FaMapMarkerAlt size={20} className="text-green-500" />
          </span>
          <span className="text-light font-bold text-xs">
            {job.job.location}
          </span>
        </h3>
        <ul className="text-xs text-muted flex gap-4">
          <li className="bg-card-highlight py-1 px-2 rounded-md">
            {job.job.jobType}
          </li>
          <li className="bg-card-highlight py-1.5 px-2 rounded-md">
            {job.job.category.name}
          </li>
          <li className="bg-card-highlight py-1.5 px-2 rounded-md">
            {formatTime(job.job.createdAt)}
          </li>
        </ul>
      </div>

      <div className="text-light bg-brand py-2 rounded-md flex items-center justify-center gap-2 hover:bg-green-600 transition-colors cursor-pointer text-xs">
        <button>View job post</button>
        <FaArrowRight />
      </div>
    </div>
  );
};

export default HeroJobCard;
