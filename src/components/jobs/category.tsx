import { ChevronDown, ChevronUp } from "lucide-react";
import { useState, useContext } from "react";
import { GlobalContext } from "../../context/globalState";

const Category= () => {
  const context = useContext(GlobalContext)

  if (!context) {
    throw new Error("JobCards must be used within GlobalState");
  }

  const { categories } = context
  const [openFilter, setOpenFilter] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('')

  const handleOpenFilter = () => {
    setOpenFilter(!openFilter);
  };

  return (
    <div className="flex flex-col gap-2 items-start border-b border-b-gray-300 py-3">
      <div
        className="flex items-center justify-between w-full text-xs font-semibold cursor-pointer"
        onClick={handleOpenFilter}
      >
        <h4>Category</h4>
        {openFilter ? (
          <ChevronUp size={14} className="text-muted" />
        ) : (
          <ChevronDown size={14} className="text-muted" />
        )}
      </div>

      {/* Work arrangement list items */}
      {openFilter && (
        <ul className="flex flex-col items-start gap-3 w-full">
          {
            categories.map((category) => {
              return(
                <li key={category.id} className="text-xs text-muted flex items-center gap-2">
                  <input
                  type="radio"
                  id={category.id}
                  name="category"
                  value={category.name}
                  checked={selectedCategory === category.id}
                  onChange={() => setSelectedCategory(category.id)}
                  className="h-4 w-4 accent-green-700"
                />
                <label htmlFor={category.id}>{category.name}</label>
                </li>
              )
            })
          }
        </ul>
      )}
    </div>
  );
};

export default Category;
