import Package from "./package";


export interface IPlans {
    name: string;
    description: string;
    price: number;
    planList: string[]
}

const plans: IPlans[] = [
    {
        name: 'Starter',
        description: 'For teams making their first hire.',
        price: 0,
        planList: ['1 active job post', '14-day job visibility', 'Basic applicant inbox', 'Email support']
    },
    {
        name: 'Growth',
        description: 'For teams hiring consistently.',
        price: 3900,
        planList: ['5 active job posts', '30-day job visibility', 'Featured placement in search', 'Applicant tracking tools', 'Priority email support' ]
    },
    {
        name: 'Enterprise',
        description: 'For companies hiring at scale.',
        price: 7000,
        planList: ['Unlimited job posts', 'Dedicated account manager', 'Branded company profile', 'Team seats & permissions', 'Team seats & permissions' ]
    }
]


const Packages = () => {
    return (
        <section className="w-full py-12 bg-linear-to-br from-light to-green-100">
            <div className="flex flex-col items-start max-w-6xl mx-auto px-6 gap-4">
                <div className="flex flex-col gap-2">
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-wide">Simple pricing for growing teams</h2>
                    <p className="text-muted text-xs tracking-wide">Post roles, reach verified talent, and hire with confidence.</p>
                </div>

                {/* Pricing Packages */}
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 items-stretch lg:justify-between w-full">
                    {
                        plans.map((plan, index) => {
                            return (
                                <Package key={index} plan={plan}/>
                            )
                        })
                    }
                </div>

                <div className="text-muted text-xs py-3 text-center">
                    <p className="">Every plan includes verified applicants, applicant tracking, and email support. Cancel anytime.</p>
                </div>
            </div>
        </section>
    )
}



export default Packages;