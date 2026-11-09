import JobInfo from "./jobInfo";
import JobPageHeader from "./jobPageHeader";







const JobPage = () => {
    return (
        <section className="w-full py-8 bg-gray-200">
            <div className="px-6 max-w-6xl text-xs mx-auto flex flex-col gap-6 items-start">
                <JobPageHeader />
                <JobInfo />
            </div>
        </section>
    )
}



export default JobPage;