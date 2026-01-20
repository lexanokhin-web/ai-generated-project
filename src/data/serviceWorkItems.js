import { laborPrices } from './priceConfig';

/**
 * Detaillierte Leistungspositionen für den Renovierungskostenrechner
 * Preise und Beschreibungen basierend auf echten Angeboten
 * Alle Preise sind Brutto-Preise (inkl. 19% MwSt.)
 */

// Baustelleneinrichtung
export const baustelleneinrichtung = {
    id: 'baustelleneinrichtung',
    name: 'Baustelleneinrichtung',
    positions: [
        {
            id: 'be-standard',
            name: 'Baustelleneinrichtung Standard',
            description: [
                'Baustelle mit allen technischen Einrichtungen und Geräten einrichten',
                'Mehrmalige An- und Abfahrt',
                'Vorhalten der Werkzeuge und Arbeitsmittel',
                'Werkzeug- und Fahrzeugpauschale',
                'Abdecken / Schützen der Arbeitsbereiche (Böden)',
                'Abkleben der Fenster / Türen',
                'Material: Malervlies, Kreppband, Folie und Abdeckmaterial'
            ],
            unit: 'psch.',
            pricePerUnit: laborPrices.beStandard // Brutto
        },
        {
            id: 'be-asbest',
            name: 'Baustelleneinrichtung bei Asbestsanierung',
            description: [
                'Baustelleneinrichtung BT 11/17.3',
                'Baustelle mit allen technischen Einrichtungen, Geräten und Materialien gemäß des zugelassenen BT 17 Verfahrens und für das BT 11 Verfahren',
                'Mehrmalige An- und Abfahrt',
                'Vorhalten der Werkzeuge und Arbeitsmittel',
                'Werkzeug- und Fahrzeugpauschale',
                'Abdecken / Schützen der Arbeitsbereiche (Böden)',
                'Abkleben der Fenster / Türen',
                'Material: Malervlies, Kreppband, Folie und Abdeckmaterial'
            ],
            unit: 'psch.',
            pricePerUnit: laborPrices.beAsbest // Brutto
        }
    ]
};

// Abbrucharbeiten
export const abbrucharbeiten = {
    id: 'abbrucharbeiten',
    name: 'Abbruch',
    positions: [
        {
            id: 'tapeten-entfernen',
            name: 'Tapeten entfernen',
            description: [
                'Tapeten im gesamten Wohnraum vollflächig entfernen',
                'Abrissmaterial verpacken, herunterschaffen, laden, abfahren und fachgerecht entsorgen',
                'Inkl. Entsorgungskosten'
            ],
            unit: 'm²',
            pricePerUnit: laborPrices.tapetenEntfernen // Brutto
        },
        {
            id: 'sockelleisten-entfernen',
            name: 'Holzsockelfußleisten entfernen',
            description: [
                'Wohnzimmer, Schlafzimmer, Kinderzimmer und Flurbereich',
                'Demontieren, aufnehmen, verpacken, herunterschaffen und fachgerecht entsorgen',
                'Inkl. Entsorgungskosten'
            ],
            unit: 'Lfm.',
            pricePerUnit: laborPrices.sockelleistenEntfernen // Brutto
        },
        {
            id: 'gardinenbretter-demontieren',
            name: 'Gardinenbretter demontieren',
            description: [
                'Herunterschaffen, laden und fachgerecht entsorgen',
                'Inkl. Entsorgungskosten'
            ],
            unit: 'Stk.',
            pricePerUnit: laborPrices.gardinenbretterEntfernen // Brutto
        },
        {
            id: 'kueche-entsorgen',
            name: 'Kücheneinrichtungsgegenstände entsorgen',
            description: [
                'E-Herd demontieren sowie Ober- und Unterschränke, Spüle zerlegen',
                'Herunterschaffen, laden und fachgerecht entsorgen',
                'Inkl. Entsorgungskosten'
            ],
            unit: 'psch.',
            pricePerUnit: laborPrices.kuecheEntsorgen // Brutto
        },
        {
            id: 'bodenbelag-entfernen',
            name: 'Alten Bodenbelag entfernen',
            description: [
                'Bestehenden Bodenbelag (Teppich, PVC, Laminat) vollständig entfernen',
                'Untergrund reinigen und für neuen Belag vorbereiten',
                'Abrissmaterial verpacken und fachgerecht entsorgen',
                'Inkl. Entsorgungskosten'
            ],
            unit: 'm²',
            pricePerUnit: laborPrices.bodenbelagEntfernen // Brutto
        },
        {
            id: 'fliesen-abbrechen',
            name: 'Wand- und Bodenfliesen abbrechen',
            description: [
                'Bestehende Fliesen vollständig abbrechen',
                'Fliesenkleber entfernen und Untergrund vorbereiten',
                'Bauschutt verpacken, herunterschaffen, laden und fachgerecht entsorgen',
                'Inkl. Entsorgungskosten'
            ],
            unit: 'm²',
            pricePerUnit: laborPrices.fliesenAbbrechen // Brutto
        }
    ]
};

// Asbestsanierung
export const asbestsanierung = {
    id: 'asbestsanierung',
    name: 'Asbestsanierung',
    positions: [
        {
            id: 'vinyl-asbest-aufnehmen',
            name: 'Vinyl-Asbestplatten aufnehmen',
            description: [
                'Aufnahme von Vinyl-Asbestbodenplatten (Flexplatten) auf Bitumenkleber mittels Handspachtel',
                'Bodenplatten gem. BGI 664 - DGUV Information 201-012 Arbeitsverfahren BT11 vom Untergrund lösen, verpacken und der Entsorgung zuführen'
            ],
            unit: 'm²',
            pricePerUnit: laborPrices.vinylAsbestAufnehmen // Brutto
        },
        {
            id: 'bitumenkleber-entfernen',
            name: 'Asbesthaltigen Bitumenkleber entfernen',
            description: [
                'Entfernen von asbesthaltigem Bitumenkleber mittels Schleifverfahren',
                'Untergrund Betonestrich',
                'Bitumenkleber gem. BGI 664 - Arbeitsverfahren BT17.3',
                'Kleberstärke bis 2,5 mm',
                'Inkl. Entfernen des Bitumenklebers in Zimmerecken und unter Heizkörpern',
                'Inkl. absaugen und reinigen des Arbeitsbereiches',
                'Abfälle verpacken, abtransportieren und der geregelten Entsorgung zuführen'
            ],
            unit: 'm²',
            pricePerUnit: laborPrices.bitumenkleberSchleifen // Brutto
        },
        {
            id: 'asbest-fensterbank',
            name: 'Asbesthaltige Fensterbänke ausbauen',
            description: [
                'Asbesthaltige Fensterbänke fachgerecht demontieren',
                'Luftdicht verpacken, herunterschaffen und fachgerecht entsorgen',
                'Inkl. Entsorgungskosten nach TRGS 519'
            ],
            unit: 'Stk.',
            pricePerUnit: laborPrices.asbestFensterbank // Brutto
        },
        {
            id: 'ausgleichsmasse',
            name: 'Aufbringen von Ausgleichsmasse',
            description: [
                'Nach Asbestentfernung Untergrund mit Ausgleichsmasse nivellieren',
                'Für nachfolgende Bodenbelagsarbeiten vorbereiten'
            ],
            unit: 'm²',
            pricePerUnit: laborPrices.ausgleichsmasse // Brutto
        }
    ]
};

// Elektroarbeiten
export const elektroarbeiten = {
    id: 'elektroarbeiten',
    name: 'E-Mod. komplett',
    positions: [
        {
            id: 'elektroanlage-komplett',
            name: 'Erneuerung der Elektroanlage',
            description: [
                'Steckdosen- und Schalterprogramm: Busch & Jäger oder glw., Serie: Reflex SI, Farbe: Alpinweiß',
                'Neue Wohnungszuleitung, bis 10m erneuern',
                'Neue Wohnungszuleitung Gesamtlänge bis 10m vom Abzweig im Hausflur bis zum Wohnungszählerschrank in Unter-Putz-Ausführung erneuern',
                'Einschl. aller erforderliche Fräs- und Verputzarbeiten',
                'Herstellen und verschließen der erforderlichen Durchbrüche',
                'Anlage Spannungsfrei schalten und neu verplomben sowie Legende erstellen und anbringen',
                'Alte Zuleitung demontieren und fachgerecht entsorgen'
            ],
            unit: 'psch.',
            pricePerUnit: laborPrices.elektroAnlagePauschal,
            priceByRooms: laborPrices.elektroAnlageByRooms
        },
        {
            id: 'wohnungsverteiler',
            name: 'Wohnungsverteiler erneuern uP + Stahltür',
            description: [
                'Erneuerung des Wohnungsverteilers einschl. aller Sicherungshalterungen',
                'Sicherungseinsätze, FI-Plätze',
                'Einbau von Überspannungsschutzeinrichtungen gemäß DIN VDE 0100-443/-534',
                'Angepasst an die Wohnungsinstallation',
                'Einschl. Anbindung und Anschluss an die vorhandene oder erneuerte Wohnungsinstallation',
                'Leistung einschl. Demontage und Entsorgung aller Altbauteile',
                'Art: uP-Kasten mit Stahltür (unter Putz) einschl. bündig einputzen'
            ],
            unit: 'psch.',
            pricePerUnit: laborPrices.wohnungsverteiler // Brutto
        },
        {
            id: 'tae-dose',
            name: 'TAE-Dose erneuern',
            description: [
                'Demontage und Entsorgung der alten TAE-Dose',
                'Neue TAE-Dose, bis zu 3-fachem Anschluss (Unter Putz oder Auf Putz) liefern und betriebsfertig montieren'
            ],
            unit: 'Stk.',
            pricePerUnit: laborPrices.taeDose // Brutto
        },
        {
            id: 'multimedia',
            name: 'Multimediaanschluss erneuern',
            description: [
                'Multimediadose demontieren',
                'Neue Dose (unter Putz oder auf Putz) liefern und betriebsbereit montieren'
            ],
            unit: 'Stk.',
            pricePerUnit: laborPrices.multimediaDose // Brutto
        },
        {
            id: 'gegensprechanlage',
            name: 'Innensprechstelle für Gegensprechanlage',
            description: [
                'Innensprechstelle für Gegensprechanlage mit Türöffnertaste, Lichttaste, Funktionstaste komplett liefern und betriebsfertig montieren',
                'Einschl. Demontage und Entsorgung des Altbauteils'
            ],
            unit: 'Stk.',
            pricePerUnit: laborPrices.innensprechstelle // Brutto
        },
        {
            id: 'steckdose-schalter',
            name: 'Steckdose/Schalter erneuern',
            description: [
                'Steckdose oder Schalter demontieren',
                'Neues Schalterprogramm (Busch & Jäger oder glw.) liefern und montieren',
                'Inkl. Kleinmaterial'
            ],
            unit: 'Stk.',
            pricePerUnit: laborPrices.steckdoseSchalter // Brutto
        },
        {
            id: 'lichtauslass',
            name: 'Lichtauslass erneuern',
            description: [
                'Bestehenden Lichtauslass prüfen und ggf. erneuern',
                'Neue Lampenfassung montieren',
                'Inkl. Kleinmaterial'
            ],
            unit: 'Stk.',
            pricePerUnit: laborPrices.lichtauslass // Brutto
        }
    ]
};

// Sanitärarbeiten Badezimmer
export const sanitaerBad = {
    id: 'sanitaer-bad',
    name: 'Sanitärarbeiten Badezimmer',
    positions: [
        {
            id: 'sanitaer-demontage',
            name: 'Demontage der Sanitärobjekte',
            description: [
                '1,00 Stck. Waschtischanlage',
                '1,00 Stck. WC-Anlage',
                '1,00 Stck. Badewanne',
                'Herunterschaffen, laden, abfahren',
                'Inkl. Entsorgungskosten'
            ],
            unit: 'psch.',
            pricePerUnit: laborPrices.sanitaerDemontage
        },
        {
            id: 'grundinstallation-bad',
            name: 'Grundinstallation Badezimmer erneuern',
            description: [
                'Schallgedämmtes Abflussrohr DN40 und DN50 verlegen',
                'Schallgedämmte Abflussrohre DN 100 verlegen',
                'U.a. Installation Wama-Anschluss (Zu- und Abwasser)',
                'Abbruch und Entsorgung der Altinstallation',
                'Inkl. Verbindungsstücke, Klein-, Dichtungs- und Befestigungsmaterial'
            ],
            unit: 'psch.',
            pricePerUnit: laborPrices.grundinstallationBad // Brutto
        },
        {
            id: 'wc-wandhaengend',
            name: 'Wandhängendes WC mit uP-Spülkasten erneuern',
            description: [
                'VIGOUR / Ideal Standard oder gleichwertig (Farbe weiß)',
                'Ausladung 54 cm, Spülmenge 9 Liter - eingestellt auf 6 Liter',
                'Wand-WC Sanibel (oder gleichwertig) 1001 weiß / Ausladung 45cm',
                'Unterputz-Vorwandelement TECE',
                'WC-Sitz Sanibel 1001 mit Deckel, Scharniere Edelstahl',
                'Inkl. Anschlussmaterial'
            ],
            unit: 'Stk.',
            pricePerUnit: laborPrices.wcWandhaengend // Brutto
        },
        {
            id: 'waschtisch',
            name: 'Waschtisch inkl. Armatur',
            description: [
                '65 x 55 cm weiß einschl. Waschtisch-Einhebelmischer',
                'Hersteller: Hans Grohe oder gleichwertig',
                'Sanibel 1001 mit Excenterventil verchromt / Ausladung 100 mm',
                'Schallschutzset Sanibel für WT 450 mm',
                'Röhrensifon-Plus Viega Sanibel / verchromt / DN 32',
                'Inkl. Anschlussmaterial'
            ],
            unit: 'Stk.',
            pricePerUnit: laborPrices.waschtisch // Brutto
        },
        {
            id: 'dusche',
            name: 'Duschwannenanlage',
            description: [
                '800 x 900 mm (Änderung nach Anpassung möglich)',
                'Inkl. Armatur (Hans Grohe oder gleichwertig)',
                'Mit Handbrause und Schlauch 2 m Länge',
                'Duschstangenhalterung (90 cm)',
                'Inkl. Anschlussmaterial'
            ],
            unit: 'Stk.',
            pricePerUnit: laborPrices.duschwanne // Brutto
        },
        {
            id: 'badewanne',
            name: 'Badewannenanlage',
            description: [
                'Acryl-Badewanne 170 x 75 cm (oder nach Maß)',
                'Inkl. Armatur und Ablaufgarnitur',
                'Wannenfüße und Schallschutzset',
                'Inkl. Anschlussmaterial'
            ],
            unit: 'Stk.',
            pricePerUnit: laborPrices.badewanne
        },
        {
            id: 'wasserzaehler',
            name: 'Montageblock für Wasserzählereinrichtung',
            description: [
                'Für Unter-Putz-Wasserzähler für KW und WW',
                'Einschl. aller erforderlichen Nebenarbeiten und Materialien',
                'Sowie Anschluss an die Wohnungsabsperrungen und Dämmung',
                'Inkl. Klein- und Befestigungsmaterial'
            ],
            unit: 'Stk.',
            pricePerUnit: laborPrices.wasserzaehler // Brutto
        },
        {
            id: 'gastherme-wartung',
            name: 'Wartung der Gastherme',
            description: [
                'In der Küche oder Bad befindliche Gastherme',
                'Inkl. Klein- und Wartungsmaterial',
                'Exklusive Ersatzteile'
            ],
            unit: 'psch.',
            pricePerUnit: laborPrices.gasthermeWartung // Brutto
        }
    ]
};

// Sanitärarbeiten Küche
export const sanitaerKueche = {
    id: 'sanitaer-kueche',
    name: 'Sanitärarbeiten Küche',
    positions: [
        {
            id: 'kuechenanschluesse',
            name: 'Küchenanschlüsse (Wandarmatur) runterlegen',
            description: [
                'Herunterlegen des Wasseranschlusses in der Küche',
                'Inkl. Anschluss- und Kleinmaterial'
            ],
            unit: 'Stk.',
            pricePerUnit: laborPrices.kuechenanschluesse // Brutto
        },
        {
            id: 'spuelenarmatur',
            name: 'Spülenarmatur montieren',
            description: [
                'Neue Spülenarmatur (Einhebelmischer) liefern und montieren',
                'Anschluss an bestehende Leitungen',
                'Inkl. Kleinmaterial'
            ],
            unit: 'Stk.',
            pricePerUnit: laborPrices.spuelenarmatur // Brutto
        }
    ]
};

// Heizungsarbeiten
export const heizungsarbeiten = {
    id: 'heizungsarbeiten',
    name: 'Heizungsarbeiten',
    positions: [
        {
            id: 'handtuchheizkoerper',
            name: 'Handtuchheizkörper Badezimmer',
            description: [
                'Handtuchheizkörper liefern und montieren',
                'Bestehenden Heizkörper demontieren und fachgerecht entsorgen',
                'Neuer Heizkörper H = 1600, B = max. 800, oder nach Anpassung',
                'Inkl. Thermostatventil und absperrbarer Rücklaufverschraubung',
                'Heizungsanlage nach Erfordernis entleeren und wieder befüllen',
                'Inkl. Anbindung des Heizkörpers an bestehendes System durch Anpassen der Rohrleitungen',
                'Ventil Badheizkörper, Fabrikat: COSMO',
                'Farbe: verkehrsweiß RAL 9016',
                'Thermostatkopf: COSMO / Danfoss oder Oventrop',
                'Inkl. Anschlussmaterial'
            ],
            unit: 'Stk.',
            pricePerUnit: laborPrices.handtuchHeizkoerper // Brutto
        },
        {
            id: 'thermostatventile',
            name: 'Heizkörperthermostatkopfventile erneuern',
            description: [
                'Neue Heizkörperthermostatkopfventile (vergilbt und abgewohnt) liefern und betriebsbereit montieren',
                'Thermostatkopf: COSMO / Danfoss oder Oventrop'
            ],
            unit: 'Stk.',
            pricePerUnit: laborPrices.thermostatkopf // Brutto
        },
        {
            id: 'heizkoerper-austausch',
            name: 'Heizkörper austauschen',
            description: [
                'Bestehenden Heizkörper demontieren und fachgerecht entsorgen',
                'Neuen Plattenheizkörper nach Wärmebedarf liefern und montieren',
                'Inkl. Thermostatventil und Rücklaufverschraubung',
                'Heizungsanlage entleeren und wieder befüllen',
                'Inkl. Anpassung der Rohrleitungen'
            ],
            unit: 'Stk.',
            pricePerUnit: laborPrices.heizkoerperAustausch // Brutto
        },
        {
            id: 'fussbodenheizung',
            name: 'Fußbodenheizung verlegen',
            description: [
                'Fußbodenheizungsrohre im Tackersystem verlegen',
                'Inkl. Dämmung und Randstreifen',
                'Anschluss an Heizkreisverteiler',
                'Druckprüfung und Protokoll'
            ],
            unit: 'm²',
            pricePerUnit: laborPrices.fussbodenheizung // Brutto
        }
    ]
};

// Fliesenarbeiten
export const fliesenarbeiten = {
    id: 'fliesenarbeiten',
    name: 'Fliesenarbeiten Badezimmer + Küche',
    positions: [
        {
            id: 'bad-komplett',
            name: 'Badezimmer komplett fliesen',
            description: [
                'Badezimmer bis 5m² Raumgröße',
                'Ca. 20 m² Wand- und Bodenfliesen abbrechen, laden und fachgerecht entsorgen',
                'Wandflächen reinigen und grundieren',
                'Wandflächen (gefliester Bereich) mit Zementmörtel verputzen',
                'Wandflächen bis D=5mm spachteln',
                'Wandfliesen: Farbton weiß glänzend, Format 30/60 cm liefern, im Dünnbett verlegen',
                'Bad umlfd. ca 1,20m hoch (nur Nassbereiche)',
                'Duschbereich ca. 2,10m hoch ansetzen und silber od. zementgrau verfugen',
                'Streichisolierung als Flüssigfolie im Duschbereich',
                'Dichtband im vorgen. Bereich',
                'Dichtmanschetten liefern und einarbeiten',
                'Duschwanne 2-seitig einarbeiten, als Zulage (ohne Einmauern)',
                'Jolly-Kunststoffkanten liefern und an den Außenecken der Wandbeläge',
                'Bodenfliesen: Format 30 x 60 im Farbton anthrazit liefern und verlegen',
                'Verfugung in Betongrau',
                'Löcher in Fliesen für Installationen herstellen',
                'Elastische Fugen (Wartungsfugen) dauerelastisch mit Silikon versiegeln'
            ],
            unit: 'psch.',
            pricePerUnit: laborPrices.badFliesenKomplett, // Brutto
            priceBySize: laborPrices.badFliesenBySize
        },
        {
            id: 'kueche-fliesenspiegel',
            name: 'Küche Fliesenspiegel',
            description: [
                '4,00 m² Fliesenspiegel abbrechen',
                'Bauschutt verpacken, herunterschaffen, laden, abfahren und fachgerecht entsorgen',
                'Neuen Fliesenspiegel herstellen:',
                'Wandfliesen im Format 30 x 60 Hochglanz oder matt weiß liefern und verlegen',
                'Verfugung in silbergrau',
                'Versiegelung mit Sanitärsilikon'
            ],
            unit: 'psch.',
            pricePerUnit: laborPrices.kuecheFliesenspiegel // Brutto
        },
        {
            id: 'bodenfliesen',
            name: 'Bodenfliesen verlegen',
            description: [
                'Bodenfliesen im gewählten Format liefern und im Dünnbettverfahren verlegen',
                'Untergrund grundieren und ggf. ausgleichen',
                'Verfugung farblich passend',
                'Inkl. Sockelleisten aus gleichem Material'
            ],
            unit: 'm²',
            pricePerUnit: laborPrices.bodenfliesen // Brutto
        },
        {
            id: 'wandfliesen',
            name: 'Wandfliesen verlegen',
            description: [
                'Wandfliesen im gewählten Format liefern und im Dünnbettverfahren verlegen',
                'Untergrund grundieren',
                'Verfugung farblich passend',
                'Inkl. Kantenschutzprofile'
            ],
            unit: 'm²',
            pricePerUnit: laborPrices.wandfliesen // Brutto
        }
    ]
};

// Malerarbeiten
export const malerarbeiten = {
    id: 'malerarbeiten',
    name: 'Malerarbeiten',
    positions: [
        {
            id: 'waende-tapezieren',
            name: 'Wandflächen tapezieren',
            description: [
                'Wohnzimmer, Schlafzimmer, Kinderzimmer und Flur',
                'Vorh. Tapeten, Altanstriche oder Beschichtungen, auch mehrlagig, entfernen',
                'Wandflächen bis 30% zum Ausgleichen von Unebenheiten spachteln',
                'Kleinere Putzschäden bis 0,1m² neu verputzen',
                'Untergrundbehandlung Tiefgrund aufbringen',
                'Raufaser 52er Korn tapezieren',
                'Innenanstrich weiß mit Dispersionsfarbe',
                'Lösemittel- und weichmacherfrei, TÜV Gütezeichen, "schadstoffgeprüft"',
                'Nassabriebbeständigkeit: Klasse 3'
            ],
            unit: 'm²',
            pricePerUnit: laborPrices.waendeTapezierenStreichen // Brutto
        },
        {
            id: 'decken-tapezieren',
            name: 'Deckenflächen tapezieren und streichen',
            description: [
                'Sämtliche Deckenflächen (Außer Badezimmer + Küche)',
                'Tapezieren und deckend weiß mit Innenwand-Dispersionsfarbe streichen',
                'Vorh. Tapeten, Altanstriche oder Beschichtungen, auch mehrlagig, entfernen',
                'Deckenflächen bis 30% zum Ausgleichen von Unebenheiten spachteln',
                'Kleinere Putzschäden bis 0,1m² neu verputzen',
                'Untergrundbehandlung mit Tiefgrund aufbringen',
                'Raufaser 52er Korn tapezieren',
                'Innenanstrich weiß mit Dispersionsfarbe',
                'Lösemittel- und weichmacherfrei, TÜV Gütezeichen, "schadstoffgeprüft"',
                'Nassabriebbeständigkeit: Klasse 3'
            ],
            unit: 'm²',
            pricePerUnit: laborPrices.deckenTapezierenStreichen // Brutto
        },
        {
            id: 'waende-spachteln-q3',
            name: 'Wand- und Deckenflächen spachteln Q3',
            description: [
                'Badezimmer, WC + Küche in der Oberflächenqualität Q3 spachteln',
                'Schleifen und deckend weiß mit Innenwand-Dispersionsfarbe streichen',
                'Verunreinigungen, Schmutz, Staub und lose anhaftende Substanzen vollflächig durch geeignete Maßnahmen fachgerecht bis auf tragfähigen Untergrund entfernen',
                'Tiefgrund aufbringen',
                'Kleinere Putzschäden bis 0,1m² neu verputzen',
                'Wandflächen vollflächig zu 100% spachteln und glätten (Oberflächengüte Q3)',
                'Innenanstrich weiß mit Dispersionsfarbe streichen',
                'Lösemittel- und weichmacherfrei, TÜV Gütezeichen, "schadstoffgeprüft"',
                'Nassabriebbeständigkeit: Klasse 3',
                'Inkl. herstellen der Acrylfugen im Anschlussbereich an Wänden / Decken / Fenstern / Türen / Sockelleisten'
            ],
            unit: 'm²',
            pricePerUnit: laborPrices.waendeSpachtelnQ3 // Brutto
        },
        {
            id: 'tueren-lackieren',
            name: 'Innentüren und Zargen lackieren',
            description: [
                'Anschleifen und deckend weiß lackieren',
                'Gesamte Wohnung'
            ],
            unit: 'psch.',
            pricePerUnit: laborPrices.tuerenZargenLackierenPauschal, // Brutto
            priceByRooms: laborPrices.tuerenZargenLackierenByRooms
        },
        {
            id: 'heizkoerper-lackieren',
            name: 'Heizkörper (Plattenheizkörper) lackieren',
            description: [
                'Außer Badezimmer',
                'Im Anschluss deckend weiß lackieren'
            ],
            unit: 'Stk.',
            pricePerUnit: laborPrices.heizkoerperLackieren // Brutto
        },
        {
            id: 'eingangstuer-lackieren',
            name: 'Wohnungseingangstür (halbseitig) innen lackieren',
            description: [
                'Vorh. Wohnungseingangstür Innen aufarbeiten',
                'Beschläge und Dichtungen de- und wieder montieren',
                'Evtl. Risse and Fehlstellen fachgerecht verspachteln und schleifen',
                'Ges. Element/Türblatt und Zarge innenseitig grundieren, schleifen, vorstreichen und anschl. deckend weiß lackieren'
            ],
            unit: 'Stk.',
            pricePerUnit: laborPrices.eingangstuerLackieren // Brutto
        },
        {
            id: 'waende-streichen',
            name: 'Wandflächen streichen',
            description: [
                'Vorhandene Wandflächen reinigen und grundieren',
                'Kleinere Risse und Löcher verspachteln',
                '2-facher Anstrich mit hochwertiger Dispersionsfarbe',
                'Lösemittel- und weichmacherfrei',
                'Nassabriebbeständigkeit: Klasse 2'
            ],
            unit: 'm²',
            pricePerUnit: laborPrices.waendeStreichen // Brutto
        }
    ]
};

// Tischler- und Fensterarbeiten
export const tischlerarbeiten = {
    id: 'tischlerarbeiten',
    name: 'Tischler- und Fensterarbeiten',
    positions: [
        {
            id: 'tueren-fenster-gangbar',
            name: 'Türen und Fenster gang & schließbar machen',
            description: [
                'Gang- und Schließbarkeit der Innentüren sowie der Fenster herstellen',
                'Instandsetzen und Beseitigung von Beschädigungen am Tür- und Fensterflügel',
                'Schließzylinder und Rahmen (Schließblech und Fitschen Bänder) prüfen und instand setzen',
                'Der Dichtschließung und Schließsicherung'
            ],
            unit: 'psch.',
            pricePerUnit: laborPrices.fensterWartungPauschal, // Brutto
            priceByRooms: laborPrices.fensterWartungByRooms
        },
        {
            id: 'fensterbank-mdf',
            name: 'Fensterbänke liefern und montieren',
            description: [
                'Fensterbänke in MDF-Ausführung (Farbton weiß) liefern',
                'Anpassen, zurechtschneiden und fachgerecht montieren',
                'Inkl. Versiegelung der Anschlussfugen'
            ],
            unit: 'Stk.',
            pricePerUnit: laborPrices.fensterbankMdf // Brutto
        },
        {
            id: 'fenstergriffe',
            name: 'Sämtliche Fenstergriffe erneuern',
            description: [
                'Fenstergriffe (Kunststoff weiß) liefern und montieren'
            ],
            unit: 'Stk.',
            pricePerUnit: laborPrices.fenstergriffe // Brutto
        },
        {
            id: 'silikon-erneuern',
            name: 'Silikon erneuern',
            description: [
                'Silikon an Türen und Fensteranschlussfugen erneuern'
            ],
            unit: 'psch.',
            pricePerUnit: laborPrices.silikonErneuernPauschal, // Brutto
            priceByRooms: laborPrices.silikonErneuernByRooms
        },
        {
            id: 'innentuer-komplett',
            name: 'Innentür komplett erneuern',
            description: [
                'Bestehende Tür und Zarge demontieren und entsorgen',
                'Neue Innentür mit Zarge liefern und montieren',
                'CPL-Oberfläche weiß oder Dekor',
                'Inkl. Drückergarnitur und Schloss',
                'Inkl. Anpassarbeiten und Versiegelung'
            ],
            unit: 'Stk.',
            pricePerUnit: laborPrices.innentuerErneuern // Brutto
        }
    ]
};

// Bodenbelagsarbeiten
export const bodenbelagsarbeiten = {
    id: 'bodenbelagsarbeiten',
    name: 'Bodenbelagsarbeiten',
    positions: [
        {
            id: 'vinyl-designplanken',
            name: 'Designbodenbelag Vinylplanken verlegen',
            description: [
                'Wohnzimmer, Schlafzimmer, Kinderzimmer, Flur und Küche',
                'Materiallieferung inkl. Verschnitt (ca. 10%)',
                'Untergrund vorbereiten einschl. vollflächiges Spachteln des Rohfußbodens mit dauerelastischer Ausgleichsmasse',
                'Inkl. verschließen von Rissen und Fugen gem. Vorschriften des Herstellers',
                'Einschl. Sperrschicht bei durchschlagenden oder nicht saugenden Untergründen',
                'Ebene, waagerechte und glatte Oberfläche vorbereiten für nachfolgende Bodenbelagsarbeiten herstellen',
                'Designplankenbelag verklebt oder schwimmend verlegen',
                'Inkl. Sockelleisten in passender Optik'
            ],
            unit: 'm²',
            pricePerUnit: laborPrices.designbodenVinylplanken // Brutto
        },
        {
            id: 'sockelleisten',
            name: 'Sockelleisten liefern und montieren',
            description: [
                'Fußleisten in MDF weiß oder passend zum Bodenbelag',
                'Zuschneiden und fachgerecht montieren',
                'Inkl. Befestigungsmaterial'
            ],
            unit: 'Lfm.',
            pricePerUnit: laborPrices.sockelleistenMontage // Brutto
        },
        {
            id: 'laminat',
            name: 'Laminatboden verlegen',
            description: [
                'Laminatboden in gewählter Optik liefern',
                'Trittschalldämmung verlegen',
                'Laminat schwimmend verlegen',
                'Inkl. Sockelleisten und Übergangsprofilen',
                'Inkl. Verschnitt ca. 10%'
            ],
            unit: 'm²',
            pricePerUnit: laborPrices.laminatVerlegen // Brutto
        },
        {
            id: 'parkett',
            name: 'Parkettboden verlegen',
            description: [
                'Fertigparkett in gewählter Holzart liefern',
                'Untergrund vorbereiten und grundieren',
                'Parkett schwimmend oder verklebt verlegen',
                'Inkl. Sockelleisten in passender Holzoptik',
                'Inkl. Verschnitt ca. 10%'
            ],
            unit: 'm²',
            pricePerUnit: laborPrices.parkettVerlegen // Brutto
        },
        {
            id: 'estrich',
            name: 'Estricharbeiten',
            description: [
                'Zementestrich als schwimmender Estrich einbringen',
                'Inkl. Randdämmstreifen und Trennlage',
                'Oberfläche abgezogen und geglättet',
                'Aushärtezeit beachten'
            ],
            unit: 'm²',
            pricePerUnit: laborPrices.estricharbeiten // Brutto
        }
    ]
};

// Trockenbauarbeiten
export const trockenbauarbeiten = {
    id: 'trockenbauarbeiten',
    name: 'Trockenbauarbeiten',
    positions: [
        {
            id: 'trennwand-einfach',
            name: 'Trennwand einfach beplankt',
            description: [
                'Metallständerwerk errichten',
                'Einfache Beplankung mit Gipskartonplatten beidseitig',
                'Fugen und Schraubenköpfe verspachteln',
                'Oberfläche für Malerarbeiten vorbereitet'
            ],
            unit: 'm²',
            pricePerUnit: laborPrices.trennwandEinfach // Brutto
        },
        {
            id: 'trennwand-schallschutz',
            name: 'Trennwand mit Schallschutz',
            description: [
                'Metallständerwerk errichten',
                'Mineralwolle-Dämmung einbringen',
                'Doppelte Beplankung mit Gipskartonplatten beidseitig',
                'Fugen und Schraubenköpfe verspachteln',
                'Schallschutz nach DIN 4109'
            ],
            unit: 'm²',
            pricePerUnit: laborPrices.trennwandSchallschutz // Brutto
        },
        {
            id: 'abgehaengte-decke',
            name: 'Abgehängte Decke',
            description: [
                'Abhängesystem montieren',
                'Gipskartonplatten an Unterkonstruktion befestigen',
                'Fugen und Schraubenköpfe verspachteln',
                'Oberfläche für Malerarbeiten vorbereitet',
                'Inkl. Randanschlüsse'
            ],
            unit: 'm²',
            pricePerUnit: laborPrices.abgehaengteDecke // Brutto
        },
        {
            id: 'vorwandinstallation',
            name: 'Vorwandinstallation',
            description: [
                'Metallständerwerk für Vorwand errichten',
                'Beplankung mit feuchtraumgeeigneten Gipskartonplatten',
                'Vorbereitung für Sanitärinstallationen',
                'Fugen und Schraubenköpfe verspachteln'
            ],
            unit: 'm²',
            pricePerUnit: laborPrices.vorwandinstallation // Brutto
        }
    ]
};

// Putzarbeiten
export const putzarbeiten = {
    id: 'putzarbeiten',
    name: 'Maurer- & Putzarbeiten',
    positions: [
        {
            id: 'innenputz-kalkzement',
            name: 'Innenputz Kalkzement',
            description: [
                'Vorhandenen Putz auf Tragfähigkeit prüfen',
                'Lose Putzteile entfernen',
                'Putzgrund aufbringen',
                'Kalkzementputz maschinell aufbringen',
                'Oberfläche abgezogen (geglättet)'
            ],
            unit: 'm²',
            pricePerUnit: laborPrices.innenputzKalkzement // Brutto
        },
        {
            id: 'aussenputz',
            name: 'Außenputz erneuern',
            description: [
                'Bestehenden Putz abschlagen und entsorgen',
                'Untergrund vorbereiten und grundieren',
                'Wärmedämmputz или mineralischen Außenputz aufbringen',
                'Oberputz als Scheibenputz oder Rillenputz',
                'Inkl. Armierungsgewebe'
            ],
            unit: 'm²',
            pricePerUnit: laborPrices.aussenputz // Brutto
        },
        {
            id: 'sanierputz',
            name: 'Sanierputz bei Feuchteschäden',
            description: [
                'Bestehenden Putz bis 80 cm über Schadensbereich abschlagen',
                'Mauerwerk reinigen und trocknen lassen',
                'Spritzbewurf aufbringen',
                'Sanierputzsystem nach WTA aufbringen',
                'Oberflächenbehandlung'
            ],
            unit: 'm²',
            pricePerUnit: laborPrices.sanierputz // Brutto
        }
    ]
};

// Küchenmontage
export const kuechenmontage = {
    id: 'kuechenmontage',
    name: 'Tischler & Küchen',
    positions: [
        {
            id: 'kueche-zeile',
            name: 'Küchenzeile montieren (bis 3m)',
            description: [
                'Anlieferung und Montage einer Küchenzeile bis 3m',
                'Unterschränke und Oberschränke montieren',
                'Arbeitsplatte zuschneiden und montieren',
                'Spüle und Kochfeld einbauen',
                'Anschluss an vorhandene Installationen',
                'Inkl. Sockelleisten und Abschlussprofile'
            ],
            unit: 'psch.',
            pricePerUnit: laborPrices.kuecheZeileMontage // Brutto
        },
        {
            id: 'kueche-l-form',
            name: 'Küche L-Form montieren (bis 5m)',
            description: [
                'Anlieferung und Montage einer L-Küche',
                'Unterschränke und Oberschränke montieren',
                'Eckverbindungen herstellen',
                'Arbeitsplatte zuschneiden und montieren',
                'Spüle und Kochfeld einbauen',
                'Anschluss an vorhandene Installationen'
            ],
            unit: 'psch.',
            pricePerUnit: laborPrices.kuecheLFormMontage // Brutto
        },
        {
            id: 'einbauschrank',
            name: 'Einbauschrank nach Maß',
            description: [
                'Aufmaß und Planung',
                'Fertigung nach Maß in Tischlerei',
                'Lieferung und Montage vor Ort',
                'Inkl. Einlegeböden und Kleiderstangen'
            ],
            unit: 'Lfm.',
            pricePerUnit: laborPrices.einbauschrankMass // Brutto
        }
    ]
};

// MwSt. Satz
export const VAT_RATE = 0.19;

// Export aller Kategorien
export const allWorkCategories = [
    baustelleneinrichtung,
    abbrucharbeiten,
    asbestsanierung,
    elektroarbeiten,
    sanitaerBad,
    sanitaerKueche,
    heizungsarbeiten,
    fliesenarbeiten,
    malerarbeiten,
    tischlerarbeiten,
    bodenbelagsarbeiten,
    trockenbauarbeiten,
    putzarbeiten,
    kuechenmontage
];

// Hilfsfunktion: Position nach ID finden
export const findPositionById = (positionId) => {
    for (const category of allWorkCategories) {
        const found = category.positions.find(p => p.id === positionId);
        if (found) return { ...found, categoryId: category.id, categoryName: category.name };
    }
    return null;
};

// Hilfsfunktion: Alle Positionen einer Kategorie
export const getPositionsByCategory = (categoryId) => {
    const category = allWorkCategories.find(c => c.id === categoryId);
    return category ? category.positions : [];
};
