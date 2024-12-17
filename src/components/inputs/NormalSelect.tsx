import {Description, Field, Label, Select} from "@headlessui/react";
import ErrorIcon from "@/components/inputs/ErrorIcon";
import {
    globalInputErrorClasses,
    globalErrorDescClasses, globalInputClasses,
    globalInputDescriptionClasses,
    globalInputLabelClasses
} from "@/components/inputs/GlobalCssClasses";

interface Props {
    wrapperClasses: string,
    name: string
    label: string
    description?: string
    options: string[]
    defaultValue: any
    isDisabled: boolean
    required: boolean
    error: any
    onChange?: (value: string) => void
}

export default function NormalSelect(props: Props) {
    const {
        wrapperClasses,
        name,
        label,
        description,
        options,
        defaultValue,
        isDisabled,
        required,
        error,
        onChange
    } = props
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
                <div className="relative">
                    <Select
                        className={error ? globalInputErrorClasses : globalInputClasses}
                        name={name}
                        defaultValue={defaultValue}
                        invalid={error}
                        onChange={(event) => onChange && onChange(event.target.value)}
                    >
                        {options.map((option: string) => (
                            <option
                                key={option}
                                value={option}
                            >
                                {option}
                            </option>
                        ))}
                    </Select>
                    {error ?
                        <ErrorIcon/>
                        :
                        <></>
                    }
                </div>
                <p id={name + "-error"} className={globalErrorDescClasses}>
                    {error}
                </p>
            </Field>
        </div>
    )
        ;
}