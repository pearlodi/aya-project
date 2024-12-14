"use client"

import * as React from "react"
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { communityData, builderData, Member } from "@/utils/data"
import Container from "./Container"

interface TableComponentProps {
  isCommunity: boolean
  setIsCommunity: React.Dispatch<React.SetStateAction<boolean>>
}

export default function TableComponent({ isCommunity, setIsCommunity }: TableComponentProps) {
  const [currentPage, setCurrentPage] = React.useState(1)
  const [itemsPerPage] = React.useState(5)

  const data: Member[] = isCommunity ? communityData : builderData
  const totalPages = Math.ceil(data.length / itemsPerPage)


  const sortedData = [...data].sort((a, b) => b.points - a.points)

  const dataWithPositions = sortedData.map((member, index) => ({
    ...member,
    position: index + 1,
  }))

  const displayedData = dataWithPositions.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1)
    }
  }

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1)
    }
  }

  return (
    <div className="w-full max-w-full flex justify-center items-center  dark:bg-[#04080f] pb-[243px]">
      <Container>
        <div className="w-full max-w-full md:max-w-[1202px]">
          <div className="w-full mt-[75px]">
            <div className="md:flex justify-between items-center">
              <p className="text-gray-400 dark:text-grayDark-200 font-semibold text-base md:text-2xl">Leaderboard table</p>
              <div className="bg-[#F8F9FC] dark:bg-[#101828] flex gap-4 p-2 rounded-[12px] w-full md:w-fit mt-3 md:mt-0 ">
                <button
                  onClick={() => setIsCommunity(true)}
                  className={`${isCommunity ? "bg-[#004EEB] text-white p-2 rounded-[4px] font-medium text-sm md:text-base" : "text-gray-300 dark:text-grayDark-400 font-medium text-sm md:text-base"} gap-2 flex justify-center items-center  w-1/2 md:w-fit`}
                >
                  Builders <span className="flex justify-center items-center  w-[29px] h-[29px] bg-white rounded-full text-[#004EEB] font-medium text-[12px]">{communityData.length}</span>
                </button>
                <button
                  onClick={() => setIsCommunity(false)}
                  className={`${!isCommunity ? "bg-[#004EEB] text-white p-2 rounded-[4px] font-medium text-sm md:text-base" : "text-gray-300 dark:text-grayDark-400 font-medium text-sm md:text-base"} gap-2 flex justify-center items-center  w-1/2 md:w-fit`}
                >
                  Communities <span className="flex justify-center items-center w-[29px] h-[29px] bg-white rounded-full text-[#004EEB] font-medium text-[12px]">{builderData.length}</span>
                </button>
              </div>
            </div>

            <div className="bg-[#FCFCFD] dark:bg-[#101828] p-8 border border-[#EAECF0] dark:border-[#344054] rounded-[12px] mt-6">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Position</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>   {isCommunity ? 'Points' : 'Hackathons'}</TableHead>
                    <TableHead>
                      {isCommunity ? 'Hackathons' : 'Builders'}
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {displayedData.map((member, index) => (
                    <TableRow className={`${index === 0
                      ? "border border-[#3df292]"
                      : index === 1
                        ? "border border-[#FF9C66] "
                        : ""
                      }`} key={index}>
                      <TableCell >{member.position}</TableCell>
                      <TableCell className="">
                        <div className="flex gap-3 w-[250px] md:w-fit">
                          <Image src='images/Avatar.svg' width={40} height={40} alt='user Avatar' />
                          <div>
                            <p className="text-[#101828] dark:text-[#98A2B3]">{member.name}</p>
                            <p className="font-normal text-base">{member.userName}</p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="font-bold">{member.points}</TableCell>
                      <TableCell className="font-normal">{member.hackathon}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

              <div className="flex justify-between items-center mt-4">
                <div className="text-[#344054] dark:text-[#667085] font-medium text-sm">
                  Page {currentPage} of {totalPages}
                </div>
                <div className="gap-2 flex">
                  <Button className="border border-[#D0D5DD] text-[#344054] bg-[white] rounded-[8px] py-2 px-[14px]" onClick={prevPage} disabled={currentPage === 1}>
                    Previous
                  </Button>
                  <Button className="border border-[#D0D5DD] text-[#344054] bg-[white]  rounded-[8px] py-2 px-[14px]" onClick={nextPage} disabled={currentPage === totalPages}>
                    Next
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
