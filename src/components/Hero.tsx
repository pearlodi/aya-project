"use client"
import Image from 'next/image'
import top from '../assets/images/3d-top.svg'
import topLight from '../assets/images/3d-top-light.svg'
import icon from '../assets/images/icon.svg'
import trophy from '../assets/images/trophy.svg'
import { communityData, builderData, Member } from '@/utils/data'
import TableComponent from './Table'
import React from 'react'

export default function Hero() {
  const [isCommunity, setIsCommunity] = React.useState(true)

  const data: Member[] = isCommunity ? communityData : builderData;
  const sortedData = [...data].sort((a, b) => b.points - a.points); // Sorting by points, descending
  const topThree = sortedData.slice(0, 3); // Get top 3 members

  return (
    <section>
   
      <div className="containers background-light dark:background-dark pt-[131px] px-8 lg:px-0">
        <div className="tag dark:tag-dark w-[240px] h-[26px] rounded-[40px]">
          <p className="text-gray-100 dark:text-[#D0D5DD] text-center text-sm font-medium">Top Builders and Communities</p>
        </div>
        <h1 className="font-semibold text-[60px]">Leaderboard</h1>
        <div className="md:flex w-full  justify-center gap-[37px] items-end mt-[42px]">
     

          <div className="flex flex-col items-center mt-8 md:mt-0">
            <Image src={icon} alt="image" />
            <div className="flex items-center gap-[5.67px]">
              <p className="text-gray-200 dark:text-grayDark-100 font-bold text-base">{topThree[1].name}</p>
            </div>
            <div className="mt-2 md:mt-[17.9px]">
              <Image src={top} alt="image" />
              <div className="back h-[121px]">
                <div className="flex flex-col justify-center items-center pt-4">
                  <p className="font-bold text-[#FFFFFF99] text-base">Earned {topThree[1].points} points</p>
                  <hr className="w-[205.58px] border border-gray-300 mt-[9px]" />
                  <div className="mt-[10.63px] flex justify-center items-center w-[60.26px] rounded-lg h-[44.47px] points border border-gray-300">
                    <p className="font-bold text-[38px] text-[#FFFFFF]">2</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center mt-8 md:mt-0">
            <Image src={icon} alt="image" />
            <div className="flex items-center gap-[5.67px]">
              <p className="text-gray-200 dark:text-grayDark-100 font-bold text-base">{topThree[0].name}</p>
            </div>
            <div className="mt-2 md:mt-[17.9px]">
              <Image src={topLight} alt="image" />
              <div className="back h-[121px] md:h-[174.11px]">
                <div className="flex flex-col justify-center items-center pt-4">
                  <p className="font-bold text-[#FFFFFF99]  text-base">Earned {topThree[0].points} points</p>
                  <hr className="w-[205.58px] border border-gray-300 mt-[9px]" />
                  <div className="mt-[10.63px] flex justify-center items-center w-[60.26px] rounded-lg h-[44.47px] points border border-gray-300">
                    <p className="font-bold text-[38px] text-[#FFFFFF]">1</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center mt-8 md:mt-0">
            <Image src={icon} alt="image" />
            <div className="flex items-center gap-[5.67px]">
              <p className="text-gray-200 dark:text-grayDark-100 font-bold text-base">{topThree[2].name}</p>
            </div>
            <div className="mt-2 md:mt-0mt-[17.9px]">
              <Image src={top} alt="image" />
              <div className="back h-[121px]">
                <div className="flex flex-col justify-center items-center pt-4">
                  <p className="font-bold text-[#FFFFFF99] text-base">Earned {topThree[2].points} points</p>
                  <hr className="w-[205.58px] border border-gray-300 mt-[9px]" />
                  <div className="mt-[10.63px] flex justify-center items-center w-[60.26px] rounded-lg h-[44.47px] points border border-gray-300">
                    <p className="font-bold text-[38px] text-[#FFFFFF]">3</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TableComponent isCommunity={isCommunity} setIsCommunity={setIsCommunity} />
    </section>
  );
}
