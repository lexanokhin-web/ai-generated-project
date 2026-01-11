import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Section from '../components/UI/Section';

const Impressum = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Helmet>
                <title>Impressum | Winter & Usselmann GbR</title>
                <meta name="description" content="Impressum der Winter & Usselmann GbR - Ihr Partner für Renovierung und Sanierung in Ratzeburg." />
            </Helmet>

            <div className="pt-24 pb-12 bg-slate-900 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Impressum</h1>
                <p className="text-slate-400">Angaben gemäß § 5 TMG</p>
            </div>

            <Section className="bg-white">
                <div className="max-w-3xl mx-auto prose prose-slate prose-headings:text-slate-900 prose-p:text-slate-600 prose-p:leading-relaxed space-y-12">

                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-100 pb-2">Anbieterkennzeichnung</h2>
                        <p className="font-bold text-slate-900 text-lg">Winter & Usselmann GbR</p>
                        <p>
                            Bachstraße 36<br />
                            23909 Ratzeburg<br />
                            Deutschland
                        </p>
                    </div>

                    <div className="space-y-4 pt-8 border-t border-slate-100">
                        <h2 className="text-2xl font-bold text-slate-900">Vertreten durch</h2>
                        <p className="text-lg">
                            Michael Winter<br />
                            Alex Usselmann
                        </p>
                    </div>

                    <div className="space-y-4 pt-8 border-t border-slate-100">
                        <h2 className="text-2xl font-bold text-slate-900">Kontakt</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                                <p className="text-xs uppercase font-bold text-slate-400 mb-1">Telefon</p>
                                <a href="tel:015141389442" className="text-accent hover:underline font-bold">0151 – 413 894 42</a>
                            </div>
                            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                                <p className="text-xs uppercase font-bold text-slate-400 mb-1">E-Mail</p>
                                <a href="mailto:info@wintuss.de" className="text-accent hover:underline font-bold">info@wintuss.de</a>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4 pt-8 border-t border-slate-100">
                        <h2 className="text-2xl font-bold text-slate-900">Umsatzsteuer-ID</h2>
                        <p>
                            Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:<br />
                            <span className="font-mono bg-slate-100 px-2 py-1 rounded text-sm italic">wird beantragt</span>
                        </p>
                    </div>

                    <div className="space-y-4 pt-8 border-t border-slate-100">
                        <h2 className="text-2xl font-bold text-slate-900">Streitschlichtung</h2>
                        <p>
                            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
                            <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline ml-1">
                                https://ec.europa.eu/consumers/odr
                            </a>.
                        </p>
                        <p>
                            Unsere E-Mail-Adresse finden Sie oben im Impressum. Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                        </p>
                    </div>

                    <div className="space-y-4 pt-8 border-t border-slate-100">
                        <h2 className="text-2xl font-bold text-slate-900">Haftung für Inhalte</h2>
                        <p>
                            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
                        </p>
                    </div>

                </div>
            </Section>
        </>
    );
};

export default Impressum;
