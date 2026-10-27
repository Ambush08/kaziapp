const Subscribe = () => {
  return (
    <section className="w-full py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-hero-bg grid grid-cols-1 items-start py-4 gap-4 md:grid-cols-2 sm:items-center sm:justify-between rounded-lg">
          <div className="flex flex-col items-start py-6 px-4 gap-4">
            <div className="flex items-center gap-2  text-green-400 text-xs">
              <div className="size-2 rounded-full animate-pulse bg-green-400"></div>
              <p>Weekly brief</p>
            </div>

            <div className="flex flex-col items-start gap-4">
              <h2 className="text-lg text-light font-bold sm:text-2xl tracking-wide">
                New roles, every Monday
              </h2>
              <p className="text-muted text-xs flex flex-col items-start tracking-wide">
                <span>Fresh opportunities, hiring insights, and practical</span>
                <span>career tips — delivered to your inbox.</span>
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center bg-light rounded-lg px-4 py-3 mx-4">
            <input type="text" placeholder="you@example.com"  className="outline-0 text-xs text-muted"/>
            <button className="bg-green-700  px-3 py-2 rounded-md text-light text-sm cursor-pointer hover:bg-green-600 transition-colors">Subscribe</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
