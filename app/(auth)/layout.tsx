import React from "react";

const RootLayout = ({
                        children
                    }: {
    children: React.ReactNode;
}) => {
    return (
        <div className={"h-full "}>
            <main>{children}</main>

        </div>
    );
}

export default RootLayout;
