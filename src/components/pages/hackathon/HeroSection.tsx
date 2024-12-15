import Image from "next/image";
import Container from "@/components/Container";
const HeroSection = () => (
    <div className="gradient-background w-full">
           <Container className="containers">
                    <div className="w-full max-w-full md:w-[570px] mt-[157px] flex flex-col items-center justify-center" >
                        <div className="border-[2px] border-[#E8B8F680] dark:border-none dark:bg-tag-dark dark:p-[1px]  rounded-[40px]">
                        <div  className="bg-tag-light  dark:bg-tag-dark w-full max-w-full md:w-[240px] h-[26px] rounded-[40px]  flex justify-center items-center">
                            <p className="text-[#1D2939] dark:text-[#D0D5DD] text-center text-[12px] md:text-sm font-medium">Participate, collaborate and build</p>
                        </div>
                        </div>
                        <p className="font-semibold  text-[#1D2939] tracking-[2%] text-center text-[40px] md:text-[60px] dark:text-white">Hackathons</p>

                    </div>
                    <div className='w-full flex justify-center items-center mt-[49px] dark:hidden'>
                        <Image src='images/hackathon-hero-light.svg' alt='' width={953} height={338.5} />
                    </div>
                    <div className='w-full flex justify-center items-center mt-[49px] dark:flex hidden'>
                        <Image src='images/hack-dark.svg' alt='' width={953} height={338.5} />
                    </div>
                </Container>
    </div>
);
export default HeroSection

