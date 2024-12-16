import {Version} from "@/app/versions/_components/VersionFeed";

export default function VersionFeedItemMinor({version}: { version: Version }) {
    return (
        <>
            <div className="relative px-1">
                <span
                    className="flex size-8 items-center justify-center rounded-full ring-2 bg-slate-100 ring-slate-100 dark:bg-slate-900 dark:ring-slate-900 text-xs text-slate-500"
                >
                    v{version.version.substring(0, 3)}
                </span>
            </div>
            <div className="min-w-0 flex-1">
                <div>
                    <div
                        className="flex text-md font-medium text-blue-600"
                    >
                        {version.version}
                    </div>
                    <p className="mt-0.5 text-sm text-slate-500">{version.date}</p>
                </div>
                <div className="mt-2">
                    <h3 className="font-display text-xl font-medium tracking-tight text-slate-900 dark:text-slate-50">
                        Update {version.version}
                    </h3>
                    <p className="text-sm text-slate-700 dark:text-slate-400 text-wrap">
                        {version.description}
                    </p>
                    {version.features &&
                        <>
                            <h3 className="mt-2 font-display text-lg font-medium tracking-tight text-slate-900 dark:text-slate-50">
                                Änderungen
                            </h3>
                            <ul className="list-disc list-inside text-sm text-slate-700 dark:text-slate-400">
                                {version.features}
                            </ul>
                        </>
                    }
                </div>
            </div>
        </>
    )
}