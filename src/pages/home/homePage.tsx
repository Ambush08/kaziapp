import Hero from "../../components/hero/Hero";
import BlogSection from "../../components/heroBlogs/blogSection";
import JobsSection from "../../components/heroJobs/jobsSection";
import Subscribe from "../../components/newsletter/subscribe";
import Partners from "../../components/partners";
import Packages from "../../components/payments/packages";
import Testimonial from "../../components/testimonies/testimonial";
import Navbar from "../../components/nav/navbar";
import Footer from "../../components/footer/footer";



const HomePage = () => {
    return(
        <>
        <Navbar />
        <Hero />
        <Partners />
        <JobsSection />
        <BlogSection />
        <Packages />
        <Testimonial />
        <Subscribe />
        <Footer />
        </>
    )
}



export default HomePage; 