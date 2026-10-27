import Testimonie from "./testimonie"

export interface ITestimonie {
    comment: string,
    name: string,
    role: string,
    icon: string
}

const testimonies: ITestimonie[] = [
    {
        comment: `"I saved three roles and applied in an afternoon. Six weeks later I started a job that genuinely fits how I want to work."`,
        name: 'Amina Wanjiru',
        role: 'Product Designer · Safaricom',
        icon: 'AW'
    },
     {
        comment: `"The remote filter alone saved me hours. Clear listings, honest salary ranges, and no guesswork about who was hiring."`,
        name: 'Brian Otieno',
        role: 'Backend Engineer · Andela',
        icon: 'BO'
    },
     {
        comment: `"We posted on Monday and had qualified applicants by Wednesday. The shortlist tools keep our whole hiring loop tidy."`,
        name: 'Faith Njeri',
        role: 'Talent Lead · M-KOPA',
        icon: 'FN'
    },
]



const Testimonial = () => {
    return (
        <section className="w-full py-12 border-b border-b-gray-300">
            <div className="flex flex-col items-start px-6 gap-4 max-w-6xl mx-auto">
                <div className="flex flex-col items-start gap-2">
                    <h2 className="text-2xl sm:text-3xl font-bold">Stories from people who found their place</h2>
                    <p className="text-xs text-muted">Sample voices from job seekers and teams hiring on KaziFiti.</p>
                </div>

                {/* Testimonie component */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 items-center lg:justify-between">
                    {
                        testimonies.map((testimonie, index) => {
                            return (
                                <Testimonie key={index} data = {testimonie} stars = { 5}/>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}



export default Testimonial;