
"use client"

import { hackathonData, Hackathon } from "@/utils/data";
import Image from 'next/image'
import { useState, useEffect, useCallback } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const HackathonList = () => {
    const [filteredData, setFilteredData] = useState<Hackathon[]>(hackathonData);
    const [searchTerm, setSearchTerm] = useState("");
    const [loading, setLoading] = useState(false);
    const [durationFilter, setDurationFilter] = useState<"ongoing" | "upcoming" | "closed" | null>("ongoing");

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
        const timeout = setTimeout(() => {
            filterData();
        }, 300);
        return () => clearTimeout(timeout);
    }, [searchTerm, durationFilter, filterData]);


    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);

    const handlePageChange = (page: number) => {
        if (page < 1 || page > totalPages) return;
        setCurrentPage(page);
    };

    return (
        <div>
            <div className="w-full ">
                <div className='projects-background-light dark:background-dark px-4 '>
                    <div className='flex justify-center items-center  '>
                        <div className="w-[950px] mt-[157px] flex flex-col items-center justify-center" >
                            <div className="tag dark:tag-dark w-[240px] h-[26px] rounded-[40px]  flex justify-center items-center">
                                <p className="text-gray-100 dark:text-[#D0D5DD] text-center text-[12px] md:text-sm font-medium">Participate, collaborate and build</p>
                            </div>
                            <p className="font-semibold leading-[72px] text-[#1D2939] tracking-[2%] text-center text-[40px] md:text-[55px] dark:text-white">Hackathons</p>

                        </div>
                    </div>
                    <div className='w-full flex justify-center items-center mt-10 dark:hidden'>
                        <Image src='images/hackathon.svg' alt='' width={953} height={338.5} />
                    </div>
                    <div className='w-full flex justify-center items-center mt-10 dark:flex hidden'>
                        <Image src='images/hackathon-dark.svg' alt='' width={953} height={338.5} />
                    </div>
                </div>
            </div>
            <div className="flex justify-center w-full px-4  dark:bg-[#04080F]">
                <div className="w-full max-w-full md:w-[1216px]">
                    <div className="mt-[60px] lg:flex items-center justify-between">
                        <Input
                            placeholder="Search hackathons..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="placehoder:text-[red] w-full max-w-full border dark:text-[#667085] dark:border-[#344054] border-[#D0D5DD] md:w-[395px] text-[#667085] text-sm"
                        />
                        <div className="dark:bg-[#101828] md:overflow-auto overflow-scroll max-w-full bg-[#EFF4FF] border dark:border-[#1D2939] border-[#EAECF5] p-2 rounded-[12px] flex  gap-2 w-fit mt-4 lg:mt-0">
                            {["ongoing", "upcoming", "closed"].map((filter) => (
                                <Button
                                    key={filter}
                                    onClick={() => setDurationFilter(filter as "ongoing" | "upcoming" | "closed")}

                                    className={`${durationFilter === filter ? "bg-[#004EEB] text-white" : "text-[#2970FF]"} rounded-[4px] font-semibold text-[10px] md:text-[14px] shadow-none px-1 md:px-4  `}
                                >
                                    {filter} Hackathon
                                </Button>
                            ))}

                        </div>
                    </div>

                    <div className="mt-[60px]">
                        {loading && (
                            <div className="grid grid-cols-1 grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-8">
                                {Array.from({ length: 6 }).map((_, index) => (
                                    <Card
                                        key={index} className="p-4">
                                        <Skeleton className="h-[150px] mt-4 bg-gray-300" />
                                        <Skeleton className="h-4 mt-1 bg-gray-300" />


                                    </Card>
                                ))}
                            </div>
                        )}

                        {!loading && currentItems.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-8">
                                {currentItems.map((hackathon: Hackathon, index: number) => (
                                    <Card
                                        key={index}
                                        className={`border dark:border-[#344054] ${index === 1 ? 'border-[#143CFD99] dark:border-[#143CFD99] shadow-[#143CFD99]' : 'border-[#EAECF0]'
                                            }`}
                                    >
                                        <div
                                            className="hack h-[200px] w-full"
                                        ></div>
                                        <div >
                                            <div className="px-2">
                                                <div className="flex justify-between mt-4">
                                                    <h2
                                                        className={`font-medium  text-lg ${index === 1 ? 'text-[#004EEB] dark:text-[#E8B8F6]' : 'dark:text-[#F9FAFB] text-[#1D2939]'
                                                            }`}
                                                    >{hackathon.hackathonName}</h2>
                                                    <div>
                                                        <div className="flex items-center gap-[6px] dark:bg-[#1D2023] bg-[#F9FAFB] py-[2px] px-2 rounded-[4px]">
                                                            <Image src='images/lock.svg' width={18} height={18} alt="" />
                                                            <p className="font-medium text-[#98A2B3] text-sm capitalize">{hackathon.status}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex justify-between items-center">
                                                    <p className="font-semibold dark:text-[#F9FAFB] text-[#1D2939] text-xl md:text-[30px]">{hackathon.reward}</p>
                                                    <div className="flex items-center gap-[5px]">
                                                        <Image src='/images/person.svg' alt="" width={18} height={18} />
                                                        <p className="dark:text-[#D0D5DD] text-[#475467] font-semibold text-base"> {hackathon.participants}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr className="border dark:border-[#1D2939] border-[#EAECF0] mt-4"></hr>
                                            <div className="px-2">
                                                <div className="flex gap-2 mt-6">
                                                    {hackathon.stacks.slice(0, 3).map((stack: string, idx: number) => (
                                                        <ul
                                                            key={idx}
                                                            className="px-1 rounded-[6px] border-[1.5px] dark:border-[#667085] border-[#D0D5DD]"
                                                        >
                                                            <li className="capitalize font-medium text-sm text-[#344054]">
                                                                {stack}
                                                            </li>
                                                        </ul>
                                                    ))}
                                                    {hackathon.stacks.length > 3 && hackathon.stacks.length - 3 > 0 && (
                                                        <ul
                                                            className="px-1 rounded-[6px] border-[1.5px] dark:border-[#667085] border-[#D0D5DD]"
                                                            title={hackathon.stacks.slice(3).join(", ")}
                                                        >
                                                            <li className="capitalize font-medium text-sm text-[#344054]">
                                                                +{hackathon.stacks.length - 3} more
                                                            </li>
                                                        </ul>
                                                    )}
                                                </div>
                                                <div className="flex justify-between items-center mt-5 mb-5">
                                                    <div className="flex items-center gap-1 border border-[#F2F4F7] p-[4px] rounded-[4px] dark:border-none dark:bg-transparent bg-[#F9FAFB]">
                                                        <Image src='/images/company.svg' width={20} height={20} alt="" />
                                                        <p className="font-medium text-sm  dark:text-[#98A2B3] text-[#1D2939]">{hackathon.company}</p>
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <Image src='/images/location.svg' width={20} height={20} alt="" />

                                                        <p className="font-medium text-base dark:text-[#98A2B3] text-[#667085]">{hackathon.location}</p>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </Card>
                                ))}
                            </div>
                        ) : (
                            !loading && <div className="h-[50vh] flex justify-center items-center"><p className="">No Hackathon here</p></div>
                        )}
                        <hr className="w-full border dark:border-[#344054] border-[#EAECF0] mt-6" />
                        <div className="flex mt-6 w-full justify-end pb-5">
                            <Button
                                onClick={() => handlePageChange(currentPage - 1)}
                                disabled={currentPage === 1}
                                className="gap-3 border border-[#D0D5DD] rounded-r-none"
                            >
                                <Image src='/images/arrow-left.svg' width={11.67} height={11.67} alt="arrow" />

                                Previous

                            </Button>
                            <div className="">
                                {Array.from({ length: totalPages }, (_, index) => (
                                    <Button
                                        key={index + 1}
                                        onClick={() => handlePageChange(index + 1)}
                                        className={`${currentPage === index + 1 ? "bg-[#004EEB] text-white " : ""} rounded-none border border-[#D0D5DD]`}
                                    >
                                        {index + 1}
                                    </Button>
                                ))}
                            </div>
                            <Button
                                onClick={() => handlePageChange(currentPage + 1)}
                                disabled={currentPage === totalPages}
                                className="gap-3 border border-[#D0D5DD] rounded-l-none"
                            >
                                Next
                                <Image src='/images/arrow-right.svg' width={11.67} height={11.67} alt="arrow" />

                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HackathonList;
