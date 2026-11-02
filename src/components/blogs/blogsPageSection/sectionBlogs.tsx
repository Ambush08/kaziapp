import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Blog from "../../heroBlogs/blog";
import { useContext } from "react";
import { GlobalContext } from "../../../context/globalState";

const SectionBlogs = () => {
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
  return (
    <section className="w-full py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-start gap-4">
        <div className="flex flex-col items-start gap-6 w-full">
          <div className="flex flex-col gap-2 items-start w-full">
            <h2 className="font-semibold text-2xl tracking-wide">
              Latest articles
            </h2>
            <p className="text-muted text-xs">6 articles</p>
          </div>

          {/* LATEST BLOG CARD */}
          <div className="flex flex-col gap-6 items-start w-full px-6 py-4 border border-gray-700 rounded-lg lg:flex-row lg:items-center lg:justify-between hover:border-brand">
            <div className="w-full overflow-hidden rounded-lg group">
              <img
                src="download.jpg"
                alt="Blog post image"
                className="w-full h-60 object-cover object-center rounded-lg transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
            </div>

            <div className="flex flex-col gap-3 items-start w-full">
              <p className="text-muted text-xs">Career advice</p>
              <Link
                to={""}
                className="font-bold text-xl tracking-wide hover:text-brand"
              >
                How to stand out in Kenya's job market
              </Link>
              <p className="text-xs text-muted tracking-wide line-clamp-2">
                Five practical habits that make recruiters notice your profile —
                and keep noticing it.
              </p>

              <ul className="flex items-center justify-between w-full lg:flex-col lg:items-start lg:gap-2">
                <li className="text-xs text-muted">
                  <span className="text-brand">Posted By: </span>KaziFiti Team
                </li>
                <li className="text-xs text-muted">
                  {" "}
                  <span className="text-brand">Posted On: </span>May 15, 2023
                </li>
              </ul>

              <Link
                to={""}
                className="text-light py-2 px-3  flex gap-2 items-center bg-green-700 rounded-md text-sm cursor-pointer hover:bg-green-600 transition-colors"
              >
                <span>Read more</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* Blogs */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 lg:items-center items-stretch lg:justify-between w-full">
            {blogs.map((blog) => {
              return <Blog key={blog._id ?? blog.id} blogData={blog} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionBlogs;
