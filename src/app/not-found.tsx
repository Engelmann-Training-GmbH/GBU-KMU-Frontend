import Image from "next/image";
import gbu_not_found from "@/images/404/404.svg";
import gbu_not_found_dark from "@/images/404/404_dark.svg";
import Link from "next/link";

export default function NotFound() {
    return (
        <>
            <div className="flex h-full justify-center text-center">
                <div className="m-auto">
                    <Image
                        src={gbu_not_found}
                        className="inline-block dark:hidden h-96 w-auto"
                        priority={true}
                        alt="Logo der GBU-KMU-Software. Es zeigt einen Dino mit einem langen Hals der einen Bauhelm trägt. Vor ihm stehen Baukegel und die Zahl 404. Die 0 ist umgefallen."
                    />
                    <Image
                        src={gbu_not_found_dark}
                        className="hidden dark:inline-block h-96 w-auto"
                        priority={true}
                        alt="Logo der GBU-KMU-Software. Es zeigt einen Dino mit einem langen Hals der einen Bauhelm trägt. Vor ihm stehen Baukegel und die Zahl 404. Die 0 ist umgefallen."
                    />
                    <p className="text-xl text-wrap">Die Seite wurde nicht gefunden!</p>
                    <p className="text-sm text-wrap">Überprüfen Sie die URL oder versuchen Sie die Seite erneut zu
                        laden.</p>
                    <Link
                        href="/"
                        className="inline-flex items-center mt-2 font-medium text-blue-600 dark:text-blue-500 fill-black dark:fill-white hover:underline"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                             fill="fill-inherite">
                            <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"/>
                        </svg>
                        zurück zur Startseite
                    </Link>
                </div>
            </div>
        </>
    );
}
