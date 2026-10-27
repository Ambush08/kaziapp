import { FaPlus } from "react-icons/fa";


interface IStats {
    value: string,
    description: string
}

const statValues: IStats[] = [
  {
    value: "2400",
    description: "Active opportunities",
  },
  {
    value: "850",
    description: "Growing Companies",
  },
  {
    value: "12k",
    description: "Careers connected",
  },
];

const Stats = () => {
  return <div className="w-full mt-6">
        <ul className="flex items-center justify-between gap-4">
            {
            statValues.map((statValue, index) => {
            return (
               <div key={index} className={`space-y-3 ${index !== statValues.length - 1 ? 'border-r border-r-gray-700 pr-6 sm:pr-12' : 'none'}`}>
                <li className="text-light font-bold text-xl sm:text-2xl flex items-center">
                    <h3>{statValue.value}</h3>
                    <FaPlus size={18} className="text-green-500 font-bold"/>
                </li>
                <li className="text-muted text-xs">{statValue.description}</li>
               </div>
            );
        })
    }
        </ul>
  </div>;
};

export default Stats;
