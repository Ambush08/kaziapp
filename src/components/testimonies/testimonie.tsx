import { FaStar } from "react-icons/fa";
import type { ITestimonie } from "./testimonial";

interface TestimonieProps {
    data: ITestimonie,
    stars: number
}

const Testimonie = ({data, stars = 5}: TestimonieProps) => {
    return (
        <div className="flex flex-col items-start space-y-4 border border-gray-300 rounded-lg py-4 px-4 hover:border-brand transition-colors w-full">
            <div className="flex gap-1 text-star">
                {
                    [...Array(stars)].map((_, index) => {
                        return (
                            <FaStar key={index} size={12}/>
                        )
                    })
                }
            </div>

            <div className="text-muted text-xs tracking-wide border-b border-b-gray-300 pb-6">
                <p>{data.comment}</p>
            </div>

            <div className="flex items-center gap-3">
                <div className="text-brand rounded-full px-2 py-2 bg-green-100">
                    {data.icon}
                </div>
                <div className="flex flex-col gap-2">
                    <h2 className="text-sm font-semibold">{data.name}</h2>
                    <p className="text-xs text-muted">{data.role}</p>
                </div>
            </div>
        </div>
    )
}



export default Testimonie;