import React, { memo, useCallback } from 'react';

/**
 * Schritt 2: Eingabe der Flächendaten
 */
const AreaDetailsStep = memo(({ areaDetails, onUpdate }) => {
    const { totalArea, roomCount, ceilingHeight, bathroomCount, bathroomArea } = areaDetails;

    const handleChange = useCallback((field, value) => {
        const numValue = parseFloat(value) || 0;
        onUpdate({ ...areaDetails, [field]: numValue });
    }, [areaDetails, onUpdate]);

    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
                    Wie groß ist Ihr Objekt?
                </h3>
                <p className="text-slate-500 max-w-xl mx-auto">
                    Geben Sie die wichtigsten Maße ein. Diese Daten helfen bei einer genauen Kostenschätzung.
                </p>
            </div>

            {/* Form Grid */}
            <div className="max-w-2xl mx-auto space-y-6">
                {/* Hauptfläche */}
                <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-5">
                    <h4 className="font-bold text-slate-900 flex items-center gap-2">
                        <span className="text-xl">📐</span>
                        Grunddaten
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Gesamtfläche */}
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-slate-700">
                                Wohnfläche (m²) *
                            </label>
                            <div className="relative">
                                <input
                                    type="number"
                                    min="1"
                                    max="1000"
                                    step="1"
                                    value={totalArea || ''}
                                    onChange={(e) => handleChange('totalArea', e.target.value)}
                                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-accent transition-colors text-lg"
                                    placeholder="z.B. 85"
                                />
                                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">m²</span>
                            </div>
                        </div>

                        {/* Raumanzahl */}
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-slate-700">
                                Anzahl Räume *
                            </label>
                            <div className="relative">
                                <input
                                    type="number"
                                    min="1"
                                    max="20"
                                    step="1"
                                    value={roomCount || ''}
                                    onChange={(e) => handleChange('roomCount', e.target.value)}
                                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-accent transition-colors text-lg"
                                    placeholder="z.B. 4"
                                />
                                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">Räume</span>
                            </div>
                        </div>
                    </div>

                    {/* Deckenhöhe */}
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-slate-700">
                            Deckenhöhe (m)
                        </label>
                        <div className="flex items-center gap-4">
                            <input
                                type="range"
                                min="2.2"
                                max="4"
                                step="0.1"
                                value={ceilingHeight}
                                onChange={(e) => handleChange('ceilingHeight', e.target.value)}
                                className="flex-1 h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-accent"
                            />
                            <span className="w-16 text-center font-bold text-accent text-lg">
                                {ceilingHeight.toFixed(1)}m
                            </span>
                        </div>
                        <p className="text-xs text-slate-400">
                            Standard: 2,5m. Höhere Decken bedeuten mehr Wandfläche.
                        </p>
                    </div>
                </div>

                {/* Badezimmer */}
                <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-5">
                    <h4 className="font-bold text-slate-900 flex items-center gap-2">
                        <span className="text-xl">🚿</span>
                        Badezimmer (optional)
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Anzahl Bäder */}
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-slate-700">
                                Anzahl Badezimmer
                            </label>
                            <div className="flex items-center gap-2">
                                <button
                                    type="button"
                                    onClick={() => handleChange('bathroomCount', Math.max(0, bathroomCount - 1))}
                                    className="w-12 h-12 rounded-xl border border-slate-200 flex items-center justify-center text-xl hover:bg-slate-50 transition-colors"
                                >
                                    −
                                </button>
                                <span className="w-16 text-center text-xl font-bold text-slate-900">
                                    {bathroomCount}
                                </span>
                                <button
                                    type="button"
                                    onClick={() => handleChange('bathroomCount', Math.min(5, bathroomCount + 1))}
                                    className="w-12 h-12 rounded-xl border border-slate-200 flex items-center justify-center text-xl hover:bg-slate-50 transition-colors"
                                >
                                    +
                                </button>
                            </div>
                        </div>

                        {/* Bad-Fläche */}
                        {bathroomCount > 0 && (
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-slate-700">
                                    Gesamtfläche aller Bäder
                                </label>
                                <div className="relative">
                                    <input
                                        type="number"
                                        min="1"
                                        max="100"
                                        step="0.5"
                                        value={bathroomArea || ''}
                                        onChange={(e) => handleChange('bathroomArea', e.target.value)}
                                        className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-accent transition-colors text-lg"
                                        placeholder="z.B. 12"
                                    />
                                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">m²</span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Berechnete Werte */}
                {totalArea > 0 && (
                    <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                        <h5 className="text-sm font-bold text-accent mb-2">Berechnete Flächen</h5>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                                <span className="text-slate-500">Wandfläche (geschätzt):</span>
                                <span className="font-bold text-slate-900 ml-2">
                                    ~{Math.round(totalArea * 2.8 * ceilingHeight / 2.5)} m²
                                </span>
                            </div>
                            <div>
                                <span className="text-slate-500">Deckenfläche:</span>
                                <span className="font-bold text-slate-900 ml-2">
                                    ~{totalArea} m²
                                </span>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Info Box */}
            <div className="max-w-2xl mx-auto bg-slate-50 border border-slate-100 rounded-xl p-4 flex gap-3">
                <div className="text-accent text-xl shrink-0">📋</div>
                <div className="text-sm text-slate-600">
                    <strong>Hinweis:</strong> Sie finden die Wohnfläche in Ihrem Mietvertrag, Grundrissplan oder der
                    Nebenkostenabrechnung. Bei Unsicherheit können wir das Aufmaß vor Ort durchführen.
                </div>
            </div>
        </div>
    );
});

AreaDetailsStep.displayName = 'AreaDetailsStep';

export default AreaDetailsStep;
