
import Image from 'next/image'
import { Input } from "@/components/ui/input";
import Container from '../Container';

export default function ProjectPage() {
    return (
        <section>
            <div className="w-full ">
                <div className='gradient-background'>
                    <Container >
                        <div className='flex justify-center items-center '>
                            <div className="w-full max-w-full md:w-[1110px] mt-[157px] flex flex-col items-center justify-center" >
                                <h1 className="font-bold dark:text-white leading-[42px] md:leading-[60px] text-[#1D2939] tracking-[2%] text-center text-3xl md:text-[48px]">Explore projects that showcase <br />the
                                    power of African Tech Innovation</h1>
                            </div>
                        </div>
                        <div className='w-full flex justify-center items-center mt-10 dark:hidden'>
                            <img src='/images/frame.svg' alt='' />
                        </div>
                        <div className='w-full flex justify-center items-center mt-10 dark:flex hidden'>
                            <img src='/images/project-hero-dark.svg' alt='' />
                        </div>
                    </Container>
                    <div>
                        <div className=' w-full border dark:border-[#344054] border-[#D0D5DD] dark:bg-[#04080f] bg-white h-full max-h-full md:h-[156px]   flex justify-center items-center py-4 md:py-0'>
                            <Container>
                                <div className='w-full max-w-full md:w-[1195px] md:flex justify-between'>
                                    <div className='w-full  max-w-full md:w-[307px]'>
                                        <p className='font-bold leading-[32px] md:leading-[39.2px] text-2xl md:text-[28px] dark:text-white text-[#344054] mt-4 md:mt-0 '>Powering a community
                                            of African Builders</p>
                                    </div>
                                    <div className='md:flex gap-4 mt-4 md:mt-0'>
                                        <div className=''>
                                            <div className='absolute h-[79.05px] w-[202.38px] '
                                    
                                                style={{
                                                    backgroundImage: "url('/images/noiseEffect.svg')",
                                                    backgroundSize: "cover",
                                                    backgroundRepeat: "no-repeat",
                                                }}
                                            >
                                            </div>
                                            <div className='flex justify-center items-center relative h-[79.05px] bg-glitter-gradient-dark w-[202.38px] rounded-[10px] right-[-5] top-[-3]'>
                                            <h1 className=' font-bold text-[28px] bg-gradient-to-tr from-[#E8B8F6] to-[#143CFD] bg-clip-text text-transparent'>100+</h1 > <span className='font-medium text-sm text-[#98A2B3] ml-1'> Projects </span>
                                            </div>
                                        </div>
                                        <div className='mt-4 md:mt-0'>
                                            <div className='absolute h-[79.05px] w-[202.38px] '
                                    
                                                style={{
                                                    backgroundImage: "url('/images/noiseEffect.svg')",
                                                    backgroundSize: "cover",
                                                    backgroundRepeat: "no-repeat",
                                                }}
                                            >
                                            </div>
                                            <div className='flex justify-center items-center relative h-[79.05px] bg-glitter-gradient-dark w-[202.38px] rounded-[10px] right-[-5] top-[-3]'>
                                            <h1 className=' font-bold text-[28px] bg-gradient-to-tr from-[#E8B8F6] to-[#143CFD] bg-clip-text text-transparent'>240k</h1 > <span className='font-medium text-sm text-[#98A2B3] ml-1'> Contributors </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Container>
                        </div>
                    </div>

                </div>
            </div>
            <div className='w-full flex justify-center items-center pt-11  dark:bg-[#04080f]'>
                <Container>
                    <div className='w-full max-w-full md:w-[1195px]'>
                        <h1 className='font-bold text-2xl md:text-[40px] dark:text-white text-[#1D2939]'>Explore projects </h1>
                        <div className='mt-[50px] flex items-center justify-between'>
                            <Input
                                placeholder="Search project..."
                                className="w-full max-w-full border placeholder:dark:text-[#667085] dark:border-[#344054] border-[#D0D5DD] md:w-[395px] placehoder:text-[#667085] text-sm"
                            />
                            <div className='border dark:border-[#344054] border-[#98A2B3] py-3 px-[18px] gap-[10px] rounded-[8px] font-semibold text-base dark:text-[#667085] text-[#344054] flex items-center'><Image src='/images/filter-lines.svg' width={20} height={20} alt='filter' /> Filter</div>
                        </div>
                    </div>
                </Container>

            </div>


        </section>
    )
}
