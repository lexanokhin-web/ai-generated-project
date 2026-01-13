import React, { memo } from 'react';
import { propertyTypes } from '../../../data/calculatorPricing';

/**
 * Schritt 1: Auswahl des Objekttyps
 */
const PropertyTypeStep = memo(({ selectedType, onSelect }) => {
    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
                    Um welches Objekt handelt es sich?
                </h3>
                <p className="text-slate-500 max-w-xl mx-auto">
                    Wählen Sie den Objekttyp aus. Dies hilft uns, die Kosten genauer zu berechnen.
                </p>
            </div>

            {/* Objekttypen Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
                {propertyTypes.map((type) => (
                    <button
                        key={type.id}
                        onClick={() => onSelect(type.id)}
                        className={`
                            relative p-6 rounded-2xl border-2 transition-all duration-300
                            text-left group
                            ${selectedType === type.id
                                ? 'border-accent bg-accent/5 shadow-lg shadow-accent/10'
                                : 'border-slate-200 bg-white hover:border-accent/50 hover:shadow-md'
                            }
                        `}
                    >
                        {/* Checkmark */}
                        {selectedType === type.id && (
                            <div className="absolute top-4 right-4 w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                        )}

                        {/* Icon */}
                        <span className="text-4xl mb-4 block">{type.icon}</span>

                        {/* Name */}
                        <h4 className={`
                            text-lg font-bold mb-1 transition-colors
                            ${selectedType === type.id ? 'text-accent' : 'text-slate-900 group-hover:text-accent'}
                        `}>
                            {type.name}
                        </h4>

                        {/* Description */}
                        <p className="text-sm text-slate-500">
                            {type.description}
                        </p>

                        {/* Coefficient hint */}
                        {type.coefficient !== 1.0 && (
                            <div className="mt-3 inline-flex items-center gap-1 text-xs text-slate-400">
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                {type.coefficient > 1
                                    ? `+${Math.round((type.coefficient - 1) * 100)}% Aufschlag`
                                    : `-${Math.round((1 - type.coefficient) * 100)}% Ersparnis`
                                }
                            </div>
                        )}
                    </button>
                ))}
            </div>

            {/* Info Box */}
            <div className="max-w-2xl mx-auto bg-slate-50 border border-slate-100 rounded-xl p-4 flex gap-3">
                <div className="text-accent text-xl shrink-0">💡</div>
                <div className="text-sm text-slate-600">
                    <strong>Tipp:</strong> Bei Einfamilienhäusern und Gewerbeimmobilien sind die Kosten aufgrund von
                    Zugänglichkeit und Komplexität tendenziell höher. Neubauten profitieren von einfacheren Bedingungen.
                </div>
            </div>
        </div>
    );
});

PropertyTypeStep.displayName = 'PropertyTypeStep';

export default PropertyTypeStep;
