import React, { memo } from 'react';
import Section from '../UI/Section';
import AnimatedBackground from '../UI/AnimatedBackground';
import CostCalculator from '../Calculator/CostCalculator';

/**
 * Abschnitt "Kostenrechner" für die Startseite
 * Platzierung: nach FAQSection
 */
const CalculatorSection = memo(() => {
    return (
        <Section id="calculator" className="bg-slate-50 relative overflow-hidden">
            <AnimatedBackground variant="dots" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-sm font-bold text-accent uppercase tracking-[0.3em] mb-4">
                        Kostenrechner
                    </h2>
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                        Was kostet Ihre <span className="text-accent font-serif italic">Renovierung?</span>
                    </h3>
                    <p className="text-slate-500 max-w-2xl mx-auto text-lg">
                        Berechnen Sie in wenigen Schritten die geschätzten Kosten für Ihr Projekt.
                        Unverbindlich und kostenlos.
                    </p>
                </div>

                {/* Calculator Component */}
                <CostCalculator />

                {/* Trust Badges */}
                <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-sm text-slate-400">
                    <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        <span>100% unverbindlich</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>In 2 Minuten fertig</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                        <span>PDF zum Speichern</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <span>Alle Preise inkl. MwSt.</span>
                    </div>
                </div>
            </div>
        </Section>
    );
});

CalculatorSection.displayName = 'CalculatorSection';

export default CalculatorSection;
