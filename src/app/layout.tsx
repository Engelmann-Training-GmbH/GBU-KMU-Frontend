import type {Metadata} from "next";
import {Open_Sans} from 'next/font/google'
import {ReactNode} from "react";
import {Providers} from "@/app/providers";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Open_Sans({subsets: ["latin"], weight: "500"});

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
        <html lang="de" suppressHydrationWarning>
        <body className={inter.className + " h-screen flex flex-col justify-between"}>
        <Providers>
            <Navbar/>
            <main className="prose p-4 text-ce mb-auto">
                {children}
            </main>
        </Providers>
        </body>
        </html>
    );
}
