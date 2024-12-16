import {ReactNode} from "react";
import VersionFeedItem from "@/app/versions/_components/VersionFeedItem";
import {versions} from "@/app/versions/_components/versions";

export interface Version {
    version: string,
    type: 'major' | 'minor'
    image_light?: string
    image_dark?: string
    lts?: boolean
    projected?: boolean
    description?: string
    features?: ReactNode
    date: string
}

export default function VersionFeed() {

    return (
        <>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flow-root">
                    <ul role="list" className="-mb-8">
                        {versions.map((version, versionIdx) => (
                            <VersionFeedItem
                                key={version.version}
                                version={version}
                                index={versionIdx}
                                versionsLength={versions.length}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}
