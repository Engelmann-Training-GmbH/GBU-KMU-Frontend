import {Version} from "@/app/versions/_components/VersionFeed";
import {BeakerIcon} from "@heroicons/react/16/solid";
import Image from 'next/image'

export default function VersionFeedItemMajor({version}: { version: Version }) {
    return (
        <>
            <div className="relative">
                {!version.projected && version.image_dark && version.image_light &&
                    <>
                        <Image
                            alt={"Bild zur Version: " + version.version}
                            src={version.image_light}
                            className="flex dark:hidden size-10 items-center justify-center rounded-full bg-slate-100 ring-2 ring-slate-100"
                        />
                        <Image
                            alt={"Bild zur Version: " + version.version}
                            src={version.image_dark}
                            className="hidden dark:flex size-10 items-center justify-center rounded-full bg-slate-900 ring-2 ring-slate-900"
                        />
                    </>
                }
                {version.projected &&
                    <span
                        className="flex size-10 items-center justify-center rounded-full ring-2 bg-slate-100 ring-slate-100 dark:bg-slate-900 dark:ring-slate-900"
                    >
                        <BeakerIcon
                            aria-hidden={true}
                            className="size-5 text-slate-500"
                        />
                    </span>
                }
            </div>
            <div className="min-w-0 flex-1">
                <div>
                    <div
                        className="flex text-lg font-medium text-blue-600"
                    >
                        {version.version}
                        {version.lts &&
                            <div className="align-super text-xs font-thin">
                                (LTS)
                            </div>
                        }
                    </div>
                    <p className="mt-0.5 text-md text-slate-500">{version.date}</p>
                </div>
                <div className="mt-2">
                    <h2 className="font-display text-2xl font-medium tracking-tight text-slate-900 dark:text-slate-50">
                        Version {version.version}
                    </h2>
                    <p className="text-md text-slate-700 dark:text-slate-400 text-wrap">
                        {version.description}
                    </p>
                    {version.features &&
                        <>
                            <h3 className="mt-2 font-display text-xl font-medium tracking-tight text-slate-900 dark:text-slate-50">
                                Neue Funktionen
                            </h3>
                            <ul className="list-disc list-inside text-md text-slate-700 dark:text-slate-400">
                                {version.features}
                            </ul>
                        </>
                    }
                </div>
            </div>
        </>
    )
}