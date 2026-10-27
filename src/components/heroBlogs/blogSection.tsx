import Blogs from "./blogs";
import BlogSectionHeader from "./blogSectionHeader";




const BlogSection =  () => {
    return(
        <section className="w-full mt-8 py-8">
            <div className="flex flex-col items-start gap-4 max-w-6xl mx-auto px-6">
                <BlogSectionHeader />
                <Blogs />
            </div>
        </section>
    )
}



export default BlogSection;