import { Search } from 'lucide-react';





const BlogsHeader = () => {
  return (
    <section className="w-full bg-hero-bg py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-start gap-8 my-4">
        {/* HEADER TEXT */}
        <div className="flex flex-col items-start w-full gap-4">
          <div className="flex gap-2 items-center text-green-500 text-xs font-semibold">
            <div className="size-2 rounded-full animate-pulse bg-green-500"></div>
            <p className="tracking-wide">KAZI FITI BLOG</p>
          </div>

          <div className="flex flex-col items-start gap-4">
            <h2 className="text-2xl sm:text-4xl font-bold tracking-wide">
              <span className="text-light">Advice for your </span>
              <span className="text-green-400">next career chapter.</span>
            </h2>
            <p className="text-xs text-muted tracking-wide">
              Practical career advice, honest hiring insights, and the questions
              worth asking before your next move.
            </p>
          </div>
        </div>


        {/* BLOG SEARCH & FILTERS */}
        <div className="flex flex-col items-start gap-4 lg:flex-row lg:justify-between lg:gap-4 lg:items-center w-full">
          <div className=" flex gap-1 items-center border border-gray-700 rounded-lg px-4 py-3 w-3/4 bg-hero-card">
            <Search size={14} className="text-muted" />
            <input
              type="text"
              placeholder="Search blogs..."
              className="bg-transparent text-muted focus:outline-none text-xs w-full"
            />
          </div>


          <div className="flex items-center gap-4 flex-wrap w-full">
            <button className="border border-gray-700 rounded-4xl text-muted text-xs cursor-pointer hover:border-gray-400 py-2 px-3">All posts</button>
            <button className="border border-gray-700 rounded-4xl text-muted text-xs cursor-pointer hover:border-gray-400 py-2 px-3">Career Advice</button>
            <button className="border border-gray-700 rounded-4xl text-muted text-xs cursor-pointer hover:border-gray-400 py-2 px-3">Job Seeking</button>
            <button className="border border-gray-700 rounded-4xl text-muted text-xs cursor-pointer hover:border-gray-400 py-2 px-3">Employers</button>
            <button className="border border-gray-700 rounded-4xl text-muted text-xs cursor-pointer hover:border-gray-400 py-2 px-3">Interviews</button>
            <button className="border border-gray-700 rounded-4xl text-muted text-xs cursor-pointer hover:border-gray-400 py-2 px-3">Salary talk</button>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default BlogsHeader;
