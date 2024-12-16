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
                        <span className="relative">Datenschutzerklärung</span>
                    </span>{' '}
                </h1>
                <p className="mx-auto mt-6 max-w-2xl text-md tracking-tight text-slate-700 dark:text-slate-300 block">
                    Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen
                    Daten passiert, wenn Sie diese Website besuchen. Sie erhalten mit dieser Datenschutzerklärung
                    Information über die Art, den Umfang und Zweck der Erhebung und Verwendung ihrer Daten die durch den
                    verantwortlichen Anbieter erhoben und verwendet werden.
                </p>
            </div>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h2 className={heading2Style}>
                    Datenschutz &#8211; Allgemeine Hinweise und Pflichtinformationen
                </h2>


                <p className={pStyle}>
                    Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln
                    Ihre
                    personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie
                    dieser Datenschutzerklärung. Wenn Sie diese Website benutzen, werden verschiedene personenbezogene
                    Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identiﬁziert werden
                    können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie
                    nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht. Wir weisen darauf hin, dass die
                    Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen
                    kann. Ein lückenloser Schutz der Daten vor dem Zugriﬀ durch Dritte ist nicht möglich.<br/><br/>
                    Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identiﬁziert werden können.
                </p>
                <h2 className={heading2Style}>
                    Anbieter und verantwortliche Stelle im Sinne des Datenschutzes
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
                    <br/>
                    Rechtlicher Rahmen für den Datenschutz bilden die EU-DSGVO, Bundesdatenschutzgesetz (BDSG) und das
                    Telemediengesetz (TMG)
                </div>
                <h2 className={heading2Style}>
                    Datenerfassung auf dieser Website
                </h2>
                <p className={pStyle}>
                    Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber (siehe Impressum).<br/>
                    Mit jedem Zugriff auf unser Angebot werden durch den Websitebetreiber bzw. den Provider (Host)
                    automatisch Informationen erhoben (Logfiles).
                </p>
                <h2 className={heading2Style}>
                    Wie erfassen wir Ihre Daten?
                </h2>
                <p className={pStyle}>
                    Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.
                    B.
                    um Daten handeln, die Sie in ein Kontaktformular oder Buchung eingeben. Andere Daten werden
                    automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme oder
                    Drittanbieter (AVV) erfasst. Das sind vor allem technische Daten (z. B. Name der besuchten Webseite,
                    Internetbrowser, -version, Domainname Ihres Internet-Providers Betriebssystem oder Uhrzeit des
                    Seitenaufrufs, Referrer-URL, IP-Adresse).<br/>
                    Diese Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.<br/>
                    Diese sind allgemeiner Art und Güte und erlauben keine Rückschlüsse auf die Person.
                </p>
                <h2 className={heading2Style}>Wofür nutzen wir Ihre Daten?</h2>
                <p className={pStyle}>
                    Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu
                    gewährleisten.<br/>
                    Diese anonymen Informationen werden für statistische Zwecke genutzt, um unser Angebot für Sie zu
                    Optimieren und Technikschwächen zu beheben.<br/>
                    Darüberhinaus behalten wir uns das Recht vor, die Logfiles bei Verdacht auf eine rechtswidrige
                    Nutzung unseres Angebotes nachträglich zu
                    kontrollieren.
                </p>


                <h2 className={heading2Style}>Kontaktformular und weitere Kanäle auf dieser Website</h2>
                <p className={pStyle}>
                    Wenn Sie uns Anfragen zukommen lassen, werden Ihre Angaben zwecks Bearbeitung der Anfrage und für
                    den
                    Fall von Anschlussfragen bei uns gespeichert, genutzt und verarbeitet. Dieses gilt für Anfragen und
                    Kontakt per E-Mail oder Telefon und weiterer Kanälen. Diese Daten inkl. ihrer personenbezogenen
                    Daten (Name, Anfrage) werden unabhängig der Erhebungsart nicht ohne ihre Einwilligung an unbefugte
                    Dritte weitergegeben. Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b
                    DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrages zusammenhängt oder zur Durchführung
                    vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf
                    unserem berechtigten Interesse an der eﬀektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6
                    Abs. 1 lit. f DSGVO) und/oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Die von Ihnen an
                    uns bekanntgegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung auﬀordern, Ihre Einwilligung
                    zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach
                    abgeschlossener Bearbeitung Ihrer Anfrage und Nachfrist nach dem letzten Kontakt, sofern nichts
                    anderes vereinbart wurde bzw. andere höherrangige Bestimmungen dem entgegenstehen). Zwingende
                    gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt. siehe
                    Datensparsamkeit. Ebensolches gilt für unsere Anmeldeformulare, die über die https-gesicherte Seite
                    (SSL-Zertifikat) erstellt und versendet werden. Wenn Sie sich mit unserem Anmeldeformular zu einem
                    unserer Angebote anmelden werden Ihre dort angegebenen Kontaktdaten, Terminauswahl und weiteren
                    Informationen zwecks Bearbeitung der Anfrage/Anmeldung und für den Fall von Anschlussfragen bei uns
                    gespeichert, genutzt und verarbeitet.
                </p>


                <h2 className={heading2Style}>Hosting / Externes Hosting und Content Delivery Networks (CDN)</h2>
                <p className={pStyle}>
                    Diese Website wird bei einem externen Dienstleister gehostet (Hetzner.com). Die personenbezogenen
                    Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert.
                    Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten,
                    Vertragsdaten, Kontaktdaten, Namen, Webseitenzugriﬀe und sonstige Daten, die über eine Website
                    generiert werden, handeln. Der Einsatz des Hosters erfolgt zum Zwecke der Vertragserfüllung
                    gegenüber unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse
                    einer sicheren, schnellen und eﬃzienten Bereitstellung unseres Online-Angebots durch einen
                    professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO). Unser Hoster wird Ihre Daten nur insoweit
                    verarbeiten, wie dies zur Erfüllung seiner Leistungspﬂichten erforderlich ist und unsere Weisungen
                    in Bezug auf diese Daten befolgen.
                </p>


                <h2 className={heading2Style}>SSL- bzw. TLS-Verschlüsselung</h2>
                <p className={pStyle}>
                    Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie
                    zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw.
                    TLSVerschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des
                    Browsers von „http://“ auf „https://“ wechselt und an dem Schloss-Symbol in Ihrer Browserzeile. Wenn
                    die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht
                    von Dritten mitgelesen werden.<br/>
                    Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche
                    Auskunft über Ihre gespeicherten personenbezogenen Daten,
                    deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf
                    Berichtigung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema
                    personenbezogene Daten können Sie sich jederzeit unter der im Impressum angegebenen Adresse an
                    uns wenden.
                </p>
                <h2 className={heading2Style}>Einbindung von Drittanbietern: Inhalte und Dienste</h2>
                <p className={pStyle}>
                    Unser Angebot umfasst teilweise Inhalte, Dienste und Leistungen anderer Anbieter. Das können zum
                    Beispiel Karten, Videos sowie Grafiken und Bilder anderer Webseiten sein. Damit diese Daten im
                    Browser des Nutzers aufgerufen und dargestellt werden können, ist die Übermittlung der IP-Adresse
                    zwingend notwendig. Die Anbieter (im Folgenden als „Dritt-Anbieter“ bezeichnet) nehmen also die
                    IP-Adresse des jeweiligen Nutzers wahr.<br/>Weitere Drittanbieter im Rahmen der Angebotserfüllung
                    werden je nach Notwendigkeit ausgesucht. Eine Information erfolgt innerhalb in dem jeweils
                    konkreten Zusammenhang. Wir sind immer bemüht zum Schutze Ihrer Daten Drittanbieter mit
                    Serverstandorten in Deutschland bzw. der EU oder D_A_CH-Region ansonsten mit einem
                    entsprechenden Datenschutzstandard aus zu wählen. Ausnahmen werden entsprechend
                    gekennzeichnet.<br/><br/>Auch wenn wir bemüht sind, ausschließlich Dritt-Anbieter zu nutzen,
                    welche die IP-Adresse nur benötigen, um Inhalte ausliefern zu können, haben wir keinen
                    Einfluss darauf, ob die IP-Adresse möglicherweise gespeichert wird. Dieser Vorgang dient in
                    dem Fall unter anderem statistischen Zwecken. Sofern wir Kenntnis davon haben, dass die
                    IP-Adresse gespeichert wird, weisen wir unsere Nutzer darauf hin.
                </p>
                <h2 className={heading2Style}>Weiterleitung auf externe Seiten</h2>
                <p className={pStyle}>
                    Auf dieser Seite können die Nutzer auf andere Webseiten geleitet werden, indem diese auf die
                    Verlinkungen klicken. Selbstverständlich wurden diese zum Zeitpunkt der Einbindung überprüft,
                    allerdings ist eine stetige Überprüfung unmöglich. Sobald uns Informationen vorliegen die unseren
                    Datenschutzlinien widersprechen oder eine Aktuallisierung dieser erfordern werden wir dieses
                    umsetzen oder die Verlinkung entfernen.
                </p>
                <p className={pStyle}>Unsere verwendeten Verlinkungen:</p>
                <ul className="list-inside list-disc">
                    <li>Engelmann.Training GmbH (Hauptwebsite der Engelmann.Training GmbH) &#8211; Beim Klick auf das
                        LinkedIn-Symbol am Ende der Webseite
                    </li>
                    <li>LinkedIn (Unternehmensseite) &#8211; Beim Klick auf das LinkedIn-Symbol am Ende der Webseite
                    </li>
                    <li>GitHub (Unternehmensseite) &#8211; Beim Klick auf das LinkedIn-Symbol am Ende der Webseite</li>
                </ul>
                <h2 className={heading2Style}>Cookies</h2>
                <p className={pStyle}>
                    Derzeitig werden auf dieser Webseite keine Cookies verwendet, die nicht technisch erfolderlich für
                    die Webseite sind. Sollte sich dieses ändern, werden Hinweise erstellt und die Informationen
                    entsprechend angepasst dieses.
                </p>
                <h2 className={heading2Style}>Welche Rechte haben Sie bezüglich Ihrer Daten? Datensparsamkeit</h2>
                <p className={pStyle}>
                    Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer
                    gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung,
                    Sperrung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung
                    erteilt haben (auch inkludente Einwilligung), können Sie diese Einwilligung jederzeit für die
                    Zukunft schriftlich widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die
                    Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.<br/>Gemäß den Grundsätzen
                    der Datenvermeidung und Datensparsamkeit speichern wir Personenbezogene Daten nur so lange, wie
                    es erforderlich ist oder vom Gesetzgeber her vorgeschrieben wird (gesetzliche Speicherfrist).
                    Entfällt der Zweck der erhobenen Informationen oder endet die Speicherfrist, sperren oder
                    löschen wir die Daten.<br/>Ausnahmen: Es handelt sich um die vorgeschriebene Datenspeicherung zur
                    Geschäftsabwicklung oder die Daten unterliegen der gesetzlichen
                    Aufbewahrungspflicht.<br/><br/>Ihre Rechte auf Auskunft, Berichtigung, Sperre, Löschung und
                    Widerspruch bleiben davon unberührt.<br/>Um eine Datensperre jederzeit berücksichtigen zu
                    können, ist es erforderlich, die Daten für Kontrollzwecke in einer Sperrdatei
                    vorzuhalten. Besteht keine gesetzliche Archivierungspflicht, können Sie auch die
                    Löschung der Daten verlangen. Anderenfalls sperren wir die Daten, sofern Sie dies
                    wünschen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen
                    Aufsichtsbehörde zu. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können
                    Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden oder
                    unsren Datenschutzbeauftragten kontaktieren.
                </p>
                <h2 className={heading2Style}>Recht auf Einschränkung der Verarbeitung</h2>
                <p className={pStyle}>
                    Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
                    Hierzu können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden. Das Recht
                    auf Einschränkung der Verarbeitung besteht in folgenden Fällen:<br/>Wenn Sie die Richtigkeit Ihrer
                    bei uns gespeicherten personenbezogenen Daten bestreiten, benötigen wir in der Regel Zeit, um
                    dies zu überprüfen. Für die Dauer der Prüfung haben Sie das Recht, die Einschränkung der
                    Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Wenn die Verarbeitung Ihrer
                    personenbezogenen Daten unrechtmäßig geschah/geschieht, können Sie statt der Löschung die
                    Einschränkung der Datenverarbeitung verlangen.<br/>Wenn wir Ihre personenbezogenen Daten nicht
                    mehr benötigen, Sie sie jedoch zur Ausübung, Verteidigung oder Geltendmachung von
                    Rechtsansprüchen benötigen, haben Sie das Recht, statt der Löschung die Einschränkung der
                    Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Wenn Sie einen Widerspruch nach
                    Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abwägung zwischen Ihren und unseren
                    Interessen vorgenommen werden. Solange noch nicht feststeht, wessen Interessen überwiegen,
                    haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu
                    verlangen.<br/>Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt haben,
                    dürfen diese Daten – von ihrer Speicherung abgesehen – nur mit Ihrer Einwilligung oder
                    zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz der
                    Rechte einer anderen natürlichen oder juristischen Person oder aus Gründen eines
                    wichtigen öﬀentlichen Interesses der Europäischen Union oder eines Mitgliedstaats
                    verarbeitet werden.
                </p>
                <h2 className={heading2Style}>Widerruf Ihrer Einwilligung zur Datenverarbeitung</h2>
                <p className={pStyle}>
                    Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können
                    eine bereits erteilte Einwilligung jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per
                    E-Mail oder Post an uns. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt
                    vom Widerruf unberührt. Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen
                    Direktwerbung (Art. 21 DSGVO).<br/>Wenn die Datenverarbeitung auf Grundlage von Art 6 ABs 1e oder
                    DSGVO erfolgt, haben Sie jederzeit das Recht aus Gründen, die sich aus ihrer besonderen
                    Situation ergeben gegen der Verarbeitung ihrer personenbezogenen Daten zu widersprechen
                    (Widerspruch einzulegen) Wenn Sie Widerspruch einlegen werden wir Ihre betroffenen Daten nicht
                    mehr verarbeiten, es sei denn dass zwingende schutzwürdige Gründe für die Verarbeitung
                    vorliegen, was wir nachweisen müssten, die Ihren Interessen, rechten und Freiheiten entgegen
                    stehen und als höherrangig zu bewerten wären. Andererseits die die Verarbeitung der
                    Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen (Widerspruch nach ART. 21 ABS. 1
                    DSGVO).<br/>Bei der Verwendung von Personenbezogenen Daten zur Direktwerbung haben Sie ebenso das
                    recht jederzeit Widerspruch gegen die Verarbeitung der betreffeneden Personenbezogenen Daten
                    zum Zwecke derartiger Werbung ein zulegen. Wenn Sie Widerspruch einlegen, könne anschließend
                    Ihre personenbezogenen Daten nicht mehr zum zwecke der Direktwerbung genutzt werden.
                    (Widerspruch nach ART. 21 ABS. 2 DSGVO).
                </p>
                <h2 className={heading2Style}>Beschwerderecht bei der zuständigen Aufsichtsbehörde</h2>
                <p className={pStyle}>
                    Im Falle von Verstößen gegen die DSGVO steht den Betroﬀenen ein Beschwerderecht bei einer
                    Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres
                    Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht unbeschadet
                    anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.7
                </p>


                <h2 className={heading2Style}>Recht auf Datenübertragbarkeit</h2>
                <p className={pStyle}>
                    Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines
                    Vertrags
                    automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format
                    aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an einen anderen
                    Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.
                </p>
                <h2 className={heading2Style}>Änderung unserer Datenschutzerklärung</h2>
                <p className={pStyle}>
                    Um zu gewährleisten, dass unsere Datenschutzerklärung den aktuellen gesetzlichen Vorgaben
                    entspricht,
                    behalten wir uns vor jederzeit Änderungen durchzuführen. Das gilt auch für den Fall, dass die
                    Datenschutzerklärung aufgrund neuer oder überarbeiteter Leistungen, zum Beispiel neuer
                    Serviceleistungen, angepasst werden muss. Die neue Datenschutzerklärung ist ab Einstellung
                    unverzüglich gültig (bei Ihrem nächsten Besuch unserer Websites) und ersetzt die bisherige ohne,
                    dass es einer Änderungsmitteilung bedarf.
                </p>
            </div>
        </>
    );
}
