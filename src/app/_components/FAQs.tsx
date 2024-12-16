import {Container} from '@/components/Container'

const faqs = [
    [
        {
            question: 'Wie erhalte ich Zugang zur Software?',
            answer: 'Melden Sie sich bei Ihrem Vertriebspartner, dieser wird alles weiter mit Ihnen besprechen. Wenn Sie noch keinen Vertriebspartner haben melden Sie sich gerne bei uns wir vermitteln Sie gerne weiter.',
        },
        {
            question: 'Wird es die Funktion [...] geben?',
            answer:
                'Besuchen Sie bitte die Seite \'Roadmap\' und prüfen Sie, ob die von Ihnen benötigte Funktion bereits in Planung ist. Wenn nicht können Sie uns gerne kontaktieren.',
        },
        {
            question: 'Ich habe einen Fehler gefunden, was soll ich tun?',
            answer:
                'Kontaktieren Sie zunächst Ihren Vertriebspartner. Dieser kann Ihnen entweder helfen oder kümmert sich um die schnellst mögliche Behebung.',
        },
    ],
    [
        {
            question: 'Wie viel kostet die Verwendung der Software?',
            answer:
                'Die Preise werden von unseren Vertriebspartnern festgelegt, daher können wir hierzu keine Angaben machen.',
        },
        {
            question: 'Kann ein AV-Vertrag geschlossen werden?',
            answer:
                'Dies obliegt dem Vertriebspartner.',
        },
    ],
    [
        {
            question: 'Kann ich eine eigene Instanz der Software hosten?',
            answer:
                'Aktuell ist dies nur in Ausnahmefällen möglich. Kontaktieren Sie uns gerne, dann können wir gemeinsam die beste Lösung für Sie finden.',
        },
        {
            question: 'Werden meine Daten in Deutschland bzw. der EU gespeichert?',
            answer:
                'Dies obliegt dem Vertriebspartner, jedoch ist es uns ein Anliegen das unsere Vertriebspartner dies ermöglichen.',
        },
        {
            question: 'Ist die Software sicher?',
            answer:
                'Wir legen bei der Entwicklung höchsten Wert auf Sicherheit und State of the Art techniken. Wir evaluieren Regelmäßig die Sicherheit unserer Software und veröffentlich patches, wenn Sicherheitslücken oder Risiken auftreten / entdeckt werden.',
        },
    ]
]

export function Faqs() {
    return (
        <section
            id="faq"
            aria-labelledby="faq-title"
            className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-blue-100 dark:from-slate-600 dark:to-slate-700 py-20 sm:py-32"
        >
            <Container className="relative">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2
                        id="faq-title"
                        className="font-display text-3xl tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl"
                    >
                        Häufige Fragen
                    </h2>
                    <p className="mt-4 text-lg tracking-tight text-slate-700 dark:text-slate-300">
                        Ihre Frage ist nicht dabei? Kontaktieren Sie uns gerne!
                    </p>
                </div>
                <ul
                    role="list"
                    className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
                >
                    {faqs.map((column, columnIndex) => (
                        <li key={columnIndex}>
                            <ul role="list" className="flex flex-col gap-y-8">
                                {column.map((faq, faqIndex) => (
                                    <li key={faqIndex}>
                                        <h3 className="font-display text-lg leading-7 text-slate-900 dark:text-slate-100">
                                            {faq.question}
                                        </h3>
                                        <p className="mt-4 text-sm text-slate-700 dark:text-slate-200">{faq.answer}</p>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </Container>
        </section>
    )
}
