import {ThemeProvider} from "next-themes";
import {CookiesProvider} from 'next-client-cookies/server';
import {ReactNode} from "react";

export function Providers({children}: { children: ReactNode }) {
    return (
        <CookiesProvider>
            <ThemeProvider attribute="class" defaultTheme="dark">
                {children}
            </ThemeProvider>
        </CookiesProvider>
    );
}