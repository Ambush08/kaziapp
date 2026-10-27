import Blog from "./blog";
import { useContext } from "react";
import { GlobalContext } from "../../context/globalState";

const Blogs = () => {
  const context = useContext(GlobalContext);

  if (!context) {
    throw new Error("JobCards must be used within GlobalState");
  }

  const { blogs, loading, error } = context;

  if (loading) {
    return <p className="text-xs text-brand">Loading jobs...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (blogs.length === 0) {
    return <p>No jobs found.</p>;
  }
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 lg:items-center items-stretch lg:justify-between w-full">
       {
        blogs.map((blog) => {
            return <Blog key={blog._id?? blog.id} blogData={blog}/>
        })
       }
    </div>
  );
};

export default Blogs;
