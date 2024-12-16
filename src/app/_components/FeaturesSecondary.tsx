'use client'

import {ComponentPropsWithoutRef, ReactNode} from 'react'
import Image, {type ImageProps} from 'next/image'
import {Tab, TabGroup, TabList, TabPanel, TabPanels} from '@headlessui/react'
import clsx from 'clsx'
import {Container} from '@/components/Container'
import av_light from '@/images/features/av_light.png'
import av_dark from '@/images/features/av_dark.png'
import audit_light from '@/images/features/audit_light.png'
import audit_dark from '@/images/features/audit_dark.png'
import devices_light from '@/images/features/devices_light.png'
import devices_dark from '@/images/features/devices_dark.png'

interface Feature {
    name: ReactNode
    summary: string
    description: string
    image_light: ImageProps['src']
    image_dark: ImageProps['src']
    icon: ReactNode
}

const features: Array<Feature> = [
    {
        name: 'Arbeitsmedizinische Vorsorge',
        summary: 'Behalten Sie die Plficht- & Angebots-Vorsorgen im Blick.',
        description:
            'Vorsorgen sind ein wichtiger Bestandteil des Arbeitsschutzes. Mit dieser Funktion können Sie die Vorsorgen Ihres Unternehmens überwachen, zu diesen einladen und dokumentieren.',
        image_light: av_light,
        image_dark: av_dark,
        icon:
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                 fill="fill-inherite">
                <path
                    d="M540-80q-108 0-184-76t-76-184v-23q-86-14-143-80.5T80-600v-240h120v-40h80v160h-80v-40h-40v160q0 66 47 113t113 47q66 0 113-47t47-113v-160h-40v40h-80v-160h80v40h120v240q0 90-57 156.5T360-363v23q0 75 52.5 127.5T540-160q75 0 127.5-52.5T720-340v-67q-35-12-57.5-43T640-520q0-50 35-85t85-35q50 0 85 35t35 85q0 39-22.5 70T800-407v67q0 108-76 184T540-80Zm220-400q17 0 28.5-11.5T800-520q0-17-11.5-28.5T760-560q-17 0-28.5 11.5T720-520q0 17 11.5 28.5T760-480Zm0-40Z"/>
            </svg>,
    },
    {
        name: 'Prüfung & Wartung',
        summary: 'Stellen Sie sicher, dass Ihre Geräte den Anforderungen entsprechen.',
        description:
            'Dokumentieren Sie die Prüfungen Ihrer Geräte, Apparaturen oder Werkzeuge, um im Falle einer Prüfung auskunftsfähig zu sein. Es ist ebenfalls möglich Handlungsfelder auf einen Blick zu sehen.',
        image_light: audit_light,
        image_dark: audit_dark,
        icon:
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                 fill="fill-inherite">
                <path
                    d="M824-80 716-188q-22 13-46 20.5t-50 7.5q-75 0-127.5-52.5T440-340q0-75 52.5-127.5T620-520q75 0 127.5 52.5T800-340q0 26-7.5 50T772-244l108 108-56 56ZM620-240q42 0 71-29t29-71q0-42-29-71t-71-29q-42 0-71 29t-29 71q0 42 29 71t71 29Zm220-320h-80v-200h-80v120H280v-120h-80v560h200v80H200q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h167q11-35 43-57.5t70-22.5q40 0 71.5 22.5T594-840h166q33 0 56.5 23.5T840-760v200ZM480-760q17 0 28.5-11.5T520-800q0-17-11.5-28.5T480-840q-17 0-28.5 11.5T440-800q0 17 11.5 28.5T480-760Z"/>
            </svg>,
    },
    {
        name: 'Geräteverwaltung',
        summary: 'Erstellen Sie eine Übersicht Ihrer Geräte, Apparaturen und Werkzeuge.',
        description:
            'Inventur mit Verknüpfung zu Arbeitsschutzthemen.',
        image_light: devices_light,
        image_dark: devices_dark,
        icon:
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                 fill="fill-inherite">
                <path
                    d="M280-160H160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640v80H160v480h120v80Zm160-100q25 0 42.5-17.5T500-320q0-25-17.5-42.5T440-380q-25 0-42.5 17.5T380-320q0 25 17.5 42.5T440-260Zm-80 100v-71q-19-17-29.5-40T320-320q0-26 10.5-49t29.5-40v-71h160v71q19 17 29.5 40t10.5 49q0 26-10.5 49T520-231v71H360Zm480 0H640q-17 0-28.5-11.5T600-200v-360q0-17 11.5-28.5T640-600h200q17 0 28.5 11.5T880-560v360q0 17-11.5 28.5T840-160Zm-160-80h120v-280H680v280Zm0 0h120-120Z"/>
            </svg>,
    },
]

function Feature(
    {
        feature,
        isActive,
        className,
        ...props
    }: ComponentPropsWithoutRef<'div'> & {
        feature: Feature
        isActive: boolean
    }) {
    return (
        <div
            className={clsx(className, !isActive && 'opacity-75 hover:opacity-100')}
            {...props}
        >
            <div
                className={clsx(
                    'w-9 rounded-lg',
                    isActive ? 'bg-blue-600' : 'bg-slate-500',
                )}
            >
                <span className="h-9 w-9 flex items-center justify-center fill-white">
                    {feature.icon}
                </span>
            </div>
            <h3
                className={clsx(
                    'mt-6 text-sm font-medium',
                    isActive ? 'text-blue-600 dark:text-blue-500' : 'text-slate-600 dark:text-slate-100',
                )}
            >
                {feature.name}
            </h3>
            <p className="mt-2 font-display text-xl text-slate-900 dark:text-slate-200">
                {feature.summary}
            </p>
            <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">{feature.description}</p>
        </div>
    )
}

function FeaturesMobile() {
    return (
        <div className="-mx-4 mt-20 flex flex-col gap-y-10 overflow-hidden px-4 sm:-mx-6 sm:px-6 lg:hidden">
            {features.map((feature) => (
                <div key={feature.summary}>
                    <Feature feature={feature} className="mx-auto max-w-2xl" isActive/>
                    <div className="relative mt-10 pb-10">
                        <div
                            className="absolute -inset-x-4 bottom-0 top-8 bg-slate-200 dark:bg-slate-800 sm:-inset-x-6"/>
                        <div
                            className="relative mx-auto w-[52.75rem] overflow-hidden rounded-xl bg-white dark:bg-slate-800 shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10">
                            <Image
                                className="inline-block dark:hidden w-full"
                                src={feature.image_light}
                                alt={"Screenshot of the feature" + feature.name}
                                priority
                                sizes="52.75rem"
                            />
                            <Image
                                className="hidden dark:inline-block w-full"
                                src={feature.image_dark}
                                alt={"Screenshot of the feature" + feature.name}
                                priority
                                sizes="52.75rem"
                            />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

function FeaturesDesktop() {
    return (
        <TabGroup className="hidden lg:mt-20 lg:block">
            {({selectedIndex}) => (
                <>
                    <TabList className="grid grid-cols-3 gap-x-8">
                        {features.map((feature, featureIndex) => (
                            <Feature
                                key={feature.summary}
                                feature={{
                                    ...feature,
                                    name: (
                                        <Tab className="ui-not-focus-visible:outline-none">
                                            <span className="absolute inset-0"/>
                                            {feature.name}
                                        </Tab>
                                    ),
                                }}
                                isActive={featureIndex === selectedIndex}
                                className="relative"
                            />
                        ))}
                    </TabList>
                    <TabPanels
                        className="relative mt-20 overflow-hidden rounded-4xl bg-slate-200 dark:bg-slate-800 px-14 py-16 xl:px-16">
                        <div className="-mx-5 flex">
                            {features.map((feature, featureIndex) => (
                                <TabPanel
                                    static
                                    key={feature.summary}
                                    className={clsx(
                                        'px-5 transition duration-500 ease-in-out ui-not-focus-visible:outline-none',
                                        featureIndex !== selectedIndex && 'opacity-60',
                                    )}
                                    style={{transform: `translateX(-${selectedIndex * 100}%)`}}
                                    aria-hidden={featureIndex !== selectedIndex}
                                >
                                    <div
                                        className="w-[52.75rem] overflow-hidden rounded-xl bg-white dark:bg-slate-800 shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10">
                                        <Image
                                            className="inline-block dark:hidden w-full"
                                            src={feature.image_light}
                                            alt={"Screenshot of the feature" + feature.name}
                                            priority
                                            sizes="52.75rem"
                                        />
                                        <Image
                                            className="hidden dark:inline-block w-full"
                                            src={feature.image_dark}
                                            alt={"Screenshot of the feature" + feature.name}
                                            priority
                                            sizes="52.75rem"
                                        />
                                    </div>
                                </TabPanel>
                            ))}
                        </div>
                        <div
                            className="pointer-events-none absolute inset-0 rounded-4xl ring-1 ring-inset ring-slate-900/10"/>
                    </TabPanels>
                </>
            )}
        </TabGroup>
    )
}

export default function FeaturesSecondary() {
    return (
        <section
            id="secondary-features"
            aria-label="Features for simplifying everyday business tasks"
            className="pb-14 pt-20 sm:pb-20 sm:pt-32 lg:pb-32"
        >
            <Container>
                <div className="mx-auto max-w-2xl md:text-center">
                    <h2 className="font-display text-3xl tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl">
                        Weitere Funktionen im Überblick
                    </h2>
                    <p className="mt-4 text-lg tracking-tight text-slate-700 dark:text-slate-300">
                        Entdecken Sie unsere erweiterten Funktionen, die Sie im Alltag beim Arbeitsschutz untersützen
                        sollen.
                    </p>
                </div>
                <FeaturesMobile/>
                <FeaturesDesktop/>
            </Container>
        </section>
    )
}
