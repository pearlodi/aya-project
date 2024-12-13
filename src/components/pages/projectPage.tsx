
import Image from 'next/image'
import { Input } from "@/components/ui/input";

export default function ProjectPage() {
    return (
        <section>
            <div className="w-full ">
                <div className='projects-background-light dark:background-dark '>
                    <div className='flex justify-center items-center px-4  '>
                        <div className="w-full max-w-full md:w-[950px] mt-[157px] flex flex-col items-center justify-center" >
                            <h1 className="font-[900] dark:text-white leading-[42px] md:leading-[72px] text-[#1D2939] tracking-[2%] text-center text-3xl md:text-[55px]">Explore projects that showcase <br />the
                                power of African Tech Innovation</h1>

                        </div>

                    </div>
                    <div className='w-full flex justify-center items-center mt-10'>
                        <Image src='/images/frame.svg' alt='' width={1440}
                            height={211} />
                    </div>
                    <div>

                        <div className='px-4  w-full border border-[#D0D5DD] dark:bg-[#04080f] bg-white h-full max-h-full md:h-[156px]   flex justify-center items-center'>
                            <div className='w-full max-w-full md:w-[1195px] md:flex justify-between'>
                                <div className='w-full  max-w-full md:w-[307px]'>
                                    <p className='font-bold leading-[32px] md:leading-[39.2px] text-2xl md:text-[28px] dark:text-white text-[#344054] mt-4 md:mt-0 '>Powering a community
                                        of African Builders</p>
                                </div>
                                <div className='md:flex gap-4 mt-4 md:mt-0'>
                                    <div className='glitter-background w-fit  pr-[5px] py-[3px] rounded-[10px]'>
                                        <div className='w-full p-2 max-w-full md:w-[202px] h-[79px] rounded-[10px] noiseEffect flex justify-center items-center gap-2 font-medium text-sm'>
                                            <h1 className='text-[28px] glitter-text '>100+</h1 > <span className='text-[#6B89B4]'> Projects </span>
                                        </div>
                                    </div>
                                    <div className='glitter-background  w-fit pr-[5px] py-[3px] rounded-[10px] mt-3 md:mt-0'>
                                        <div className='p-2 w-full max-w-full md:w-[202px] h-[79px] rounded-[10px] noiseEffect flex justify-center items-center gap-2 font-medium text-sm'>
                                            <h1 className='text-[28px] glitter-text '>240k</h1 > <span className='text-[#6B89B4]'> Contributors </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <div className='w-full flex justify-center items-center pt-11 px-4  dark:bg-[#04080f]'>
                <div className='w-full max-w-full md:w-[1195px]'>
                    <h1 className='font-bold text-2xl md:text-[40px] dark:text-white text-[#1D2939]'>Explore projects </h1>
                    <div className='mt-[50px] flex items-center justify-between'>
                        <Input
                            placeholder="Search project..."
                            className="w-full max-w-full border dark:text-[#667085] dark:border-[#344054] border-[#D0D5DD] md:w-[395px] text-[#667085] text-sm"
                        />
                        <div className='border dark:border-[#344054] border-[#98A2B3] py-3 px-[18px] gap-[10px] rounded-[8px] font-semibold text-base dark:text-[#667085] text-[#344054] flex items-center'><Image src='/images/filter-lines.svg' width={20} height={20} alt='filter' /> Filter</div>
                    </div>
                </div>

            </div>


        </section>
    )
}
