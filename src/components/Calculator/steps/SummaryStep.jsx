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
            const { default: jsPDF } = await import('jspdf');
            const doc = new jsPDF('p', 'mm', 'a4');
            const pageWidth = doc.internal.pageSize.getWidth();
            const pageHeight = doc.internal.pageSize.getHeight();
            const margin = 20;
            const contentWidth = pageWidth - (margin * 2);
            let y = 30;

            // Farben definieren
            const colors = {
                primary: [15, 23, 42],   // Slate 900
                accent: [245, 158, 11],  // Amber 500
                gray: [100, 116, 139],   // Slate 500
                lightGray: [248, 250, 252], // Slate 50
                border: [226, 232, 240]  // Slate 200
            };

            // Hilfsfunktion: Linie zeichnen
            const drawDivider = (currentY, weight = 0.2, color = colors.border) => {
                doc.setDrawColor(...color);
                doc.setLineWidth(weight);
                doc.line(margin, currentY, pageWidth - margin, currentY);
            };

            // 1. Header & Logo
            try {
                // Versuche Logo zu laden
                const logoUrl = '/images/logo.png';
                doc.addImage(logoUrl, 'PNG', margin, 15, 25, 25);
            } catch (e) {
                console.warn('Logo could not be loaded for PDF:', e);
                // Fallback: Text Logo
                doc.setFontSize(18);
                doc.setFont('helvetica', 'bold');
                doc.setTextColor(...colors.accent);
                doc.text('W&U', margin, 25);
            }

            // Company Info (Rechtsbündig)
            doc.setFontSize(9);
            doc.setFont('helvetica', 'bold');
            doc.setTextColor(...colors.primary);
            doc.text('Winter & Usselmann GbR', pageWidth - margin, 20, { align: 'right' });

            doc.setFontSize(8);
            doc.setFont('helvetica', 'normal');
            doc.setTextColor(...colors.gray);
            const addressLines = [
                'Jägerstraße 24a',
                '23909 Ratzeburg',
                'Tel: 0151-41389442',
                'www.winter-usselmann.de'
            ];
            addressLines.forEach((line, i) => {
                doc.text(line, pageWidth - margin, 25 + (i * 4), { align: 'right' });
            });

            y = 55;

            // 2. Titel & Datum
            doc.setDrawColor(...colors.accent);
            doc.setLineWidth(1.5);
            doc.line(margin, y, margin + 40, y);
            y += 10;

            doc.setFontSize(24);
            doc.setFont('helvetica', 'bold');
            doc.setTextColor(...colors.primary);
            doc.text('KOSTENSCHÄTZUNG', margin, y);

            const datum = new Date().toLocaleDateString('de-DE', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
            doc.setFontSize(10);
            doc.setFont('helvetica', 'normal');
            doc.setTextColor(...colors.gray);
            doc.text(`Datum: ${datum}`, pageWidth - margin, y, { align: 'right' });
            y += 15;

            // 3. Objektdaten Section
            doc.setFillColor(...colors.lightGray);
            doc.roundedRect(margin, y, contentWidth, 35, 3, 3, 'F');

            doc.setFontSize(12);
            doc.setFont('helvetica', 'bold');
            doc.setTextColor(...colors.primary);
            doc.text('PROJEKT-DETAILS', margin + 5, y + 8);

            doc.setFontSize(9);
            doc.setFont('helvetica', 'normal');
            doc.setTextColor(...colors.gray);

            const col1 = margin + 5;
            const col2 = margin + 60;
            const rowStart = y + 16;

            // Linke Spalte
            doc.text('Objekttyp:', col1, rowStart);
            doc.setFont('helvetica', 'bold');
            doc.setTextColor(...colors.primary);
            doc.text(getPropertyTypeName(), col1 + 25, rowStart);

            doc.setFont('helvetica', 'normal');
            doc.setTextColor(...colors.gray);
            doc.text('Fläche:', col1, rowStart + 8);
            doc.setFont('helvetica', 'bold');
            doc.setTextColor(...colors.primary);
            doc.text(`${areaDetails.totalArea} m²`, col1 + 25, rowStart + 8);

            // Rechte Spalte
            doc.setFont('helvetica', 'normal');
            doc.setTextColor(...colors.gray);
            doc.text('Räume:', col2, rowStart);
            doc.setFont('helvetica', 'bold');
            doc.setTextColor(...colors.primary);
            doc.text(`${areaDetails.roomCount}`, col2 + 25, rowStart);

            doc.setFont('helvetica', 'normal');
            doc.setTextColor(...colors.gray);
            doc.text('Qualität:', col2, rowStart + 8);
            doc.setFont('helvetica', 'bold');
            doc.setTextColor(...colors.primary);
            doc.text(getMaterialClassName(), col2 + 25, rowStart + 8);

            y += 45;

            // 4. Leistungen Tabelle
            doc.setFontSize(12);
            doc.setFont('helvetica', 'bold');
            doc.setTextColor(...colors.primary);
            doc.text('LEISTUNGSÜBERSICHT', margin, y);
            y += 4;
            drawDivider(y, 0.5, colors.primary);
            y += 8;

            // Table Header
            doc.setFontSize(9);
            doc.setFont('helvetica', 'bold');
            doc.setTextColor(...colors.gray);
            doc.text('Beschreibung', margin + 2, y);
            doc.text('Menge', margin + 100, y);
            doc.text('Einheit', margin + 120, y);
            doc.text('Gesamt', pageWidth - margin - 2, y, { align: 'right' });
            y += 4;
            drawDivider(y);
            y += 8;

            const drawServiceItem = (name, subname, qty, unit, price) => {
                if (y > 250) {
                    doc.addPage();
                    y = 30;
                    // Repeat Header on new page
                    doc.setFontSize(9);
                    doc.setFont('helvetica', 'bold');
                    doc.setTextColor(...colors.gray);
                    doc.text('Beschreibung', margin + 2, y);
                    doc.text('Menge', margin + 100, y);
                    doc.text('Einheit', margin + 120, y);
                    doc.text('Gesamt', pageWidth - margin - 2, y, { align: 'right' });
                    y += 4;
                    drawDivider(y);
                    y += 8;
                }

                doc.setFontSize(9);
                doc.setFont('helvetica', 'bold');
                doc.setTextColor(...colors.primary);
                doc.text(name, margin + 2, y);

                if (subname) {
                    doc.setFontSize(8);
                    doc.setFont('helvetica', 'normal');
                    doc.setTextColor(...colors.gray);
                    doc.text(subname, margin + 2, y + 4);
                }

                doc.setFontSize(9);
                doc.setFont('helvetica', 'normal');
                doc.setTextColor(...colors.primary);
                doc.text(`${qty}`, margin + 100, y);
                doc.text(`${unit}`, margin + 120, y);
                doc.text(formatCurrency(price), pageWidth - margin - 2, y, { align: 'right' });

                y += subname ? 12 : 8;
                drawDivider(y - 4);
                y += 4;
            };

            calculation.breakdown.forEach((item) => {
                drawServiceItem(item.serviceName, item.itemName, item.quantity, item.unit, item.totalCost);
            });

            if (selectedExtras.length > 0) {
                y += 5;
                doc.setFontSize(10);
                doc.setFont('helvetica', 'bold');
                doc.setTextColor(...colors.accent);
                doc.text('Zusatzleistungen', margin + 2, y);
                y += 8;

                calculation.extrasBreakdown.forEach((extra) => {
                    drawServiceItem(extra.name, null, 1, 'Psch.', extra.value);
                });
            }

            // 5. Zusammenfassung
            if (y > 220) {
                doc.addPage();
                y = 30;
            } else {
                y += 10;
            }

            const summaryWidth = 80;
            const summaryX = pageWidth - margin - summaryWidth;

            doc.setFillColor(...colors.lightGray);
            doc.roundedRect(summaryX, y, summaryWidth, 55, 2, 2, 'F');

            let summaryY = y + 8;
            const rowHeight = 6;

            const drawSummaryRow = (label, value, isTotal = false, isDiscount = false) => {
                doc.setFontSize(isTotal ? 11 : 9);
                doc.setFont('helvetica', isTotal ? 'bold' : 'normal');

                if (isDiscount) doc.setTextColor(0, 128, 0);
                else doc.setTextColor(...colors.primary);

                doc.text(label, summaryX + 5, summaryY);
                doc.text(value, pageWidth - margin - 5, summaryY, { align: 'right' });
                summaryY += rowHeight;
            };

            drawSummaryRow('Arbeitskosten:', formatCurrency(calculation.laborTotal));
            drawSummaryRow('Materialkosten:', formatCurrency(calculation.materialTotal));

            if (calculation.extrasTotal > 0) {
                drawSummaryRow('Zusatzleistungen:', formatCurrency(calculation.extrasTotal));
            }

            if (calculation.discount > 0) {
                drawSummaryRow('Mengenrabatt:', `-${formatCurrency(calculation.discount)}`, false, true);
            }

            summaryY += 2;
            doc.setDrawColor(...colors.border);
            doc.line(summaryX + 5, summaryY, pageWidth - margin - 5, summaryY);
            summaryY += 8;

            doc.setFontSize(12);
            doc.setFont('helvetica', 'bold');
            doc.setTextColor(...colors.accent);
            doc.text('GESAMT NETTO:', summaryX + 5, summaryY);
            doc.text(formatCurrency(calculation.total), pageWidth - margin - 5, summaryY, { align: 'right' });

            y += 65;

            // 6. Disclaimer & Footer
            doc.setFontSize(8);
            doc.setFont('helvetica', 'italic');
            doc.setTextColor(...colors.gray);
            const notice = 'Hinweis: Dies ist eine unverbindliche Kostenschätzung basierend auf Ihren Angaben. Ein verbindliches Festpreisangebot erstellen wir Ihnen gerne nach einer persönlichen Vor-Ort-Besichtigung.';
            const splitNotice = doc.splitTextToSize(notice, contentWidth);
            doc.text(splitNotice, margin, y);

            // Footer (Fixiert am Seitenende)
            doc.setFontSize(7);
            doc.setFont('helvetica', 'normal');
            doc.setTextColor(...colors.gray);
            const footerText = 'Winter & Usselmann GbR | Jägerstraße 24a, 23909 Ratzeburg | St.-Nr: 27/280/12345 | Finanzamt Ratzeburg';
            doc.text(footerText, pageWidth / 2, pageHeight - 10, { align: 'center' });
            doc.text(`Seite 1 von 1`, pageWidth - margin, pageHeight - 10, { align: 'right' });

            // PDF speichern
            doc.save(`Kostenschaetzung_${datum.replace(/\s/g, '_')}.pdf`);

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
