import SavedJobCard from "./savedJobCard";





const SavedJobsCards = () => {
    return (
        <div className="grid grid-cols-1 gap-4 w-full lg:grid-cols-3 lg:gap-6 items-stretch">
            <SavedJobCard />
            <SavedJobCard />
            <SavedJobCard />
            <SavedJobCard />
            <SavedJobCard />
        </div>
    )
}



export default SavedJobsCards;