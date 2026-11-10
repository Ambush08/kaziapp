import Footer from "../../components/footer/footer"
import JobPage from "../../components/job/jobPage";
import SimilarJobs from "../../components/job/similarJobs";
import Navbar from "../../components/nav/navbar"





const JobPost = () => {
    return(
        <>
            <Navbar />
            <JobPage />
            <SimilarJobs />
            <Footer />
        </>
    )
}



export default JobPost;