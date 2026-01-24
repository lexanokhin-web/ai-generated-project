import { laborPrices } from './priceConfig';

/**
 * Preisdaten für den Renovierungskostenrechner
 * Marktpreise für Schleswig-Holstein (Stand: 2024/2025)
 * Alle Preise inkl. 19% MwSt.
 */

// Objekttypen mit Koeffizienten
export const propertyTypes = [
    {
        id: 'apartment',
        name: 'Wohnung',
        description: 'Mietwohnung oder Eigentumswohnung',
        coefficient: 1.0,
        icon: '🏢'
    },
    {
        id: 'house',
        name: 'Einfamilienhaus-Sanierung',
        description: 'Freistehendes Haus oder Doppelhaushälfte',
        coefficient: 1.15,
        icon: '🏠'
    },
    {
        id: 'office',
        name: 'Gewerbe / Büro',
        description: 'Büroräume, Praxen oder Ladenflächen',
        coefficient: 1.25,
        icon: '🏬'
    },
    {
        id: 'newBuilding',
        name: 'Neubau',
        description: 'Erstbezug oder Rohbau-Ausbau',
        coefficient: 0.85,
        icon: '🏗️'
    }
];

// Materialklassen mit Preismultiplikatoren
export const materialClasses = [
    {
        id: 'economy',
        name: 'Economy',
        description: 'Bewährte Standardmaterialien',
        coefficient: 0.75,
        examples: 'Standard-Fliesen, Laminat, Dispersionsfarbe'
    },
    {
        id: 'standard',
        name: 'Standard',
        description: 'Gutes Preis-Leistungs-Verhältnis',
        coefficient: 1.0,
        examples: 'Markenprodukte, Vinyl-Design, hochwertige Farben'
    },
    {
        id: 'premium',
        name: 'Premium',
        description: 'Hochwertige Markenprodukte',
        coefficient: 1.5,
        examples: 'Feinsteinzeug, Parkett, Silikonharzfarbe'
    },
    {
        id: 'luxury',
        name: 'Exklusiv',
        description: 'Exklusive Designer-Materialien',
        coefficient: 2.2,
        examples: 'Naturstein, Massivholz, Spezialoberflächen'
    }
];

// Dienstleistungen mit Preisen (€ pro Einheit, inkl. MwSt.)
// Preise basieren auf durchschnittlichen Marktpreisen in Schleswig-Holstein
export const servicesPricing = [
    {
        id: 'maurer-putzarbeiten',
        name: 'Maurer- & Putzarbeiten',
        category: 'walls',
        unit: 'm²',
        unitLabel: 'Wandfläche',
        laborMin: 28,
        laborMax: 52,
        materialMin: 12,
        materialMax: 35,
        icon: '🧱',
        description: 'Putzarbeiten, Fassadensanierung, Mauerwerksinstandsetzung',
        calculationNote: 'Wandfläche = Umfang × Deckenhöhe',
        subOptions: [
            { id: 'interior', name: 'Innenputz', multiplier: 1.0 },
            { id: 'facade', name: 'Außenfassade', multiplier: 1.35 },
            { id: 'sanierung', name: 'Sanierputz (Feuchte)', multiplier: 1.5 }
        ]
    },
    {
        id: 'maler-schimmelsanierung',
        name: 'Maler- & Lackierarbeiten',
        category: 'surfaces',
        unit: 'm²',
        unitLabel: 'Fläche',
        laborMin: laborPrices.waendeTapezierenStreichen * 0.9,
        laborMax: laborPrices.waendeTapezierenStreichen * 1.1,
        materialMin: 4,
        materialMax: 12,
        icon: '🎨',
        description: 'Malerarbeiten, Tapezieren, Schimmelsanierung',
        calculationNote: 'Wand- und Deckenflächen',
        subOptions: [
            { id: 'streichen', name: 'Streichen', multiplier: laborPrices.waendeStreichen / laborPrices.waendeTapezierenStreichen },
            { id: 'tapezieren', name: 'Tapezieren', multiplier: 1.0 },
            { id: 'schimmel', name: 'Schimmelsanierung', multiplier: 1.5 },
            { id: 'lackieren', name: 'Lackierarbeiten', multiplier: 1.2 }
        ]
    },
    {
        id: 'fliesen-badsanierung',
        name: 'Fliesen & Badsanierung',
        category: 'bathroom',
        unit: 'm²',
        unitLabel: 'Fläche',
        laborMin: 55,
        laborMax: 95,
        materialMin: 35,
        materialMax: 120,
        icon: '🚿',
        description: 'Fliesenverlegung, komplette Badsanierung',
        calculationNote: 'Boden- und Wandfläche im Bad',
        subOptions: [
            { id: 'boden', name: 'Nur Bodenfliesen', multiplier: laborPrices.bodenfliesen / ((laborPrices.bodenfliesen + laborPrices.wandfliesen) / 2) },
            { id: 'wand', name: 'Nur Wandfliesen', multiplier: laborPrices.wandfliesen / ((laborPrices.bodenfliesen + laborPrices.wandfliesen) / 2) },
            { id: 'komplett', name: 'Komplettsanierung', multiplier: 1.3 },
            { id: 'barrierefrei', name: 'Barrierefreies Bad', multiplier: 1.5 }
        ],
        fixedCosts: [
            { id: 'sanitaer', name: 'Sanitärobjekte (WC, Waschbecken)', min: laborPrices.wcWandhaengend + laborPrices.waschtisch, max: (laborPrices.wcWandhaengend + laborPrices.waschtisch) * 1.5 },
            { id: 'dusche', name: 'Dusche/Wanne', min: laborPrices.duschwanne, max: laborPrices.badewanne },
            { id: 'armaturen', name: 'Armaturen-Set', min: 250, max: 1500 }
        ]
    },
    {
        id: 'trockenbauarbeiten',
        name: 'Trockenbauarbeiten',
        category: 'construction',
        unit: 'm²',
        unitLabel: 'Fläche',
        laborMin: 38,
        laborMax: 72,
        materialMin: 18,
        materialMax: 45,
        icon: '📐',
        description: 'Trennwände, abgehängte Decken, Dachausbau',
        calculationNote: 'Wandfläche oder Deckenfläche',
        subOptions: [
            { id: 'trennwand', name: 'Trennwand einfach', multiplier: 1.0 },
            { id: 'schallschutz', name: 'Mit Schallschutz', multiplier: 1.25 },
            { id: 'decke', name: 'Abgehängte Decke', multiplier: 1.15 },
            { id: 'dachausbau', name: 'Dachausbau', multiplier: 1.4 }
        ]
    },
    {
        id: 'bodenbelagsarbeiten',
        name: 'Bodenbelagsarbeiten',
        category: 'flooring',
        unit: 'm²',
        unitLabel: 'Bodenfläche',
        laborMin: laborPrices.designbodenVinylplanken * 0.4, // Labor portion approx
        laborMax: laborPrices.designbodenVinylplanken * 0.6,
        materialMin: 30,
        materialMax: 45,
        icon: '🪵',
        description: 'Laminat, Parkett, Vinyl, Teppich',
        calculationNote: 'Wohnfläche / Bodenfläche',
        subOptions: [
            { id: 'laminat', name: 'Laminat', multiplier: 0.8 },
            { id: 'vinyl', name: 'Designvinyl', multiplier: 1.0 },
            { id: 'parkett', name: 'Parkett', multiplier: 1.6 },
            { id: 'fliesen', name: 'Bodenfliesen', multiplier: 1.4 },
            { id: 'schleifen', name: 'Parkett schleifen', multiplier: 0.7 }
        ],
        additionalWork: [
            { id: 'estrich', name: 'Estricharbeiten', pricePerSqm: laborPrices.estricharbeiten },
            { id: 'daemmung', name: 'Trittschalldämmung', pricePerSqm: 8 },
            { id: 'sockelleisten', name: 'Sockelleisten', pricePerMeter: laborPrices.sockelleistenMontage }
        ]
    },
    {
        id: 'tischler-kuechen',
        name: 'Tischler & Küchen',
        category: 'furniture',
        unit: 'Stück',
        unitLabel: 'Einheit',
        laborMin: 0, // Preise sind pauschal
        laborMax: 0,
        materialMin: 0,
        materialMax: 0,
        icon: '🪚',
        description: 'Küchenmontage, Türen, Einbauschränke',
        calculationNote: 'Pauschalpreise je nach Umfang',
        packages: [
            { id: 'kueche-klein', name: 'Küchenzeile (bis 3m)', min: laborPrices.kuecheZeileMontage, max: laborPrices.kuecheZeileMontage * 1.5 },
            { id: 'kueche-mittel', name: 'Küche L-Form (bis 5m)', min: laborPrices.kuecheLFormMontage, max: laborPrices.kuecheLFormMontage * 1.5 },
            { id: 'kueche-gross', name: 'Küche U-Form / Insel', min: 12000, max: 35000 },
            { id: 'tuer', name: 'Innentür inkl. Zarge', min: laborPrices.innentuerErneuern, max: laborPrices.innentuerErneuern * 1.2 },
            { id: 'einbauschrank', name: 'Einbauschrank (pro lfm)', min: laborPrices.einbauschrankMass, max: laborPrices.einbauschrankMass * 1.2 }
        ]
    },
    {
        id: 'elektroarbeiten',
        name: 'Elektroarbeiten',
        category: 'electrical',
        unit: 'Punkt',
        unitLabel: 'Anschlusspunkt',
        laborMin: 45,
        laborMax: 95,
        materialMin: 15,
        materialMax: 45,
        icon: '⚡',
        description: 'Steckdosen, Schalter, Beleuchtung, Unterverteilung',
        calculationNote: 'Pro Steckdose/Schalter/Anschluss',
        subOptions: [
            { id: 'steckdose', name: 'Steckdose/Schalter', multiplier: 1.0 },
            { id: 'licht', name: 'Lichtauslass', multiplier: laborPrices.lichtauslass / laborPrices.steckdoseSchalter },
            { id: 'herd', name: 'Herdanschluss', multiplier: 2.5 },
            { id: 'smart', name: 'Smart Home Punkt', multiplier: 1.8 }
        ],
        fixedCosts: [
            { id: 'verteiler', name: 'Unterverteilung neu', min: laborPrices.wohnungsverteiler, max: laborPrices.wohnungsverteiler * 1.5 },
            { id: 'pruefung', name: 'E-Check / Prüfung', min: 150, max: 350 }
        ]
    },
    {
        id: 'heizungsarbeiten',
        name: 'Heizung & Sanitär',
        category: 'heating',
        unit: 'Pauschal',
        unitLabel: 'System',
        laborMin: 0,
        laborMax: 0,
        materialMin: 0,
        materialMax: 0,
        icon: '🔥',
        description: 'Heizungsmodernisierung, Heizkörpertausch',
        calculationNote: 'Pauschalpreise je nach System',
        packages: [
            { id: 'heizkoerper', name: 'Heizkörper tauschen (pro Stück)', min: laborPrices.heizkoerperAustausch, max: laborPrices.heizkoerperAustausch * 1.5 },
            { id: 'thermostat', name: 'Thermostate (pro Stück)', min: laborPrices.thermostatkopf, max: laborPrices.thermostatkopf * 2 },
            { id: 'fussbodenheizung', name: 'Fußbodenheizung (pro m²)', min: laborPrices.fussbodenheizung, max: laborPrices.fussbodenheizung * 1.3 },
            { id: 'gastherme', name: 'Gastherme komplett', min: 4500, max: 9000 },
            { id: 'waermepumpe', name: 'Wärmepumpe komplett', min: 15000, max: 35000 }
        ]
    },
    {
        id: 'asbestsanierung',
        name: 'Schadstoffsanierung',
        category: 'special',
        unit: 'm²',
        unitLabel: 'Fläche',
        laborMin: 85,
        laborMax: 220,
        materialMin: 25,
        materialMax: 65,
        icon: '☣️',
        description: 'Asbest, KMF, Schadstoffe fachgerecht entsorgen',
        calculationNote: 'Nach TRGS 519 - Zertifizierter Fachbetrieb',
        subOptions: [
            { id: 'asbest-fest', name: 'Festgebundener Asbest', multiplier: 1.0 },
            { id: 'asbest-schwach', name: 'Schwachgebundener Asbest', multiplier: 1.8 },
            { id: 'kmf', name: 'Künstl. Mineralfasern (KMF)', multiplier: 0.85 }
        ],
        fixedCosts: [
            { id: 'probenahme', name: 'Laboranalyse / Probenahme', min: 150, max: 400 },
            { id: 'freimessung', name: 'Freimessung nach Sanierung', min: 250, max: 600 }
        ]
    }
];

// Zusatzoptionen
export const additionalOptions = [
    {
        id: 'urgent',
        name: 'Expresszuschlag',
        description: 'Ausführung innerhalb von 2 Wochen',
        type: 'percentage',
        value: 20,
        icon: '⏱️'
    },
    {
        id: 'weekend',
        name: 'Wochenendarbeit',
        description: 'Arbeiten an Samstagen',
        type: 'percentage',
        value: 25,
        icon: '📅'
    },
    {
        id: 'waste',
        name: 'Entsorgung & Container',
        description: 'Bauschutt, Sperrmüll, Container',
        type: 'fixed',
        value: 650,
        icon: '🚛'
    },
    {
        id: 'design',
        name: 'Planungsleistung',
        description: 'Aufmaß, 3D-Planung, Materialberatung',
        type: 'fixed',
        value: 890,
        icon: '📋'
    },
    {
        id: 'procurement',
        name: 'Materialbeschaffung',
        description: 'Wir kümmern uns um den Einkauf',
        type: 'percentage',
        value: 8,
        icon: '🛒'
    },
    {
        id: 'furniture',
        name: 'Möbeleinlagerung',
        description: 'Zwischenlagerung während der Arbeiten',
        type: 'fixed',
        value: 450,
        icon: '📦'
    },
    {
        id: 'cleaning',
        name: 'Baufeinreinigung',
        description: 'Professionelle Endreinigung',
        type: 'perSqm',
        value: 4.5,
        icon: '🧹'
    }
];

// Raumtypen für genauere Kalkulation
export const roomTypes = [
    { id: 'wohnzimmer', name: 'Wohnzimmer', avgSize: 25, wallFactor: 2.8 },
    { id: 'schlafzimmer', name: 'Schlafzimmer', avgSize: 16, wallFactor: 2.6 },
    { id: 'kinderzimmer', name: 'Kinderzimmer', avgSize: 14, wallFactor: 2.6 },
    { id: 'kueche', name: 'Küche', avgSize: 12, wallFactor: 2.4 },
    { id: 'bad', name: 'Badezimmer', avgSize: 8, wallFactor: 2.2 },
    { id: 'flur', name: 'Flur / Diele', avgSize: 10, wallFactor: 3.0 },
    { id: 'gaeste-wc', name: 'Gäste-WC', avgSize: 3, wallFactor: 2.0 },
    { id: 'abstellraum', name: 'Abstellraum', avgSize: 4, wallFactor: 2.2 },
    { id: 'keller', name: 'Keller', avgSize: 20, wallFactor: 2.4 }
];

// MwSt. Satz Deutschland
export const VAT_RATE = 0.19;

// Rabattstaffeln (optional für spätere Verwendung)
export const volumeDiscounts = [
    { minTotal: 5000, discount: 0 },
    { minTotal: 15000, discount: 0.03 },
    { minTotal: 30000, discount: 0.05 },
    { minTotal: 50000, discount: 0.08 }
];

// Hilfsfunktion: Durchschnittspreis berechnen
export const getAveragePrice = (min, max) => (min + max) / 2;

// Hilfsfunktion: Preis mit Koeffizienten berechnen
export const calculatePrice = (baseMin, baseMax, materialCoef, propertyCoef) => {
    const avgBase = getAveragePrice(baseMin, baseMax);
    return avgBase * materialCoef * propertyCoef;
};
