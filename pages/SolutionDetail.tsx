import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { solutions, assets } from '../data';
import { Check, HelpCircle, ChevronLeft, Zap, Settings, ShieldCheck, Layout, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

const SolutionDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const solution = solutions.find(s => s.slug === slug);

  if (!solution) {
    return <Navigate to="/oplossingen" replace />;
  }

  const getSidebarImage = (slug: string, category: string) => {
    switch(slug) {
      case 'card-payments': return assets.terminal;
      case 'token-only': return assets.tokens;
      case 'rfid-cards-wristbands': return assets.terminal;
      case 'rfid-stations': return assets.booth;
      case 'analytics-dashboard': return assets.dashboard;
      case 'inventory-management': return assets.inventory;
      case 'qr-redeem': return assets.recycling;
      default: return category === 'payment' ? assets.hero : assets.vision;
    }
  };

  const detailImage = getSidebarImage(solution.slug, solution.category);

  // Product Schema for Google
  const productSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": solution.title,
    "description": solution.sub,
    "brand": {
      "@type": "Brand",
      "name": "Whizz-kit"
    },
    "offers": {
      "@type": "Offer",
      "url": `https://whizz-kit.com/oplossingen/${solution.slug}`,
      "availability": "https://schema.org/InStock",
      "priceCurrency": "EUR",
      "price": "0.00" // Request quote
    }
  };

  return (
    <div className="bg-[#FDFDFD] min-h-screen">
       <SEO 
          title={solution.title} 
          description={solution.sub} 
          image={detailImage}
          type="product"
          schema={productSchema}
       />
       
       {/* Immersive Dark Hero - Simplified without side image */}
       <div className="bg-dark relative pt-32 lg:pt-40 pb-16 lg:pb-32 overflow-hidden">
          {/* Abstract Background */}
          <div className="absolute inset-0 z-0">
              <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] bg-primary/20 rounded-full blur-[120px] opacity-60 pointer-events-none mix-blend-screen"></div>
              <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-dark via-dark/80 to-transparent z-10"></div>
              <img 
                src={assets.hero} 
                className="w-full h-full object-cover opacity-20 mix-blend-overlay grayscale"
                alt="Background texture"
              />
          </div>

          <div className="container mx-auto px-6 lg:px-12 max-w-screen-2xl relative z-20 text-center lg:text-left">
             <Link to="/oplossingen" className="inline-flex items-center text-xs lg:text-sm font-bold font-display text-white/60 hover:text-white mb-8 transition-colors uppercase tracking-wider group">
                <ChevronLeft size={16} className="mr-1 transition-transform group-hover:-translate-x-1"/> Bekijk alle oplossingen
             </Link>
             
             <div className="max-w-4xl mx-auto lg:mx-0">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-white/10 backdrop-blur-md border border-white/10 text-white text-[10px] lg:text-xs font-mono font-bold uppercase tracking-wider mb-6">
                   <span className={`w-2 h-2 rounded-full ${solution.category === 'payment' ? 'bg-secondary' : 'bg-primary'}`}></span>
                   {solution.category === 'payment' ? 'Betaaloplossing' : 'Module'}
                </div>
                <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-[1.1] lg:leading-[0.95] tracking-tight">
                   {solution.title}
                </h1>
                <p className="font-sans text-lg lg:text-xl text-white/80 leading-relaxed max-w-2xl mb-10 font-medium mx-auto lg:mx-0">
                   {solution.sub}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                   <Link to="/demo" className="bg-secondary text-white px-8 py-3.5 lg:py-4 rounded-xl lg:rounded-2xl font-bold font-display text-base lg:text-lg hover:bg-secondary-hover transition-all shadow-lg shadow-secondary/20 hover:shadow-secondary/40 hover:-translate-y-1 text-center">
                      Demo aanvragen
                   </Link>
                   <a href="#details" className="bg-white/10 text-white backdrop-blur-md border border-white/20 px-8 py-3.5 lg:py-4 rounded-xl lg:rounded-2xl font-bold font-display text-base lg:text-lg hover:bg-white/20 transition-colors text-center">
                      Specificaties
                   </a>
                </div>
             </div>
          </div>
       </div>

       {/* Main Content */}
       <div id="details" className="container mx-auto px-4 lg:px-12 max-w-screen-2xl pt-12 lg:pt-20 pb-20 lg:pb-24">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
             
             {/* Main Column */}
             <div className="lg:col-span-8 space-y-10 lg:space-y-12">
                
                {/* Clean Feature Grid (No messy gaps) */}
                <div>
                   <div className="flex items-center gap-3 mb-6">
                       <div className="p-2 bg-neutral-lighter rounded-lg text-primary">
                          <Zap size={24} />
                       </div>
                       <h2 className="font-display text-xl lg:text-2xl font-bold text-dark">Waarom {solution.shortTitle}?</h2>
                   </div>
                   
                   <div className="grid md:grid-cols-2 border border-neutral-light rounded-2xl lg:rounded-3xl overflow-hidden shadow-sm bg-white">
                      {solution.bullets.map((bullet, idx) => (
                         <div 
                            key={idx} 
                            className={`p-6 lg:p-8 flex items-start gap-4 bg-white hover:bg-neutral-50 transition-colors border-neutral-light ${
                               // Logic for clean internal borders
                               idx % 2 === 0 ? 'md:border-r' : ''
                            } ${
                               idx < solution.bullets.length - (solution.bullets.length % 2 === 0 ? 2 : 1) ? 'border-b' : 'md:border-b-0'
                            } border-b md:border-b-0 last:border-b-0`}
                         >
                            <div className="shrink-0 mt-1">
                               <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                                  <Check size={14} strokeWidth={3} />
                                </div>
                            </div>
                            <span className="font-sans text-dark font-medium leading-relaxed text-base lg:text-lg">{bullet}</span>
                         </div>
                      ))}
                   </div>
                </div>

                {/* Large Detail Image - Scroll Reveal */}
                <div className="rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl border border-neutral-light">
                   <img 
                     src={detailImage} 
                     alt={`${solution.title} detail`} 
                     className="w-full h-auto object-cover max-h-[300px] lg:max-h-[500px]"
                   />
                </div>

                {/* Technical Specs & Description */}
                {solution.description && (
                   <div className="bg-neutral-surface rounded-2xl lg:rounded-3xl border border-neutral-light p-6 lg:p-12">
                       <div className="flex items-center gap-3 mb-6">
                           <div className="p-2 bg-white rounded-lg text-dark border border-neutral-light">
                              <Settings size={24} />
                           </div>
                           <h3 className="font-display font-bold text-dark text-lg lg:text-xl">Technische details</h3>
                       </div>
                       <div className="prose prose-base lg:prose-lg prose-slate max-w-none font-sans text-neutral-text">
                           {solution.description.split('\n').map((line, i) => (
                               <p key={i}>{line}</p>
                           ))}
                       </div>
                   </div>
                )}

                {/* FAQ Section */}
                <div>
                   <h3 className="font-display font-bold text-dark text-lg lg:text-xl flex items-center gap-3 mb-6">
                      <HelpCircle className="text-secondary" size={24} />
                      Veelgestelde vragen
                   </h3>
                   <div className="space-y-4">
                       <div className="bg-white border border-neutral-light rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                           <h4 className="font-display font-bold text-dark text-lg mb-3">Werkt dit systeem volledig offline?</h4>
                           <p className="text-neutral-text leading-relaxed text-sm lg:text-base">Ja. Dankzij onze local-first architectuur blijven alle kassa's en scanners werken, zelfs als het internet volledig uitvalt. Data wordt lokaal opgeslagen en later gesynchroniseerd.</p>
                       </div>
                       <div className="bg-white border border-neutral-light rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                           <h4 className="font-display font-bold text-dark text-lg mb-3">Is het schaalbaar voor mijn event?</h4>
                           <p className="text-neutral-text leading-relaxed text-sm lg:text-base">Absoluut. Of u nu 500 of 50.000 bezoekers verwacht, de infrastructuur schaalt automatisch mee zonder complexe configuratie.</p>
                       </div>
                   </div>
                </div>

             </div>

             {/* Sticky Sidebar CTA */}
             <div className="lg:col-span-4">
                <div className="lg:sticky lg:top-28 space-y-6">
                   
                   {/* Primary Action Card */}
                   <div className="bg-dark text-white rounded-2xl lg:rounded-3xl shadow-2xl p-6 lg:p-8 relative overflow-hidden group">
                      <div className="absolute top-0 right-0 w-40 h-40 bg-primary rounded-full blur-[60px] opacity-40 group-hover:opacity-60 transition-opacity"></div>
                      
                      <div className="relative z-10">
                          <h3 className="font-display text-xl lg:text-2xl font-bold mb-3">Interesse?</h3>
                          <p className="text-primary-pale mb-8 leading-relaxed text-sm lg:text-base">
                             Zie hoe {solution.shortTitle} werkt in een live omgeving. Plan vandaag nog een demo.
                          </p>
                          
                          <div className="space-y-3">
                             <Link to="/demo" className="flex items-center justify-between w-full bg-white text-dark px-6 py-3.5 rounded-xl font-bold font-display hover:bg-neutral-100 transition-colors group/btn">
                                Demo inplannen
                                <ArrowRight size={18} className="text-primary group-hover/btn:translate-x-1 transition-transform"/>
                             </Link>
                             <Link to="/contact" className="flex items-center justify-center w-full bg-white/10 text-white px-6 py-3.5 rounded-xl font-bold font-display hover:bg-white/20 transition-colors border border-white/10">
                                Contact opnemen
                             </Link>
                          </div>
                      </div>
                   </div>

                   {/* Trust Snippet */}
                   <div className="bg-white rounded-2xl lg:rounded-3xl border border-neutral-light p-6 shadow-sm">
                       <h4 className="font-mono text-xs font-bold text-neutral-text uppercase tracking-wider mb-4">Whizz-kit Garantie</h4>
                       <ul className="space-y-3">
                          <li className="flex items-center gap-3 text-sm font-bold text-dark">
                             <ShieldCheck className="text-green-500 shrink-0" size={18} />
                             100% Data Integriteit
                          </li>
                          <li className="flex items-center gap-3 text-sm font-bold text-dark">
                             <Layout className="text-green-500 shrink-0" size={18} />
                             Volledig Modulair
                          </li>
                          <li className="flex items-center gap-3 text-sm font-bold text-dark">
                             <Zap className="text-green-500 shrink-0" size={18} />
                             Setup binnen 24 uur
                          </li>
                       </ul>
                   </div>

                </div>
             </div>

          </div>
       </div>

       {/* Bottom CTA Strip */}
       <div className="container mx-auto px-4 lg:px-12 max-w-screen-2xl pb-20 lg:pb-24">
          <div className="bg-neutral-lighter rounded-2xl lg:rounded-3xl p-8 lg:p-12 border border-neutral-light text-center lg:text-left flex flex-col lg:flex-row items-center justify-between gap-8">
              <div>
                 <h2 className="font-display text-xl lg:text-2xl font-bold text-dark mb-2">Niet zeker wat u nodig heeft?</h2>
                 <p className="text-neutral-text text-base lg:text-lg">Onze experts helpen graag met het samenstellen van de perfecte setup.</p>
              </div>
              <Link to="/contact" className="shrink-0 w-full lg:w-auto inline-flex items-center justify-center gap-2 bg-white text-dark border border-neutral-light px-8 py-3.5 rounded-xl font-bold font-display text-lg hover:border-primary hover:text-primary transition-colors shadow-sm">
                 Spreek een expert <ArrowRight size={20}/>
              </Link>
          </div>
       </div>
    </div>
  );
};

export default SolutionDetail;