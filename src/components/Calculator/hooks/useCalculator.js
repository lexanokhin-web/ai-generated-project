import { useState, useCallback, useMemo } from 'react';
import {
    propertyTypes,
    materialClasses,
    servicesPricing,
    additionalOptions,
    getAveragePrice,
    volumeDiscounts
} from '../../../data/calculatorPricing';

/**
 * Hook für die Renovierungskostenberechnung
 * Verwaltet den gesamten Zustand des Kalkulators und berechnet Preise
 */
export const useCalculator = () => {
    // Aktueller Schritt im Wizard
    const [currentStep, setCurrentStep] = useState(1);
    const TOTAL_STEPS = 6;

    // Schritt 1: Objekttyp
    const [propertyType, setPropertyType] = useState(null);

    // Schritt 2: Flächen und Räume
    const [areaDetails, setAreaDetails] = useState({
        totalArea: 0,
        roomCount: 0,
        ceilingHeight: 2.5,
        bathroomCount: 0,
        bathroomArea: 0
    });

    // Schritt 3: Ausgewählte Dienstleistungen
    const [selectedServices, setSelectedServices] = useState([]);
    // Format: [{ serviceId, subOptionId, quantity, customData }]

    // Schritt 4: Materialklasse
    const [materialClass, setMaterialClass] = useState(null);

    // Schritt 5: Zusatzoptionen
    const [selectedExtras, setSelectedExtras] = useState([]);

    // Getter für Koeffizienten
    const propertyCoefficient = useMemo(() => {
        if (!propertyType) return 1;
        const type = propertyTypes.find(t => t.id === propertyType);
        return type ? type.coefficient : 1;
    }, [propertyType]);

    const materialCoefficient = useMemo(() => {
        if (!materialClass) return 1;
        const cls = materialClasses.find(c => c.id === materialClass);
        return cls ? cls.coefficient : 1;
    }, [materialClass]);

    // Dienstleistung hinzufügen
    const addService = useCallback((serviceId, subOptionId = null, quantity = 0, customData = {}) => {
        setSelectedServices(prev => {
            // Prüfen ob Service bereits existiert
            const existingIndex = prev.findIndex(
                s => s.serviceId === serviceId && s.subOptionId === subOptionId
            );

            if (existingIndex >= 0) {
                // Update existing
                const updated = [...prev];
                updated[existingIndex] = { serviceId, subOptionId, quantity, customData };
                return updated;
            }

            return [...prev, { serviceId, subOptionId, quantity, customData }];
        });
    }, []);

    // Dienstleistung entfernen
    const removeService = useCallback((serviceId, subOptionId = null) => {
        setSelectedServices(prev =>
            prev.filter(s => !(s.serviceId === serviceId && s.subOptionId === subOptionId))
        );
    }, []);

    // Dienstleistung Menge aktualisieren
    const updateServiceQuantity = useCallback((serviceId, subOptionId, quantity) => {
        setSelectedServices(prev =>
            prev.map(s =>
                s.serviceId === serviceId && s.subOptionId === subOptionId
                    ? { ...s, quantity }
                    : s
            )
        );
    }, []);

    // Zusatzoption umschalten
    const toggleExtra = useCallback((extraId) => {
        setSelectedExtras(prev =>
            prev.includes(extraId)
                ? prev.filter(id => id !== extraId)
                : [...prev, extraId]
        );
    }, []);

    // Berechnung der Gesamtkosten
    const calculation = useMemo(() => {
        let laborTotal = 0;
        let materialTotal = 0;
        let fixedCostsTotal = 0;
        let packagesTotal = 0;
        const breakdown = [];

        // Für jede ausgewählte Dienstleistung
        selectedServices.forEach(({ serviceId, subOptionId, quantity, customData }) => {
            const service = servicesPricing.find(s => s.id === serviceId);
            if (!service || quantity <= 0) return;

            // Suboption Multiplikator
            let subMultiplier = 1;
            if (subOptionId && service.subOptions) {
                const subOption = service.subOptions.find(so => so.id === subOptionId);
                subMultiplier = subOption ? subOption.multiplier : 1;
            }

            // Für Services mit Stückpreisen (packages)
            if (service.packages && customData.packageId) {
                const pkg = service.packages.find(p => p.id === customData.packageId);
                if (pkg) {
                    const VAT_F = 1.19;
                    const avgPackagePriceBrutto = getAveragePrice(pkg.min, pkg.max) * materialCoefficient * VAT_F;
                    const pkgTotalBrutto = avgPackagePriceBrutto * quantity * propertyCoefficient;
                    packagesTotal += pkgTotalBrutto;

                    breakdown.push({
                        serviceId,
                        serviceName: service.name,
                        itemName: pkg.name,
                        quantity,
                        unit: 'Stk.',
                        laborCost: pkgTotalBrutto,
                        materialCost: 0,
                        totalCost: pkgTotalBrutto,
                        pricePerUnitNetto: avgPackagePriceBrutto / VAT_F
                    });
                }
                laborTotal += pkgTotalBrutto;
                return;
            }

            // Für normale Services (pro m² oder Punkt)
            const VAT_F = 1.19;
            const avgLaborBrutto = getAveragePrice(service.laborMin, service.laborMax) * VAT_F;
            const avgMaterialBrutto = getAveragePrice(service.materialMin, service.materialMax) * VAT_F;

            const laborCostBrutto = avgLaborBrutto * quantity * subMultiplier * propertyCoefficient;
            const materialCostBrutto = avgMaterialBrutto * quantity * subMultiplier * materialCoefficient * propertyCoefficient;

            laborTotal += laborCostBrutto;
            materialTotal += materialCostBrutto;

            const subOptionName = subOptionId
                ? service.subOptions?.find(so => so.id === subOptionId)?.name || ''
                : '';

            breakdown.push({
                serviceId,
                serviceName: service.name,
                itemName: subOptionName,
                quantity,
                unit: service.unit,
                laborCost: laborCostBrutto,
                materialCost: materialCostBrutto,
                totalCost: laborCostBrutto + materialCostBrutto,
                pricePerUnitNetto: (avgLaborBrutto + avgMaterialBrutto) / VAT_F
            });

            // Fixed Costs hinzufügen (wenn ausgewählt)
            if (customData.fixedCosts && service.fixedCosts) {
                customData.fixedCosts.forEach(fcId => {
                    const fc = service.fixedCosts.find(f => f.id === fcId);
                    if (fc) {
                        const fcPriceBrutto = getAveragePrice(fc.min, fc.max) * materialCoefficient * VAT_F;
                        fixedCostsTotal += fcPriceBrutto;

                        breakdown.push({
                            serviceId,
                            serviceName: service.name,
                            itemName: fc.name,
                            quantity: 1,
                            unit: 'Pausch.',
                            laborCost: fcPriceBrutto,
                            materialCost: 0,
                            totalCost: fcPriceBrutto,
                            pricePerUnitNetto: fcPriceBrutto / VAT_F
                        });
                        laborTotal += fcPriceBrutto;
                    }
                });
            }
        });

        // Zwischensumme
        // Alle Service-Kosten (Labor + Pauschalen + Pakete) sind nun in laborTotal
        const subtotal = laborTotal + materialTotal;

        // Zusatzoptionen berechnen
        let extrasPercentage = 0;
        let extrasFixed = 0;
        const extrasBreakdown = [];

        selectedExtras.forEach(extraId => {
            const extra = additionalOptions.find(e => e.id === extraId);
            if (!extra) return;

            if (extra.type === 'percentage') {
                const extraAmount = subtotal * (extra.value / 100);
                extrasPercentage += extraAmount;
                extrasBreakdown.push({
                    name: extra.name,
                    value: extraAmount,
                    type: 'percentage',
                    percentage: extra.value
                });
            } else if (extra.type === 'fixed') {
                extrasFixed += extra.value;
                extrasBreakdown.push({
                    name: extra.name,
                    value: extra.value,
                    type: 'fixed'
                });
            } else if (extra.type === 'perSqm') {
                const perSqmAmount = extra.value * areaDetails.totalArea;
                extrasFixed += perSqmAmount;
                extrasBreakdown.push({
                    name: extra.name,
                    value: perSqmAmount,
                    type: 'perSqm',
                    pricePerSqm: extra.value
                });
            }
        });

        // Rabatt berechnen (basierend auf Gesamtsumme)
        const beforeDiscount = subtotal + extrasPercentage + extrasFixed;
        let discountRate = 0;
        volumeDiscounts.forEach(vd => {
            if (beforeDiscount >= vd.minTotal) {
                discountRate = vd.discount;
            }
        });
        const discount = beforeDiscount * discountRate;

        // Endsumme
        const total = beforeDiscount - discount;

        // Preisrange (±10%)
        const priceMin = Math.round(total * 0.9);
        const priceMax = Math.round(total * 1.1);

        return {
            laborTotal,
            materialTotal,
            fixedCostsTotal,
            packagesTotal,
            subtotal,
            extrasPercentage,
            extrasFixed,
            extrasTotal: extrasPercentage + extrasFixed,
            extrasBreakdown,
            discountRate,
            discount,
            total,
            priceMin,
            priceMax,
            breakdown
        };
    }, [selectedServices, selectedExtras, materialCoefficient, propertyCoefficient, areaDetails.totalArea]);

    // Navigation
    const nextStep = useCallback(() => {
        setCurrentStep(prev => Math.min(prev + 1, TOTAL_STEPS));
    }, []);

    const prevStep = useCallback(() => {
        setCurrentStep(prev => Math.max(prev - 1, 1));
    }, []);

    const goToStep = useCallback((step) => {
        if (step >= 1 && step <= TOTAL_STEPS) {
            setCurrentStep(step);
        }
    }, []);

    // Reset
    const resetCalculator = useCallback(() => {
        setCurrentStep(1);
        setPropertyType(null);
        setAreaDetails({
            totalArea: 0,
            roomCount: 0,
            ceilingHeight: 2.5,
            bathroomCount: 0,
            bathroomArea: 0
        });
        setSelectedServices([]);
        setMaterialClass(null);
        setSelectedExtras([]);
    }, []);

    // Prüfen ob Schritt abgeschlossen ist
    const isStepComplete = useCallback((step) => {
        // Zuerst prüfen ob alle vorherigen Schritte abgeschlossen sind
        const step1Complete = propertyType !== null;
        const step2Complete = areaDetails.totalArea > 0 && areaDetails.roomCount > 0;
        const step3Complete = selectedServices.length > 0;
        const step4Complete = materialClass !== null;

        switch (step) {
            case 1:
                return step1Complete;
            case 2:
                return step1Complete && step2Complete;
            case 3:
                return step1Complete && step2Complete && step3Complete;
            case 4:
                return step1Complete && step2Complete && step3Complete && step4Complete;
            case 5:
                // Extras sind optional, aber vorherige Schritte müssen abgeschlossen sein
                return step1Complete && step2Complete && step3Complete && step4Complete;
            case 6:
                // Alle vorherigen Schritte müssen abgeschlossen sein
                return step1Complete && step2Complete && step3Complete && step4Complete;
            default:
                return false;
        }
    }, [propertyType, areaDetails, selectedServices, materialClass]);

    // Kann zum nächsten Schritt?
    const canProceed = useMemo(() => isStepComplete(currentStep), [isStepComplete, currentStep]);

    return {
        // State
        currentStep,
        totalSteps: TOTAL_STEPS,
        propertyType,
        areaDetails,
        selectedServices,
        materialClass,
        selectedExtras,

        // Berechnete Werte
        calculation,
        propertyCoefficient,
        materialCoefficient,

        // Setter
        setPropertyType,
        setAreaDetails,
        setMaterialClass,

        // Actions
        addService,
        removeService,
        updateServiceQuantity,
        toggleExtra,

        // Navigation
        nextStep,
        prevStep,
        goToStep,
        resetCalculator,

        // Validation
        isStepComplete,
        canProceed
    };
};

export default useCalculator;
