import { ChevronDown, ChevronUp } from "lucide-react";
import { useContext, useState } from "react";
import { GlobalContext } from "../../context/globalState";

const salaries = [
  { value: "", label: "Any salary" },
  { value: "0-99999", label: "KES 0 - 99,999" },
  { value: "100000-149999", label: "KES 100,000 - 149,999" },
  { value: "150000-199999", label: "KES 150,000 - 199,999" },
  { value: "200000+", label: "KES 200,000+" },
];

const SalaryRange = () => {
  const context = useContext(GlobalContext);

  if (!context) {
    throw new Error("Job filters must be used within global context");
  }

  const { getJobs, filters } = context;

  const [openFilter, setOpenFilter] = useState(false);
  const selectedWork = filters.salary ?? "";

  const handleOpenFilter = () => {
    setOpenFilter(!openFilter);
  };

  const handeSalaryChange = (salary: string) => {
    getJobs({
      ...filters,
      salary
    })
  }

  return (
    <div className="flex flex-col gap-2 items-start border-b border-b-gray-300 py-3">
      <div
        className="flex items-center justify-between w-full text-xs font-semibold cursor-pointer"
        onClick={handleOpenFilter}
      >
        <h4>Salary Range</h4>
        {openFilter ? (
          <ChevronUp size={14} className="text-muted" />
        ) : (
          <ChevronDown size={14} className="text-muted" />
        )}
      </div>

      {/* Work arrangement list items */}
      {openFilter && (
        <ul className="flex flex-col items-start gap-3 w-full">
          {salaries.length &&
            salaries.map(({ value, label }) => {
              const isSelected = selectedWork === value;
              const id = `salary-${value || "all"}`;

              return (
                <li
                  key={id}
                  className={`flex w-full items-center gap-2 rounded-md px-3 py-2 text-xs cursor-pointer transition-colors ${isSelected ? "bg-green-50 text-green-800" : "text-muted hover:bg-gray-50"}`}
                >
                  <input
                    type="radio"
                    id={id}
                    name="salary"
                    value={value}
                    checked={selectedWork === value}
                    onChange={() => handeSalaryChange(value)}
                    className="h-4 w-4 accent-green-700"
                  />
                  <label htmlFor={id} className="w-full">
                    {label}
                  </label>
                </li>
              );
            })}
        </ul>
      )}
    </div>
  );
};

export default SalaryRange;
