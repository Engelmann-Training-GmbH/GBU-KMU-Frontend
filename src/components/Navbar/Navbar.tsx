import {Disclosure, DisclosureButton, DisclosurePanel} from '@headlessui/react'
import {Bars3Icon, XMarkIcon, HomeIcon, MapIcon, ChatBubbleLeftRightIcon, RocketLaunchIcon} from '@heroicons/react/24/outline'
import ThemeButton from "@/components/ThemeButton";
import gbu from "@/images/gbu_kmu.svg";
import gbu_dark from "@/images/gbu_kmu_dark.svg";
import Image from "next/image";
import NavbarLink from "@/components/Navbar/NavbarLink";

const navigation = [
    {name: 'Start', href: '/', icon: <HomeIcon aria-hidden="true" className="block h-4"/>, position: 'left'},
    {name: 'Versionen', href: '/versions', icon: <RocketLaunchIcon aria-hidden="true" className="block h-4"/>, position: 'left'},
    {name: 'Roadmap', href: '/roadmap', icon: <MapIcon aria-hidden="true" className="block h-4"/>, position: 'right'},
    {name: 'Kontakt', href: '/contact', icon: <ChatBubbleLeftRightIcon aria-hidden="true" className="block h-4"/>, position: 'right'},
]

export default function Navbar() {
    return (
        <Disclosure as="nav" className="bg-white/50 dark:bg-gray-800/50">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* Mobile menu button*/}
                        <DisclosureButton
                            className="group relative inline-flex items-center justify-center rounded-md p-2 hover:bg-gray-400/70 hover:dark:bg-gray-800/70 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                            <span className="absolute -inset-0.5"/>
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="block size-6 group-data-[open]:hidden"/>
                            <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-[open]:block"/>
                        </DisclosureButton>
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch">
                        <div className="hidden sm:mr-6 sm:flex items-center">
                            <div className="flex space-x-4">
                                {navigation.filter(i => i.position == 'left').map((item) => (
                                    <NavbarLink
                                        key={item.name}
                                        link={{
                                            name: item.name,
                                            href: item.href,
                                            icon: item.icon
                                        }}
                                        style="rounded-md px-3 py-2 text-sm font-medium"
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="flex shrink-0 items-center">
                            <Image
                                src={gbu}
                                className="inline-block dark:hidden h-8 w-auto"
                                priority={true}
                                alt="Logo der GBU-KMU-Software. Es zeigt einen Dino mit einem langen Hals der einen Bauhelm trägt."
                            />
                            <Image
                                src={gbu_dark}
                                className="hidden dark:inline-block h-8 w-auto"
                                priority={true}
                                alt="Logo der GBU-KMU-Software. Es zeigt einen Dino mit einem langen Hals der einen Bauhelm trägt."
                            />
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                {navigation.filter(i => i.position == 'right').map((item) => (
                                    <NavbarLink
                                        key={item.name}
                                        link={{
                                            name: item.name,
                                            href: item.href,
                                            icon: item.icon
                                        }}
                                        style="rounded-md px-3 py-2 text-sm font-medium"
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div
                        className="absolute inset-y-0 right-0 flex items-center"
                    >
                        <ThemeButton/>
                    </div>
                </div>
            </div>
            <DisclosurePanel className="sm:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2 flex flex-col">
                    {navigation.map((item) => (
                        <DisclosureButton
                            key={item.name}
                        >
                            <NavbarLink
                                link={{
                                    name: item.name,
                                    href: item.href,
                                    icon: item.icon
                                }}
                                style="block rounded-md px-3 py-2 text-base font-medium"
                            />
                        </DisclosureButton>
                    ))}
                </div>
            </DisclosurePanel>
        </Disclosure>
    )
}