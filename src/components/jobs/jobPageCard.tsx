import { ShieldCheck, Wallet, ArrowRight, Bookmark } from "lucide-react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import formatTime from "../../utils/formatTime";

const JobPageCard = ({ job }: { job: any }) => {
  return (
    <>
      <div className="border border-gray-300 rounded-lg p-3 flex flex-col items-start gap-4 lg:flex-row lg:justify-between w-full hover:border-brand">
        <div className="flex items-start gap-4">
          <div className="text-2xl lg:text-4xl text-green-600 py-2 px-3 bg-green-100 font-bold rounded-md">
            {job.job.title.charAt(0).toUpperCase()}
          </div>
          <div className="flex flex-col gap-3 items-start">
            <Link
              to={`/jobs/${job.job.id}`}
              className="text-md font-bold hover:text-brand"
            >
              {job.job.title}
            </Link>
            <ul className="flex gap-2 py-2 items-center flex-wrap">
              <li className="flex gap-1 border border-gray-300 rounded-2xl items-center text-xs py-0.5 px-2 text-muted bg-gray-200">
                <ShieldCheck size={14} />
                <p>Verified</p>
              </li>

              <li className="flex gap-1 items-center text-xs py-0.5 px-2 text-muted">
                <FaMapMarkerAlt size={14} />
                <p>{job.job.location}</p>
              </li>

              <li className="rounded-md items-center text-xs py-1 px-2 text-muted bg-gray-200">
                <p>{job.job.jobType}</p>
              </li>

              <li className="rounded-md items-center text-xs py-1 px-2 text-muted bg-gray-200">
                <p>{job.job.workplace}</p>
              </li>
              <li className="rounded-md items-center text-xs py-1 px-2 text-muted bg-green-100">
                <p>{job.job.experienceLevel}</p>
              </li>
            </ul>

            <div className="flex items-center gap-4 py-2">
              <p className="flex gap-1 items-center font-bold text-brand text-sm">
                <Wallet size={14} />
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
              <p className="text-xs text-muted">
                {formatTime(job.job.createdAt)}
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-6 w-full lg:flex-1">
          <button>
            <Bookmark size={18} className="cursor-pointer" />
          </button>
          <Link
            to={`/jobs/${job.job.id}`}
            className="flex flex-1 items-center bg-hero-bg cursor-pointer gap-1 text-xs text-light justify-center py-2 rounded-lg font-bold hover:bg-hero-card"
          >
            <span>View job</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default JobPageCard;
