"use client"
import { Hackathon, hackathonData } from "@/utils/data";
import FiltersSection from "./FiltersSection";
import HeroSection from "./HeroSection";
import HackathonCard from "./HackathonCard";
import { useCallback, useEffect, useState } from "react";
import Container from "@/components/Container";
import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
const HackathonList = () => {
    const [filteredData, setFilteredData] = useState<Hackathon[]>(hackathonData);
    const [searchTerm, setSearchTerm] = useState("");
    const [loading, setLoading] = useState(false);
    const [durationFilter, setDurationFilter] = useState<"ongoing" | "upcoming" | "closed" | null>(
        "ongoing"
    );
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    const filterData = useCallback(() => {
        setLoading(true);
        const result = hackathonData.filter((hackathon: Hackathon) => {
            const matchesDuration = durationFilter ? hackathon.duration === durationFilter : true;
            const matchesSearch =
                hackathon.hackathonName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                hackathon.location.toLowerCase().includes(searchTerm.toLowerCase());
            return matchesDuration && matchesSearch;
        });
        setTimeout(() => {
            setFilteredData(result);
            setLoading(false);
        }, 500);
    }, [durationFilter, searchTerm]);

    useEffect(() => {
        filterData();
    }, [durationFilter, searchTerm, filterData]);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentData = filteredData.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);

    const handlePageChange = (page: number) => {
        if (page < 1 || page > totalPages) return;
        setCurrentPage(page);
    };

    return (
        <>
            <HeroSection />
            <div className="flex justify-center w-full dark:bg-[#04080F]">
                <Container className="containers" >
                    <div className="w-full max-w-full md:w-[1216px]">

                        <FiltersSection
                            searchTerm={searchTerm}
                            setSearchTerm={setSearchTerm}
                            durationFilter={durationFilter}
                            setDurationFilter={setDurationFilter}
                        />
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[30px] w-full mt-[56px]">
                            {loading
                                ? Array.from({ length: 6 }).map((_, index) => (
                                    <Card key={index} className="p-4">
                                        <Skeleton className="w-full h-[150px] mt-4 bg-gray-300 rounded-md" />
                                        <Skeleton className="w-full h-4 mt-4 bg-gray-300 rounded" />
                                    </Card>
                                ))
                                : currentData.map((hackathon, index) => (
                                    <HackathonCard key={index} hackathon={hackathon} />
                                ))}
                        </div>
                    </div>
                    <hr className="w-full border dark:border-[#344054] border-[#EAECF0] mt-6" />
                            <div className="flex mt-6 w-full justify-end pb-5">
                                <Button
                                    onClick={() => handlePageChange(currentPage - 1)}
                                    disabled={currentPage === 1}
                                    className="gap-3 border dark:border-[#344054] border-[#D0D5DD] dark:border-[#344054] rounded-r-none"
                                >
                                    <Image src='/images/arrow-left.svg' width={11.67} height={11.67} alt="arrow" />

                                    Previous

                                </Button>
                                <div className="">
                                    {Array.from({ length: totalPages }, (_, index) => (
                                        <Button
                                            key={index + 1}
                                            onClick={() => handlePageChange(index + 1)}
                                            className={`${currentPage === index + 1 ? "bg-[#004EEB] dark:border-[#344054] text-white " : ""} rounded-none border dark:border-[#344054] border-[#D0D5DD]`}
                                        >
                                            {index + 1}
                                        </Button>
                                    ))}
                                </div>
                                <Button
                                    onClick={() => handlePageChange(currentPage + 1)}
                                    disabled={currentPage === totalPages}
                                    className="gap-3 border dark:border-[#344054] border-[#D0D5DD] rounded-l-none"
                                >
                                    Next
                                    <Image src='/images/arrow-right.svg' width={11.67} height={11.67} alt="arrow" />

                                </Button>
                            </div>
                </Container>
            </div>
        </>
    );
};
export default HackathonList


