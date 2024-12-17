'use server'

import {Resend} from 'resend';
import {z} from "zod";

const resend = new Resend("re_RGUy2Gqh_BGsYmPonU4K5kQeQUKVFjQmA");

const schema = z.object({
    anrede: z.string().min(1, {message: "Dieses Feld muss ausgefüllt sein."}),
    titel: z.string(),
    firstname: z.string().min(1, {message: "Dieses Feld muss ausgefüllt sein."}),
    lastname: z.string().min(1, {message: "Dieses Feld muss ausgefüllt sein."}),
    company: z.string(),
    email: z.string().email({message: "Dieses Feld muss eine gültige E-Mail-Adresse beinhalten."}).min(1, {message: "Dieses Feld muss ausgefüllt sein."}),
    phone: z.string(),
    type: z.string().min(1, {message: "Dieses Feld muss ausgefüllt sein."}),
    message: z.string().min(10, {message: "Dieses Feld muss ausgefüllt sein."}),
    privacy: z.string({message: "Dieses Feld muss ausgefüllt sein."})
})

export async function sendContactRequest(prevState: any, formData: FormData) {
    const validatedFields = schema.safeParse({
        anrede: formData.get('anrede'),
        titel: formData.get('titel'),
        firstname: formData.get('firstname'),
        lastname: formData.get('lastname'),
        company: formData.get('company'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        type: formData.get('type'),
        message: formData.get('message'),
        privacy: formData.get('privacy'),
    })
    console.log(validatedFields.data)

    if (!validatedFields.success) {
        return {
            message: 'Die Felder konnten nicht validiert werden!',
            success: false,
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    let toMail
    switch (validatedFields.data.type) {
        case 'Presseanfrage':
        case 'Informationen anfordern':
        case 'Demo anfordern':
            toMail = "service@engelmann.training"
            break;
        default:
            toMail = "entwicklung@engelmann.training"
            break;
    }

    try {
        await resend.emails.send({
            from: 'contact-form@gbu-kmu.de',
            to: toMail,
            subject: 'GBU-KMU Kontaktanfrage: ' + validatedFields.data.type,
            react: (
                <>
                    <p>Moin,</p>
                    <p>es gibt eine neue Kontaktanfrage zur GBU-KMU.</p>
                    <p>
                        Nachricht von:<br/>
                        {validatedFields.data.anrede}{' '}{validatedFields.data.titel}<br/>
                        {validatedFields.data.firstname} {validatedFields.data.lastname}<br/>
                        {validatedFields.data.company}
                    </p>
                    <p>
                        E-Mail: {validatedFields.data.email}<br/>
                        {validatedFields.data.phone &&
                            <>
                                Telefonnummer: {validatedFields.data.phone}
                            </>
                        }
                    </p>
                    <p className="whitespace-pre">
                        Nachricht:<br/>
                        {validatedFields.data.message}
                    </p>
                    <p>
                        Freundliche Grüße<br/>
                        Gustav GBU
                    </p>
                </>
            ),
        });
    } catch (error: any) {
        return {
            message: error?.response?.message || '',
            success: false,
            errors: {},
        }
    }

    return {
        message: '',
        success: true,
        errors: {},
    }
}