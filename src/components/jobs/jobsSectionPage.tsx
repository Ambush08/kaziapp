import JobFilters from "./jobFilters";
import JobsPageCards from "./jobsPageCrads";
import Pages from "./pages";


const JobsPageSection = () => {

  return (
    <section className="w-full py-6">
      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6 items-start px-6 max-w-6xl mx-auto">
        <aside className="lg:sticky lg:top-50 lg:self-start">
          <JobFilters />
        </aside>
        <JobsPageCards />
      </div>
      <Pages />
    </section>
  );
};

export default JobsPageSection;
