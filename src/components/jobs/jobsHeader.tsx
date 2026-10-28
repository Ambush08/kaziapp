import { Book, ShieldCheck } from "lucide-react";
import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";


interface JobsHeader {
    icon: ReactNode,
    iconText: string,
    leadingText: string,
    description: string,
    cta: string,
    to: string
}

const headerContent: JobsHeader[] = [
  {
    icon: <Book size={14} />,
    iconText: "CAREER TIPS",
    leadingText: "Advice for your next move.",
    description: "Practical guidance from KaziFiti blog.",
    cta: 'Read blogs',
    to: '/'
  },
  {
    icon: <ShieldCheck size={14} />,
    iconText: "VERIFIED EMPLOYERS",
    leadingText: "Every listing is screened.",
    description: "We check every company before a role goes live.",
    cta: 'Browse jobs',
    to: '/'
  },
  {
    icon: <FaWhatsapp />,
    iconText: "WHATSAPP CHANNEL",
    leadingText: "You're not alone",
    description: "A community finding work together",
    cta: 'Join',
    to: '/'
  },
];

const JobsHeader = ({ interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (headerContent.length === 0) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % headerContent.length);
    }, interval);

    return () => clearInterval(timer);
  }, [interval, currentIndex]);


  return (
    <section className="w-full py-8">
      <div className="flex items-center max-w-6xl mx-auto px-6 h-48">
        <div className="overflow-hidden rounded-l-lg w-1/4 shrink-0 h-full">
          <img
            src="download.jpg"
            alt=""
            className="w-full h-full object-cover object-top"
          />
        </div>

        {/* Larger content section */}
        <div className="flex-1 bg-hero-bg text-light p-6 flex lg:items-center justify-between h-full rounded-r-lg flex-col gap-4 lg:flex-row">
          {/* Text animation */}
          <div
            key={currentIndex}
            className="flex flex-col items-start gap-3 animate-job-card"
          >
            <p className="flex items-center gap-1 text-xs text-green-600 font-semibold">
              <span className="text-xs">
                {headerContent[currentIndex].icon}
              </span>
              <span>
                {headerContent[currentIndex].iconText}
              </span>
            </p>
            <h2 className="text-xl font-bold">
              {headerContent[currentIndex].leadingText}
            </h2>
            <p className="text-muted text-xs">
              {headerContent[currentIndex].description}
            </p>

            {/* card buttons */}
            <div className="flex items-center gap-1">
              {headerContent.map((_, index) => {
                return (
                  <button
                    key={index}
                    className={`p-1 rounded-full transition-colors cursor-pointer ${
                      currentIndex === index
                        ? "bg-green-500 px-3"
                        : "bg-gray-700"
                    }`}
                    onClick={() => setCurrentIndex(index)}
                  ></button>
                );
              })}
            </div>
          </div>

          <Link to={headerContent[currentIndex].to} className="bg-green-700 text-xs px-5 py-3 rounded-lg text-center hidden lg:block">
            {headerContent[currentIndex].cta}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default JobsHeader;
