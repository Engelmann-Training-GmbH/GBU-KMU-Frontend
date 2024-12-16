import clsx from "clsx";

export default function Home() {
    const heading2Style = "mt-4 font-display text-3xl font-medium tracking-tight text-slate-800 dark:text-slate-50"
    const pStyle = "mt-2 font-normal text-slate-700 dark:text-slate-200"
    return (
        <>
            <div className="pb-16 pt-5 text-center lg:pt-8 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 dark:text-slate-50 sm:text-7xl">
                    <span className="relative whitespace-nowrap text-blue-600">
                        <svg
                            aria-hidden="true"
                            viewBox="0 0 418 42"
                            className="absolute left-0 top-2/3 h-[0.58em] w-full fill-blue-300/70 dark:fill-blue-900/70"
                            preserveAspectRatio="none"
                        >
                            <path
                                d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"/>
                        </svg>
                        <span className="relative">Impressum</span>
                    </span>
                </h1>
            </div>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h2 className={heading2Style}>
                    Angaben gemäß § 5 TMG
                </h2>
                <p className={pStyle}>
                    Engelmann.Training GmbH<br/>
                    Böntalstraße 12<br/>
                    37603 Holzminden
                </p>
                <p className={pStyle}>
                    vertreten durch:<br/>
                    Bianca Engelmann (Gesellschafter-Geschäftsführung)
                </p>
                <h2 className={heading2Style}>
                    Kontakt
                </h2>
                <p className={clsx(pStyle, "flex gap-x-2")}>
                    E-Mail:
                    <a
                        href="mailto:service@engelmann.training"
                        className="text-blue-500 hover:underline"
                    >
                        service@engelmann.training
                    </a>
                </p>
                <h2 className={heading2Style}>
                    Datenschutzbeauftragter
                </h2>
                <div className={pStyle}>
                    Bianca Engelmann<br/>
                    Engelmann.Training GmbH<br/>
                    Böntalstraße 12<br/>
                    37603 Holzminden<br/><br/>
                    Telefon: +49 (0) 176 99 50 55 33<br/>
                    <div className="flex gap-x-2">
                        E-Mail:
                        <a
                            href="mailto:datenschutz@engelmann.training"
                            className="text-blue-500 hover:underline"
                        >
                            datenschutz@engelmann.training
                        </a>
                    </div>
                </div>
                <h2 className={heading2Style}>
                    Umsatzsteuer-ID gemäß § 27a Umsatzsteuergesetz
                </h2>
                <p className={pStyle}>
                    USt-IdNr. (VAT-ID): 022/200/86008<br/>
                    Finanzamt: Hameln-Holzminden<br/><br/>
                    Registrierung: HRB 208063
                    Amtsgericht: Holzminden
                </p>
                <h2 className={heading2Style}>
                    Haftung für Inhalte
                </h2>
                <p className={pStyle}>
                    Die Inhalte dieser Seiten sind mit größter Sorgfalt erstellt worden.
                    Für die Vollständigkeit, Aktualität und Richtigkeit der Inhalte können wir jedoch keine Gewähr
                    übernehmen.
                    Als Dienstanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf dieser Seite verantwortlich,
                    jedoch nach § 8 bis 10 nicht dazu verpflichtet die von Ihnen übermittelten oder gespeicherten
                    Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
                    hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den
                    allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist allerdings erst ab
                    dem
                    Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von
                    entsprechenden
                    Rechtsverletzungen werden diese Inhalte umgehend entfernt.
                </p>
                <h2 className={heading2Style}>
                    Haftung für Links
                </h2>
                <p className={pStyle}>
                    Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss
                    haben.
                    Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
                    verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die
                    verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
                    Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente
                    inhaltliche
                    Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht
                    zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
                </p>
                <h2 className={heading2Style}>
                    Urheberrecht
                </h2>
                <p className={pStyle}>
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem
                    deutschen
                    Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb
                    der
                    Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw.
                    Erstellers.
                    Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
                    Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte
                    Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie
                    trotzdem
                    auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei
                    Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
                </p>
            </div>
        </>
    );
}
