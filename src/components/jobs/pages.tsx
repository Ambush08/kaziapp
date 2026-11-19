import { useContext } from "react";
import { GlobalContext } from "../../context/globalState";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Pages = () => {
  const context = useContext(GlobalContext);

  if (!context) {
    throw new Error("Pages must be used in global context");
  }

  const { totalPages, getJobs, filters } = context;

  const selectedPage = filters?.page ?? 1;

  const pageFilter = (page: number) => {
    getJobs({
      ...filters,
      page,
    });
  };

  const previousPage = () => {
    if (selectedPage > 1) {
      pageFilter(selectedPage - 1);
    }
  };

  const nextPage = () => {
    if (selectedPage < totalPages) {
      pageFilter(selectedPage + 1);
    }
  };

  return (
    <div className="max-w-6xl px-6 mx-auto flex items-center justify-center gap-3 pt-6">
      <button
        onClick={previousPage}
        disabled={selectedPage === 1}
        className="rounded-full p-0.5 border border-muted cursor-pointer"
      >
        <ChevronLeft size={18} className="text-muted" />
      </button>
      {Array.from({ length: totalPages }).map((_, index) => {
        const page = index + 1;

        const isSelected = page === selectedPage;

        return (
          <button
            key={page}
            onClick={() => pageFilter(page)}
            className={`rounded-full py-1 px-2 text-xs border border-muted cursor-pointer text-muted ${isSelected ? "bg-hero-bg text-white font-semibold" : ""}`}
          >
            {page}
          </button>
        );
      })}
      <button
        onClick={nextPage}
        disabled={selectedPage === totalPages || totalPages === 0}
        className="rounded-full p-0.5 border border-muted cursor-pointer"
      >
        <ChevronRight size={18} className="text-muted" />
      </button>
    </div>
  );
};

export default Pages;
