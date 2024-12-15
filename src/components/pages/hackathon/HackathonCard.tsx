import { Card } from "@/components/ui/card";
import { Hackathon } from "@/utils/data";
import Image from "next/image";

const HackathonCard = ({ hackathon }: { hackathon: Hackathon }) => (
    <Card
        className="group hover:shadow-card dark:hover:shadow-cardDark border-[#EAECF0] dark:border-[#344054] border hover:border-[#143CFD]"
    >
        <div
            style={{
                background: "url('images/hack.svg')",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                height: "200px",
                width: "100%"
            }}
        ></div>
        <div >
            <div className="px-4">
                <div className="flex justify-between mt-4">
                    <h2
                        className=" group-hover:text-[#004EEB] dark:group-hover:text-transparent dark:group-hover:bg-clip-text dark:group-hover:bg-gradient-to-r dark:group-hover:from-[#E8B8F6] dark:group-hover:to-[#143CFD] font-medium text-lg dark:text-[#D0D5DD] text-[#1D2939]"
                    >
                        {hackathon.hackathonName}
                    </h2>
                    <div>
                        <div className="flex items-center gap-1 dark:bg-[#1D2023] bg-[#F9FAFB] py-[3px] px-2 rounded-[4px]">
                            <Image src='images/lock.svg' width={18} height={18} alt="" />
                            <p className="font-medium text-[#98A2B3] dark:text-[#D0D5DD] text-sm capitalize">{hackathon.status}</p>
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
            <div className="px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-6">
                    {hackathon.stacks.slice(0, 3).map((stack: string, idx: number) => (
                        <ul
                            key={idx}
                            className="px-1 rounded-[6px] border-[1px] dark:border-[#667085] border-[#D0D5DD]"
                        >
                            <li className="capitalize font-medium text-sm dark:text-[#667085] text-[#344054]">
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
                <div className="md:flex justify-between items-center mt-5 mb-5">
                    <div className="flex items-center gap-1 border border-[#F2F4F7] p-[4px] rounded-[4px] dark:border-none dark:bg-transparent bg-[#F9FAFB]">
                        <Image src='/images/company.svg' width={20} height={20} alt="" />
                        <p className="font-medium text-base  dark:text-[#98A2B3] text-[#1D2939]">{hackathon.company}</p>
                    </div>
                    <div className="flex items-center gap-1 mt-2 md:mt-0">
                        <Image src='/images/location.svg' width={20} height={20} alt="" />
                        <p className="font-medium text-base dark:text-[#98A2B3] text-[#667085]">{hackathon.location}</p>
                    </div>
                </div>

            </div>
        </div>
    </Card>
);
export default HackathonCard