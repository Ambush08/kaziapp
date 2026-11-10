import { Wallet, Layers, Briefcase, Clock, Bookmark } from "lucide-react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useAuth } from "../../context/authContext";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import formatTime from "../../utils/formatTime";

const JobData = () => {
  const { id } = useParams();
  const { job, fetchJob } = useAuth();

  useEffect(() => {
    if (!id) return;

    fetchJob(id);
  }, [id]);

  if (!job) {
    return <p className="hidden">Loading...</p>;
  }
  return (
    <div className="flex flex-col gap-3 bg-light border border-gray-300 px-6 rounded-lg py-3 w-full flex-1">
      <p className="text-md tracking-wide font-bold">Job overview</p>

      <div className="flex items-center justify-between border-b border-b-gray-300 border-dashed py-3">
        <p className="flex items-center gap-1 text-xs text-muted">
          <Wallet size={14} />
          <span>Salary</span>
        </p>

        <p className="text-xs font-semibold">
          <span>
            {new Intl.NumberFormat("en-KE", {
              style: "currency",
              currency: "KES",
              maximumFractionDigits: 0,
            }).format(job.salaryMin)}
          </span>
          {" - "}
          <span>
            {new Intl.NumberFormat("en-KE", {
              style: "currency",
              currency: "KES",
              maximumFractionDigits: 0,
            }).format(job.salaryMax)}
          </span>{" "}
          per month
        </p>
      </div>

      <div className="flex items-center justify-between border-b border-b-gray-300 border-dashed py-3">
        <p className="flex items-center gap-1 text-xs text-muted">
          <FaMapMarkerAlt size={14} />
          <span>Location</span>
        </p>

        <p className="text-xs font-semibold">{job.location}</p>
      </div>

      <div className="flex items-center justify-between border-b border-b-gray-300 border-dashed py-3">
        <p className="flex items-center gap-1 text-xs text-muted">
          <Layers size={14} />
          <span>Work arrangement</span>
        </p>

        <p className="text-xs font-semibold">{job.workplace}</p>
      </div>

      <div className="flex items-center justify-between border-b border-b-gray-300 border-dashed py-3">
        <p className="flex items-center gap-1 text-xs text-muted">
          <Briefcase size={14} />
          <span>Job type</span>
        </p>

        <p className="text-xs font-semibold">{job.jobType}</p>
      </div>

      <div className="flex items-center justify-between border-b border-b-gray-300 border-dashed py-3">
        <p className="flex items-center gap-1 text-xs text-muted">
          <Clock size={14} />
          <span>Experience level</span>
        </p>

        <p className="text-xs font-semibold">{job.experienceLevel}-level</p>
      </div>

      <div className="flex items-center justify-between py-3">
        <p className="flex items-center gap-1 text-xs text-muted">
          <Clock size={14} />
          <span>Posted</span>
        </p>

        <p className="text-xs font-semibold">{formatTime(job.createdAt)}</p>
      </div>

      <button className="bg-green-700 text-light flex items-center gap-3 justify-center py-2.5 font-semibold rounded-lg hover:bg-brand transition-colors cursor-pointer">
        <Bookmark size={18} />
        <span>Save job</span>
      </button>
    </div>
  );
};

export default JobData;
