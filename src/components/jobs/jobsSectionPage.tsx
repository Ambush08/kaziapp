import JobFilters from "./jobFilters";
import JobsPageCards from "./jobsPageCrads";


const JobsPageSection = () => {

  return (
    <section className="w-full py-6">
      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6 items-start px-6 max-w-6xl mx-auto">
        <JobFilters />
        <JobsPageCards />
      </div>
    </section>
  );
};

export default JobsPageSection;
