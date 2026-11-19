import { ChevronDown, ChevronUp } from "lucide-react";
import { useState, useContext } from "react";
import { GlobalContext } from "../../context/globalState";

const Category = () => {
  const context = useContext(GlobalContext);

  if (!context) {
    throw new Error("JobCards must be used within GlobalState");
  }

  const { categories, getJobs, filters } = context;
  const [openFilter, setOpenFilter] = useState(false);

  const handleOpenFilter = () => {
    setOpenFilter(!openFilter);
  };

  const selectedCategory = filters?.categoryId ?? "";

  const handleCategoryChange = (categoryId: string) => {
    getJobs({
      ...filters,
      categoryId: categoryId || undefined,
    });
  };


    const options = [{ id: "", name: "All categories" }, ...categories];

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
          {options.map((category) => {
            const isSelected = category.id === selectedCategory
            return (
              <li
                key={category.id || "all"}
                className={`flex w-full items-center gap-2 rounded-md px-3 py-2 text-xs cursor-pointer transition-colors ${isSelected ? "bg-green-50 text-green-800" : "text-muted hover:bg-gray-50"}`}
              >
                <input
                  type="radio"
                  id={`category-${category.id || "all"}`}
                  name="category"
                  value={category.name}
                  checked={selectedCategory === category.id}
                  onChange={() => handleCategoryChange(category.id)}
                  className="h-4 w-4 accent-green-700"
                />
                <label 
                htmlFor={`category-${category.id || "all"}`}
                className="w-full">{category.name}</label>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Category;
