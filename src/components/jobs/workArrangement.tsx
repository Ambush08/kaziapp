import { ChevronDown, ChevronUp } from "lucide-react";
import { useContext, useState } from "react";
import { GlobalContext } from "../../context/globalState";

const workArrangement = [
  { value: "", label: "All" },
  { value: "On-site", label: "On-site" },
  { value: "Remote", label: "Remote" },
  { value: "Hybrid", label: "Hybrid" },
];

const WorkArrangement = () => {
  const context = useContext(GlobalContext);

  if(!context){
    throw new Error('Job filters must be used withing global context')
  }

  const { getJobs, filters} = context;
  const [openFilter, setOpenFilter] = useState(false);
  const selectedWork = filters.workplace?? "";

  const handleOpenFilter = () => {
    setOpenFilter(!openFilter);
  };


  const handleChangeWork = (workplace: string) => {
    getJobs({
      ...filters,
      workplace
    })
  }

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
        {workArrangement.length &&
          workArrangement.map(({ value, label}) => {
            const isSelected = selectedWork === value;

            const id = `work-${value || 'all'}`
            return (
              <li
                key={id}
                className={`flex w-full items-center gap-2 rounded-md px-3 py-2 text-xs cursor-pointer transition-colors ${isSelected ? "bg-green-50 text-green-800" : "text-muted hover:bg-gray-50"}`}
              >
                <input
                  type="radio"
                  id={id}
                  name="workArrangement"
                  value={value}
                  checked={selectedWork === value}
                  onChange={() => handleChangeWork(value)}
                  className="h-4 w-4 accent-green-700"
                />
                <label htmlFor={id} className="w-full">{label}</label>
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
