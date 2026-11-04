import TrendingJobs from "./trendingJobs";






const PopularJobs = () => {
    return (
        <section className="w-full py-8">
            <div className="flex flex-col max-w-6xl px-6 mx-auto items-start gap-6">
                <div className="flex flex-col items-start gap-3">
                   <h4 className="text-xl lg:text-2xl font-bold tracking-wide">Popular right now</h4> 
                   <p className="text-xs text-muted tracking-wide">A few roles other job seekers are saving.</p>
                </div>

                {/* TRENDING JOBS */}
                <TrendingJobs />
            </div>
        </section>
    )
}





export default PopularJobs;