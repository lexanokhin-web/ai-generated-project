/**
 * Central Price Configuration
 * All prices are Netto (excluding 19% VAT) as per offer document
 */

export const laborPrices = {
    // 1. BAUSTELLENEINRICHTUNG
    beStandard: 350.00,
    beAsbest: 450.00,

    // 2. ABBRUCHARBEITEN
    tapetenEntfernen: 4.90,
    sockelleistenEntfernen: 4.50,
    gardinenbretterEntfernen: 15.00,
    kuecheEntsorgen: 550.00,
    bodenbelagEntfernen: 8.50,
    fliesenAbbrechen: 18.50,

    // 3. ASBESTSANIERUNG
    vinylAsbestAufnehmen: 13.50,
    bitumenkleberSchleifen: 25.50,
    asbestFensterbank: 149.75,
    ausgleichsmasse: 9.50,

    // 4. ELEKTROINSTALLATIONSARBEITEN
    elektroAnlagePauschal: 4875.03, // (3.0 Zi base)
    elektroAnlageByRooms: {
        '2.0': 3850.00,
        '2.5': 4200.00,
        '3.0': 4875.03,
        '3.5': 5400.00,
        '4.0': 5950.00,
        '4.5': 6500.00,
        '5.0': 7200.00
    },
    wohnungsverteiler: 839.16,
    taeDose: 29.75,
    multimediaDose: 37.50,
    innensprechstelle: 212.99,
    steckdoseSchalter: 45.00,
    lichtauslass: 55.00,

    // 5. SANITÄRARBEITEN BADEZIMMER
    sanitaerDemontage: 350.00,
    grundinstallationBad: 1750.00,
    wcWandhaengend: 600.00,
    waschtisch: 600.00,
    duschwanne: 800.00,
    badewanne: 1250.00,
    duschkabine: 1100.00,
    wasserzaehler: 485.50,
    gasthermeWartung: 375.50,

    // 6. SANITÄRARBEITEN KÜCHE
    kuechenanschluesse: 490.00,
    spuelenarmatur: 175.00,

    // 7. HEIZUNGSARBEITEN
    handtuchHeizkoerper: 850.00,
    thermostatkopf: 39.85,
    heizkoerperAustausch: 485.00,
    fussbodenheizung: 65.00,

    // 8. FLIESENARBEITEN 
    badFliesenKomplett: 4890.00,
    badFliesenBySize: {
        'bis5': 4890.00,
        'bis8': 6200.00,
        'bis12': 7800.00
    },
    kuecheFliesenspiegel: 950.00,
    bodenfliesen: 75.00,
    wandfliesen: 85.00,

    // 9. MALER- & LACKIERARBEITEN
    waendeTapezierenStreichen: 21.90,
    waendeStreichen: 12.50,
    deckenTapezierenStreichen: 22.17,
    waendeSpachtelnQ3: 19.35,
    tuerenZargenLackierenPauschal: 590.00,
    tuerenZargenLackierenByRooms: {
        '2.0': 420.00,
        '2.5': 490.00,
        '3.0': 590.00,
        '3.5': 680.00,
        '4.0': 780.00,
        '4.5': 890.00,
        '5.0': 990.00
    },
    heizkoerperLackieren: 77.50,
    eingangstuerLackieren: 110.25,

    // 10. TISCHLER- & FENSTERARBEITEN
    fensterWartungPauschal: 320.00,
    fensterWartungByRooms: {
        '2.0': 240.00,
        '2.5': 280.00,
        '3.0': 320.00,
        '3.5': 360.00,
        '4.0': 400.00,
        '4.5': 450.00,
        '5.0': 500.00
    },
    fensterbankMdf: 175.45,
    fenstergriffe: 15.90,
    silikonErneuernPauschal: 220.00,
    silikonErneuernByRooms: {
        '2.0': 160.00,
        '2.5': 190.00,
        '3.0': 220.00,
        '3.5': 250.00,
        '4.0': 280.00,
        '4.5': 320.00,
        '5.0': 360.00
    },
    innentuerErneuern: 650.00,

    // 11. BODENBELAGSARBEITEN
    designbodenVinylplanken: 64.90,
    sockelleistenMontage: 12.50,
    laminatVerlegen: 42.00,
    parkettVerlegen: 85.00,
    estricharbeiten: 32.00,

    // 12. TROCKENBAU
    trennwandEinfach: 55.00,
    trennwandSchallschutz: 78.00,
    abgehaengteDecke: 68.00,
    vorwandinstallation: 72.00,

    // 13. PUTZARBEITEN
    innenputzKalkzement: 35.00,
    aussenputz: 65.00,
    sanierputz: 85.00,

    // 14. KÜCHENMONTAGE
    kuecheZeileMontage: 1200.00,
    kuecheLFormMontage: 1650.00,
    einbauschrankMass: 850.00
};

export const vatRate = 0.19;
