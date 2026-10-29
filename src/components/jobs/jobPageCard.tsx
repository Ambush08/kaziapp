import { ShieldCheck, Wallet, ArrowRight, Bookmark } from "lucide-react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const JobPageCard = () => {
  return (
    <>
      <div className="border border-gray-300 rounded-lg p-3 flex flex-col items-start gap-4 lg:flex-row lg:justify-between w-full">
        <div className="flex items-start gap-4">
          <div className="text-2xl lg:text-4xl text-green-600 py-2 px-3 bg-green-100 font-bold rounded-md">
            <h1>S</h1>
          </div>
          <div className="flex flex-col gap-3 items-start">
            <h3 className="text-xl font-bold">Senior Product Designer</h3>
            <ul className="flex gap-2 py-2 items-center flex-wrap">
              <li className="flex gap-1 border border-gray-300 rounded-2xl items-center text-xs py-0.5 px-2 text-muted bg-gray-200">
                <ShieldCheck size={14} />
                <p>Verified</p>
              </li>

              <li className="flex gap-1 items-center text-xs py-0.5 px-2 text-muted">
                <FaMapMarkerAlt size={14} />
                <p>Nairobi, Kenya</p>
              </li>

              <li className="rounded-md items-center text-xs py-1 px-2 text-muted bg-gray-200">
                <p>Hybrid</p>
              </li>

              <li className="rounded-md items-center text-xs py-1 px-2 text-muted bg-gray-200">
                <p>Full-time</p>
              </li>
              <li className="rounded-md items-center text-xs py-1 px-2 text-muted bg-green-100">
                <p>Mid-level</p>
              </li>
            </ul>

            <div className="flex items-center gap-4 py-2">
              <h4 className="flex gap-1 items-center font-bold text-sm text-brand">
                <Wallet size={14} />
                <span>KES 150,000 - 220,000</span>
              </h4>
              <p className="text-xs text-muted">2 hours ago</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-6 w-full lg:flex-1">
          <button>
            <Bookmark size={18} />
          </button>
          <div className="flex flex-1 items-center bg-hero-bg cursor-pointer gap-1 text-xs text-light justify-center py-2 rounded-lg font-bold hover:bg-hero-card">
            <Link to={""}>View job</Link>
            <ArrowRight size={14} />
          </div>
        </div>
      </div>

      <div className="border border-gray-300 rounded-lg p-3 flex flex-col items-start gap-4 lg:flex-row lg:justify-between w-full">
        <div className="flex items-start gap-4">
          <div className="text-2xl lg:text-4xl text-green-600 py-2 px-3 bg-green-100 font-bold rounded-md">
            <h1>S</h1>
          </div>
          <div className="flex flex-col gap-3 items-start">
            <h3 className="text-xl font-bold">Senior Product Designer</h3>
            <ul className="flex gap-2 py-2 items-center flex-wrap">
              <li className="flex gap-1 border border-gray-300 rounded-2xl items-center text-xs py-0.5 px-2 text-muted bg-gray-200">
                <ShieldCheck size={14} />
                <p>Verified</p>
              </li>

              <li className="flex gap-1 items-center text-xs py-0.5 px-2 text-muted">
                <FaMapMarkerAlt size={14} />
                <p>Nairobi, Kenya</p>
              </li>

              <li className="rounded-md items-center text-xs py-1 px-2 text-muted bg-gray-200">
                <p>Hybrid</p>
              </li>

              <li className="rounded-md items-center text-xs py-1 px-2 text-muted bg-gray-200">
                <p>Full-time</p>
              </li>
              <li className="rounded-md items-center text-xs py-1 px-2 text-muted bg-green-100">
                <p>Mid-level</p>
              </li>
            </ul>

            <div className="flex items-center gap-4 py-2">
              <h4 className="flex gap-1 items-center font-bold text-sm text-brand">
                <Wallet size={14} />
                <span>KES 150,000 - 220,000</span>
              </h4>
              <p className="text-xs text-muted">2 hours ago</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-6 w-full lg:flex-1">
          <button>
            <Bookmark size={18} />
          </button>
          <div className="flex flex-1 items-center bg-hero-bg cursor-pointer gap-1 text-xs text-light justify-center py-2 rounded-lg font-bold hover:bg-hero-card">
            <Link to={"/job/:id"}>View job</Link>
            <ArrowRight size={14} />
          </div>
        </div>
      </div>


      <div className="border border-gray-300 rounded-lg p-3 flex flex-col items-start gap-4 lg:flex-row lg:justify-between w-full">
        <div className="flex items-start gap-4">
          <div className="text-2xl lg:text-4xl text-green-600 py-2 px-3 bg-green-100 font-bold rounded-md">
            <h1>S</h1>
          </div>
          <div className="flex flex-col gap-3 items-start">
            <h3 className="text-xl font-bold">Senior Product Designer</h3>
            <ul className="flex gap-2 py-2 items-center flex-wrap">
              <li className="flex gap-1 border border-gray-300 rounded-2xl items-center text-xs py-0.5 px-2 text-muted bg-gray-200">
                <ShieldCheck size={14} />
                <p>Verified</p>
              </li>

              <li className="flex gap-1 items-center text-xs py-0.5 px-2 text-muted">
                <FaMapMarkerAlt size={14} />
                <p>Nairobi, Kenya</p>
              </li>

              <li className="rounded-md items-center text-xs py-1 px-2 text-muted bg-gray-200">
                <p>Hybrid</p>
              </li>

              <li className="rounded-md items-center text-xs py-1 px-2 text-muted bg-gray-200">
                <p>Full-time</p>
              </li>
              <li className="rounded-md items-center text-xs py-1 px-2 text-muted bg-green-100">
                <p>Mid-level</p>
              </li>
            </ul>

            <div className="flex items-center gap-4 py-2">
              <h4 className="flex gap-1 items-center font-bold text-sm text-brand">
                <Wallet size={14} />
                <span>KES 150,000 - 220,000</span>
              </h4>
              <p className="text-xs text-muted">2 hours ago</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-6 w-full lg:flex-1">
          <button>
            <Bookmark size={18} />
          </button>
          <div className="flex flex-1 items-center bg-hero-bg cursor-pointer gap-1 text-xs text-light justify-center py-2 rounded-lg font-bold hover:bg-hero-card">
            <Link to={"/job/:id"}>View job</Link>
            <ArrowRight size={14} />
          </div>
        </div>
      </div>



      <div className="border border-gray-300 rounded-lg p-3 flex flex-col items-start gap-4 lg:flex-row lg:justify-between w-full">
        <div className="flex items-start gap-4">
          <div className="text-2xl lg:text-4xl text-green-600 py-2 px-3 bg-green-100 font-bold rounded-md">
            <h1>S</h1>
          </div>
          <div className="flex flex-col gap-3 items-start">
            <h3 className="text-xl font-bold">Senior Product Designer</h3>
            <ul className="flex gap-2 py-2 items-center flex-wrap">
              <li className="flex gap-1 border border-gray-300 rounded-2xl items-center text-xs py-0.5 px-2 text-muted bg-gray-200">
                <ShieldCheck size={14} />
                <p>Verified</p>
              </li>

              <li className="flex gap-1 items-center text-xs py-0.5 px-2 text-muted">
                <FaMapMarkerAlt size={14} />
                <p>Nairobi, Kenya</p>
              </li>

              <li className="rounded-md items-center text-xs py-1 px-2 text-muted bg-gray-200">
                <p>Hybrid</p>
              </li>

              <li className="rounded-md items-center text-xs py-1 px-2 text-muted bg-gray-200">
                <p>Full-time</p>
              </li>
              <li className="rounded-md items-center text-xs py-1 px-2 text-muted bg-green-100">
                <p>Mid-level</p>
              </li>
            </ul>

            <div className="flex items-center gap-4 py-2">
              <h4 className="flex gap-1 items-center font-bold text-sm text-brand">
                <Wallet size={14} />
                <span>KES 150,000 - 220,000</span>
              </h4>
              <p className="text-xs text-muted">2 hours ago</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-6 w-full lg:flex-1">
          <button>
            <Bookmark size={18} />
          </button>
          <div className="flex flex-1 items-center bg-hero-bg cursor-pointer gap-1 text-xs text-light justify-center py-2 rounded-lg font-bold hover:bg-hero-card">
            <Link to={"/job/:id"}>View job</Link>
            <ArrowRight size={14} />
          </div>
        </div>
      </div>


      <div className="border border-gray-300 rounded-lg p-3 flex flex-col items-start gap-4 lg:flex-row lg:justify-between w-full">
        <div className="flex items-start gap-4">
          <div className="text-2xl lg:text-4xl text-green-600 py-2 px-3 bg-green-100 font-bold rounded-md">
            <h1>S</h1>
          </div>
          <div className="flex flex-col gap-3 items-start">
            <h3 className="text-xl font-bold">Senior Product Designer</h3>
            <ul className="flex gap-2 py-2 items-center flex-wrap">
              <li className="flex gap-1 border border-gray-300 rounded-2xl items-center text-xs py-0.5 px-2 text-muted bg-gray-200">
                <ShieldCheck size={14} />
                <p>Verified</p>
              </li>

              <li className="flex gap-1 items-center text-xs py-0.5 px-2 text-muted">
                <FaMapMarkerAlt size={14} />
                <p>Nairobi, Kenya</p>
              </li>

              <li className="rounded-md items-center text-xs py-1 px-2 text-muted bg-gray-200">
                <p>Hybrid</p>
              </li>

              <li className="rounded-md items-center text-xs py-1 px-2 text-muted bg-gray-200">
                <p>Full-time</p>
              </li>
              <li className="rounded-md items-center text-xs py-1 px-2 text-muted bg-green-100">
                <p>Mid-level</p>
              </li>
            </ul>

            <div className="flex items-center gap-4 py-2">
              <h4 className="flex gap-1 items-center font-bold text-sm text-brand">
                <Wallet size={14} />
                <span>KES 150,000 - 220,000</span>
              </h4>
              <p className="text-xs text-muted">2 hours ago</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-6 w-full lg:flex-1">
          <button>
            <Bookmark size={18} />
          </button>
          <div className="flex flex-1 items-center bg-hero-bg cursor-pointer gap-1 text-xs text-light justify-center py-2 rounded-lg font-bold hover:bg-hero-card">
            <Link to={"/job/:id"}>View job</Link>
            <ArrowRight size={14} />
          </div>
        </div>
      </div>
    </>
  );
};

export default JobPageCard;
