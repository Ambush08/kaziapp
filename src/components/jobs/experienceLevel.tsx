import { ChevronDown, ChevronUp } from "lucide-react";
import { useContext, useState } from "react";
import { GlobalContext } from "../../context/globalState";

const experienceLevel = [
  { value: "", label: "All levels" },
  { value: "Entry", label: "Entry" },
  { value: "Mid", label: "Mid" },
  { value: "Senior", label: "Senior" },
];

const ExperienceLevel = () => {
  const context = useContext(GlobalContext);

  if (!context) {
    throw new Error("Filters must be used within global context");
  }

  const { getJobs, filters } = context;

  const [openFilter, setOpenFilter] = useState(false);
  const selectedExperience = filters?.experience ?? "";

  const handleOpenFilter = () => {
    setOpenFilter(!openFilter);
  };


  const handleExperienceChange = (experience: string) => {
    getJobs({
      ...filters,
      experience
    })
  }
  return (
    <div className="flex flex-col gap-2 items-start border-b border-b-gray-300 py-3">
      <div
        className="flex items-center justify-between w-full text-xs font-semibold cursor-pointer"
        onClick={handleOpenFilter}
      >
        <h4>Experience Level</h4>
        {openFilter ? (
          <ChevronUp size={14} className="text-muted" />
        ) : (
          <ChevronDown size={14} className="text-muted" />
        )}
      </div>

      {/* Work arrangement list items */}
      {openFilter && (
        <ul className="flex flex-col items-start gap-3 w-full">
          {experienceLevel.length &&
            experienceLevel.map(({ value, label }) => {
              const isSelected = selectedExperience === value;
              const id = `experience-${value || "all"}`;

              return (
                <li
                  key={id}
                  className={`flex w-full items-center gap-2 rounded-md px-3 py-2 text-xs cursor-pointer transition-colors ${isSelected ? "bg-green-50 text-green-800" : "text-muted hover:bg-gray-50"}`}
                >
                  <input
                    type="radio"
                    id={id}
                    name="experince"
                    value={value}
                    checked={isSelected}
                    onChange={() => handleExperienceChange(value)}
                    className="h-4 w-4 accent-green-700"
                  />
                  <label htmlFor={id} className="w-full">{label}</label>
                </li>
              );
            })}
        </ul>
      )}
    </div>
  );
};

export default ExperienceLevel;
