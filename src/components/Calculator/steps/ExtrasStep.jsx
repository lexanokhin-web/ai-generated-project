import React, { memo } from 'react';
import { additionalOptions } from '../../../data/calculatorPricing';

/**
 * Schritt 5: Zusatzoptionen auswählen
 */
const ExtrasStep = memo(({ selectedExtras, areaDetails, onToggle, calculation }) => {
    const formatCurrency = (value) => {
        return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(value);
    };

    const getExtraValue = (extra) => {
        if (extra.type === 'percentage') {
            return `+${extra.value}%`;
        } else if (extra.type === 'fixed') {
            return formatCurrency(extra.value);
        } else if (extra.type === 'perSqm') {
            const total = extra.value * areaDetails.totalArea;
            return `${formatCurrency(extra.value)}/m² = ${formatCurrency(total)}`;
        }
        return '';
    };

    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
                    Zusätzliche Leistungen gewünscht?
                </h3>
                <p className="text-slate-500 max-w-xl mx-auto">
                    Optional: Wählen Sie weitere Serviceleistungen, die wir für Sie übernehmen sollen.
                </p>
            </div>

            {/* Extras Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
                {additionalOptions.map((extra) => {
                    const isSelected = selectedExtras.includes(extra.id);

                    return (
                        <button
                            key={extra.id}
                            onClick={() => onToggle(extra.id)}
                            className={`
                                relative p-5 rounded-2xl border-2 transition-all duration-300
                                text-left
                                ${isSelected
                                    ? 'border-accent bg-accent/5'
                                    : 'border-slate-200 bg-white hover:border-accent/50'
                                }
                            `}
                        >
                            {/* Checkbox */}
                            <div className={`
                                absolute top-4 right-4 w-6 h-6 rounded-lg border-2 
                                flex items-center justify-center transition-all
                                ${isSelected
                                    ? 'bg-accent border-accent'
                                    : 'border-slate-300 bg-white'
                                }
                            `}>
                                {isSelected && (
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                )}
                            </div>

                            {/* Icon */}
                            <span className="text-3xl mb-3 block">{extra.icon}</span>

                            {/* Name */}
                            <h4 className={`
                                font-bold mb-1 pr-8 transition-colors
                                ${isSelected ? 'text-accent' : 'text-slate-900'}
                            `}>
                                {extra.name}
                            </h4>

                            {/* Description */}
                            <p className="text-sm text-slate-500 mb-3">
                                {extra.description}
                            </p>

                            {/* Price */}
                            <div className={`
                                inline-flex items-center px-3 py-1 rounded-full text-sm font-medium
                                ${extra.type === 'percentage'
                                    ? 'bg-amber-100 text-amber-700'
                                    : 'bg-slate-100 text-slate-600'
                                }
                            `}>
                                {getExtraValue(extra)}
                            </div>
                        </button>
                    );
                })}
            </div>

            {/* Selected Summary */}
            {selectedExtras.length > 0 && (
                <div className="max-w-3xl mx-auto bg-accent/5 border border-accent/20 rounded-xl p-5">
                    <h5 className="font-bold text-accent mb-3">Ausgewählte Zusatzleistungen</h5>
                    <div className="space-y-2">
                        {calculation.extrasBreakdown.map((extra, idx) => (
                            <div key={idx} className="flex justify-between text-sm">
                                <span className="text-slate-600">{extra.name}</span>
                                <span className="font-medium text-slate-900">
                                    {extra.type === 'percentage' && `+${extra.percentage}% = `}
                                    {formatCurrency(extra.value)}
                                </span>
                            </div>
                        ))}
                        <div className="border-t border-accent/20 pt-2 mt-2 flex justify-between font-bold">
                            <span className="text-slate-700">Zusatzleistungen gesamt</span>
                            <span className="text-accent">{formatCurrency(calculation.extrasTotal)}</span>
                        </div>
                    </div>
                </div>
            )}

            {/* Skip Note */}
            <div className="max-w-3xl mx-auto text-center">
                <p className="text-sm text-slate-400">
                    Sie müssen keine Zusatzleistungen auswählen. Klicken Sie auf &quot;Weiter&quot;, um fortzufahren.
                </p>
            </div>
        </div>
    );
});

ExtrasStep.displayName = 'ExtrasStep';

export default ExtrasStep;
