import React, { memo } from 'react';
import { materialClasses } from '../../../data/calculatorPricing';

/**
 * Schritt 4: Auswahl der Materialklasse
 */
const MaterialClassStep = memo(({ selectedClass, onSelect }) => {
    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
                    Welche Materialqualität bevorzugen Sie?
                </h3>
                <p className="text-slate-500 max-w-xl mx-auto">
                    Die Materialklasse beeinflusst sowohl die Optik als auch die Langlebigkeit und den Preis.
                </p>
            </div>

            {/* Material Classes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
                {materialClasses.map((material, index) => {
                    const isSelected = selectedClass === material.id;

                    // Visual indicators
                    const qualityStars = index + 2; // 2-5 stars

                    return (
                        <button
                            key={material.id}
                            onClick={() => onSelect(material.id)}
                            className={`
                                relative p-6 rounded-2xl border-2 transition-all duration-300
                                text-left group
                                ${isSelected
                                    ? 'border-accent bg-accent/5 shadow-lg shadow-accent/10'
                                    : 'border-slate-200 bg-white hover:border-accent/50 hover:shadow-md'
                                }
                            `}
                        >
                            {/* Popular Badge for Standard */}
                            {material.id === 'standard' && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-accent text-white text-xs font-bold rounded-full">
                                    Beliebt
                                </div>
                            )}

                            {/* Checkmark */}
                            {isSelected && (
                                <div className="absolute top-4 right-4 w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                            )}

                            {/* Quality Stars */}
                            <div className="flex gap-0.5 mb-3">
                                {[...Array(5)].map((_, i) => (
                                    <svg
                                        key={i}
                                        className={`w-4 h-4 ${i < qualityStars ? 'text-amber-400' : 'text-slate-200'}`}
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>

                            {/* Name */}
                            <h4 className={`
                                text-xl font-bold mb-2 transition-colors
                                ${isSelected ? 'text-accent' : 'text-slate-900 group-hover:text-accent'}
                            `}>
                                {material.name}
                            </h4>

                            {/* Description */}
                            <p className="text-sm text-slate-500 mb-3">
                                {material.description}
                            </p>

                            {/* Examples */}
                            <p className="text-xs text-slate-400 mb-4">
                                <strong>Beispiele:</strong> {material.examples}
                            </p>

                            {/* Price Impact */}
                            <div className={`
                                inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium
                                ${material.coefficient < 1
                                    ? 'bg-green-100 text-green-700'
                                    : material.coefficient === 1
                                        ? 'bg-slate-100 text-slate-600'
                                        : material.coefficient <= 1.5
                                            ? 'bg-amber-100 text-amber-700'
                                            : 'bg-purple-100 text-purple-700'
                                }
                            `}>
                                {material.coefficient < 1 && (
                                    <>
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                        </svg>
                                        {Math.round((1 - material.coefficient) * 100)}% günstiger
                                    </>
                                )}
                                {material.coefficient === 1 && (
                                    <>Standardpreis</>
                                )}
                                {material.coefficient > 1 && (
                                    <>
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                                        </svg>
                                        +{Math.round((material.coefficient - 1) * 100)}% Aufpreis
                                    </>
                                )}
                            </div>
                        </button>
                    );
                })}
            </div>

            {/* Comparison Info */}
            <div className="max-w-3xl mx-auto bg-slate-50 border border-slate-100 rounded-xl p-5">
                <h5 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <span className="text-xl">📊</span>
                    Vergleich der Materialklassen
                </h5>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="text-left border-b border-slate-200">
                                <th className="pb-2 font-medium text-slate-500">Eigenschaft</th>
                                {materialClasses.map(m => (
                                    <th key={m.id} className={`pb-2 font-medium ${selectedClass === m.id ? 'text-accent' : 'text-slate-700'}`}>
                                        {m.name}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="text-slate-600">
                            <tr className="border-b border-slate-100">
                                <td className="py-2">Haltbarkeit</td>
                                <td className="py-2">⭐⭐</td>
                                <td className="py-2">⭐⭐⭐</td>
                                <td className="py-2">⭐⭐⭐⭐</td>
                                <td className="py-2">⭐⭐⭐⭐⭐</td>
                            </tr>
                            <tr className="border-b border-slate-100">
                                <td className="py-2">Optik</td>
                                <td className="py-2">Einfach</td>
                                <td className="py-2">Ansprechend</td>
                                <td className="py-2">Hochwertig</td>
                                <td className="py-2">Exklusiv</td>
                            </tr>
                            <tr>
                                <td className="py-2">Ideal für</td>
                                <td className="py-2 text-xs">Mietwohnung</td>
                                <td className="py-2 text-xs">Eigenheim</td>
                                <td className="py-2 text-xs">Modernisierung</td>
                                <td className="py-2 text-xs">Luxusobjekte</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Tip */}
            <div className="max-w-3xl mx-auto bg-accent/5 border border-accent/20 rounded-xl p-4 flex gap-3">
                <div className="text-accent text-xl shrink-0">💡</div>
                <div className="text-sm text-slate-600">
                    <strong>Empfehlung:</strong> Für eine Eigennutzung empfehlen wir mindestens die Standard-Klasse.
                    Bei Vermietung kann Economy eine wirtschaftliche Wahl sein. Premium lohnt sich besonders
                    in Bädern und Küchen.
                </div>
            </div>
        </div>
    );
});

MaterialClassStep.displayName = 'MaterialClassStep';

export default MaterialClassStep;
