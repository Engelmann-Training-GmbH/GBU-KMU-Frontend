'use client'

import Link from "next/link";
import {usePathname} from "next/navigation";
import {ReactNode} from "react";

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function NavbarLink({link, style}: {
    link: { name: string, href: string, icon: ReactNode },
    style: string
}) {
    const pathname = usePathname()

    return (
        <Link
            key={link.name}
            href={link.href}
            className={classNames(
                pathname === link.href ? 'bg-gray-400/70 dark:bg-gray-800/70 text-black dark:text-white' : 'hover:bg-gray-400/70 hover:dark:bg-gray-800/70 text-black dark:text-white',
                "flex items-center gap-2",
                style
            )}
        >
            {link.icon}
            {link.name}

        </Link>
    )
}