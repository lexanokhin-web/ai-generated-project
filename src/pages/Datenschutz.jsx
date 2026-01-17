import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Section from '../components/UI/Section';

const Datenschutz = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Helmet>
                <title>Datenschutzerklärung | Winter & Usselmann GbR</title>
                <meta name="description" content="Datenschutzerklärung der Winter & Usselmann GbR." />
                <link rel="canonical" href="https://www.wintuss.de/datenschutz" />
            </Helmet>

            <div className="pt-24 pb-12 bg-slate-900 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Datenschutzerklärung</h1>
                <p className="text-slate-400">Informationen zur Verarbeitung Ihrer Daten</p>
            </div>

            <Section className="bg-white">
                <div className="max-w-3xl mx-auto space-y-16">

                    {/* Section 1 */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-4 border-l-4 border-accent pl-6 py-2">
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">1. Datenschutz auf einen Blick</h2>
                        </div>
                        <div className="prose prose-slate prose-p:leading-relaxed max-w-none px-7">
                            <h3 className="text-xl font-bold text-slate-800">Allgemeine Hinweise</h3>
                            <p>
                                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
                            </p>

                            <h3 className="text-xl font-bold text-slate-800 mt-6">Datenerfassung auf dieser Website</h3>
                            <p>
                                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
                            </p>
                        </div>
                    </div>

                    {/* Section 2 */}
                    <div className="space-y-6 pt-10 border-t border-slate-100">
                        <div className="flex items-center gap-4 border-l-4 border-accent pl-6 py-2">
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">2. Verantwortlicher</h2>
                        </div>
                        <div className="px-7 space-y-4">
                            <p className="text-slate-600">Verantwortlich für die Datenverarbeitung auf dieser Website ist:</p>
                            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                <p className="font-bold text-slate-900">Winter & Usselmann GbR</p>
                                <p className="text-slate-600">
                                    Jägerstraße 24a<br />
                                    23909 Ratzeburg<br />
                                    Deutschland
                                </p>
                                <div className="mt-4 pt-4 border-t border-slate-200 flex flex-col md:flex-row gap-4 text-sm">
                                    <p className="text-slate-500"><strong>Telefon:</strong> 0151 – 413 894 42</p>
                                    <p className="text-slate-500"><strong>E-Mail:</strong> info@wintuss.de</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Section 3 */}
                    <div className="space-y-6 pt-10 border-t border-slate-100">
                        <div className="flex items-center gap-4 border-l-4 border-accent pl-6 py-2">
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">3. Hosting</h2>
                        </div>
                        <div className="px-7 space-y-4">
                            <p className="text-slate-600">Wir hosten die Inhalte unserer Website bei folgendem Anbieter:</p>
                            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 inline-block">
                                <p className="font-bold text-slate-900 text-lg">IONOS SE</p>
                                <p className="text-slate-600 text-sm">Elgendorfer Str. 57, 56410 Montabaur</p>
                            </div>
                            <p className="text-slate-600 prose prose-slate max-w-none leading-relaxed">
                                Details entnehmen Sie der Datenschutzerklärung von IONOS. Die Verwendung des Hosters erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse an einer möglichst zuverlässigen Darstellung unserer Website.
                            </p>
                        </div>
                    </div>

                    {/* Section 4 */}
                    <div className="space-y-6 pt-10 border-t border-slate-100">
                        <div className="flex items-center gap-4 border-l-4 border-accent pl-6 py-2">
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">4. Server-Log-Dateien</h2>
                        </div>
                        <div className="prose prose-slate prose-p:leading-relaxed max-w-none px-7">
                            <p>
                                Der Provider der Seiten erhebt und speichert automatisch Informationen in sogenannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
                            </p>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                                <li className="bg-slate-50 p-2 rounded border border-slate-100 flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-accent rounded-full"></div> Browsertyp und Browserversion
                                </li>
                                <li className="bg-slate-50 p-2 rounded border border-slate-100 flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-accent rounded-full"></div> verwendetes Betriebssystem
                                </li>
                                <li className="bg-slate-50 p-2 rounded border border-slate-100 flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-accent rounded-full"></div> Referrer URL
                                </li>
                                <li className="bg-slate-50 p-2 rounded border border-slate-100 flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-accent rounded-full"></div> Hostname des Rechners
                                </li>
                                <li className="bg-slate-50 p-2 rounded border border-slate-100 flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-accent rounded-full"></div> Uhrzeit der Anfrage
                                </li>
                                <li className="bg-slate-50 p-2 rounded border border-slate-100 flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-accent rounded-full"></div> IP-Adresse
                                </li>
                            </ul>
                            <p className="mt-4">
                                Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
                            </p>
                        </div>
                    </div>

                    {/* Section 5, 6, 7 Combined or Individual */}
                    <div className="grid grid-cols-1 gap-12">
                        {/* Section 5 */}
                        <div className="space-y-4 pt-10 border-t border-slate-100">
                            <div className="flex items-center gap-4 border-l-4 border-accent pl-6 py-2">
                                <h2 className="text-2xl font-bold text-slate-900">5. Cookies</h2>
                            </div>
                            <p className="px-7 text-slate-600 leading-relaxed">
                                Unsere Website verwendet ausschließlich technisch notwendige Cookies. Technisch notwendige Cookies sind erforderlich, um die Website fehlerfrei bereitzustellen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.
                            </p>
                        </div>

                        {/* Section 6 */}
                        <div className="space-y-4 pt-10 border-t border-slate-100">
                            <div className="flex items-center gap-4 border-l-4 border-accent pl-6 py-2">
                                <h2 className="text-2xl font-bold text-slate-900">6. Kontaktformular</h2>
                            </div>
                            <p className="px-7 text-slate-600 leading-relaxed">
                                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular zwecks Bearbeitung der Anfrage bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO.
                            </p>
                        </div>
                    </div>

                    {/* Section 8: Rights */}
                    <div className="space-y-6 pt-10 border-t border-slate-100 bg-slate-50/50 p-8 rounded-3xl border border-slate-100">
                        <div className="flex items-center gap-4 border-l-4 border-accent pl-6 py-2">
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">8. Ihre Rechte</h2>
                        </div>
                        <div className="px-7">
                            <p className="text-slate-700 font-medium mb-4 text-lg">Sie haben jederzeit das Recht:</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    "Auskunft über Ihre Daten",
                                    "Berichtigung oder Löschung",
                                    "Einschränkung der Verarbeitung",
                                    "Widerspruch gegen Verarbeitung",
                                    "Datenübertragbarkeit",
                                    "Beschwerde bei Behörden"
                                ].map((right) => (
                                    <div key={right} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                                        <svg className="w-5 h-5 text-accent shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-slate-600 text-sm font-medium">{right}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="mt-8 text-slate-500 text-sm italic">
                                Bitte wenden Sie sich hierzu an die im Impressum angegebene Adresse.
                            </p>
                        </div>
                    </div>

                    {/* Section 10 */}
                    <div className="space-y-6 pt-10 border-t border-slate-100 pb-12">
                        <div className="flex items-center gap-4 border-l-4 border-accent pl-6 py-2">
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">10. Aufsichtsbehörde</h2>
                        </div>
                        <p className="px-7 text-slate-600 leading-relaxed">
                            Im Falle datenschutzrechtlicher Verstöße steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu. Zuständig ist der <strong>Landesdatenschutzbeauftragte des Bundeslandes Schleswig-Holstein</strong>.
                        </p>
                    </div>

                </div>
            </Section>
        </>
    );
};

export default Datenschutz;
