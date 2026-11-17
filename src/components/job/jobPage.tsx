import JobInfo from "./jobInfo";
import JobPageHeader from "./jobPageHeader";
import SimilarJobs from "./similarJobs";


const JobPage = () => {
  return (
    <section className="w-full py-8 bg-gray-200 min-h-screen">
      <div className="px-6 max-w-6xl mx-auto flex flex-col gap-6 items-start">
        <JobPageHeader />
        <JobInfo />
        <SimilarJobs />
      </div>
    </section>
  );
};

export default JobPage;
