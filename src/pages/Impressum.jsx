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
                <div className="max-w-3xl mx-auto prose prose-slate">
                    <h3>Winter & Usselmann GbR</h3>
                    <p>
                        Bachstraße 36<br />
                        23909 Ratzeburg
                    </p>

                    <h3>Vertreten durch:</h3>
                    <p>
                        Michael Winter<br />
                        [Name des weiteren Gesellschafters, falls vorhanden]
                    </p>

                    <h3>Kontakt:</h3>
                    <p>
                        Telefon: 0151 – 413 894 42<br />
                        E-Mail: info@wintuss.de
                    </p>

                    <h3>Umsatzsteuer-ID:</h3>
                    <p>
                        Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:<br />
                        [Muster-UST-ID]
                    </p>

                    <h3>Streitschlichtung</h3>
                    <p>
                        Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr.<br />
                        Unsere E-Mail-Adresse finden Sie oben im Impressum.
                    </p>

                    <p>
                        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                    </p>

                    <h3>Haftung für Inhalte</h3>
                    <p>
                        Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                    </p>
                </div>
            </Section>
        </>
    );
};

export default Impressum;
