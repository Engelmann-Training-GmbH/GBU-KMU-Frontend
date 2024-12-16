import gbu_v1 from "@/images/versions/gbu_v1.svg";
import gbu_v1_dark from "@/images/versions/gbu_v1_dark.svg";
import {Version} from "@/app/versions/_components/VersionFeed";

export const versions: Version[] = [
    {
        version: '2.0.0',
        type: 'major',
        lts: false,
        projected: true,
        date: 'coming soon',
        features:
            <>
                <li>
                    Gefährdungsbeurteilungen
                </li>
                <ul className="list-disc list-inside ml-5">
                    <li>
                        Direkt im System erstellen & bearbeiten
                    </li>
                </ul>
            </>,
    },
    /*
    {
        version: '1.1.0',
        type: 'minor',
        date: 'coming soon',
        description: 'Test',
        features:
        <>
            <li>
                Test
            </li>
        </>,
    },*/
    {
        version: '1.0.0',
        type: 'major',
        image_light: gbu_v1,
        image_dark: gbu_v1_dark,
        lts: true,
        projected: false,
        description: "Die Version 1.0 ist die erste Version der GBU-KMU. Sie ist hauptsächlich dazu gedacht die Grundfeatures zu implementieren und mit ersten Kunden zu itterieren.",
        features:
            <>
                <li>
                    Firmenverwaltung
                </li>
                <li>
                    Ansprechpartner
                </li>
                <li>
                    Arbeitssystem
                </li>
                <li>
                    Gefährdungsbeurteilungen
                </li>
                <li>
                    Arbeitsmedizinische Vorsorge
                </li>
                <li>
                    Prüfung & Wartung
                </li>
                <li>
                    Gerätemanagement
                </li>
            </>,
        date: '01.2025',
    },
]