import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import formatTime from "../../utils/formatTime";

interface BlogProps {
  blogData: any;
}

const Blog = ({ blogData }: BlogProps) => {
  return (
    <div className="flex flex-col p-4 space-y-4 w-full border border-gray-300 rounded-lg hover:border-brand">
      <div className="w-full overflow-hidden rounded-lg group">
        <img
          src={blogData.coverImageUrl}
          alt={blogData.title}
           className="w-full h-48 object-cover object-top rounded-lg transition-transform duration-500 ease-in-out group-hover:scale-110"
        />
      </div>
      <div className="flex flex-col gap-2 items-start">
        <h2 className="text-lg font-bold tracking-wide">{blogData.title}</h2>
        <p className="text-xs text-muted tracking-wide line-clamp-2">
          {blogData.snippet}
        </p>
      </div>
      <div className="text-xs text-green-700 flex gap-1 items-center">
        <Link to={"/jobs/:id"}>Read Article</Link>
        <ArrowUpRight size={14} />
      </div>
      <div className="text-xs text-muted flex items-center justify-between capitalize font-semibold">
        <h4><span className="text-brand">Created:</span> {formatTime(blogData.createdAt)}</h4>
        <h4><span className="text-brand">Posted By:</span> {blogData.postedBy}</h4>
      </div>
    </div>
  );
};

export default Blog;
