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
            </Helmet>

            <div className="pt-24 pb-12 bg-slate-900 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Datenschutzerklärung</h1>
            </div>

            <Section className="bg-white">
                <div className="max-w-3xl mx-auto prose prose-slate">
                    <h2>1. Datenschutz auf einen Blick</h2>
                    <h3>Allgemeine Hinweise</h3>
                    <p>
                        Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
                    </p>

                    <h3>Datenerfassung auf dieser Website</h3>
                    <p>
                        <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
                        Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
                    </p>

                    <h2>2. Hosting</h2>
                    <p>
                        Wir hosten die Inhalte unserer Website bei folgendem Anbieter: [Muster-Hoster].
                    </p>

                    <h2>3. Allgemeine Hinweise und Pflichtinformationen</h2>
                    <h3>Datenschutz</h3>
                    <p>
                        Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                    </p>

                    {/* Placeholder for more detailed privacy policy */}
                    <p className="italic text-slate-500">
                        [Hier sollte der vollständige Text der Datenschutzerklärung eingefügt werden, angepasst an die spezifischen Tools und Dienste, die auf der Website verwendet werden.]
                    </p>
                </div>
            </Section>
        </>
    );
};

export default Datenschutz;
