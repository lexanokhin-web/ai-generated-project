import React, { memo, useMemo } from 'react';

/**
 * Sticky Preisanzeige-Panel
 */
const PriceDisplay = memo(({ calculation, isCompact = false }) => {
    const { total, priceMin, priceMax, laborTotal, materialTotal, extrasTotal, discount } = calculation;

    const formattedTotal = useMemo(() =>
        new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(total),
        [total]
    );

    const formattedRange = useMemo(() => {
        const min = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(priceMin);
        const max = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(priceMax);
        return `${min} - ${max}`;
    }, [priceMin, priceMax]);

    if (isCompact) {
        return (
            <div className="bg-slate-900 text-white px-4 py-3 rounded-xl">
                <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-400">Gesamtkosten</span>
                    <span className="text-xl font-bold text-accent">{formattedTotal}</span>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white border border-slate-200 rounded-2xl shadow-lg overflow-hidden">
            {/* Header */}
            <div className="bg-slate-900 text-white p-6">
                <p className="text-xs uppercase tracking-wider text-slate-400 mb-1">Geschätzter Gesamtpreis</p>
                <p className="text-3xl font-bold text-accent">{formattedTotal}</p>
                <p className="text-sm text-slate-400 mt-1">inkl. 19% MwSt.</p>
            </div>

            {/* Details */}
            <div className="p-6 space-y-4">
                <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Arbeitskosten</span>
                    <span className="font-medium text-slate-700">
                        {new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(laborTotal)}
                    </span>
                </div>
                <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Materialkosten</span>
                    <span className="font-medium text-slate-700">
                        {new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(materialTotal)}
                    </span>
                </div>
                {extrasTotal > 0 && (
                    <div className="flex justify-between text-sm">
                        <span className="text-slate-500">Zusatzleistungen</span>
                        <span className="font-medium text-slate-700">
                            {new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(extrasTotal)}
                        </span>
                    </div>
                )}
                {discount > 0 && (
                    <div className="flex justify-between text-sm text-green-600">
                        <span>Mengenrabatt</span>
                        <span className="font-medium">
                            -{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(discount)}
                        </span>
                    </div>
                )}

                <div className="border-t border-slate-100 pt-4">
                    <p className="text-xs text-slate-400 text-center">
                        Preisspanne: {formattedRange}
                    </p>
                </div>
            </div>

            {/* Footer Hinweis */}
            <div className="bg-slate-50 px-6 py-4 text-center">
                <p className="text-xs text-slate-500">
                    * Unverbindliche Schätzung. Der endgültige Preis wird nach Vor-Ort-Besichtigung festgelegt.
                </p>
            </div>
        </div>
    );
});

PriceDisplay.displayName = 'PriceDisplay';

export default PriceDisplay;
