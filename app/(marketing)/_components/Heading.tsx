"use client";

import {Button} from "@/components/ui/button";
import {ArrowRightIcon} from "lucide-react";
import {useConvexAuth} from "convex/react";
import {Spinner} from "@/components/ui/spinnet";
import Link from "next/link";
import {SignInButton} from "@clerk/clerk-react";

export const Heading = () => {
    const {isAuthenticated, isLoading} = useConvexAuth();
    return (
        <div className={"max-w-3xl space-y-4"}>
            <h1 className={"text-3xl sm:text-5xl md:text-6xl font-bold"}>
                Welcome to {" "}
                <span className={"font-bold text-blue-500 underline"}>Yurtion</span>
            </h1>
            <h3 className={"text-base sm:text-xl md:text-2xl font-medium"}>
                Yurtion is a great document editor where <br/>
                work gets done
            </h3>
            {isLoading &&
                <div className={"w-full flex justify-center items-center"}>
                    <Spinner size={"lg"}/>
                </div>
            }
            {isAuthenticated && !isLoading && (<Button asChild>
                <Link href={"/documents"}>
                    Go to the app
                    <ArrowRightIcon className={"w-5 h-5 ml-2"}/>
                </Link>
            </Button>)}

            {!isAuthenticated && !isLoading && (<Button asChild>
                <SignInButton mode={"modal"}>
                    Get Started
                </SignInButton>
            </Button>)}
        </div>
    )
}