




const SavedJobsHeader = () => {
    return(
        <section className="bg-hero-bg py-8 w-full">
            <div className="max-w-6xl mx-auto px-6 flex flex-col items-start gap-4 my-8">
                <div className="flex items-center gap-1 text-green-400 text-xs font-semibold tracking-wide">
                    <div className="bg-green-400 rounded-full size-2 animate-pulse"></div>
                    <h3>YOUR SHORTLIST</h3>
                </div>
                <h2 className="text-light tracking-wide text-3xl lg:text-4xl font-bold">Saved <span className="text-green-400">Jobs.</span></h2>
                <p className="text-muted tracking-wide text-xs lg:text-sm leading-relaxed lg:w-1/2">Keep the roles you love within reach. Bookmark anything interesting and come back when you are ready to apply.</p>
            </div>
        </section>
    )
}




export default SavedJobsHeader;