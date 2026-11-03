import Package from "./package";
import { ShieldCheck, Mail, Users, CalendarX  } from "lucide-react";

export interface IPlans {
  name: string;
  description: string;
  price: number;
  planList: string[];
}

const plans: IPlans[] = [
  {
    name: "Starter",
    description: "For teams making their first hire.",
    price: 0,
    planList: [
      "1 active job post",
      "14-day job visibility",
      "Basic applicant inbox",
      "Email support",
    ],
  },
  {
    name: "Growth",
    description: "For teams hiring consistently.",
    price: 3900,
    planList: [
      "5 active job posts",
      "30-day job visibility",
      "Featured placement in search",
      "Applicant tracking tools",
      "Priority email support",
    ],
  },
  {
    name: "Enterprise",
    description: "For companies hiring at scale.",
    price: 7000,
    planList: [
      "Unlimited job posts",
      "Dedicated account manager",
      "Branded company profile",
      "Team seats & permissions",
      "Team seats & permissions",
    ],
  },
];

const packagesCTA = [
  {
    title: "Verified applicants",
    description: "Identity and skill checks on every application.",
    icon: <ShieldCheck />,
  },
  {
    title: "Applicant tracking",
    description: "Shortlist, interview, and hire in one place.",
    icon: <Users />,
  },
  {
    title: "Email support",
    description: "A real human replies within one business day.",
    icon: <Mail />,
  },
  {
    title: "Cancel anytime",
    description: "No lock-in. Downgrade or pause whenever you like.",
    icon: <CalendarX />,
  },
];

const Packages = () => {
  return (
    <section className="w-full py-12 bg-linear-to-br from-light to-green-100">
      <div className="flex flex-col items-start max-w-6xl mx-auto px-6 gap-4">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-wide">
            Choose the plan that fits
          </h2>
          <p className="text-muted text-xs tracking-wide">
            Every plan runs on the same fast, verified job marketplace.
          </p>
        </div>

        {/* Pricing Packages */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 items-stretch lg:justify-between w-full">
          {plans.map((plan, index) => {
            return <Package key={index} plan={plan} />;
          })}
        </div>

        <div className="text-muted text-xs py-3 text-center">
          <p className="">
            Every plan includes verified applicants, applicant tracking, and
            email support. Cancel anytime.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 items-center gap-4 my-4">
          {packagesCTA.map((cta, index) => {
            return (
              <div
                key={index}
                className="flex items-start gap-4 bg-background py-3 px-4 rounded-lg border border-gray-200"
              >
                <div className="text-green-600 text-xs">{cta.icon}</div>
                <div className="text-xs flex flex-col items-start gap-1">
                  <h3 className="font-semibold">{cta.title}</h3>
                  <p className="text-muted TEXT-LEFT">{cta.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Packages;
