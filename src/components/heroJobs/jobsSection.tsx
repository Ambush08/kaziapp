import JobCards from "./heroJobs";
import JobsSectionHeader from "./jobsSectionHeader";

const JobsHeroSection = () => {
  return (
    <section className="w-full py-12">
      <div className="px-6 max-w-6xl mx-auto flex flex-col items-start gap-4">
        <JobsSectionHeader />
        <JobCards />
      </div>
    </section>
  );
};

export default JobsHeroSection;
