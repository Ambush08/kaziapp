import { Link } from "react-router-dom";
import { Briefcase, ShieldCheck, Sparkles, CircleCheck } from "lucide-react";
import Stats from "../hero/stats";

const AuthHeader = () => {
  return (
    <div className="flex flex-col items-start gap-4 bg-hero-bg lg:min-h-screen">
      {/* Logo */}
      <Link to={"/"} className="flex items-center gap-1 my-12 mx-12">
        <span className="flex h-9 items-center justify-center rounded-lg bg-green-700 text-white md:h-10 md:w-10">
          <Briefcase className="h-5 w-8" />
        </span>
        <span className="text-2xl font-bold tracking-tight text-light md:text-3xl">
          kazi<span className="text-green-700">fiti.</span>
        </span>
      </Link>

      <div className="mx-12 flex flex-col gap-4 lg:mt-50">
        <div className="flex gap-1 text-brand items-center">
            <div className="size-2 rounded-full bg-brand animate-pulse"></div>
            <p className="text-md font-bold tracking-wide">Welcome back</p>
        </div>
        <h2 className="text-2xl lg:text-4xl text-light font-bold tracking-wide flex flex-col gap-3">
          <span>Your next chapter starts </span>
          <span>with one sign in.</span>
        </h2>
        <p className="text-xs text-muted flex flex-col gap-2">
          <span>Pick up where you left off — saved roles, fresh matches, </span>
          <span>and employers
          who are actually hiring.</span>
        </p>
      </div>

      <ul className="flex flex-col gap-6 items-start mx-12 mt-6">
        <li className="flex gap-2 items-center">
            <ShieldCheck size={14} className="text-green-600"/>
            <p className="text-light text-xs tracking-wide">Verified employers, real openings</p>
        </li>
        <li className="flex gap-2 items-center">
            <Sparkles size={14} className="text-green-600"/>
            <p className="text-light text-xs tracking-wide">Matches based on what you do best</p>
        </li>
        <li className="flex gap-2 items-center">
            <CircleCheck size={14} className="text-green-600"/>
            <p className="text-light text-xs tracking-wide">Free for job seekers, alwayst</p>
        </li>
      </ul>

      <div className="mx-12 mb-12">
        <Stats />
      </div>
    </div>
  );
};

export default AuthHeader;
