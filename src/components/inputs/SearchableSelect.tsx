import {
    Combobox, ComboboxButton,
    ComboboxInput,
    ComboboxOption,
    ComboboxOptions,
    Description,
    Field,
    Label,
} from "@headlessui/react";
import {
    globalErrorDescClasses,
    globalInputDescriptionClasses,
    globalInputLabelClasses,
    globalSelectClasses,
    globalSelectErrorClasses,
    globalSelectOptionsClasses, globalSelectOptionClasses
} from "@/components/inputs/GlobalCssClasses";
import {useState} from "react";

interface Props {
    wrapperClasses: string,
    name: string
    label: string
    description?: string
    defaultValue: string
    options: string[]
    isDisabled: boolean
    required: boolean
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    error: any
}

export default function SearchableSelect(props: Props) {
    const {
        wrapperClasses,
        name,
        label,
        description,
        defaultValue,
        options,
        isDisabled,
        required,
        error,
    } = props
    const [selectedValue, setSelectedValue] = useState<string | null>(defaultValue)
    const [query, setQuery] = useState('')

    const filteredOptions =
        query === ''
            ? options
            : options.filter((option) => {
                return option.toLowerCase().includes(query.toLowerCase())
            })

    return (
        <div className={wrapperClasses}>
            <Field disabled={isDisabled}>
                <Label className={globalInputLabelClasses}>
                    {label} {required ? '*' : null}
                </Label>
                <Description
                    className={globalInputDescriptionClasses}
                >
                    {description}
                </Description>
                <Combobox
                    name={name}
                    value={selectedValue}
                    onChange={setSelectedValue}
                    onClose={() => setQuery('')}
                >
                    <div className="relative">
                        <ComboboxInput
                            displayValue={(option: string) => option ? option : ''}
                            onChange={(event) => setQuery(event.target.value)}
                            className={error ? globalSelectErrorClasses : globalSelectClasses}
                        />
                        <ComboboxButton
                            className="absolute inset-y-0 right-0 px-2.5 fill-grau-800 dark:fill-grau-100"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                                 fill="fill-inherite">
                                <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/>
                            </svg>
                        </ComboboxButton>
                    </div>
                    <ComboboxOptions
                        anchor="bottom end"
                        className={globalSelectOptionsClasses}
                    >
                        {filteredOptions.map((option, optionIdx) => (
                            <ComboboxOption
                                key={optionIdx}
                                value={option}
                                className={globalSelectOptionClasses}
                            >
                                <span className="invisible group-data-[selected]:visible">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"
                                         width="24px" fill="fill-inherite"><path
                                        d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>
                                </span>
                                <div className="text-sm/6 truncate">{option}</div>
                            </ComboboxOption>
                        ))}
                    </ComboboxOptions>
                </Combobox>
                <p
                    id={name + "-error"}
                    className={globalErrorDescClasses}
                >
                    {error}
                </p>
            </Field>
        </div>
    );
}