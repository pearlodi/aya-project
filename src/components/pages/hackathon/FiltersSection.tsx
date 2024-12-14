import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
const FiltersSection = ({
    searchTerm,
    setSearchTerm,
    durationFilter,
    setDurationFilter,
}: {
    searchTerm: string;
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
    durationFilter: "ongoing" | "upcoming" | "closed" | null;
    setDurationFilter: React.Dispatch<React.SetStateAction<"ongoing" | "upcoming" | "closed" | null>>;
}) => (
        <div className="mt-[60px] w-full lg:flex items-center justify-between">
        <Input
            placeholder="Search hackathons..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="placeholder:text-[#667085] dark:placeholder:text-[#667085]  w-full max-w-full border dark:border-[#344054] border-[#D0D5DD] md:w-[395px] "
        />
        <div className="dark:bg-[#101828] md:overflow-visible overflow-scroll max-w-full bg-[#EAECF5] border dark:border-[#1D2939] border-[#EAECF5] p-2 rounded-[12px] flex  gap-2 w-fit mt-4 lg:mt-0">
            {["ongoing", "upcoming", "closed"].map((filter) => (
                <Button
                    key={filter}
                    onClick={() => setDurationFilter(filter as "ongoing" | "upcoming" | "closed")}

                    className={`${durationFilter === filter ? "bg-[#004EEB] text-white" : "text-[#2970FF]"} rounded-[4px] font-semibold text-[10px] md:text-sm shadow-none px-1 md:px-4  `}
                >
                    {filter} Hackathon
                </Button>
            ))}

        </div>
    </div>

);
export default FiltersSection