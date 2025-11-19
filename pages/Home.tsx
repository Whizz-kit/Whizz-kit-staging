import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ShieldCheck, Zap, BarChart2, WifiOff, ArrowRight, CreditCard, Coins, Server, Smartphone, Layers, Calculator, QrCode, Package, Star } from 'lucide-react';
import { solutions, testimonials, assets } from '../data';
import SEO from '../components/SEO';

const Home: React.FC = () => {
  
  // Helper for icon mapping
  const getIconForSolution = (slug: string) => {
    switch(slug) {
      case 'card-payments': return <CreditCard size={24} />;
      case 'token-only': return <Coins size={24} />;
      case 'rfid-cards-wristbands': return <WifiOff size={24} />;
      case 'rfid-stations': return <Server size={24} />;
      case 'tap-to-pay': return <Smartphone size={24} />;
      case 'hybrid-payments': return <Layers size={24} />;
      case 'tokenpos': return <Calculator size={24} />;
      case 'qr-redeem': return <QrCode size={24} />;
      case 'analytics-dashboard': return <BarChart2 size={24} />;
      case 'inventory-management': return <Package size={24} />;
      default: return <CreditCard size={24} />;
    }
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Whizz-kit",
    "url": "https://whizz-kit.com",
    "logo": assets.logoDark,
    "description": "Offline-first betaaloplossingen en kassasystemen voor festivals en evenementen.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Arnhem",
      "addressCountry": "NL"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+31-26-202-2490",
      "contactType": "sales",
      "availableLanguage": ["Dutch", "English"]
    },
    "sameAs": [
      "https://www.linkedin.com/company/whizz-kit",
      "https://www.instagram.com/whizzkit"
    ]
  };

  return (
    <div className="bg-[#FDFDFD]">
      <SEO 
        title="Offline-first betaaloplossingen voor festivals" 
        description="Whizz-kit biedt betrouwbare kassasystemen voor festivals. Card payments, munten, RFID en statiegeld (recycle tokens) in één dashboard. Werkt 100% offline."
        schema={organizationSchema}
      />
      
      {/* Full Screen Hero Section - Redesigned */}
      <section className="relative w-full min-h-[90vh] lg:min-h-screen flex items-center bg-dark overflow-hidden pt-28 lg:pt-0">
         {/* Background Image */}
         <div className="absolute inset-0 z-0">
            <img 
              src={assets.hero} 
              alt="Whizz-kit Bar Operations" 
              className="w-full h-full object-cover object-center scale-105"
              onError={(e) => {
                 e.currentTarget.src = "https://images.unsplash.com/photo-1561055657-d9e552e29540?q=80&w=2069";
              }}
            />
            {/* Enhanced Gradient Overlay - Allowed over photos */}
            <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/80 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent opacity-90 lg:opacity-80"></div>
         </div>

         <div className="container mx-auto px-6 lg:px-12 max-w-screen-2xl relative z-10 pb-12 lg:pb-0">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-lg border border-white/10 rounded-full px-4 py-1.5 lg:px-5 lg:py-2 text-xs lg:text-sm font-mono font-bold text-white mb-8 lg:mb-10 shadow-lg">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                </span>
                Operational Excellence
              </div>
              
              <h1 className="font-display text-4xl sm:text-6xl lg:text-[7rem] font-extrabold tracking-tight mb-6 lg:mb-8 leading-[1.1] lg:leading-[0.9] text-white drop-shadow-sm">
                Betrouwbaarheid,<br/>
                data-integriteit<br/>
                <span className="text-white">en continuïteit.</span>
              </h1>
              
              <p className="font-sans text-lg lg:text-2xl text-white/80 mb-8 lg:mb-12 max-w-2xl leading-relaxed font-medium antialiased">
                Volledig geïntegreerde betaaloplossingen voor festivals: offline-first, snel en foutloos, zelfs bij uitval van stroom of internet.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Link 
                  to="/demo" 
                  className="w-full sm:w-auto bg-secondary text-white px-8 py-3.5 lg:px-10 lg:py-4 rounded-xl lg:rounded-2xl font-display font-bold text-base lg:text-lg hover:bg-secondary-hover transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1 text-center"
                >
                  Vrijblijvende demo
                </Link>
                <Link 
                  to="/contact" 
                  className="w-full sm:w-auto bg-white/10 backdrop-blur-md text-white px-8 py-3.5 lg:px-10 lg:py-4 rounded-xl lg:rounded-2xl font-display font-bold text-base lg:text-lg hover:bg-white/20 transition-colors border border-white/20 text-center"
                >
                  Contact opnemen
                </Link>
              </div>
            </div>
         </div>
      </section>

      {/* Stats Strip - Interlocking Grid */}
      <div className="container mx-auto px-4 lg:px-12 max-w-screen-2xl -mt-16 lg:-mt-24 relative z-20 mb-20 lg:mb-32">
        <div className="bg-neutral-light p-[1px] rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-[1px] bg-neutral-light">
              <div className="bg-white p-6 lg:p-8 text-center hover:bg-neutral-surface transition-colors">
                <p className="font-display text-2xl lg:text-5xl font-extrabold text-primary mb-1 lg:mb-2">350+</p>
                <p className="text-[10px] lg:text-sm text-neutral-text font-bold uppercase tracking-wider font-mono">Festivals per jaar</p>
              </div>
              <div className="bg-white p-6 lg:p-8 text-center hover:bg-neutral-surface transition-colors">
                <p className="font-display text-2xl lg:text-5xl font-extrabold text-primary mb-1 lg:mb-2">1000+</p>
                <p className="text-[10px] lg:text-sm text-neutral-text font-bold uppercase tracking-wider font-mono">Kassa's op voorraad</p>
              </div>
              <div className="bg-white p-6 lg:p-8 text-center hover:bg-neutral-surface transition-colors">
                <p className="font-display text-2xl lg:text-5xl font-extrabold text-primary mb-1 lg:mb-2">100%</p>
                <p className="text-[10px] lg:text-sm text-neutral-text font-bold uppercase tracking-wider font-mono">Offline dekking</p>
              </div>
              <div className="bg-neutral-surface p-6 lg:p-8 text-center flex flex-col justify-center items-center">
                <p className="font-display text-base lg:text-lg font-bold text-dark mb-1">Gekozen door</p>
                <p className="text-xs lg:text-sm text-neutral-text font-medium">ID&T, Loveland, B2S</p>
              </div>
          </div>
        </div>
      </div>

      {/* USP Section - Bento Grid */}
      <section className="container mx-auto px-4 lg:px-12 max-w-screen-2xl mb-20 lg:mb-32">
        <div className="mb-8 lg:mb-12 text-center md:text-left">
           <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-dark">Waarom Whizz-kit?</h2>
        </div>

        {/* The Bento Grid Container */}
        <div className="bg-neutral-light border border-neutral-light rounded-2xl lg:rounded-3xl overflow-hidden p-[1px]">
           <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-[1px] h-full">
              
              {/* 1. Large Card: Works Always (2x2) */}
              <div className="md:col-span-2 md:row-span-2 bg-dark text-white p-8 lg:p-16 flex flex-col justify-between relative overflow-hidden group min-h-[320px]">
                  <div className="relative z-10">
                    <div className="w-12 h-12 lg:w-14 lg:h-14 bg-white/10 rounded-2xl flex items-center justify-center text-secondary mb-6 lg:mb-8 backdrop-blur-sm">
                        <WifiOff size={28} className="lg:w-8 lg:h-8" />
                    </div>
                    <h3 className="font-display text-2xl lg:text-3xl font-bold mb-3 lg:mb-4">Werkt altijd</h3>
                    <p className="text-primary-pale text-base lg:text-lg leading-relaxed max-w-md">
                      Betalingen gaan door, ook offline. Synchroniseert automatisch en foutloos bij herstel van de verbinding. Geen omzetverlies.
                    </p>
                  </div>
                  {/* Abstract pattern or image could go here */}
                  <div className="absolute right-0 bottom-0 opacity-10 transform translate-x-1/4 translate-y-1/4 transition-transform duration-700 group-hover:scale-110">
                    <WifiOff size={200} className="lg:w-[300px] lg:h-[300px]" />
                  </div>
              </div>

              {/* 2. Small Card: Data Integrity */}
              <div className="md:col-span-1 bg-white p-8 lg:p-10 hover:bg-neutral-50 transition-colors flex flex-col justify-between h-full group min-h-[200px]">
                  <ShieldCheck size={28} className="text-primary mb-4 lg:mb-6 lg:w-8 lg:h-8 group-hover:scale-110 transition-transform" />
                  <div>
                    <h3 className="font-display text-lg lg:text-xl font-bold text-dark mb-2">Data-integriteit</h3>
                    <p className="text-neutral-text text-sm leading-relaxed">Transacties sluiten altijd op elkaar aan. 100% audit trail.</p>
                  </div>
              </div>

              {/* 3. Small Card: Fast */}
              <div className="md:col-span-1 bg-white p-8 lg:p-10 hover:bg-neutral-50 transition-colors flex flex-col justify-between h-full group min-h-[200px]">
                  <Zap size={28} className="text-primary mb-4 lg:mb-6 lg:w-8 lg:h-8 group-hover:scale-110 transition-transform" />
                  <div>
                    <h3 className="font-display text-lg lg:text-xl font-bold text-dark mb-2">Snel aan de bar</h3>
                    <p className="text-neutral-text text-sm leading-relaxed">Intuïtieve interface voor crew. Minimale training, maximale snelheid.</p>
                  </div>
              </div>

              {/* 4. Wide Card: Realtime (2x1) */}
              <div className="md:col-span-2 bg-white p-8 lg:p-10 flex flex-col md:flex-row items-start md:items-center gap-6 lg:gap-8 hover:bg-neutral-50 transition-colors group">
                   <div className="bg-neutral-lighter p-3 lg:p-4 rounded-xl text-primary group-hover:text-white group-hover:bg-primary transition-colors shrink-0">
                      <BarChart2 size={28} className="lg:w-8 lg:h-8" />
                   </div>
                   <div>
                      <h3 className="font-display text-lg lg:text-xl font-bold text-dark mb-2">Realtime inzicht</h3>
                      <p className="text-neutral-text text-sm leading-relaxed">
                        Live monitoring van omzet, drukte per locatie, batterijstatus en internetverbinding in één centraal dashboard.
                      </p>
                   </div>
              </div>
           </div>
        </div>
      </section>

      {/* Solutions Overview - Unified 5-column Grid */}
      <section className="container mx-auto px-4 lg:px-12 max-w-screen-2xl mb-20 lg:mb-32">
         <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 lg:mb-12 gap-4 lg:gap-6">
            <div>
              <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-dark mb-2 lg:mb-4">Onze Oplossingen</h2>
              <p className="text-base lg:text-lg text-neutral-text max-w-xl">
                Een modulair ecosysteem voor een succesvol festival. Kies wat u nodig heeft.
              </p>
            </div>
            <Link to="/oplossingen" className="text-primary font-bold font-display flex items-center gap-2 hover:gap-3 transition-all text-sm lg:text-base">
               Bekijk alle specificaties <ArrowRight size={18}/>
            </Link>
         </div>

         {/* The Grid */}
         <div className="bg-neutral-light border border-neutral-light rounded-2xl lg:rounded-3xl overflow-hidden p-[1px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-[1px] bg-neutral-light">
              {solutions.map((solution) => (
                 <Link 
                   key={solution.slug} 
                   to={`/oplossingen/${solution.slug}`}
                   className="bg-white p-6 lg:p-8 flex flex-col h-full hover:bg-neutral-50 transition-colors group relative"
                 >
                    <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-neutral-lighter flex items-center justify-center text-dark mb-4 lg:mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                       {getIconForSolution(solution.slug)}
                    </div>
                    <h3 className="font-display text-base lg:text-lg font-bold text-dark mb-2 lg:mb-3 leading-tight">{solution.shortTitle || solution.title}</h3>
                    <p className="text-sm text-neutral-text leading-relaxed line-clamp-3 mb-4 lg:mb-6 flex-grow">{solution.sub}</p>
                    
                    <div className="mt-auto pt-4 lg:pt-6 border-t border-neutral-lighter w-full flex items-center justify-between text-primary font-bold text-sm lg:opacity-0 group-hover:opacity-100 transition-opacity transform lg:translate-y-2 group-hover:translate-y-0">
                       <span>Bekijk details</span>
                       <ArrowRight size={14}/>
                    </div>
                 </Link>
              ))}
            </div>
         </div>
      </section>

      {/* Short Story Section - Tighter Design */}
      <section className="container mx-auto px-4 lg:px-12 max-w-screen-2xl mb-20 lg:mb-32">
         <div className="bg-dark rounded-2xl lg:rounded-3xl overflow-hidden flex flex-col lg:flex-row border border-dark">
            <div className="lg:w-1/2 p-8 lg:p-20 flex flex-col justify-center">
               <h2 className="font-display text-2xl lg:text-4xl font-bold text-white mb-6 lg:mb-8">Van slimme rekentool naar festivalpartner.</h2>
               <div className="prose prose-base lg:prose-lg text-primary-pale mb-8 lg:mb-10 leading-relaxed">
                  <p>
                     Opgericht in 2022 door Frank en Christiaan. Gebouwd voor de hectiek van het terrein: snel, robuust en flexibel.
                  </p>
                  <p>
                     Samenwerking met organisatoren en crews staat centraal. We begrijpen dat techniek faciliterend moet zijn aan de beleving.
                  </p>
               </div>
               <Link to="/over-ons" className="inline-flex items-center gap-2 text-white font-bold font-display hover:text-primary-light transition-colors">
                  Lees ons verhaal <ArrowRight size={18}/>
               </Link>
            </div>
            <div className="lg:w-1/2 relative min-h-[250px] lg:min-h-[300px]">
               <img 
                 src={assets.vision} 
                 alt="Whizz-kit Vision" 
                 className="absolute inset-0 w-full h-full object-cover opacity-80" 
               />
               <div className="absolute inset-0 bg-dark/20"></div>
            </div>
         </div>
      </section>

      {/* Testimonials - Interlocking Grid */}
      <section className="container mx-auto px-4 lg:px-12 max-w-screen-2xl mb-20 lg:mb-32">
        <h2 className="font-display text-2xl lg:text-3xl font-bold text-dark mb-8 lg:mb-10">Partners aan het woord</h2>
        <div className="bg-neutral-light p-[1px] rounded-2xl lg:rounded-3xl overflow-hidden">
          <div className="grid md:grid-cols-3 gap-[1px] bg-neutral-light">
             {testimonials.map((t) => (
               <div key={t.id} className="bg-white p-8 lg:p-10 flex flex-col hover:bg-neutral-50 transition-colors">
                  <div className="flex gap-1 mb-4 lg:mb-6 text-secondary">
                    {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
                  </div>
                  <p className="font-sans text-dark text-base lg:text-lg font-medium italic mb-6 lg:mb-8 flex-grow leading-relaxed">"{t.quote}"</p>
                  <div className="flex items-center gap-4 pt-6 border-t border-neutral-lighter">
                     <div>
                        <p className="font-bold text-dark text-sm lg:text-base">{t.name}</p>
                        <p className="text-xs lg:text-sm text-neutral-text">{t.role}, {t.organization}</p>
                     </div>
                  </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Simple CTA Banner */}
      <section className="container mx-auto px-4 lg:px-12 max-w-screen-2xl pb-20 lg:pb-24">
         <div className="bg-primary rounded-2xl lg:rounded-3xl p-8 lg:p-24 text-center relative overflow-hidden shadow-xl">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
               <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-white blur-3xl"></div>
               <div className="absolute -bottom-24 -right-24 w-64 h-64 rounded-full bg-white blur-3xl"></div>
            </div>
            
            <div className="relative z-10 max-w-3xl mx-auto">
               <h2 className="font-display text-2xl lg:text-5xl font-extrabold text-white mb-6 lg:mb-8 leading-tight">
                  Plan een gesprek en ontdek hoe Whizz-kit jouw festivalbetalingen optimaliseert.
               </h2>
               <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/demo" className="bg-white text-primary px-8 py-3.5 lg:py-4 rounded-xl font-bold font-display text-base lg:text-lg hover:bg-neutral-100 transition-colors shadow-sm">
                     Demo inplannen
                  </Link>
                  <Link to="/contact" className="bg-primary-hover text-white px-8 py-3.5 lg:py-4 rounded-xl font-bold font-display text-base lg:text-lg hover:bg-primary-hover/80 transition-colors border border-white/20">
                     Contact opnemen
                  </Link>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Home;