import { Link } from "react-router-dom";
import { Briefcase } from "lucide-react";



const Footer = () => {
  return (
    <footer className="bg-hero-bg space-y-6 flex flex-col">
      {/*Top footer */}
      <div className="max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mx-auto px-6 sm:px-6 py-6 justify-between gap-8 items-center my-4 border-b border-gray-700">
        <div className="flex flex-col items-start space-y-6">
            {/* Footer logo */}
          <Link to={"/"} className="flex items-center gap-1">
            <span className="flex h-9 items-center justify-center rounded-lg bg-green-700 text-white md:h-10 md:w-10">
              <Briefcase className="h-5 w-8" />
            </span>
            <span className="text-2xl font-bold tracking-tight text-light md:text-3xl">
              kazi<span className="text-green-700">fiti.</span>
            </span>
          </Link>

          <p className="text-muted text-xs">Your next chapter starts here. Connecting ambitious people with growing companies across Kenya and beyond.</p>
        </div>

        {/* Jobs Footer link*/}
        <div className="flex flex-col items-start space-y-4 my-4">
            <h4 className="text-light text-xs font-semibold">Job seekers</h4>
            <ul className="text-muted text-xs space-y-4">
                <li className="hover:text-green-700 transition-colors">
                    <Link to={'/jobs'}>Browse Jobs</Link>
                </li>
                <li className="hover:text-green-700 transition-colors">
                    <Link to={'/saved-jobs'}>Saved Jobs</Link>
                </li>
                <li className="hover:text-green-700 transition-colors">
                    <Link to={'/'}>Career Advice</Link>
                </li>
            </ul>
        </div>


        {/*Employers Footer Links */}
        <div className="flex flex-col items-start space-y-4 my-4">
            <h4 className="text-light text-xs font-semibold">Employer</h4>
            <ul className="text-muted text-xs space-y-4">
                <li className="hover:text-green-700 transition-colors">
                    <Link to={'/pricing'}>Pricing</Link>
                </li>
                <li className="hover:text-green-700 transition-colors">
                    <Link to={'/'}>For Enterprise</Link>
                </li>
                <li className="hover:text-green-700 transition-colors">
                    <Link to={'/'}>Post a Job</Link>
                </li>
            </ul>
        </div>


        {/* Company */}
        <div className="flex flex-col items-start space-y-4 my-4">
            <h4 className="text-light text-xs font-semibold">Company</h4>
            <ul className="text-muted text-xs space-y-4">
                <li className="hover:text-green-700 transition-colors">
                    <Link to={'/about'}>About</Link>
                </li>
                <li className="hover:text-green-700 transition-colors">
                    <Link to={'/blogs'}>Blog</Link>
                </li>
                <li className="hover:text-green-700 transition-colors">
                    <Link to={'/contact'}>Contact</Link>
                </li>
            </ul>
        </div>
      </div>

      
      {/* Lower Footer */}
      <div className="mx-auto flex flex-col gap-4 items-start w-full max-w-6xl sm:items-center sm:justify-between sm:flex-row px-6 sm:px-6 py-4 text-xs text-muted">
        <p>©2026 KaziFiti. Your next chapter.</p>
        Template preview · Sample jobs, companies, and statistics
      </div>
    </footer>
  );
};

export default Footer;
