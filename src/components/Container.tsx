import { cn } from "@/lib/utils";
import React from "react";
 interface ContainerProps{
    children:React.ReactNode;
    className?:string;
 }

 const Container = ({children , className}: ContainerProps)=>{
    return(
        <div
        className={cn(
            "containers mx-auto px-[20px] ",
            className
        )}>
            {children}
        </div>
    )
 }
 export default Container