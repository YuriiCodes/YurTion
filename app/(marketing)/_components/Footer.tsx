import Logo from "@/app/(marketing)/_components/Logo";
import {Button} from "@/components/ui/button";

const Footer = () => {
    return (
        <footer className={"flex items-center w-full p-6 bg-background  dark:bg-[#1F1F1F] z-50"}>
            <Logo/>
            <div
                className={"md:ml-auto w-full justify-between md:justify-end flex items-center gap-x-2 text-muted-foreground"}>
                <Button variant={"ghost"}>Privacy Policy</Button>
                <Button variant={"ghost"}>Terms and conditions</Button>
            </div>

        </footer>
    );
}


export default Footer;