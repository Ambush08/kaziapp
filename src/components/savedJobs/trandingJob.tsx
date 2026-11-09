import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import { Bookmark } from "lucide-react";

const TrendingJob = () => {
  return (
    <div className="flex flex-col p-6 border border-gray-300 rounded-lg hover:border-brand items-start space-y-4">
      <div className="flex justify-between items-center w-full">
        <div className="bg-green-100 py-2 px-3.5 rounded-md text-brand text-2xl font-bold">
          <h1>F</h1>
        </div>
        <Bookmark size={16} className="cursor-pointer" />
      </div>

      <div className="felx flex-col space-y-3 border-b border-b-gray-300 w-full pb-6">
        <Link to={"/job/id"} className="text-md font-bold hover:text-brand">
          Junior Software Engineer
        </Link>
        <p className="text-xs text-muted tracking-wide">
          <span>Andela </span>
          <span>. Nairobi, Kenya</span>
        </p>
        <ul className="flex gap-2 items-center text-xs text-muted tracking-wide">
          <li className="bg-gray-100 px-1.5 py-1 rounded-sm">Full-time</li>
          <li className="bg-gray-100 px-1.5 py-1 rounded-sm">Entry</li>
          <li className="bg-gray-100 px-1.5 py-1 rounded-sm">Tech</li>
        </ul>
      </div>

      <div className="flex justify-between items-center w-full">
        <h3 className="flex flex-col items-start gap-1">
          <p className="text-sm font-semibold">
            <span>KES 90,000</span>

            {" - "}

            <span>KES 120,000</span>
          </p>
          <span className="text-xs text-muted">per month</span>
        </h3>

        <Link to={"/job/id"}>
          <FiArrowUpRight />
        </Link>
      </div>

      <h4 className="text-xs text-muted">2 hours ago</h4>
    </div>
  );
};

export default TrendingJob;
