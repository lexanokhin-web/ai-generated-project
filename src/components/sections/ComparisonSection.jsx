import React, { memo } from 'react';
import { CheckCircle } from 'lucide-react';
import Section from '../UI/Section';
import AnimatedBackground from '../UI/AnimatedBackground';

// Статические данные сравнения
const COMPARISON_DATA = [
    { feature: "Schutz & Sauberkeit", us: "Kompletter Schutz & tägliche Reinigung", them: "Baustaub & Risiko für Möbel" },
    { feature: "Materialqualität", us: "Nur Marken (Brillux, Knauf, etc.)", them: "Billig-Baustoffe & No-Name" },
    { feature: "Präzisions-Finale", us: "Perfekte Kanten & Fugen", them: "Unsaubere Ecken & Übergänge" },
    { feature: "Gewährleistung", us: "Volle Garantie auf alle Arbeiten", them: "Schwierige Haftung bei Mängeln" }
];

const ComparisonSection = memo(() => {
    return (
        <Section className="bg-slate-50 relative">
            <AnimatedBackground variant="blobs" />

            <div className="container mx-auto px-6 max-w-5xl relative z-10">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-sm font-bold text-accent uppercase tracking-[0.3em] mb-4">Transparenz</h2>
                    <h3 className="text-3xl sm:text-4xl md:text-6xl font-bold text-slate-900">
                        Der Unterschied liegt im <span className="text-accent font-serif italic">Detail</span>
                    </h3>
                </div>

                {/* Desktop Table */}
                <div className="hidden md:block overflow-hidden rounded-2xl shadow-xl bg-white">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-900 text-white">
                                <th className="p-6 text-lg font-semibold">Merkmal</th>
                                <th className="p-6 text-lg font-bold text-accent bg-slate-800">Winter & Usselmann GbR</th>
                                <th className="p-6 text-lg font-normal text-slate-400">Einzelbeauftragung</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {COMPARISON_DATA.map((row, idx) => (
                                <tr key={idx} className="hover:bg-slate-50 transition-colors">
                                    <td className="p-6 font-medium text-slate-700">{row.feature}</td>
                                    <td className="p-6 bg-accent/5 font-bold text-accent">
                                        <CheckCircle className="inline w-5 h-5 mr-2" />
                                        {row.us}
                                    </td>
                                    <td className="p-6 text-slate-500">✘ {row.them}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Mobile Comparison Cards */}
                <div className="md:hidden space-y-4">
                    {COMPARISON_DATA.map((row, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-2xl p-5 shadow-md border border-slate-100"
                            data-aos="fade-up"
                            data-aos-delay={idx * 50}
                        >
                            <h4 className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-3">{row.feature}</h4>
                            <div className="space-y-3">
                                <div className="p-3 rounded-xl bg-accent/5 border border-accent/10">
                                    <p className="text-accent text-[0.65rem] font-bold uppercase mb-1">Winter & Usselmann</p>
                                    <div className="flex items-start text-slate-900 font-bold text-sm">
                                        <CheckCircle className="w-4 h-4 mr-2 text-accent shrink-0 mt-0.5" />
                                        <span>{row.us}</span>
                                    </div>
                                </div>
                                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 opacity-60">
                                    <p className="text-slate-400 text-[0.65rem] font-bold uppercase mb-1">Einzelbeauftragung</p>
                                    <div className="flex items-start text-slate-500 text-sm">
                                        <span className="mr-2 shrink-0">✘</span>
                                        <span>{row.them}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
});

ComparisonSection.displayName = 'ComparisonSection';

export default ComparisonSection;
