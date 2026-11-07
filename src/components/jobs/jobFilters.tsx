import { GlobalContext } from "../../context/globalState";
import Category from "./category";
import ExperienceLevel from "./experienceLevel";
import SalaryRange from "./salaryRange";
import WorkArrangement from "./workArrangement";
import { useContext } from "react";

const JobFilters = () => {
  const context = useContext(GlobalContext);

  if (!context) {
    throw new Error("JobCards must be used within GlobalState");
  }

  return (
    <div className="p-4 border border-gray-300 rounded-lg space-y-4">
      <div className="border-b border-b-gray-300 text-sm font-semibold tracking-wide py-2">
        <h2>FILTERS</h2>
      </div>

      {/* Category */}
      <Category />

      {/* Work arrangement */}
      <WorkArrangement />

      {/* Experience */}
      <ExperienceLevel />

      {/* Salary range */}
      <SalaryRange />

      <div className="flex gap-2 text-xs text-muted mb-3">
        <input
          id="saved-jobs"
          type="checkbox"
          className="accent-brand"
        />
        <label htmlFor="clear-filters">Saved Jobs</label>
      </div>

      <button className="text-xs text-muted cursor-pointer" >Clear Filters</button>
    </div>
  );
};

export default JobFilters;
