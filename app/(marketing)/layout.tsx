import React from "react";
import Navbar from "@/app/(marketing)/_components/Navbar";
import Footer from "@/app/(marketing)/_components/Footer";

const MarketingLayout = ({children}: {
    children: React.ReactNode;
}) => {
    return (
        <>
            <div className={"h-full dark:bg-[#1F1F1F] flex flex-col justify-between"}>
                <Navbar/>
                <main className={"mt-[20%]"}>{children}</main>
                <Footer/>
            </div>

        </>
    );

}

export default MarketingLayout;