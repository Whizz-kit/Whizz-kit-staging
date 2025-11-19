import { Solution, CaseStudy, BlogPost, Testimonial } from './types';

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
}

// CENTRAL ASSET MAPPING
export const assets = {
  logoDark: 'https://ik.imagekit.io/fto/whizz-kit/whizz-kit-logo-vibrant-blue%20(1).png', 
  logoLight: 'https://ik.imagekit.io/fto/whizz-kit/whizz-kit-logo-light-bg.png', 
  hero: 'https://ik.imagekit.io/fto/whizz-kit/Image%20(Bar%20staff).png', 
  vision: 'https://ik.imagekit.io/fto/whizz-kit/VisionSlide.png',
  dashboard: 'https://ik.imagekit.io/fto/whizz-kit/Screenshot%202025-11-03%20at%2013.30.41%201.jpg',
  inventory: 'https://ik.imagekit.io/fto/whizz-kit/Image%20(Inventory%20dashboard).png',
  crew: 'https://ik.imagekit.io/fto/whizz-kit/Image%20(Cashier).png',
  terminal: 'https://ik.imagekit.io/fto/whizz-kit/Kassa%201.png',
  tokens: 'https://ik.imagekit.io/fto/whizz-kit/image30.png.png',
  crowd: 'https://ik.imagekit.io/fto/whizz-kit/ImageWithFallback.png',
  recycling: 'https://ik.imagekit.io/fto/whizz-kit/Image%20(Festival%20cup%20recycling).png',
  booth: 'https://ik.imagekit.io/fto/whizz-kit/Image%20(Festival%20ticket%20booth).png',
};

export const team: TeamMember[] = [
  { id: '1', name: 'Frank van der Meer', role: 'Co-Founder & Commercial Director', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop' },
  { id: '2', name: 'Christiaan Sanders', role: 'Co-Founder & Technical Director', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop' },
  { id: '3', name: 'Elise de Jong', role: 'Head of Operations', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop' },
  { id: '4', name: 'Mark Visser', role: 'Lead Developer', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000&auto=format&fit=crop' },
  { id: '5', name: 'Sarah Bouwman', role: 'Account Manager Festivals', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000&auto=format&fit=crop' },
  { id: '6', name: 'Tom Jansen', role: 'Logistics Manager', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop' },
  { id: '7', name: 'Lisa de Vries', role: 'Customer Success', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop' },
  { id: '8', name: 'David Bakker', role: 'Hardware Engineer', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop' },
  { id: '9', name: 'Sophie van Dam', role: 'UX/UI Designer', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop' },
  { id: '10', name: 'Jeroen Meijer', role: 'Backend Developer', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000&auto=format&fit=crop' },
  { id: '11', name: 'Emma Hendriks', role: 'Finance & Admin', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop' },
  { id: '12', name: 'Lars van den Berg', role: 'On-site Support', image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=1000&auto=format&fit=crop' },
  { id: '13', name: 'Nina Willems', role: 'Event Coordinator', image: 'https://images.unsplash.com/photo-1598550874175-4d7112ee7f38?q=80&w=1000&auto=format&fit=crop' },
  { id: '14', name: 'Tim Kuipers', role: 'Warehouse Specialist', image: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?q=80&w=1000&auto=format&fit=crop' }
];

export const solutions: Solution[] = [
  // PAYMENTS
  {
    id: 'card-payments',
    slug: 'card-payments',
    title: 'Whizz-kit Card Payments',
    shortTitle: 'Card Payments',
    category: 'payment',
    sub: 'Betalen aan de bar met smartwatch, mobile wallet, debit- of creditkaart. Ook offline.',
    bullets: [
      'Werkt ook zonder internet of stroom',
      'Auto-sync bij herstel van verbinding',
      'Ondersteunt mobiele betalingen (telefoon en smartwatch)',
      'Alle gangbare betaalkaarten en providers',
      'Direct inzetbaar op elk terrein; bestand tegen weer en stof'
    ],
    description: 'Lijst van ondersteunde kaarten: Visa, Mastercard, Bancontact, vPay, Maestro, Girocard, American Express, Discover, SEPA Direct Debit, Diners Club, PayPal, Union Pay, en meer.',
    iconName: 'CreditCard'
  },
  {
    id: 'token-only',
    slug: 'token-only',
    title: 'Whizz-kit Token Only',
    shortTitle: 'Token Only',
    category: 'payment',
    sub: 'Betalen met festivalmunten en recycle tokens. Foutloos, snel en winstgevend.',
    bullets: [
      '+7,6% meer omzet door minder rekenfouten',
      'Eenvoudige bediening: invoeren, aflezen en afrekenen',
      'Direct inzicht; minder discussie aan de bar',
      'Werkt naadloos met bestaande muntsystemen',
      'Minder diefstal en fraude door transparante registratie'
    ],
    iconName: 'Coins'
  },
  {
    id: 'rfid-cards-wristbands',
    slug: 'rfid-cards-wristbands',
    title: 'RFID Cash Cards & Wristbands',
    shortTitle: 'RFID Cards & Wristbands',
    category: 'payment',
    sub: 'Contactloos en 100% offline betalen – snel en veilig.',
    bullets: [
      'Volledig offline betalingen zonder netwerk',
      'Beveiligde saldo-opslag op kaart (encryptie)',
      'Snelle NFC-verwerking aan de bar',
      'Geen dataverlies; restsaldo kan niet overschreden worden',
      'Minder druk op netwerk en kassa-infrastructuur'
    ],
    iconName: 'Wifi'
  },
  {
    id: 'hybrid-payments',
    slug: 'hybrid-payments',
    title: 'Whizz-kit Hybrid Payments',
    shortTitle: 'Hybrid Payments',
    category: 'payment',
    sub: 'Alle betaalmethoden in één systeem. Maximale keuzevrijheid.',
    bullets: [
      'Combineer cards, munten, RFID, QR, recycle tokens',
      'Keuze per transactie door de bezoeker',
      'Ondersteunt eigen valuta (bijv. gouden munt)',
      'Eén geïntegreerd systeem met centrale rapportage',
      'Minder logistiek gedoe; meer gemak'
    ],
    iconName: 'Layers'
  },
  {
    id: 'tap-to-pay',
    slug: 'tap-to-pay',
    title: 'Whizz-kit Tap to Pay',
    shortTitle: 'Tap to Pay',
    category: 'payment',
    sub: 'Contactloos betalen op elke plek, zonder vaste opstelling.',
    bullets: [
      'Perfect voor mobiele verkooppunten en parking',
      'Lichtgewicht draagbaar device',
      'Geen vaste stroomvoorziening nodig',
      'Realtime transactiedata in het dashboard',
      'Makkelijk op- en afschalen; minimale training'
    ],
    iconName: 'Smartphone'
  },
  {
    id: 'qr-redeem',
    slug: 'qr-redeem',
    title: 'Whizz-kit QR Redeem',
    shortTitle: 'QR Redeem',
    category: 'payment',
    sub: 'Snel, veilig en digitaal statiegeld terugbetalen. Zonder cash of wachtrij.',
    bullets: [
      'Tot 10× sneller dan retourtransacties aan de bar',
      'Volledig inzicht in retourstromen',
      'Unieke QR’s en controle voor fraudepreventie',
      'SEPA-batch uitbetalingen vanuit eigen bank',
      'Ongeveer 30% claimt statiegeld niet terug'
    ],
    description: 'Stappen: 1) Bekers inleveren 2) QR-bon genereren 3) Bezoeker vraagt online terug 4) Batch uitbetaling na controle',
    iconName: 'QrCode'
  },
  
  // FUNCTIONALITIES
  {
    id: 'rfid-stations',
    slug: 'rfid-stations',
    title: 'Whizz-kit RFID Stations',
    shortTitle: 'RFID Stations',
    category: 'functionality',
    sub: 'RFID-kaarten en polsbandjes uitgeven en opwaarderen – snel, veilig en offline.',
    bullets: [
      'Betalen met cash, kaart, smartwatch of mobile wallet',
      'Volledig offline; geen netwerk vereist',
      'Configureerbare fees voor uitgifte en restitutie',
      'Crew/VIP/Artist-profielen en beperkingen (zoals geen alcohol)',
      'Saldo-restitutie via QR Redeem',
      'Volledige integratie met transactie-dashboard',
      'Snelle uitgifte en opwaarderen (bijv. min. €20, max. €150)'
    ],
    iconName: 'Server'
  },
  {
    id: 'tokenpos',
    slug: 'tokenpos',
    title: 'Whizz-kit TokenPOS',
    shortTitle: 'TokenPOS',
    category: 'functionality',
    sub: 'Munten verkopen zonder rekenfouten. Inzicht en controle in één.',
    bullets: [
      'Automatische berekening van wisselgeld',
      'Inzicht in omzet en wisselgeld per medewerker',
      'Vaste lage transactiekosten',
      'Rapportage van verkochte versus ingeleverde munten',
      'Duidelijk voordeel t.o.v. reguliere muntenkassa (geen dubbele invoer)'
    ],
    iconName: 'Calculator'
  },
  {
    id: 'analytics-dashboard',
    slug: 'analytics-dashboard',
    title: 'Whizz-kit Analytics Dashboard',
    shortTitle: 'Analytics Dashboard',
    category: 'functionality',
    sub: '360° live inzicht in omzet, prestaties en duurzaamheid.',
    bullets: [
      'Live data per bar, kassa, apparaat, productcategorie en locatie',
      'Grafieken drank/food/merch',
      'SUP-normen inzichtelijk conform Europese wetgeving',
      'Winst op niet-ingeleverde waarden (munten, RFID-saldi, recycle)',
      'Omzetbelasting per product, bar en totaal',
      'Data-integriteit, batterijstatus en internetmonitoring'
    ],
    iconName: 'BarChart3'
  },
  {
    id: 'inventory-management',
    slug: 'inventory-management',
    title: 'Whizz-kit Inventory Management',
    shortTitle: 'Inventory Management',
    category: 'functionality',
    sub: 'Volledig inzicht in verbruik en voorraden – live en nauwkeurig.',
    bullets: [
      'Proactief inzicht per opslagpunt en totaal',
      'Automatische berekening verbruik (liters, verpakkingen, percentages)',
      'Ondersteunt complexe productkoppelingen (bijv. cola in cocktails)',
      'Eenvoudig verplaatsen tussen locaties',
      'Centrale monitoring vanaf de CP',
      'Cumulatieve rapportage over het volledige festival'
    ],
    iconName: 'Package'
  }
];

export const cases: CaseStudy[] = [
  {
    id: 'id-t-group',
    slug: 'id-t-group',
    title: 'Mysteryland & Defqon.1',
    organizer: 'ID&T Group',
    intro: 'Grootschalige implementatie van offline-first card payments en recycle tokens.',
    challenge: 'Betrouwbaarheid garanderen op een terrein met duizenden bezoekers en wisselende connectiviteit.',
    solution: ['Card Payments', 'Token Only', 'Analytics Dashboard'],
    results: ['0% downtime tijdens piekuren', 'Realtime inzicht in baromzet', 'Verbeterde doorstroom aan de bar'],
    image: assets.crowd 
  },
  {
    id: 'loveland',
    slug: 'loveland',
    title: 'Loveland Festival',
    organizer: 'Loveland Group',
    intro: 'Naadloze overgang naar hybride betalingen en voorraadbeheer.',
    challenge: 'Bezoekers de keuze bieden tussen munten en direct pinnen aan de bar.',
    solution: ['Hybrid Payments', 'Inventory Management'],
    results: ['Hogere besteding per bezoeker', 'Minder wachtrijen bij muntenkassa’s', 'Nauwkeurige voorraadmeting'],
    image: assets.inventory
  },
  {
    id: 'b2s',
    slug: 'b2s',
    title: 'Decibel Outdoor',
    organizer: 'B2S',
    intro: 'Robuuste betaalinfrastructuur voor een weekendfestival met camping.',
    challenge: 'Continuïteit van verkoop garanderen over meerdere dagen en recycle processen stroomlijnen.',
    solution: ['RFID Cards', 'RFID Stations', 'QR Redeem'],
    results: ['Efficiënte statiegeld retouren', 'Veilige offline transacties', 'Tevreden crew en bezoekers'],
    image: assets.recycling
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: 'post-1',
    slug: 'offline-first-explained',
    title: 'Waarom offline-first essentieel is voor festivals',
    category: 'Best practices',
    summary: 'Hoe Whizz-kit doorgaat waar andere systemen stoppen bij internetuitval.',
    readTime: '4 min',
    content: `
      <p>Op een festivalterrein is internet nooit een garantie. Netwerkcongestie, storingen bij providers of afgelegen locaties kunnen ervoor zorgen dat 4G/5G verbindingen haperen of volledig wegvallen.</p>
      <p>Veel traditionele kassasystemen zijn afhankelijk van een continue verbinding met de cloud (cloud-only). Valt de verbinding weg? Dan stopt de verkoop. Voor een festival met tienduizenden bezoekers is dit een rampscenario.</p>
      <h3>De Whizz-kit aanpak: Local First</h3>
      <p>Bij Whizz-kit draaien we dit om. Onze apparatuur is "local-first". Dit betekent dat elke kassa of terminal een eigen, lokale database heeft. Transacties worden lokaal opgeslagen en verwerkt. Hierdoor gaat de verkoop aan de bar altijd door, in milliseconden, ongeacht de status van het internet.</p>
      <p>Zodra de verbinding herstelt, synchroniseert het systeem automatisch alle data naar het centrale dashboard. Zo behoud je data-integriteit zonder in te leveren op betrouwbaarheid.</p>
    `
  },
  {
    id: 'post-2',
    slug: 'sup-wetgeving',
    title: 'SUP-wetgeving en jouw festival',
    category: 'Wet- en regelgeving',
    summary: 'Hoe het dashboard helpt bij het naleven van de Single Use Plastic regels.',
    readTime: '3 min',
    content: `
      <p>Sinds de invoering van de Single Use Plastic (SUP) richtlijnen zijn festivalorganisatoren verplicht om een circulair systeem voor bekers en voedselverpakkingen te hanteren. Dit vereist een nauwkeurige administratie van uitgifte en inname.</p>
      <h3>Inzicht met één druk op de knop</h3>
      <p>Het Whizz-kit Analytics Dashboard houdt exact bij hoeveel bekers er worden uitgegeven (verkocht met statiegeld of muntje) en hoeveel er retour komen via de bar of recycle stations.</p>
      <p>Deze data is realtime beschikbaar. Hierdoor kun je tijdens het evenement al bijsturen als het retourpercentage achterblijft, en heb je na afloop direct de rapportage klaar voor de overheid.</p>
    `
  },
  {
    id: 'post-3',
    slug: 'update-2025',
    title: 'Product Update: QR Redeem 2.0',
    category: 'Product updates',
    summary: 'Nog sneller statiegeld terugvragen zonder wachtrijen.',
    readTime: '2 min',
    content: `
      <p>Statiegeld terugvragen aan de bar is een van de grootste ergernissen voor bezoekers én barpersoneel. Het vertraagt het bestelproces en zorgt voor rijen op momenten dat bezoekers naar huis willen.</p>
      <h3>QR Redeem: Digitaal en Direct</h3>
      <p>Met de update naar QR Redeem 2.0 hebben we het proces nog verder versimpeld. Bezoekers leveren hun bekers in bij een recycle punt, de crew scant de inname en er wordt direct een unieke QR-bon geprint.</p>
      <p>De bezoeker scant deze bon met hun telefoon, vult hun IBAN in, en wij verwerken de uitbetaling in SEPA batches. Dit proces is volledig losgekoppeld van de bar, waardoor barpersoneel zich kan focussen op verkoop.</p>
    `
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Mark de Vries',
    role: 'Head of Operations',
    organization: 'ID&T Group',
    quote: 'Dankzij de offline-first aanpak van Whizz-kit hebben we geen minuut verkoop gemist, zelfs toen het 4G netwerk eruit lag.'
  },
  {
    id: 't2',
    name: 'Sarah Janssen',
    role: 'Festival Director',
    organization: 'Loveland',
    quote: 'Het dashboard geeft ons eindelijk de controle over de baromzet en voorraad die we altijd misten. Een gamechanger.'
  },
  {
    id: 't3',
    name: 'Tom Peters',
    role: 'Site Manager',
    organization: 'B2S',
    quote: 'De kassa’s zijn hufterproof en super simpel. Onze barcrew had geen training nodig en kon direct aan de slag.'
  }
];