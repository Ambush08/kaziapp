import type { IPlans } from "./packages";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

interface PackageProps {
  plan: IPlans;
}

const Package = ({ plan }: PackageProps) => {
  return (
    <div
      className={`flex flex-col space-y-6 p-6 px-4 rounded-lg ${
  plan.name === "Growth" ? "bg-hero-bg text-light" : "bg-light"}`}
    >
      <div className="flex items-center justify-between">
        <span className="bg-green-100 px-4 py-2 text-2xl font-bold text-brand rounded-md hover:rotate-6">
          {plan.name[0]}
        </span>
        {
            plan.name === 'Growth' && (
            <div className="flex gap-1 items-center text-xs text-green-500 bg-card-highlight p-1 rounded-4xl">
                <Sparkles size={14}/>
                <h4>Most popular</h4>
            </div>)
        }
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-bold">{plan.name}</h2>
        <p className="text-xs text-muted">{plan.description}</p>
      </div>

      <h2>
        <span className="text-2xl font-bold">
          {plan.price === 0 ? "Free" : `KES ${plan.price.toLocaleString()}`}
        </span>
        <span className="text-xs text-muted">{' '}/month</span>
      </h2>

      <ul className="flex flex-col gap-3">
        {plan.planList.map((item, index) => {
          return (
            <li key={index} className="flex gap-2 text-xs">
              <Check className="text-green-400" size={14} />
              <p>{item}</p>
            </li>
          );
        })}
      </ul>

      <div className={`flex items-center text-xs gap-1 px-3 py-3 rounded-lg justify-center cursor-pointer transition-colors ${plan.name === 'Growth' ? 'bg-green-600 text-light hover:bg-brand' : 'text-muted border border-gray-200  hover:bg-green-100'}`}>
        <Link to={"/"}>Start for free</Link>
        <ArrowRight size={14} />
      </div>
    </div>
  );
};

export default Package;
