



const PricingHeader = () => {
    return(
        <section className="w-full py-10 bg-hero-bg">
            <div className="max-w-6xl mx-auto px-6 flex flex-col items-start gap-4 py-5">
                <div className="flex items-center gap-2 text-xs text-green-600 font-semibold tracking-wide">
                    <div className="size-2 rounded-full animate-pulse bg-green-600"></div>
                    <p>KAZIFITI PRICING</p>
                </div>
                <h2 className="text-3xl lg:text-5xl font-bold tracking-wide">
                    <span className="text-light">Pricing that </span>
                    <span className="text-green-400">grows with you.</span>
                </h2>
                <p className="text-sm text-muted tracking-wide lg:w-3/4">Start free, upgrade when you are hiring consistently, and scale without switching tools. No hidden fees, no lock-in.</p>
            </div>
        </section>
    )
}




export default PricingHeader;