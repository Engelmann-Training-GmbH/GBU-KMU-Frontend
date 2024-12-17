import {Description, Field, Label, Switch} from "@headlessui/react";
import {
    globalErrorDescClasses,
    globalInputDescriptionClasses,
    globalInputLabelClasses, globalSwitchClasses, globalSwitchErrorClasses, globalSwitchInletClasses
} from "@/components/inputs/GlobalCssClasses";
import {ReactNode, useEffect, useState} from "react";

interface Props {
    wrapperClasses: string,
    name: string
    label: string
    description?: string | ReactNode
    initChecked: boolean
    isDisabled: boolean
    required: boolean
    error: any
    onChange?: (checked: boolean) => void
}

export default function NormalSwitch(props: Props) {
    const {wrapperClasses, name, label, description, initChecked, isDisabled, required, error, onChange} = props
    const [checked, setChecked] = useState(initChecked)
    useEffect(() => {
        if (onChange) {
            onChange(checked)
        }
    }, [checked, onChange]);

    return (
        <div className={wrapperClasses}>
            <Field
                disabled={isDisabled}
                className="flex items-center justify-between"
            >
                <div className="flex flex-grow flex-col">
                    <Label className={globalInputLabelClasses}>
                        {label} {required ? '*' : null}
                    </Label>
                    <Description
                        className={globalInputDescriptionClasses}
                    >
                        {description}
                    </Description>
                </div>
                <Switch
                    name={name}
                    checked={checked}
                    onChange={setChecked}
                    className={error ? globalSwitchErrorClasses : globalSwitchClasses}
                >
                        <span
                            aria-hidden="true"
                            className={globalSwitchInletClasses}
                        />
                </Switch>
            </Field>
            <p id={name + "-error"} className={globalErrorDescClasses}>
                {error}
            </p>
        </div>
    );
}