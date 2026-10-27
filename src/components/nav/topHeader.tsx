import { Globe, ChevronDown } from "lucide-react";

const TopHeader = ({ country = "Kenya" }) => {
  return (
    <div className="border-b border-gray-200 bg-surface">
      <div className="mx-auto flex h-8 max-w-6xl items-center justify-between px-6 text-xs text-gray-500 sm:px-6">
        <div>
          <p className="flex items-center gap-2">
            Your next chapter starts here.
          </p>
        </div>
        <div className="hidden items-center gap-6 sm:flex">
          <p>For ambitious people. For growing teams</p>
          <button
            type="button"
            className="flex items-center gap-1.5 hover:text-gray-900"
            aria-label={`Country: ${country}`}
          >
            <Globe className="h-3.5 w-3.5"/>
            {country}
            <ChevronDown className="h-3 w-3" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
