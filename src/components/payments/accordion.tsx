import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const accordionData = [
  {
    title: "Can I switch plans at any time?",
    content:
      "Yes. Upgrade, downgrade, or pause from your account settings. Changes take effect on your next billing cycle and we prorate upgrades mid-cycle.",
  },
  {
    title: "Is there a fee for job seekers?",
    content:
      "Never. Browsing, saving, and applying to jobs on KaziFiti is free for job seekers on every plan.",
  },
  {
    title: "What happens when my job post expires?",
    content:
      "When the visibility window ends, the post is archived but all applicants stay in your inbox. Re-post it or upgrade for longer visibility windows.",
  },
  {
    title: "Do prices include VAT?",
    content:
      "Yes. Every price shown is in Kenyan shillings with VAT included — no surprise line items at checkout.",
  },
  {
    title: "Can I hire outside Kenya?",
    content:
      "Yes. Enterprise plans support cross-border hiring across East Africa and beyond, with locally compliant contracts.",
  },
];

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <section className="w-full py-8 my-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col gap-6 items-start">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold">Pricing questions, answered</h3>
          <p className="text-muted text-xs">
            The things teams ask before they choose a plan.
          </p>
        </div>

        <div className="flex flex-col items-center gap-4 max-w-3xl w-full mx-auto">
          {accordionData.map((item, index) => (
            <div
              key={index}
              className="w-full border border-blue-200 rounded-lg p-4 flex flex-col gap-2 text-xs"
            >
              <div
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex items-center justify-between w-full cursor-pointer"
              >
                <h4 className="font-semibold text-sm">{item.title}</h4>
                {openIndex === index ? (
                  <ChevronUp size={14} className="text-muted" />
                ) : (
                  <ChevronDown size={14} className="text-muted" />
                )}
              </div>
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "grid-rows-[1fr] opacity-100 py-1"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="text-muted text-xs">{item.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accordion;
