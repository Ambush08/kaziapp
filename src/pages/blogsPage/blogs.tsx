import BlogsHeader from "../../components/blogs/blogsPageHeader/blogsHeader";
import SectionBlogs from "../../components/blogs/blogsPageSection/sectionBlogs";
import Footer from "../../components/footer/footer"
import Navbar from "../../components/nav/navbar"
import Subscribe from "../../components/newsletter/subscribe";







const Blogs = () => {
    return(
        <>
            <Navbar />
            <BlogsHeader />
            <SectionBlogs />
            <Subscribe />
            <Footer />
        </>
    )
}


export default Blogs;