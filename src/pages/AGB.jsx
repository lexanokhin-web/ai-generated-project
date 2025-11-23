import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Section from '../components/UI/Section';

const AGB = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Helmet>
                <title>AGB | Winter & Usselmann GbR</title>
                <meta name="description" content="Allgemeine Geschäftsbedingungen der Winter & Usselmann GbR." />
            </Helmet>

            <div className="pt-24 pb-12 bg-slate-900 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Allgemeine Geschäftsbedingungen</h1>
            </div>

            <Section className="bg-white">
                <div className="max-w-3xl mx-auto prose prose-slate">
                    <h2>§1 Geltungsbereich</h2>
                    <p>
                        Für die Geschäftsbeziehung zwischen der Winter & Usselmann GbR (nachfolgend „Anbieter“) und dem Kunden (nachfolgend „Kunde“) gelten ausschließlich die nachfolgenden Allgemeinen Geschäftsbedingungen in ihrer zum Zeitpunkt der Bestellung gültigen Fassung.
                    </p>

                    <h2>§2 Vertragsschluss</h2>
                    <p>
                        Die Angebote des Anbieters sind freibleibend und unverbindlich. Ein Vertrag kommt erst durch die schriftliche Auftragsbestätigung des Anbieters zustande.
                    </p>

                    {/* Placeholder for more AGBs */}
                    <p className="italic text-slate-500">
                        [Hier sollten die vollständigen AGB eingefügt werden.]
                    </p>
                </div>
            </Section>
        </>
    );
};

export default AGB;
