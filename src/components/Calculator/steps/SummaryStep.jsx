import React, { memo, useCallback, useState } from 'react';
import { propertyTypes, materialClasses, servicesPricing } from '../../../data/calculatorPricing';

/**
 * Schritt 6: Zusammenfassung und PDF-Export
 */
const SummaryStep = memo(({
    propertyType,
    areaDetails,
    materialClass,
    selectedExtras,
    calculation,
    onReset,
    onGoToStep
}) => {
    const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);
    const [pdfError, setPdfError] = useState(null);

    // Hilfsfunktionen
    const formatCurrency = (value) => {
        return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(value);
    };

    const getPropertyTypeName = useCallback(() => {
        return propertyTypes.find(t => t.id === propertyType)?.name || '-';
    }, [propertyType]);

    const getMaterialClassName = useCallback(() => {
        return materialClasses.find(c => c.id === materialClass)?.name || '-';
    }, [materialClass]);

    // PDF generieren
    const generatePDF = useCallback(async () => {
        setIsGeneratingPdf(true);
        setPdfError(null);

        try {
            // Dynamischer Import von jsPDF
            const { default: jsPDF } = await import('jspdf');

            const doc = new jsPDF('p', 'mm', 'a4');
            const pageWidth = doc.internal.pageSize.getWidth();
            let y = 20;

            // Header
            doc.setFontSize(20);
            doc.setFont('helvetica', 'bold');
            doc.text('Kostenvoranschlag', pageWidth / 2, y, { align: 'center' });
            y += 10;

            doc.setFontSize(12);
            doc.setFont('helvetica', 'normal');
            doc.text('Winter & Usselmann GbR', pageWidth / 2, y, { align: 'center' });
            y += 5;
            doc.setFontSize(10);
            doc.text('Jägerstraße 24a, 23909 Ratzeburg | Tel: 0151-41389442', pageWidth / 2, y, { align: 'center' });
            y += 15;

            // Trennlinie
            doc.setLineWidth(0.5);
            doc.line(20, y, pageWidth - 20, y);
            y += 10;

            // Objektdaten
            doc.setFontSize(14);
            doc.setFont('helvetica', 'bold');
            doc.text('Objektdaten', 20, y);
            y += 8;

            doc.setFontSize(10);
            doc.setFont('helvetica', 'normal');
            const objectData = [
                ['Objekttyp:', getPropertyTypeName()],
                ['Wohnfläche:', `${areaDetails.totalArea} m²`],
                ['Räume:', `${areaDetails.roomCount} `],
                ['Deckenhöhe:', `${areaDetails.ceilingHeight} m`],
                ['Badezimmer:', `${areaDetails.bathroomCount} `],
            ];

            objectData.forEach(([label, value]) => {
                doc.text(label, 25, y);
                doc.text(value, 80, y);
                y += 6;
            });
            y += 5;

            // Materialklasse
            doc.setFontSize(14);
            doc.setFont('helvetica', 'bold');
            doc.text('Materialklasse', 20, y);
            y += 8;

            doc.setFontSize(10);
            doc.setFont('helvetica', 'normal');
            doc.text(getMaterialClassName(), 25, y);
            y += 10;

            // Gewählte Leistungen
            doc.setFontSize(14);
            doc.setFont('helvetica', 'bold');
            doc.text('Ausgewählte Leistungen', 20, y);
            y += 8;

            doc.setFontSize(10);
            doc.setFont('helvetica', 'normal');

            calculation.breakdown.forEach((item) => {
                if (y > 270) {
                    doc.addPage();
                    y = 20;
                }

                const itemText = item.itemName
                    ? `${item.serviceName} - ${item.itemName} `
                    : item.serviceName;

                doc.text(itemText, 25, y);
                doc.text(`${item.quantity} ${item.unit} `, 120, y);
                doc.text(formatCurrency(item.totalCost), 160, y, { align: 'right' });
                y += 6;
            });
            y += 5;

            // Zusatzleistungen
            if (selectedExtras.length > 0) {
                doc.setFontSize(14);
                doc.setFont('helvetica', 'bold');
                doc.text('Zusatzleistungen', 20, y);
                y += 8;

                doc.setFontSize(10);
                doc.setFont('helvetica', 'normal');

                calculation.extrasBreakdown.forEach((extra) => {
                    doc.text(extra.name, 25, y);
                    doc.text(formatCurrency(extra.value), 160, y, { align: 'right' });
                    y += 6;
                });
                y += 5;
            }

            // Trennlinie
            doc.setLineWidth(0.3);
            doc.line(20, y, pageWidth - 20, y);
            y += 8;

            // Summen
            doc.setFontSize(11);

            // Zwischensumme
            doc.text('Arbeitskosten:', 25, y);
            doc.text(formatCurrency(calculation.laborTotal), 160, y, { align: 'right' });
            y += 6;

            doc.text('Materialkosten:', 25, y);
            doc.text(formatCurrency(calculation.materialTotal), 160, y, { align: 'right' });
            y += 6;

            if (calculation.extrasTotal > 0) {
                doc.text('Zusatzleistungen:', 25, y);
                doc.text(formatCurrency(calculation.extrasTotal), 160, y, { align: 'right' });
                y += 6;
            }

            if (calculation.discount > 0) {
                doc.setTextColor(0, 128, 0);
                doc.text('Mengenrabatt:', 25, y);
                doc.text(`- ${formatCurrency(calculation.discount)} `, 160, y, { align: 'right' });
                doc.setTextColor(0, 0, 0);
                y += 6;
            }

            y += 4;
            doc.setLineWidth(0.5);
            doc.line(100, y, pageWidth - 20, y);
            y += 8;

            // Gesamtsumme
            doc.setFontSize(14);
            doc.setFont('helvetica', 'bold');
            doc.text('Gesamtkosten (inkl. MwSt.):', 25, y);
            doc.text(formatCurrency(calculation.total), 160, y, { align: 'right' });
            y += 8;

            doc.setFontSize(10);
            doc.setFont('helvetica', 'normal');
            doc.text(`Preisspanne: ${formatCurrency(calculation.priceMin)} - ${formatCurrency(calculation.priceMax)} `, 25, y);
            y += 15;

            // Hinweis
            doc.setFontSize(8);
            doc.setTextColor(100, 100, 100);
            const hinweis = 'Hinweis: Dies ist eine unverbindliche Kostenschätzung. Der endgültige Preis wird nach einer Vor-Ort-Besichtigung festgelegt. Alle Preise verstehen sich inkl. 19% MwSt.';
            const lines = doc.splitTextToSize(hinweis, pageWidth - 40);
            doc.text(lines, 20, y);
            y += lines.length * 4 + 10;

            // Datum
            doc.setTextColor(0, 0, 0);
            doc.setFontSize(9);
            const datum = new Date().toLocaleDateString('de-DE', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
            doc.text(`Erstellt am: ${datum} `, 20, 285);

            // PDF speichern
            doc.save(`Kostenvoranschlag_${datum.replace(/\s/g, '_')}.pdf`);

        } catch (error) {
            console.error('PDF Fehler:', error);
            setPdfError('PDF konnte nicht erstellt werden. Bitte versuchen Sie es erneut.');
        } finally {
            setIsGeneratingPdf(false);
        }
    }, [areaDetails, selectedExtras, calculation, getMaterialClassName, getPropertyTypeName]);

    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
                    Ihre Kostenschätzung
                </h3>
                <p className="text-slate-500 max-w-xl mx-auto">
                    Hier ist die Übersicht Ihrer geplanten Renovierungsarbeiten.
                </p>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {/* Left Column - Details */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Objektdaten */}
                    <div className="bg-white border border-slate-200 rounded-2xl p-6">
                        <div className="flex items-center justify-between mb-4">
                            <h4 className="font-bold text-slate-900 flex items-center gap-2">
                                <span className="text-xl">🏠</span>
                                Objektdaten
                            </h4>
                            <button
                                onClick={() => onGoToStep(1)}
                                className="text-sm text-accent hover:underline"
                            >
                                Bearbeiten
                            </button>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                            <div>
                                <p className="text-slate-400">Typ</p>
                                <p className="font-bold text-slate-900">{getPropertyTypeName()}</p>
                            </div>
                            <div>
                                <p className="text-slate-400">Fläche</p>
                                <p className="font-bold text-slate-900">{areaDetails.totalArea} m²</p>
                            </div>
                            <div>
                                <p className="text-slate-400">Räume</p>
                                <p className="font-bold text-slate-900">{areaDetails.roomCount}</p>
                            </div>
                            <div>
                                <p className="text-slate-400">Material</p>
                                <p className="font-bold text-slate-900">{getMaterialClassName()}</p>
                            </div>
                        </div>
                    </div>

                    {/* Leistungen */}
                    <div className="bg-white border border-slate-200 rounded-2xl p-6">
                        <div className="flex items-center justify-between mb-4">
                            <h4 className="font-bold text-slate-900 flex items-center gap-2">
                                <span className="text-xl">📋</span>
                                Ausgewählte Leistungen
                            </h4>
                            <button
                                onClick={() => onGoToStep(3)}
                                className="text-sm text-accent hover:underline"
                            >
                                Bearbeiten
                            </button>
                        </div>
                        <div className="space-y-3">
                            {calculation.breakdown.map((item, idx) => {
                                const service = servicesPricing.find(s => s.id === item.serviceId);
                                return (
                                    <div key={idx} className="flex items-center justify-between py-2 border-b border-slate-100 last:border-0">
                                        <div className="flex items-center gap-3">
                                            <span className="text-xl">{service?.icon}</span>
                                            <div>
                                                <p className="font-medium text-slate-800">{item.serviceName}</p>
                                                {item.itemName && (
                                                    <p className="text-xs text-slate-400">{item.itemName}</p>
                                                )}
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <p className="font-bold text-slate-900">{formatCurrency(item.totalCost)}</p>
                                            <p className="text-xs text-slate-400">{item.quantity} {item.unit}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Zusatzleistungen */}
                    {selectedExtras.length > 0 && (
                        <div className="bg-white border border-slate-200 rounded-2xl p-6">
                            <div className="flex items-center justify-between mb-4">
                                <h4 className="font-bold text-slate-900 flex items-center gap-2">
                                    <span className="text-xl">✨</span>
                                    Zusatzleistungen
                                </h4>
                                <button
                                    onClick={() => onGoToStep(5)}
                                    className="text-sm text-accent hover:underline"
                                >
                                    Bearbeiten
                                </button>
                            </div>
                            <div className="space-y-2">
                                {calculation.extrasBreakdown.map((extra, idx) => (
                                    <div key={idx} className="flex justify-between text-sm py-2 border-b border-slate-100 last:border-0">
                                        <span className="text-slate-600">{extra.name}</span>
                                        <span className="font-medium text-slate-900">{formatCurrency(extra.value)}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Right Column - Price Summary */}
                <div className="lg:col-span-1">
                    <div className="bg-slate-900 text-white rounded-2xl p-6 sticky top-24">
                        <h4 className="text-lg font-bold mb-6">Kostenübersicht</h4>

                        <div className="space-y-3 text-sm mb-6">
                            <div className="flex justify-between">
                                <span className="text-slate-400">Arbeitskosten</span>
                                <span>{formatCurrency(calculation.laborTotal)}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-slate-400">Materialkosten</span>
                                <span>{formatCurrency(calculation.materialTotal)}</span>
                            </div>
                            {(calculation.fixedCostsTotal + calculation.packagesTotal) > 0 && (
                                <div className="flex justify-between">
                                    <span className="text-slate-400">Pauschalleistungen</span>
                                    <span>{formatCurrency(calculation.fixedCostsTotal + calculation.packagesTotal)}</span>
                                </div>
                            )}
                            {calculation.extrasTotal > 0 && (
                                <div className="flex justify-between">
                                    <span className="text-slate-400">Zusatzleistungen</span>
                                    <span>{formatCurrency(calculation.extrasTotal)}</span>
                                </div>
                            )}
                            {calculation.discount > 0 && (
                                <div className="flex justify-between text-green-400">
                                    <span>Mengenrabatt ({Math.round(calculation.discountRate * 100)}%)</span>
                                    <span>-{formatCurrency(calculation.discount)}</span>
                                </div>
                            )}
                        </div>

                        <div className="border-t border-slate-700 pt-4 mb-6">
                            <div className="flex justify-between items-end">
                                <div>
                                    <p className="text-xs text-slate-400">Gesamtkosten</p>
                                    <p className="text-xs text-slate-500">inkl. 19% MwSt.</p>
                                </div>
                                <p className="text-3xl font-bold text-accent">{formatCurrency(calculation.total)}</p>
                            </div>
                            <p className="text-xs text-slate-500 mt-2 text-right">
                                Spanne: {formatCurrency(calculation.priceMin)} - {formatCurrency(calculation.priceMax)}
                            </p>
                        </div>

                        {/* Actions */}
                        <div className="space-y-3">
                            <button
                                onClick={generatePDF}
                                disabled={isGeneratingPdf}
                                className="w-full py-3 bg-accent text-white font-bold rounded-xl hover:bg-amber-700 transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
                            >
                                {isGeneratingPdf ? (
                                    <>
                                        <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                        </svg>
                                        Wird erstellt...
                                    </>
                                ) : (
                                    <>
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                        </svg>
                                        Als PDF speichern
                                    </>
                                )}
                            </button>

                            {pdfError && (
                                <p className="text-xs text-red-400 text-center">{pdfError}</p>
                            )}

                            <a
                                href="/#contact"
                                className="w-full py-3 bg-white text-slate-900 font-bold rounded-xl hover:bg-slate-100 transition-colors flex items-center justify-center gap-2"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                Unverbindlich anfragen
                            </a>

                            <button
                                onClick={onReset}
                                className="w-full py-2 text-slate-400 hover:text-white text-sm transition-colors"
                            >
                                Neue Berechnung starten
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Disclaimer */}
            <div className="max-w-5xl mx-auto bg-slate-50 border border-slate-200 rounded-xl p-4 text-center">
                <p className="text-xs text-slate-500">
                    <strong>Hinweis:</strong> Dies ist eine unverbindliche Kostenschätzung basierend auf durchschnittlichen Marktpreisen in Schleswig-Holstein.
                    Der tatsächliche Preis kann je nach Objektzustand, Zugänglichkeit und individuellen Anforderungen abweichen.
                    Für ein verbindliches Angebot vereinbaren Sie bitte einen kostenlosen Vor-Ort-Termin.
                </p>
            </div>
        </div>
    );
});

SummaryStep.displayName = 'SummaryStep';

export default SummaryStep;
