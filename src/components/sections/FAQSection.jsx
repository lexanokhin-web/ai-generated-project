import React, { memo, useState, useCallback } from 'react';
import Section from '../UI/Section';
import AnimatedBackground from '../UI/AnimatedBackground';

// Статические данные FAQ
const FAQ_DATA = [
    { id: 1, q: "Wie lange dauert eine komplette Badsanierung?", a: "In der Regel dauert eine Komplettsanierung eines Badezimmers zwischen 2 und 3 Wochen, abhängig von der Größe und den gewählten Materialien. Wir erstellen Ihnen vorab einen detaillierten Zeitplan." },
    { id: 2, q: "Arbeiten Sie auch außerhalb von Ratzeburg?", a: "Ja, wir sind in ganz Schleswig-Holstein und Hamburg für Sie tätig. Sprechen Sie uns einfach an!" },
    { id: 3, q: "Sind Ihre Angebote wirklich Festpreise?", a: "Ja! Transparenz ist unser oberstes Gebot. Das Angebot, das Sie unterschreiben, ist der Preis, den Sie zahlen – solange sich Ihre Anforderungen während des Baus nicht ändern." },
    { id: 4, q: "Unterstützen Sie auch bei der Materialauswahl und Planung?", a: "Absolut. Wir beraten Sie nicht nur bei der Auswahl hochwertiger und langlebiger Materialien, sondern helfen Ihnen auch, das Beste aus Ihrem Budget herauszuholen." },
    { id: 5, q: "Muss ich während der Renovierung aus der Wohnung ausziehen?", a: "Bei Teilrenovierungen (z.B. nur Bad oder Küche) können Sie meist wohnen bleiben. Bei einer Kernsanierung ist ein temporärer Auszug ratsam." },
    { id: 6, q: "Gibt es eine Garantie auf die ausgeführten Arbeiten?", a: "Ja, Sie erhalten eine volle Gewährleistung nach BGB von bis zu 5 Jahren. Qualität ist unser Markenzeichen." }
];

const FAQSection = memo(() => {
    const [activeFaq, setActiveFaq] = useState(null);

    const toggleFaq = useCallback((id) => {
        setActiveFaq(prev => prev === id ? null : id);
    }, []);

    return (
        <Section className="bg-white relative">
            <AnimatedBackground variant="modern-aura" />

            <div className="container mx-auto px-6 max-w-3xl relative z-10">
                <div className="text-center mb-12 md:mb-20">
                    <h2 className="text-sm font-bold text-accent uppercase tracking-[0.3em] mb-4">Support</h2>
                    <h3 className="text-3xl sm:text-4xl md:text-6xl font-bold text-slate-900">
                        Häufig gestellte <span className="text-accent font-serif italic">Fragen</span>
                    </h3>
                </div>

                <div className="space-y-3 md:space-y-4">
                    {FAQ_DATA.map((faq) => (
                        <div key={faq.id} className="border border-slate-200 rounded-lg overflow-hidden">
                            <button
                                onClick={() => toggleFaq(faq.id)}
                                className="w-full flex justify-between items-center p-4 md:p-6 bg-slate-50 hover:bg-slate-100 transition-colors text-left"
                            >
                                <span className="font-bold text-slate-800 text-sm md:text-base pr-4">{faq.q}</span>
                                <span className="text-xl md:text-2xl text-accent shrink-0">{activeFaq === faq.id ? '−' : '+'}</span>
                            </button>
                            <div className={`transition-all duration-300 overflow-hidden ${activeFaq === faq.id ? 'max-h-60 p-4 md:p-6' : 'max-h-0'}`}>
                                <div className="text-slate-600 text-sm md:text-base">{faq.a}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
});

FAQSection.displayName = 'FAQSection';

export default FAQSection;
