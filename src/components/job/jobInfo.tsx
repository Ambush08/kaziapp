import AboutJob from "./aboutJob"
import JobData from "./jobData"


const JobInfo = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-6 items-start max-w-6xl mx-auto py-3 rounded-lg tracking-wide">
        <AboutJob />
        <JobData />
    </div>
  )
}

export default JobInfo