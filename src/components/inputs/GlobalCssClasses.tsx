function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ")
}

export const globalErrorDescClasses = "mt-2 text-sm text-red-600"
export const globalInputClasses = classNames(
    "block w-full rounded-md",
    "dark:bg-gray-900",
    "data-[disabled]:opacity-50",
    "data-[disabled]:bg-gray-200 data-[disabled]:text-gray-600",
    "data-[disabled]:dark:text-gray-400 data-[disabled]:dark:bg-gray-800"
)
export const globalInputErrorClasses = classNames(
    "block w-full rounded-md",
    "ring-1 ring-inset ring-red-500 placeholder:text-red-300 focus:ring-2 focus:ring-red-500 data-[disabled]:opacity-50",
    "text-red-900",
    "dark:bg-gray-900 dark:text-red-500"
)
export const globalSwitchClasses = classNames(
    "group relative inline-flex cursor-pointer ml-6 h-6 w-11 flex-shrink-0 rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ",
    "focus:ring-2 focus:ring-offset-2 focus:ring-blue-600",
    "bg-gray-200 data-[checked]:bg-blue-500",
    "dark:bg-gray-600 dark:data-[checked]:bg-blue-500",
    "data-[disabled]:opacity-50",
)
export const globalSwitchErrorClasses = classNames(
    "group relative inline-flex cursor-pointer ml-6 h-6 w-11 flex-shrink-0 rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ",
    "focus:ring-2 focus:ring-offset-2 focus:ring-red-600",
    "bg-red-400 data-[checked]:bg-red-600 data-[disabled]:bg-red-600",
    "dark:bg-red-800 dark:data-[checked]:bg-red-600 data-[disabled]:dark:bg-red-800",
    "data-[disabled]:opacity-50",
)
export const globalSwitchInletClasses = classNames(
    "pointer-events-none inline-block h-5 w-5 transform rounded-full shadow ring-0 transition duration-200 ease-in-out group-data-[checked]:translate-x-5",
    "bg-gray-400 group-data-[checked]:bg-gray-100 group-data-[disabled]:bg-gray-400",
    "dark:bg-gray-800 group-data-[disabled]:dark:bg-gray-400",
)
export const globalSelectClasses = classNames(
    "block w-full rounded-md items-center justify-between pr-9",
    "dark:bg-gray-900",
    "data-[disabled]:opacity-50",
    "data-[disabled]:bg-gray-200 data-[disabled]:text-gray-600",
    "data-[disabled]:dark:text-gray-400 data-[disabled]:dark:bg-gray-800"
)
export const globalSelectErrorClasses = classNames(
    "block w-full rounded-md items-center justify-between pr-9",
    "ring-1 ring-inset ring-red-500 placeholder:text-red-300 focus:ring-2 focus:ring-red-500 data-[disabled]:opacity-50",
    "text-red-900",
    "dark:bg-gray-900 dark:text-red-500"
)
export const globalSelectOptionsClasses = classNames(
    "w-[var(--input-width)] z-50 rounded-xl shadow-lg ring-1 ring-opacity-5 p-1 focus-visible:outline-blue-600 empty:invisible transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0",
    "bg-gray-100",
    "dark:ring-gray-600 dark:bg-gray-800"
)
export const globalSelectOptionClasses = classNames(
    "group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none",
    'hover:bg-gray-200 data-[focus]:bg-gray-200 fill-gray-800',
    'dark:hover:bg-gray-600 dark:data-[focus]:bg-gray-600 dark:fill-gray-100'
)
export const globalInputLabelClasses = "block text-sm/6 font-medium leading-6 text-gray-800 dark:text-gray-100 data-[disabled]:opacity-50"
export const globalInputDescriptionClasses = "block text-sm/6 font-medium leading-6 text-gray-800/50 dark:text-gray-100/50 data-[disabled]:opacity-50"