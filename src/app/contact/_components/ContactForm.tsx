'use client'

import {useActionState, useEffect, useState} from 'react'
import {Button} from '@headlessui/react'
import NormalTextarea from "@/components/inputs/NormalTextarea";
import NormalSwitch from "@/components/inputs/NormalSwitch";
import Link from "next/link";
import NormalInput from "@/components/inputs/NormalInput";
import NormalSelect from "@/components/inputs/NormalSelect";
import {sendContactRequest} from "@/app/contact/_actions/SendContactRequest";
import {useRouter} from "next/navigation";
import toast from "react-hot-toast";

export default function ContactForm() {
    const [agreed, setAgreed] = useState(false)
    const [values, setValues] = useState({
        anrede: "",
        titel: "",
        firstname: "",
        lastname: "",
        company: "",
        email: "",
        phone: "",
        type: "",
        message: ""
    })
    const [state, formAction] = useActionState(sendContactRequest, {
        message: '',
        errors: {},
        success: false,
    })
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    const [errors, setErrors] = useState<any>({})
    const router = useRouter();

    useEffect(() => {
        if (state.success) {
            state.success = false
            setErrors({})
            setAgreed(false)
            setValues({
                anrede: "",
                titel: "",
                firstname: "",
                lastname: "",
                company: "",
                email: "",
                phone: "",
                type: "",
                message: ""
            })
            toast.success('Das hat geklappt!')
            router.refresh()
        } else if (state.message !== '') {
            setErrors(state.errors)
            toast.error('Es gab einen Fehler!')
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state]);

    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <form
                action={formAction}
                className="mx-auto mt-16 max-w-xl sm:mt-20"
            >
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <NormalSelect
                        wrapperClasses=""
                        name="anrede"
                        label="Anrede"
                        options={['Herr', 'Frau', 'Sonstige']}
                        defaultValue={values.anrede}
                        isDisabled={false}
                        required={true}
                        error={errors['anrede']}
                        onChange={(value) => setValues({...values, anrede: value})}
                    />
                    <NormalSelect
                        wrapperClasses=""
                        name="titel"
                        label="Titel"
                        options={["", "Dr.", "Prof.", "Prof. Dr."]}
                        defaultValue={values.titel}
                        isDisabled={false}
                        required={false}
                        error={errors['titel']}
                        onChange={(value) => setValues({...values, titel: value})}
                    />
                    <NormalInput
                        wrapperClasses=""
                        name="firstname"
                        label="Vorname"
                        type="text"
                        defaultValue={values.firstname}
                        isDisabled={false}
                        required={true}
                        error={errors['firstname']}
                        placeholder="Gustav"
                        onChange={(value) => setValues({...values, firstname: value})}
                    />
                    <NormalInput
                        wrapperClasses=""
                        name="lastname"
                        label="Nachname"
                        type="text"
                        defaultValue={values.lastname}
                        isDisabled={false}
                        required={true}
                        error={errors['lastname']}
                        placeholder="GBU"
                        onChange={(value) => setValues({...values, lastname: value})}
                    />
                    <NormalInput
                        wrapperClasses="sm:col-span-2"
                        name="company"
                        label="Unternehmen"
                        type="text"
                        defaultValue={values.company}
                        isDisabled={false}
                        required={false}
                        error={errors['company']}
                        placeholder="Dino GmbH"
                        onChange={(value) => setValues({...values, company: value})}
                    />
                    <NormalInput
                        wrapperClasses="sm:col-span-2"
                        name="email"
                        label="E-Mail"
                        type="email"
                        defaultValue={values.email}
                        isDisabled={false}
                        required={true}
                        error={errors['email']}
                        placeholder="gustav@gbu-kmu.de"
                        onChange={(value) => setValues({...values, email: value})}
                    />
                    <NormalInput
                        wrapperClasses="sm:col-span-2"
                        name="phone"
                        label="Telefonnummer"
                        type="text"
                        defaultValue={values.phone}
                        isDisabled={false}
                        required={false}
                        error={errors['phone']}
                        placeholder="+49 (0) 151 74 30 83 63"
                        onChange={(value) => setValues({...values, phone: value})}
                    />
                    <NormalSelect
                        wrapperClasses="sm:col-span-2"
                        name="type"
                        label="Grund für die Anfrage"
                        description="Sollten Sie keinen passenden Grund für Ihre Anfrage finden wählen Sie bitte 'Allgemeine Anfrage'"
                        defaultValue={values.type}
                        options={['Allgemeine Anfrage', 'Informationen anfordern', 'Feedback geben', 'Demo anfordern', 'Technischer Support', 'Fehler melden', 'Funktionsanfrage', 'Presseanfrage']}
                        isDisabled={false}
                        required={false}
                        error={errors['type']}
                        onChange={(value) => setValues({...values, type: value})}
                    />
                    <NormalTextarea
                        wrapperClasses="sm:col-span-2"
                        name="message"
                        label="Nachricht"
                        defaultValue={values.message}
                        rows={4}
                        isDisabled={false}
                        required={true}
                        error={errors['message']}
                        onChange={(value) => setValues({...values, message: value})}
                    />
                    <NormalSwitch
                        wrapperClasses="flex gap-x-4 sm:col-span-2"
                        name="privacy"
                        label="Datenschutz Einwilligung"
                        description={<>
                            Ich stimme der {' '}
                            <Link
                                href="/privacy"
                                target="_blank"
                                className="text-blue-500 hover:underline"
                            >
                                Datenschutzbestimmung
                            </Link>
                            {' '}zu.
                        </>}
                        initChecked={agreed}
                        isDisabled={false}
                        required={true}
                        error={errors['privacy']}
                        onChange={(checked) => setAgreed(checked)}
                    />
                </div>
                <div className="mt-10">
                    <Button
                        type="submit"
                        className="block w-full rounded-md bg-blue-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Anfrage absenden
                    </Button>
                </div>
            </form>
        </div>
    );
}