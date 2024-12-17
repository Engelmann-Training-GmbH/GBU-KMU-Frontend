import {Description, Field, Label, Textarea} from "@headlessui/react";
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
    placeholder?: string
    defaultValue: any
    rows: number
    isDisabled: boolean
    required: boolean
    error: any
    onChange?: (value: string) => void
}

export default function NormalTextarea(props: Props) {
    const {
        wrapperClasses,
        name,
        label,
        description,
        placeholder,
        defaultValue,
        rows,
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
                    <Textarea
                        className={error ? globalInputErrorClasses : globalInputClasses}
                        name={name}
                        rows={rows}
                        defaultValue={defaultValue}
                        invalid={error}
                        placeholder={placeholder}
                        onChange={(event) => onChange && onChange(event.target.value)}
                    />
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
    );
}