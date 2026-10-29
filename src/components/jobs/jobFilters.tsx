import ExperienceLevel from "./experienceLevel";
import SalaryRange from "./salaryRange";
import WorkArrangement from "./workArrangement";





const JobFilters = () => {
    return (
        <div className="p-4 border border-gray-300 rounded-lg space-y-4">
            <div className="border-b border-b-gray-300 text-sm font-semibold tracking-wide py-2">
                <h2>FILTERS</h2>
            </div>

            {/* Work arrangement */}
            <WorkArrangement />


            {/* Experience */}
            <ExperienceLevel />


            {/* Salary range */}
            <SalaryRange />
            
            <div className="flex gap-2 text-xs text-muted mb-3">
                <input type="checkbox" className="accent-brand"/>
                <label htmlFor="">Saved jobs only</label>
            </div>
        </div>
    )
}



export default JobFilters;