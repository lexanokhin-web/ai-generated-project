import React, { memo, useCallback, useState } from 'react';
import { propertyTypes, materialClasses, servicesPricing, VAT_RATE } from '../../../data/calculatorPricing';

/**
 * Schritt 6: Zusammenfassung und PDF-Export
 */
const SummaryStep = memo(({
    propertyType,
    areaDetails,
    selectedServices,
    materialClass,
    selectedExtras,
    calculation,
    onReset,
    onGoToStep
}) => {
    const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);
    const [pdfError, setPdfError] = useState(null);

    // Hilfsfunktion: Wandelt UI-Services in detaillierte Angebotspositionen um
    const getExpandedWorkItems = useCallback((allWorkCategories, calculation) => {
        const totalArea = areaDetails.totalArea || 0;
        const roomCountNum = areaDetails.roomCount || 3;
        const roomCountStr = roomCountNum.toFixed(1);
        const wallArea = totalArea * 2.6;
        const bathroomArea = areaDetails.bathroomArea || 0;

        const allPositions = [];

        // 1. Baustelleneinrichtung (Fixer Startwert)
        const beCat = allWorkCategories.find(c => c.id === 'baustelleneinrichtung');
        const hasAsbest = selectedServices.some(s => s.serviceId === 'asbestsanierung');
        const bePos = beCat.positions.find(p => p.id === (hasAsbest ? 'be-asbest' : 'be-standard'));
        allPositions.push({ ...bePos, categoryId: 'baustelleneinrichtung', categoryName: 'Baustelleneinrichtung', quantity: 1, naturalTotal: bePos.pricePerUnit });

        // 2. Abbruch
        const abbruchCat = allWorkCategories.find(c => c.id === 'abbrucharbeiten');
        const addAbbruch = (posId, quantity) => {
            const p = abbruchCat.positions.find(p => p.id === posId);
            if (p) allPositions.push({ ...p, categoryId: 'abbrucharbeiten', categoryName: 'Abbruch', quantity, naturalTotal: quantity * p.pricePerUnit });
        };

        if (selectedServices.some(s => s.serviceId === 'maler-schimmelsanierung')) {
            addAbbruch('tapeten-entfernen', Math.round(wallArea));
            addAbbruch('sockelleisten-entfernen', Math.round(totalArea * 0.85));
        }
        if (selectedServices.some(s => s.serviceId === 'bodenbelagsarbeiten')) {
            addAbbruch('bodenbelag-entfernen', totalArea);
        }
        if (selectedServices.some(s => s.serviceId === 'fliesen-badsanierung')) {
            addAbbruch('fliesen-abbrechen', Math.max(15, bathroomArea * 4));
        }

        // 3. Asbest
        if (selectedServices.some(s => s.serviceId === 'asbestsanierung')) {
            const cat = allWorkCategories.find(c => c.id === 'asbestsanierung');
            cat.positions.forEach(p => {
                const qty = p.unit === 'm²' ? totalArea : (p.unit === 'Stk.' ? 4 : 1);
                allPositions.push({ ...p, categoryId: 'asbest', categoryName: 'Asbestsanierung', quantity: qty, naturalTotal: qty * p.pricePerUnit });
            });
        }

        // 4. Elektro
        if (selectedServices.some(s => s.serviceId === 'elektroarbeiten')) {
            const cat = allWorkCategories.find(c => c.id === 'elektroarbeiten');
            const p1 = cat.positions.find(p => p.id === 'elektroanlage-komplett');
            const price = p1.priceByRooms?.[roomCountStr] || p1.pricePerUnit;
            allPositions.push({ ...p1, categoryId: 'elektro', categoryName: 'E-Mod. komplett', quantity: 1, naturalTotal: price });
            const p2 = cat.positions.find(p => p.id === 'wohnungsverteiler');
            allPositions.push({ ...p2, categoryId: 'elektro', categoryName: 'E-Mod. komplett', quantity: 1, naturalTotal: p2.pricePerUnit });
        }

        // 5. Sanitär Bad
        if (selectedServices.some(s => s.serviceId === 'fliesen-badsanierung')) {
            const cat = allWorkCategories.find(c => c.id === 'sanitaer-bad');
            cat.positions.filter(p => p.id !== 'gastherme-wartung').forEach(p => {
                allPositions.push({ ...p, categoryId: 'sanitaer-bad', categoryName: 'Sanitärarbeiten Badezimmer', quantity: 1, naturalTotal: p.pricePerUnit });
            });
        }

        // 6. Heizung
        if (selectedServices.some(s => s.serviceId === 'heizungsarbeiten')) {
            const cat = allWorkCategories.find(c => c.id === 'heizungsarbeiten');
            cat.positions.forEach(p => {
                const qty = p.unit === 'Stk.' ? (p.id === 'thermostatventile' ? roomCountNum + 2 : 1) : 1;
                allPositions.push({ ...p, categoryId: 'heizung', categoryName: 'Heizungsarbeiten', quantity: qty, naturalTotal: qty * p.pricePerUnit });
            });
        }

        // 7. Fliesen
        if (selectedServices.some(s => s.serviceId === 'fliesen-badsanierung')) {
            const cat = allWorkCategories.find(c => c.id === 'fliesenarbeiten');
            const p = cat.positions.find(p => p.id === 'bad-komplett');
            if (p) allPositions.push({ ...p, categoryId: 'fliesen', categoryName: 'Fliesenarbeiten', quantity: 1, naturalTotal: p.pricePerUnit });
        }

        // 8. Maler
        if (selectedServices.some(s => s.serviceId === 'maler-schimmelsanierung')) {
            const cat = allWorkCategories.find(c => c.id === 'malerarbeiten');
            const p1 = cat.positions.find(p => p.id === 'waende-tapezieren');
            allPositions.push({ ...p1, categoryId: 'maler', categoryName: 'Malerarbeiten', quantity: Math.round(wallArea), naturalTotal: wallArea * p1.pricePerUnit });
            const p2 = cat.positions.find(p => p.id === 'decken-tapezieren');
            allPositions.push({ ...p2, categoryId: 'maler', categoryName: 'Malerarbeiten', quantity: Math.round(totalArea * 0.9), naturalTotal: totalArea * 0.9 * p2.pricePerUnit });
            const p3 = cat.positions.find(p => p.id === 'tueren-lackieren');
            const price = p3.priceByRooms?.[roomCountStr] || p3.pricePerUnit;
            allPositions.push({ ...p3, categoryId: 'maler', categoryName: 'Malerarbeiten', quantity: 1, naturalTotal: price });
        }

        // 11. Boden
        if (selectedServices.some(s => s.serviceId === 'bodenbelagsarbeiten')) {
            const cat = allWorkCategories.find(c => c.id === 'bodenbelagsarbeiten');
            const p1 = cat.positions.find(p => p.id === 'vinyl-designplanken');
            allPositions.push({ ...p1, categoryId: 'boden', categoryName: 'Bodenbelagsarbeiten', quantity: totalArea, naturalTotal: totalArea * p1.pricePerUnit });
        }

        // --- Catch-all für weitere Services ---
        const mappedServiceIds = ['maler-schimmelsanierung', 'bodenbelagsarbeiten', 'fliesen-badsanierung', 'asbestsanierung', 'elektroarbeiten', 'heizungsarbeiten'];
        calculation.breakdown.forEach(item => {
            if (!mappedServiceIds.includes(item.serviceId)) {
                allPositions.push({
                    categoryId: 'diverses',
                    categoryName: 'Zusätzliche Arbeiten',
                    name: item.itemName ? `${item.serviceName} - ${item.itemName}` : item.serviceName,
                    description: ['Fachgerechte Ausführung gemäß Auswahl'],
                    quantity: item.quantity,
                    unit: item.unit,
                    pricePerUnit: item.totalCost / (1 + VAT_RATE) / item.quantity,
                    naturalTotal: item.totalCost / (1 + VAT_RATE)
                });
            }
        });

        // --- GLOBAL RECONCILIATION ---
        // Ziel: Netto-Total PDF === Netto-Total UI (Labor + Pauschalen)
        const uiNettoTotal = calculation.laborTotal / (1 + VAT_RATE);
        const fixedSetupNetto = bePos.pricePerUnit; // Be-Pos ist Netto

        const otherPositions = allPositions.filter(p => p.categoryId !== 'baustelleneinrichtung');
        const otherNaturalSum = otherPositions.reduce((sum, p) => sum + p.naturalTotal, 0); // Netto-Summe

        const targetOtherNetto = uiNettoTotal - fixedSetupNetto;
        const globalScalingFactor = (otherNaturalSum > 0 && targetOtherNetto > 0) ? (targetOtherNetto / otherNaturalSum) : 1;

        const finalPositions = allPositions.map(p => {
            const factor = p.categoryId === 'baustelleneinrichtung' ? 1 : globalScalingFactor;
            const nettoTotal = p.naturalTotal * factor;

            return {
                ...p,
                pricePerUnit: (p.pricePerUnit || (p.naturalTotal / p.quantity)) * factor, // Netto
                total: nettoTotal,
                nettoTotal: nettoTotal
            };
        });

        const grouped = [];
        finalPositions.forEach(p => {
            let cat = grouped.find(g => g.id === p.categoryId);
            if (!cat) {
                cat = { id: p.categoryId, name: p.categoryName, positions: [] };
                grouped.push(cat);
            }
            cat.positions.push(p);
        });

        return grouped;
    }, [areaDetails, selectedServices]);

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
        if (isGeneratingPdf) return;
        setIsGeneratingPdf(true);
        setPdfError(null);

        try {
            const { default: jsPDF } = await import('jspdf');
            const { allWorkCategories } = await import('../../../data/serviceWorkItems'); // VAT_RATE is imported from calculatorPricing

            const doc = new jsPDF('p', 'mm', 'a4');
            const pageWidth = doc.internal.pageSize.getWidth();
            const pageHeight = doc.internal.pageSize.getHeight();
            const margin = 20;
            const contentWidth = pageWidth - (margin * 2);

            // Farben & Styles
            const colors = {
                primary: [30, 41, 59],   // Slate-800
                accent: [180, 83, 9],    // Amber-700
                gray: [100, 116, 139],   // Slate-500
                lightGray: [241, 245, 249] // Slate-100
            };

            const expandedItems = getExpandedWorkItems(allWorkCategories, calculation);
            let y = 100; // Start auf Seite 1 (nach dem großen Header)
            let currentPage = 1;
            let currentCarriage = 0; // Übertrag
            const offerNo = `A-${Math.floor(100 + Math.random() * 900)}`;
            const customerNo = `10${Math.floor(100 + Math.random() * 900)}`;
            const projectNo = `P-${String(Math.floor(Math.random() * 99999)).padStart(5, '0')}`;

            // Dynamic Title Logic
            const uniqueServiceIds = [...new Set(selectedServices.map(s => s.serviceId))];
            let offerTitle = 'Wohnungskomplettmodernisierung';
            if (uniqueServiceIds.length === 1) {
                const service = servicesPricing.find(s => s.id === uniqueServiceIds[0]);
                if (service) offerTitle = service.name;
            }

            const categoryTotals = [];

            // Helper: Formatierung
            const formatNum = (num) => new Intl.NumberFormat('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(num);

            // Hilfsfunktion: Footer zeichnen
            const drawFooter = () => {
                doc.setFontSize(7);
                doc.setFont('helvetica', 'normal');
                doc.setTextColor(...colors.gray);
                const footerY = pageHeight - 12;

                doc.text('Geschäftsführer', margin, footerY);
                doc.text('Michael Winter', margin, footerY + 4);

                doc.text(`USt.-ID: DE362225547`, margin + 35, footerY);
                doc.text(`Steuernummer: 27/284/74694`, margin + 35, footerY + 4);

                doc.text('Kreissparkasse Herzogtum Lauenburg', margin + 90, footerY);
                doc.text('IBAN  DE95 2305 2750 0081 9208 11', margin + 90, footerY + 4);
                doc.text('BIC    NOLADE21RZB', margin + 90, footerY + 8);

                doc.setDrawColor(...colors.lightGray);
                doc.line(margin, footerY - 5, pageWidth - margin, footerY - 5);
            };

            // Hilfsfunktion: Header zeichnen
            const drawHeader = (pageNum) => {
                // Logo rechts oben
                const logoWidth = pageNum === 1 ? 65 : 50;
                const logoHeight = pageNum === 1 ? 26 : 20;
                try {
                    doc.addImage('/images/logo.png', 'PNG', pageWidth - margin - logoWidth, 10, logoWidth, logoHeight);
                } catch {
                    console.warn('Logo could not be loaded in PDF');
                }

                if (pageNum === 1) {
                    // Firmendaten rechts unter dem Logo
                    doc.setFontSize(8);
                    doc.setFont('helvetica', 'normal');
                    doc.setTextColor(...colors.primary);
                    const rightX = pageWidth - margin;
                    let companyY = 40; // Erhöht von 32 wegen größerem Logo
                    doc.text('Winter & Usselmann GbR', rightX, companyY, { align: 'right' });
                    doc.text('Jägerstraße 24a', rightX, companyY + 4, { align: 'right' });
                    doc.text('23909 Ratzeburg', rightX, companyY + 8, { align: 'right' });
                    doc.text('www.wintuss.de', rightX, companyY + 12, { align: 'right' });
                    doc.text('Telefon 0151 - 413 894 42', rightX, companyY + 16, { align: 'right' });
                    doc.text('E-Mail info@wintuss.de', rightX, companyY + 20, { align: 'right' });

                    doc.setFont('helvetica', 'bold');
                    doc.text('Ansprechperson', rightX, companyY + 28, { align: 'right' });
                    doc.setFont('helvetica', 'normal');
                    doc.text('Michael Winter', rightX, companyY + 32, { align: 'right' });
                    doc.text('E-Mail m.winter@wintuss.de', rightX, companyY + 36, { align: 'right' });

                    // Adressat (PropCo / MVGM) - Ausgerichtet auf Höhe der Firmendaten (companyY = 40)
                    doc.setFontSize(7);
                    doc.text('Winter & Usselmann GbR | Jägerstraße 24a | 23909 Ratzeburg', margin, 42);

                    doc.setFontSize(9);
                    doc.text('PropCo 1 Diamond S.a r.l. c/o MVGM Property', margin, 48);
                    doc.text('Management Dt. GmbH PF 73 01 22 06045 Halle', margin, 52);
                    doc.text('(Saale)', margin, 56);

                    doc.setFontSize(8);
                    doc.text('Leistungsempfänger: ProCo 1 Diamond S.á r.l. 1, Rue', margin, 62);
                    doc.text('du Chateau L- 5374 Munsbach, LUXEMBURG', margin, 66);

                    // Angebotsdaten
                    doc.setFontSize(14);
                    doc.setFont('helvetica', 'bold');
                    doc.text(`Angebot - ${offerNo}`, margin, 90);

                    doc.setFontSize(9);
                    doc.setFont('helvetica', 'normal');
                    doc.text('Betreff', margin, 100);
                    doc.setFont('helvetica', 'bold');
                    doc.text(`Angebot - ${offerTitle}`, margin, 105);

                    doc.setFont('helvetica', 'normal');
                    doc.text('Kunde', pageWidth - 70, 100);
                    doc.text(customerNo, pageWidth - 70, 105);
                    doc.text('Projekt', pageWidth - 50, 100);
                    doc.text(`${projectNo}`, pageWidth - 50, 105);
                    doc.text('Datum', pageWidth - margin, 100, { align: 'right' });
                    doc.text(new Date().toLocaleDateString('de-DE'), pageWidth - margin, 105, { align: 'right' });

                    // Einleitungstext
                    doc.setFontSize(10);
                    const introText = [
                        'Sehr geehrte Damen und Herren,',
                        'wir freuen uns, dass Sie sich von der Qualität unserer Arbeit überzeugen möchten.',
                        'Im Anhang übersenden wir Ihnen dazu unser Angebot. Dieses lautet wie folgt:'
                    ];
                    doc.text(introText, margin, 118);

                    y = 140; // Startposition Content auf Seite 1
                } else {
                    // FOLGESEITEN: Kompakter Header
                    doc.setFontSize(10);
                    doc.setFont('helvetica', 'bold');
                    doc.setTextColor(...colors.primary);
                    doc.text(`Angebot - ${offerNo}`, margin, 15);
                    doc.setFontSize(8);
                    doc.setFont('helvetica', 'normal');
                    doc.text(`Angebot - ${offerTitle}`, margin, 20);
                    doc.text(`vom ${new Date().toLocaleDateString('de-DE')}`, margin, 24);

                    y = 35;
                }

                // Tabellen-Header (außer auf Summary Pages)
                doc.setFillColor(245, 245, 245);
                doc.rect(margin, y, contentWidth, 8, 'F');
                doc.setFontSize(9);
                doc.setFont('helvetica', 'bold');
                doc.setTextColor(50, 50, 50);
                doc.text('Pos.', margin + 2, y + 5.5);
                doc.text('Menge', margin + 18, y + 5.5, { align: 'right' });
                doc.text('Einheit', margin + 32, y + 5.5);
                doc.text('Beschreibung', margin + 48, y + 5.5);
                doc.text('Preis', pageWidth - margin - 25, y + 5.5, { align: 'right' });
                doc.text('Gesamt', pageWidth - margin - 2, y + 5.5, { align: 'right' });

                y += 12;

                if (pageNum > 1) {
                    // Übertrag von Vorseite
                    doc.setFont('helvetica', 'bold');
                    doc.text('Übertrag:', pageWidth - margin - 25, y, { align: 'right' });
                    doc.text(`${formatNum(currentCarriage)}`, pageWidth - margin - 2, y, { align: 'right' });
                    y += 10;
                }
            };

            const checkPageBreak = (neededHeight) => {
                if (y + neededHeight > pageHeight - 25) {
                    // Abschluss Übertrag auf alter Seite
                    doc.setFont('helvetica', 'bold');
                    doc.setFontSize(9);
                    doc.text('Übertrag auf nächste Seite:', pageWidth - margin - 25, pageHeight - 22, { align: 'right' });
                    doc.text(`${formatNum(currentCarriage)}`, pageWidth - margin - 2, pageHeight - 22, { align: 'right' });

                    drawFooter();
                    doc.addPage();
                    currentPage++;
                    drawHeader(currentPage);
                    return true;
                }
                return false;
            };

            // INITIAL START
            drawHeader(1);

            // HAUPT-LOOP ÜBER KATEGORIEN
            expandedItems.forEach((cat, catIdx) => {
                const catNum = catIdx + 1;
                let categorySum = 0;

                // Orphan protection: Check if header AND first item fit
                const firstPos = cat.positions[0];
                let headerCheckH = 15;
                if (firstPos) {
                    // Set font settings to match actual description rendering for accurate height calculation
                    doc.setFont('helvetica', 'normal');
                    doc.setFontSize(8.5);
                    const firstDescLines = doc.splitTextToSize(firstPos.description.join('\n'), contentWidth - 85);
                    headerCheckH += 12 + (firstDescLines.length * 4);
                }
                checkPageBreak(headerCheckH);

                doc.setFont('helvetica', 'bold');
                doc.setFontSize(10);
                doc.setTextColor(...colors.primary);
                doc.text(`${catNum}.`, margin + 2, y);
                doc.text(cat.name || cat.category, margin + 48, y);
                y += 10;

                cat.positions.forEach((pos, posIdx) => {
                    const posNum = `${catNum}.${posIdx + 1}.`;
                    const descriptionLines = doc.splitTextToSize(pos.description.join('\n'), contentWidth - 85);
                    const neededH = 12 + (descriptionLines.length * 4); // Tighter fit

                    checkPageBreak(neededH);

                    doc.setFont('helvetica', 'normal');
                    doc.setFontSize(9);
                    doc.setTextColor(...colors.primary);
                    doc.text(posNum, margin + 2, y);
                    doc.text(formatNum(pos.quantity), margin + 18, y, { align: 'right' });
                    doc.text(pos.unit, margin + 32, y);

                    // Titel der Position unterstrichen
                    doc.setFont('helvetica', 'bold');
                    const titleWidth = doc.getTextWidth(pos.name);
                    doc.text(pos.name, margin + 48, y);
                    doc.line(margin + 48, y + 0.6, margin + 48 + titleWidth, y + 0.6);

                    doc.text(formatNum(pos.pricePerUnit), pageWidth - margin - 25, y, { align: 'right' });
                    doc.text(formatNum(pos.total), pageWidth - margin - 2, y, { align: 'right' });

                    y += 6;

                    // Beschreibung
                    doc.setFont('helvetica', 'normal');
                    doc.setFontSize(8.5);
                    doc.setTextColor(...colors.gray);
                    doc.text(descriptionLines, margin + 48, y);

                    y += (descriptionLines.length * 4) + 8;
                    currentCarriage += pos.total;
                    categorySum += pos.total;
                });

                // Kategorie-Summe
                checkPageBreak(12);
                doc.setFont('helvetica', 'bold');
                doc.setTextColor(...colors.primary);
                doc.text(`Summe ${catNum}. ${cat.name || cat.category}`, margin + 48, y);
                doc.text(`${formatNum(categorySum)}`, pageWidth - margin - 2, y, { align: 'right' });
                y += 15;

                categoryTotals.push({ num: catNum, name: cat.name || cat.category, total: categorySum });
            });

            // FINAL SUMMARY PAGE (Zusammenstellung)
            doc.addPage();
            currentPage++;
            drawHeader(currentPage);

            y += 20;
            const totalNetto = currentCarriage;
            const totalVAT = totalNetto * VAT_RATE;
            const totalBrutto = totalNetto + totalVAT;

            doc.setFontSize(10);
            doc.setFont('helvetica', 'bold');
            doc.text('GESAMTÜBERSICHT', margin, y);
            y += 10;

            doc.setFont('helvetica', 'normal');
            doc.text('Summe der Arbeitsleistungen (Netto):', margin, y);
            doc.text(formatNum(totalNetto) + ' €', pageWidth - margin - 2, y, { align: 'right' });
            y += 6;

            doc.text(`Umsatzsteuer (${Math.round(VAT_RATE * 100)} %):`, margin, y);
            doc.text(formatNum(totalVAT) + ' €', pageWidth - margin - 2, y, { align: 'right' });
            y += 2;

            doc.setDrawColor(200, 200, 200);
            doc.line(pageWidth - 80, y, pageWidth - margin, y);
            y += 8;

            doc.setFillColor(...colors.primary);
            doc.rect(margin, y - 5, contentWidth, 10, 'F');
            doc.setTextColor(255, 255, 255);
            doc.setFontSize(11);
            doc.setFont('helvetica', 'bold');
            doc.text('GESAMTBETRAG (Brutto):', margin + 5, y + 2);
            doc.text(formatNum(totalBrutto) + ' €', pageWidth - margin - 5, y + 2, { align: 'right' });

            y += 20;
            doc.setTextColor(...colors.gray);
            doc.setFontSize(9);
            doc.setFont('helvetica', 'italic');
            doc.text('Hinweis: Dieses Angebot bezieht sich rein auf die Arbeitsleistung.', margin, y);
            y += 5;
            doc.text('Materialkosten sind geschätzt und nicht Bestandteil dieses Angebots.', margin, y);
            y += 10;

            y += 20;
            doc.setTextColor(...colors.primary);
            doc.setFontSize(9);
            doc.setFont('helvetica', 'normal');
            doc.text('Zahlungsbedingungen:', margin, y);
            y += 5;
            doc.text('Die Zahlungsfrist nach Rechnungsstellung beträgt 7 Tage.', margin, y);

            y += 15;
            doc.setTextColor(...colors.accent);
            doc.setFont('helvetica', 'bold');
            doc.text('WICHTIGER HINWEIS ZU MATERIALKOSTEN:', margin, y);
            y += 5;
            doc.setTextColor(...colors.gray);
            doc.setFont('helvetica', 'normal');
            doc.setFontSize(8);
            const disclaimerLines = doc.splitTextToSize('Die oben aufgeführten Preise beziehen sich auf die Arbeitsleistung. In der Online-Kalkulation angezeigte Materialkosten sind Schätzwerte zur Orientierung und nicht Bestandteil dieses Angebots. Diese dienen lediglich der Budgetplanung.', contentWidth);
            doc.text(disclaimerLines, margin, y);

            y += (disclaimerLines.length * 4) + 10;
            doc.setFontSize(9);
            doc.setTextColor(...colors.primary);
            doc.text('Wir freuen uns auf eine gute Zusammenarbeit!', margin, y);

            y += 15;
            doc.setFont('helvetica', 'bold');
            doc.text('Winter & Usselmann GbR', margin, y);
            y += 5;
            doc.setFont('helvetica', 'normal');
            doc.text('Dieses Angebot ist 14 Tage gültig.', margin, y);
            y += 20;
            doc.setFontSize(9);
            doc.setFont('helvetica', 'normal');
            doc.text('Die Zahlungsfrist nach Rechnungsstellung beträgt 7 Tage.', margin, y);
            y += 10;
            doc.setFont('helvetica', 'italic');
            doc.text('Ist dieses Angebot für Sie von Interesse? Dann freuen wir uns, wenn Sie uns den Auftrag erteilen.', margin, y);
            y += 10;
            doc.setFont('helvetica', 'bold');
            doc.text('Dieses Schreiben wurde maschinell erstellt und ist deshalb auch ohne Unterschrift gültig.', margin, y);
            y += 10;
            doc.setFont('helvetica', 'normal');
            doc.text('Falls Ihnen das Angebot zusagt, senden Sie es bitte unterschrieben an uns zurück.', margin, y);
            y += 10;
            doc.text('Mit dem Angebot bin ich einverstanden.', margin, y);

            y += 30;
            doc.line(margin, y, margin + 70, y);
            doc.text('Ort, Datum, Unterschrift Auftraggeber', margin, y + 5);

            drawFooter(currentPage);

            // ÜBERSICHT DER TITEL (Letzte Seite)
            doc.addPage();
            currentPage++;
            drawHeader(currentPage);

            y = 50;
            doc.setFontSize(12);
            doc.setFont('helvetica', 'bold');
            doc.text('Übersicht der Titel', margin, y);
            y += 15;

            categoryTotals.forEach(ct => {
                doc.setFontSize(10);
                doc.setFont('helvetica', 'normal');
                doc.text(`${ct.num}.`, margin + 2, y);
                doc.text(ct.name, margin + 25, y);
                doc.text(`${formatNum(ct.total)} €`, pageWidth - margin - 2, y, { align: 'right' });
                y += 8;
            });

            drawFooter();

            // POST-PROCESSING: "Seite X von Y" hinzufügen
            const totalPages = doc.internal.getNumberOfPages();
            for (let i = 1; i <= totalPages; i++) {
                doc.setPage(i);
                doc.setFontSize(7);
                doc.setFont('helvetica', 'normal');
                doc.setTextColor(...colors.gray);
                doc.text(`Seite ${i} von ${totalPages}`, pageWidth - margin, pageHeight - 8, { align: 'right' });
            }

            doc.save(`Angebot_Winter_Usselmann_${new Date().toISOString().split('T')[0]}.pdf`);

        } catch (error) {
            console.error('PDF Fehler:', error);
            setPdfError('PDF konnte nicht erstellt werden. Bitte versuchen Sie es erneut.');
        } finally {
            setIsGeneratingPdf(false);
        }
    }, [getExpandedWorkItems, calculation, isGeneratingPdf, selectedServices]);

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
                                    <p className="text-xs text-slate-500">inkl. {Math.round(VAT_RATE * 100)}% MwSt.</p>
                                </div>
                                <p className="text-3xl font-bold text-accent">{formatCurrency(calculation.total)}</p>
                            </div>
                            <p className="text-xs text-slate-500 mt-2 text-right">
                                Spanne: {formatCurrency(calculation.priceMin)} - {formatCurrency(calculation.priceMax)}
                            </p>
                        </div>

                        {/* Actions */}
                        <div className="space-y-3">
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
