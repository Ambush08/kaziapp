import { useState, useEffect } from "react";
import { FaBriefcase, FaUsers, FaGlobe} from "react-icons/fa";

const words = [
  {
    text: "JOB SEEKERS",
    icon: FaBriefcase,
  },
  {
    text: "GROWING TEAMS",
    icon: FaUsers,
  },
  {
    text: "REMOTE WORK",
    icon: FaGlobe,
  },
];


interface AnimateTextProps {
  interval?: number;
}

const AnimateText = ({ interval = 3000 }: AnimateTextProps) => {
  const [currentText, setCurrentText] = useState(0);

  useEffect(() => {
    if (words.length < 2) return;

    const timer = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % words.length);
    }, interval);

    return () => clearInterval(timer);
  }, [words.length, interval]);

  const CurrentIcon = words[currentText].icon;
  return (
    <>
      <p className="text-xs font-bold">
      <span
        key={currentText}
        className="animate-word-in flex gap-2"
      >
        <CurrentIcon className="text-green-500" size={18} />

        <span className="text-light">
          PERFECT FOR{" "}
        </span>

        <span className="text-green-700">
          {words[currentText].text}
        </span>
      </span>
    </p>
    </>
  );
};

export default AnimateText;
