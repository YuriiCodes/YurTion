"use client";

import {useScrollTop} from "@/hooks/use-scroll-top";
import {cn} from "@/lib/utils";
import Logo from "@/app/(marketing)/_components/Logo";
import {ModeToggle} from "@/components/ui/mode-toggle";
import {useConvexAuth} from "convex/react";
import {SignInButton, SignUpButton, UserButton} from "@clerk/clerk-react";
import {Button} from "@/components/ui/button";
import {Spinner} from "@/components/ui/spinnet";
import Link from "next/link";

export const Navbar = () => {
    const scrolled = useScrollTop();
    const {isAuthenticated, isLoading} = useConvexAuth();
    return (
        <div className={cn("z-50 bg-background dark:bg-[#1F1F1F] fixed top-0 flex items-center w-full p-6",
            scrolled && "border-b shadow-sm")}>
            <Logo/>
            <div className={"md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2"}>
                {isLoading && (<Spinner/>)}
                {!isLoading && !isAuthenticated && (
                    <>
                        <SignInButton mode={"modal"}>
                            <Button variant={"ghost"} size={"sm"}>
                                Log In
                            </Button>
                        </SignInButton>

                        <SignUpButton mode={"modal"}>
                            <Button variant={"ghost"} size={"sm"}>
                                Sign Up
                            </Button>
                        </SignUpButton>
                    </>
                )}

                {
                    isAuthenticated && !isLoading && (
                        <>
                            <Button variant={"ghost"} size={"sm"} asChild>
                                <Link href={"/documents"}>
                                    Enter App
                                </Link>
                            </Button>
                            <UserButton/>
                        </>
                    )
                }
                <ModeToggle/>
            </div>
        </div>
    )
}

export default Navbar;