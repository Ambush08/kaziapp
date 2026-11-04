import Footer from "../../components/footer/footer"
import Navbar from "../../components/nav/navbar"
import PopularJobs from "../../components/savedJobs/popularJobsSection";
import SavedJobsHeader from "../../components/savedJobs/savedJobsHeader";
import SavedJobsSection from "../../components/savedJobs/savedJobsSection";





const SavedJobs = () => {
    return(
        <>
            <Navbar />
            <SavedJobsHeader />
            <SavedJobsSection />
            <PopularJobs />
            <Footer />
        </>
    )
}


export default SavedJobs;