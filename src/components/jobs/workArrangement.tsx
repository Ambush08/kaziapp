import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const work = ["On-site", "Remote", "Hybrid"];

const WorkArrangement = () => {
  const [openFilter, setOpenFilter] = useState(false);
  const [selectedWork, setSelectedWork] = useState("");

  const handleOpenFilter = () => {
    setOpenFilter(!openFilter);
  };

  return (
    <div className="flex flex-col gap-2 items-start border-b border-b-gray-300 pb-3">
      <div
        className="flex items-center justify-between w-full text-xs font-semibold cursor-pointer"
        onClick={handleOpenFilter}
      >
        <h4>Work Arrangement</h4>
        {openFilter ? (
          <ChevronUp size={14} className="text-muted" />
        ) : (
          <ChevronDown size={14} className="text-muted" />
        )}
      </div>

      {/* Work arrangement list items */}
      {
        openFilter && (
            <ul className="flex flex-col items-start gap-3 w-full">
        {work.length &&
          work.map((item) => {
            const isSelected = selectedWork === item;

            return (
              <li
                key={item}
                className={`flex w-full items-center gap-2 rounded-md px-3 py-2 text-xs cursor-pointer transition-colors ${isSelected ? "bg-green-50 text-green-800" : "text-muted hover:bg-gray-50"}`}
              >
                <input
                  type="radio"
                  id={item}
                  name="workArrangement"
                  value={item}
                  checked={selectedWork === item}
                  onChange={() => setSelectedWork(item)}
                  className="h-4 w-4 accent-green-700"
                />
                <label htmlFor={item}>{item}</label>
              </li>
            );
          })}
      </ul>
        )
      }
    </div>
  );
};

export default WorkArrangement;
