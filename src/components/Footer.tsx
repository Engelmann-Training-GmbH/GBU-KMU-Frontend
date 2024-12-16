import Link from "next/link";

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function Footer() {

    return (
        <footer className="mt-auto">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="py-16">
                    <nav className="mt-10 text-sm" aria-label="quick links">
                        <div className="-my-1 flex justify-center gap-x-6">
                            <Link
                                href="/imprint"
                                className={classNames(
                                    "inline-block rounded-lg px-2 py-1 text-sm",
                                    "text-slate-700 dark:text-slate-300",
                                    "hover:bg-gray-200/90 hover:dark:bg-gray-500/20 "
                                )}
                            >
                                Impressum
                            </Link>
                            <Link
                                href="/privacy"
                                className={classNames(
                                    "inline-block rounded-lg px-2 py-1 text-sm",
                                    "text-slate-700 dark:text-slate-300",
                                    "hover:bg-gray-200/90 hover:dark:bg-gray-500/20 "
                                )}
                            >
                                Datenschutz
                            </Link>
                        </div>
                    </nav>
                </div>
                <div
                    className="flex flex-col items-center border-t border-slate-400/10 py-10 sm:flex-row-reverse sm:justify-between">
                    <div className="flex gap-x-6">
                        <Link href="https://www.engelmann.training" className="group"
                              aria-label="Website of Engelmann.Training GmbH">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 fill-slate-500 group-hover:fill-slate-700 dark:fill-slate-400 dark:group-hover:fill-slate-200"
                                aria-hidden="true"
                                viewBox="0 0 384 383.999986"
                            >
                                <defs>
                                    <clipPath
                                        id="a0a680eb08">
                                        <path
                                            d="M 0 20.769531 L 384 20.769531 L 384 363.230469 L 0 363.230469 Z M 0 20.769531 "
                                            clipRule="nonzero"/>
                                    </clipPath>
                                    <clipPath id="01eca38ca3">
                                        <path
                                            d="M 353.375 67.105469 C 321.242188 67.105469 281.652344 59.472656 234.605469 44.199219 C 256.082031 32.835938 279.875 27.15625 305.972656 27.15625 C 324.964844 27.15625 341.792969 29.820312 356.433594 35.144531 C 371.074219 40.46875 378.40625 46.589844 378.40625 53.515625 C 378.40625 62.570312 370.054688 67.097656 353.375 67.097656 M 358.4375 30.484375 C 341.390625 24.011719 320.796875 20.769531 296.65625 20.769531 C 264.164062 20.769531 235.675781 26.722656 211.175781 38.613281 C 208.441406 39.753906 205.742188 41.425781 204.519531 42.074219 C 175.761719 57.699219 161.382812 77.140625 161.382812 100.394531 C 161.382812 118.507812 171.238281 131.730469 190.941406 140.074219 C 163.242188 143.265625 138.660156 148.417969 117.179688 155.515625 C 81.667969 167.058594 53.265625 184.054688 31.960938 206.515625 C 10.65625 228.976562 0 253.070312 0 278.8125 C 0 297.984375 7.652344 314.804688 22.960938 329.273438 C 38.265625 343.738281 59.460938 353.992188 86.542969 360.027344 C 91.058594 361.121094 90.742188 360.917969 95.804688 361.683594 C 100.914062 362.308594 112.925781 363.222656 122.527344 363.222656 C 170.167969 363.222656 213.007812 349.332031 251.042969 321.546875 C 285.484375 296.398438 304.324219 268.441406 307.589844 237.683594 C 307.789062 236.273438 305.863281 235.332031 304.921875 235.425781 C 304.046875 235.511719 302.644531 235.511719 302.171875 238.238281 C 297.449219 264.289062 277.839844 289.839844 243.320312 314.890625 C 203.324219 343.921875 162.355469 358.429688 120.410156 358.429688 C 111.695312 358.429688 102.1875 357.453125 91.882812 355.496094 C 89.871094 355.039062 84.527344 353.699219 83.078125 353.367188 C 46.863281 344.308594 28.753906 323.003906 28.753906 289.453125 C 28.753906 238.855469 61.988281 197.671875 128.46875 165.886719 C 154.597656 153.464844 177.519531 145.824219 197.257812 142.988281 C 211.828125 146.546875 225.335938 148.3125 237.78125 148.3125 C 247.558594 148.3125 252.445312 146.894531 252.445312 144.050781 C 252.445312 139.613281 243.214844 137.394531 224.75 137.394531 C 218.355469 137.394531 208.855469 137.925781 196.257812 138.996094 C 187.558594 134.203125 183.207031 125.503906 183.207031 112.898438 C 183.207031 86.800781 198.292969 65.148438 228.480469 47.921875 C 293.097656 63.902344 334.019531 71.890625 351.246094 71.890625 C 373.082031 71.890625 384 65.945312 384 54.046875 C 384 44.816406 375.472656 36.964844 358.429688 30.476562 "
                                            clipRule="nonzero"/>
                                    </clipPath>
                                    <clipPath id="6676965012">
                                        <path
                                            d="M 244.605469 235.140625 L 289.195312 235.140625 L 289.195312 279.726562 L 244.605469 279.726562 Z M 244.605469 235.140625 "
                                            clipRule="nonzero"/>
                                    </clipPath>
                                    <clipPath id="de21fa5d1a">
                                        <path
                                            d="M 266.902344 235.140625 C 254.589844 235.140625 244.605469 245.121094 244.605469 257.433594 C 244.605469 269.746094 254.589844 279.726562 266.902344 279.726562 C 279.214844 279.726562 289.195312 269.746094 289.195312 257.433594 C 289.195312 245.121094 279.214844 235.140625 266.902344 235.140625 Z M 266.902344 235.140625 "
                                            clipRule="nonzero"/>
                                    </clipPath>
                                    <clipPath id="5fe10cbab4">
                                        <path
                                            d="M 207.679688 271.292969 L 252.265625 271.292969 L 252.265625 315.878906 L 207.679688 315.878906 Z M 207.679688 271.292969 "
                                            clipRule="nonzero"/>
                                    </clipPath>
                                    <clipPath id="a2cc601c16">
                                        <path
                                            d="M 229.972656 271.292969 C 217.660156 271.292969 207.679688 281.273438 207.679688 293.585938 C 207.679688 305.898438 217.660156 315.878906 229.972656 315.878906 C 242.285156 315.878906 252.265625 305.898438 252.265625 293.585938 C 252.265625 281.273438 242.285156 271.292969 229.972656 271.292969 Z M 229.972656 271.292969 "
                                            clipRule="nonzero"/>
                                    </clipPath>
                                    <clipPath id="1532a2eacb">
                                        <path
                                            d="M 163.089844 294.976562 L 207.679688 294.976562 L 207.679688 339.5625 L 163.089844 339.5625 Z M 163.089844 294.976562 "
                                            clipRule="nonzero"/>
                                    </clipPath>
                                    <clipPath id="f50be2e88e">
                                        <path
                                            d="M 185.382812 294.976562 C 173.070312 294.976562 163.089844 304.957031 163.089844 317.269531 C 163.089844 329.582031 173.070312 339.5625 185.382812 339.5625 C 197.695312 339.5625 207.679688 329.582031 207.679688 317.269531 C 207.679688 304.957031 197.695312 294.976562 185.382812 294.976562 Z M 185.382812 294.976562 "
                                            clipRule="nonzero"
                                        />
                                    </clipPath>
                                </defs>
                                <g clipPath="url(#a0a680eb08)">
                                    <g clipPath="url(#01eca38ca3)">
                                        <path
                                            d="M 0 20.769531 L 384.375 20.769531 L 384.375 363.230469 L 0 363.230469 Z M 0 20.769531 "
                                        />
                                    </g>
                                </g>
                                <g clipPath="url(#6676965012)">
                                    <g clipPath="url(#de21fa5d1a)">
                                        <path
                                            d="M 244.605469 235.140625 L 289.195312 235.140625 L 289.195312 279.726562 L 244.605469 279.726562 Z M 244.605469 235.140625 "
                                        />
                                    </g>
                                </g>
                                <g clipPath="url(#5fe10cbab4)">
                                    <g clipPath="url(#a2cc601c16)">
                                        <path
                                            d="M 207.679688 271.292969 L 252.265625 271.292969 L 252.265625 315.878906 L 207.679688 315.878906 Z M 207.679688 271.292969 "
                                        />
                                    </g>
                                </g>
                                <g clipPath="url(#1532a2eacb)">
                                    <g clipPath="url(#f50be2e88e)">
                                        <path
                                            d="M 163.089844 294.976562 L 207.679688 294.976562 L 207.679688 339.5625 L 163.089844 339.5625 Z M 163.089844 294.976562 "/>
                                    </g>
                                </g>
                            </svg>
                        </Link>
                        <Link href="https://www.linkedin.com/company/engelmann-training-gmbh/" className="group"
                              aria-label="Engelmann.Training GmbH on LinkedIn">
                            <svg
                                className="h-6 w-6 fill-slate-500 group-hover:fill-slate-700 dark:fill-slate-400 dark:group-hover:fill-slate-200"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 448 512"
                            >
                                <path
                                    d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"/>
                            </svg>
                        </Link>
                        <Link href="https://github.com/Engelmann-Training-GmbH" className="group"
                              aria-label="Engelmann.Training GmbH on GitHub">
                            <svg
                                className="h-6 w-6 fill-slate-500 group-hover:fill-slate-700 dark:fill-slate-400 dark:group-hover:fill-slate-200"
                                aria-hidden="true"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z"/>
                            </svg>
                        </Link>
                    </div>
                    <p className="mt-6 text-sm text-slate-500 dark:text-slate-400 sm:mt-0">
                        &copy; {new Date().getFullYear()} Engelmann.Training GmbH
                    </p>
                </div>
            </div>
        </footer>
    )
}