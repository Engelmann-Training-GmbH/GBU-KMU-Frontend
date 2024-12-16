import {Version} from "@/app/versions/_components/VersionFeed";
import clsx from "clsx";
import VersionFeedItemMajor from "@/app/versions/_components/VersionFeedItemMajor";
import VersionFeedItemMinor from "@/app/versions/_components/VersionFeedItemMinor";

export default function VersionFeedItem({version, index, versionsLength}: {
    version: Version,
    index: number,
    versionsLength: number
}) {

    return (
        <li>
            <div
                className={clsx(
                    version.projected ? "opacity-50" : "",
                    "relative pb-8"
                )}
            >
                {index !== versionsLength - 1 ? (
                    <div aria-hidden="true"
                         className="absolute left-5 top-5 -ml-px h-full w-0.5 bg-slate-300 dark:bg-slate-700"/>
                ) : null}
                <div className="relative flex items-start space-x-3">
                    {version.type === 'major' &&
                        <VersionFeedItemMajor version={version}/>
                    }
                    {version.type === 'minor' &&
                        <VersionFeedItemMinor version={version}/>
                    }
                </div>
            </div>
        </li>
    );
}
