import { Link } from "react-router-dom";
import {ArrowRight} from 'lucide-react'

const PricingCTA = () => {
  return (
    <section className="w-full py-6">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-hero-bg p-8 rounded-lg flex flex-col items-start gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col items-start gap-6">
            <div className="flex items-center gap-2 text-xs text-green-600 font-semibold tracking-wide">
              <div className="size-2 rounded-full animate-pulse bg-green-600"></div>
              <p>FOR ENTERPRISE</p>
            </div>

            <h2 className="text-2xl text-light font-bold tracking-wide">Hiring at scale?</h2>

            <p className="text-muted text-xs tracking-wide">Custom volumes, branded careers pages, procurement-friendly invoicing, and a dedicated account manager for your whole team.</p>
          </div>

          <Link to={''} className="w-full bg-green-700 hover:bg-green-800 flex items-center gap-1 justify-center py-2 rounded-lg text-light text-sm">
            <span>Talk to sales</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PricingCTA;
