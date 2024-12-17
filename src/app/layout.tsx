import type {Metadata} from "next";
import {Open_Sans} from 'next/font/google'
import {ReactNode} from "react";
import {Providers} from "@/app/providers";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";
import clsx from "clsx";
import {Toaster} from "react-hot-toast";

const open_sans = Open_Sans({subsets: ["latin"], weight: "500"});

export const metadata: Metadata = {
    title: {
        template: '%s | GBU-KMU',
        default: 'GBU-KMU',
    },
    description: "Work in Progress.",
    keywords: ['GBU-KMU', 'GBU'],
    creator: 'Engelmann.Training GmbH',
    authors: [
        {name: 'Engelmann.Training GmbH', url: 'https://engelmann.training/'},
        {name: 'Nils Dohms', url: 'https://nilsdohms.dev/'}
    ],
    alternates: {
        canonical: '/',
        languages: {
            'de-DE': '/de-DE',
        },
    },
};
export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html
            lang="de"
            className={clsx(
                open_sans.className,
                "h-full scroll-smooth antialiased"
            )}
            suppressHydrationWarning
        >
        <body className="flex h-full flex-col">
        <Providers>
            <Navbar/>
            <main>
                {children}
                <Toaster
                    position="bottom-right"
                    reverseOrder={false}
                />
            </main>
            <Footer/>
        </Providers>
        </body>
        </html>
    );
}
