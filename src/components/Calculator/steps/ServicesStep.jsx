import React, { memo, useState, useCallback } from 'react';
import { servicesPricing } from '../../../data/calculatorPricing';

/**
 * Schritt 3: Auswahl der Dienstleistungen
 */
const ServicesStep = memo(({
    selectedServices,
    areaDetails,
    onAddService,
    onRemoveService,
    onUpdateQuantity
}) => {
    const [expandedService, setExpandedService] = useState(null);

    // Prüfen ob Service ausgewählt ist
    const isServiceSelected = useCallback((serviceId) => {
        return selectedServices.some(s => s.serviceId === serviceId);
    }, [selectedServices]);

    // Service-Auswahl umschalten (für einfache Services)
    const toggleService = useCallback((serviceId, subOptionId = null) => {
        const existing = selectedServices.find(
            s => s.serviceId === serviceId && s.subOptionId === subOptionId
        );

        if (existing) {
            onRemoveService(serviceId, subOptionId);
        } else {
            // Standard-Menge basierend auf Fläche
            const service = servicesPricing.find(s => s.id === serviceId);
            let defaultQty = areaDetails.totalArea;

            if (service?.category === 'bathroom') {
                defaultQty = areaDetails.bathroomArea || areaDetails.bathroomCount * 8;
            } else if (service?.unit === 'Stück' || service?.unit === 'Punkt' || service?.id === 'Lackier') {
                defaultQty = 1;
            }

            // Nicht hinzufügen wenn Menge 0 ist
            if (defaultQty <= 0) {
                return;
            }

            onAddService(serviceId, subOptionId, defaultQty, {});
        }
    }, [selectedServices, areaDetails, onAddService, onRemoveService]);

    // Menge für einen Service holen
    const getServiceQuantity = useCallback((serviceId, subOptionId = null) => {
        const service = selectedServices.find(
            s => s.serviceId === serviceId && s.subOptionId === subOptionId
        );
        return service?.quantity || 0;
    }, [selectedServices]);

    // Preis-Range formatieren
    const formatPrice = (min, max) => {
        return `${min}€ - ${max}€`;
    };

    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
                    Welche Arbeiten sollen durchgeführt werden?
                </h3>
                <p className="text-slate-500 max-w-xl mx-auto">
                    Wählen Sie alle gewünschten Leistungen aus. Sie können die Mengen bei Bedarf anpassen.
                </p>
            </div>

            {/* Services Grid */}
            <div className="space-y-4">
                {servicesPricing.map((service) => {
                    const isSelected = isServiceSelected(service.id);
                    const isExpanded = expandedService === service.id;
                    const hasSubOptions = service.subOptions && service.subOptions.length > 0;
                    const hasPackages = service.packages && service.packages.length > 0;

                    return (
                        <div
                            key={service.id}
                            className={`
                                border-2 rounded-2xl overflow-hidden transition-all duration-300
                                ${isSelected
                                    ? 'border-accent bg-accent/5'
                                    : 'border-slate-200 bg-white hover:border-slate-300'
                                }
                            `}
                        >
                            {/* Service Header */}
                            <div
                                className="p-5 flex items-start gap-4 cursor-pointer"
                                onClick={() => setExpandedService(isExpanded ? null : service.id)}
                            >
                                {/* Icon */}
                                <span className="text-3xl shrink-0">{service.icon}</span>

                                {/* Info */}
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-3 mb-1">
                                        <h4 className="font-bold text-slate-900">{service.name}</h4>
                                        {isSelected && (
                                            <span className="px-2 py-0.5 bg-accent text-white text-xs rounded-full font-bold">
                                                Ausgewählt
                                            </span>
                                        )}
                                    </div>
                                    <p className="text-sm text-slate-500 line-clamp-2">{service.description}</p>

                                    {/* Price hint */}
                                    {!hasPackages && (
                                        <p className="text-xs text-slate-400 mt-2">
                                            ab {formatPrice(service.laborMin + service.materialMin, service.laborMax + service.materialMax)} / {service.unit}
                                        </p>
                                    )}
                                </div>

                                {/* Expand Arrow */}
                                <button className="shrink-0 p-2 hover:bg-slate-100 rounded-full transition-colors">
                                    <svg
                                        className={`w-5 h-5 text-slate-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                                        fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                            </div>

                            {/* Expanded Content */}
                            {isExpanded && (
                                <div className="px-5 pb-5 border-t border-slate-100 pt-4 space-y-4">
                                    {/* Warnung für Bad-Services ohne Badezimmer */}
                                    {service.category === 'bathroom' && areaDetails.bathroomCount === 0 && (
                                        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start gap-3">
                                            <span className="text-xl">⚠️</span>
                                            <div>
                                                <p className="font-medium text-amber-800">Kein Badezimmer angegeben</p>
                                                <p className="text-sm text-amber-600">
                                                    Bitte gehen Sie zurück zu Schritt 2 und geben Sie die Anzahl der Badezimmer an.
                                                </p>
                                            </div>
                                        </div>
                                    )}

                                    {/* Suboptions (für normale Services) */}
                                    {hasSubOptions && !hasPackages && (
                                        <div className="space-y-2">
                                            <p className="text-sm font-medium text-slate-700">Art der Arbeiten:</p>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                                {service.subOptions.map((subOption) => {
                                                    const qty = getServiceQuantity(service.id, subOption.id);
                                                    const isSubSelected = selectedServices.some(
                                                        s => s.serviceId === service.id && s.subOptionId === subOption.id
                                                    );

                                                    return (
                                                        <div
                                                            key={subOption.id}
                                                            className={`
                                                                p-3 rounded-xl border-2 transition-all cursor-pointer
                                                                ${isSubSelected
                                                                    ? 'border-accent bg-accent/10'
                                                                    : 'border-slate-200 hover:border-accent/50'
                                                                }
                                                            `}
                                                            onClick={() => toggleService(service.id, subOption.id)}
                                                        >
                                                            <div className="flex items-center justify-between">
                                                                <span className="font-medium text-slate-800">{subOption.name}</span>
                                                                <div className={`
                                                                    w-5 h-5 rounded-full border-2 flex items-center justify-center
                                                                    ${isSubSelected ? 'bg-accent border-accent' : 'border-slate-300'}
                                                                `}>
                                                                    {isSubSelected && (
                                                                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                                                        </svg>
                                                                    )}
                                                                </div>
                                                            </div>
                                                            {subOption.multiplier !== 1 && (
                                                                <p className="text-xs text-slate-400 mt-1">
                                                                    {subOption.multiplier > 1
                                                                        ? `+${Math.round((subOption.multiplier - 1) * 100)}%`
                                                                        : `-${Math.round((1 - subOption.multiplier) * 100)}%`
                                                                    }
                                                                </p>
                                                            )}

                                                            {/* Quantity Input */}
                                                            {isSubSelected && (
                                                                <div className="mt-3 flex items-center gap-2" onClick={e => e.stopPropagation()}>
                                                                    <span className="text-xs text-slate-500">Menge:</span>
                                                                    <input
                                                                        type="number"
                                                                        min="1"
                                                                        value={qty || ''}
                                                                        onChange={(e) => {
                                                                            const val = e.target.value === '' ? 0 : parseFloat(e.target.value);
                                                                            onUpdateQuantity(service.id, subOption.id, val);
                                                                        }}
                                                                        className="w-20 px-2 py-1 border border-slate-200 rounded-lg text-sm text-center focus:ring-1 focus:ring-accent"
                                                                    />
                                                                    <span className="text-xs text-slate-500">{service.unit}</span>
                                                                </div>
                                                            )}
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    )}

                                    {/* Packages (für Küchen, Heizung etc.) */}
                                    {hasPackages && (
                                        <div className="space-y-2">
                                            <p className="text-sm font-medium text-slate-700">Leistungen auswählen:</p>
                                            <div className="space-y-2">
                                                {service.packages.map((pkg) => {
                                                    // Für Packages speichern wir packageId in customData
                                                    const pkgSelected = selectedServices.find(
                                                        s => s.serviceId === service.id && s.customData?.packageId === pkg.id
                                                    );
                                                    const pkgQty = pkgSelected?.quantity || 0;

                                                    return (
                                                        <div
                                                            key={pkg.id}
                                                            className={`
                                                                p-4 rounded-xl border-2 transition-all
                                                                ${pkgQty > 0
                                                                    ? 'border-accent bg-accent/10'
                                                                    : 'border-slate-200 hover:border-accent/50'
                                                                }
                                                            `}
                                                        >
                                                            <div className="flex items-center justify-between mb-2">
                                                                <span className="font-medium text-slate-800">{pkg.name}</span>
                                                                <span className="text-sm text-slate-500">
                                                                    {formatPrice(pkg.min, pkg.max)}
                                                                </span>
                                                            </div>
                                                            <div className="flex items-center gap-3">
                                                                <span className="text-sm text-slate-500">Anzahl:</span>
                                                                <div className="flex items-center gap-2">
                                                                    <button
                                                                        type="button"
                                                                        onClick={() => {
                                                                            const newQty = Math.max(0, pkgQty - 1);
                                                                            if (newQty === 0) {
                                                                                onRemoveService(service.id, null);
                                                                            } else {
                                                                                onAddService(service.id, null, newQty, { packageId: pkg.id });
                                                                            }
                                                                        }}
                                                                        className="w-8 h-8 rounded-lg border border-slate-200 flex items-center justify-center hover:bg-slate-50"
                                                                    >
                                                                        −
                                                                    </button>
                                                                    <span className="w-8 text-center font-bold">{pkgQty}</span>
                                                                    <button
                                                                        type="button"
                                                                        onClick={() => {
                                                                            onAddService(service.id, null, pkgQty + 1, { packageId: pkg.id });
                                                                        }}
                                                                        className="w-8 h-8 rounded-lg border border-slate-200 flex items-center justify-center hover:bg-slate-50"
                                                                    >
                                                                        +
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    )}

                                    {/* Simple toggle for services without sub-options */}
                                    {!hasSubOptions && !hasPackages && (
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <span className="text-sm text-slate-600">Fläche:</span>
                                                <input
                                                    type="number"
                                                    min="1"
                                                    value={getServiceQuantity(service.id) || (isSelected ? '' : areaDetails.totalArea)}
                                                    onChange={(e) => {
                                                        const val = e.target.value === '' ? 0 : parseFloat(e.target.value);
                                                        if (val > 0) {
                                                            onAddService(service.id, null, val, {});
                                                        } else if (isSelected) {
                                                            // Keep it selected but with 0 quantity if cleared
                                                            onAddService(service.id, null, 0, {});
                                                        }
                                                    }}
                                                    className="w-24 px-3 py-2 border border-slate-200 rounded-lg text-center focus:ring-1 focus:ring-accent"
                                                />
                                                <span className="text-sm text-slate-500">{service.unit}</span>
                                            </div>
                                            <button
                                                onClick={() => toggleService(service.id)}
                                                className={`
                                                    px-4 py-2 rounded-lg font-medium transition-colors
                                                    ${isSelected
                                                        ? 'bg-red-100 text-red-600 hover:bg-red-200'
                                                        : 'bg-accent text-white hover:bg-amber-700'
                                                    }
                                                `}
                                            >
                                                {isSelected ? 'Entfernen' : 'Hinzufügen'}
                                            </button>
                                        </div>
                                    )}

                                    {/* Calculation Note */}
                                    {service.calculationNote && (
                                        <p className="text-xs text-slate-400 italic pt-2 border-t border-slate-100">
                                            💡 {service.calculationNote}
                                        </p>
                                    )}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>

            {/* Selection Summary */}
            {selectedServices.length > 0 && (
                <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <h5 className="text-sm font-bold text-accent mb-2">
                        {selectedServices.length} Leistung(en) ausgewählt
                    </h5>
                    <div className="flex flex-wrap gap-2">
                        {selectedServices.map((s, idx) => {
                            const service = servicesPricing.find(sp => sp.id === s.serviceId);
                            const subOption = s.subOptionId
                                ? service?.subOptions?.find(so => so.id === s.subOptionId)
                                : null;
                            const pkg = s.customData?.packageId
                                ? service?.packages?.find(p => p.id === s.customData.packageId)
                                : null;

                            return (
                                <span
                                    key={idx}
                                    className="inline-flex items-center gap-1 px-3 py-1 bg-white rounded-full text-sm border border-slate-200"
                                >
                                    {service?.icon} {service?.name}
                                    {subOption && ` (${subOption.name})`}
                                    {pkg && ` - ${pkg.name}`}
                                    : {s.quantity} {service?.unit}
                                </span>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
});

ServicesStep.displayName = 'ServicesStep';

export default ServicesStep;
