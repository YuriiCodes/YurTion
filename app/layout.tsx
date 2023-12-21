import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'
import React from "react";
import {ThemeProvider} from "@/components/providers/theme-provider";
import {ConvexClientProvider} from "@/components/providers/convex-provides";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Yurtion',
    description: 'The connected workspace where work gets done',
    icons: {
        icon: [
            {
                media: "(prefers-color-scheme: light)",
                url: "/logo.svg",
                href: "/logo.svg",
            },
            {
                media: "(prefers-color-scheme: dark)",
                url: "/logo-dark.svg",
                href: "/logo-dark.svg",
            }
        ]
    }
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" suppressContentEditableWarning>
        <body className={inter.className}>
        <ConvexClientProvider>
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                disableTransitionOnChange
                enableSystem
                storageKey={'yurtion-theme'}
            >
                {children}
            </ThemeProvider>
        </ConvexClientProvider>
        </body>
        </html>
    )
}
