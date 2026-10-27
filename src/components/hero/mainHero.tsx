import { Link } from "react-router-dom";
import AnimateText from "./heroText";
import { FaSearch, FaMapMarkerAlt , FaArrowRight} from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import Stats from "./stats";



interface ILinks {
  label: string,
  to: string
}


const links: ILinks[] = [
  {
    label : 'Tech',
    to: '/jobs'
  },
  {
    label : 'Engineering',
    to: '/jobs'
  },
  {
    label : 'Accounting',
    to: '/jobs'
  },
  {
    label : 'Remote',
    to: '/jobs'
  }
]

const MainHero = () => {
  return (
    <div className="flex flex-col space-y-6 py-8 items-start">
      <AnimateText />

      <div className="font-bold tracking-wide text-light">
        <h1 className="text-5xl sm:text-6xl">
          Great work. Start <span className="text-green-500">your next chapter.</span>
        </h1>
      </div>

      <div className="text-muted tracking-normal text-xs sm:text-sm py-4">
        <p>
          Find a role that fits your ambition. Connect with great companies and
          take your career to the next level.
        </p>
      </div>

      <div className="bg-light rounded-lg py-6 md:py-2 px-3 w-full grid grid-cols-2 items-center gap-6 sm:justify-between">
        <div className="flex items-center gap-2">
          <FaSearch className="text-muted" size={15} />
          <input
            type="text"
            placeholder="Job title or keyword"
            className="outline-none px-0 text-sm"
          />
        </div>
        {/*<div className="flex items-center gap-2 ml-8">
          <FaMapMarkerAlt  className="text-muted" size={15} />
          <input
            type="text"
            placeholder="city or remote"
            className="outline-none px-0 text-sm"
          />
        </div>*/}
        <div className="col-span-2 sm:col-span-1 text-sm text-light bg-brand px-3 py-3 rounded-lg cursor-pointer flex items-center justify-center gap-3 hover:bg-green-600 transition-colors sm:justify-self-end">
          <button>
            Find Jobs
          </button>
          <FaArrowRight />
        </div>
      </div>

      {/* Hero Links */}
      <div className="w-full mt-6">
        <ul className="flex items-center justify-between flex-wrap">
          <h4 className="text-muted text-sm">Popular:</h4>
          {
            links.map((link) => {
              return(
                <li key={link.label} className="text-light font-semibold text-sm flex items-center gap-2 hover:text-brand transition-colors">
                  <Link to={'/jobs'}>{link.label}</Link>
                  <FiArrowUpRight size={18}/>
                </li>
              )
            })
          }
        </ul>
      </div>

      {/* Stats component */}
      <Stats />
    </div>
  );
};

export default MainHero;
