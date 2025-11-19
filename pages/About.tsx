import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Heart } from 'lucide-react';
import { assets, team } from '../data';

const About: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Hero - Refined */}
      <div className="relative bg-dark text-white pt-40 pb-32 overflow-hidden">
         <img src={assets.vision} alt="Whizz-kit Team Vision" className="absolute inset-0 w-full h-full object-cover opacity-30 scale-105" />
         <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/60 to-transparent"></div>
         
         <div className="container mx-auto px-4 lg:px-12 max-w-screen-2xl relative z-10">
            <div className="max-w-5xl">
                <h1 className="font-display text-5xl lg:text-8xl font-extrabold tracking-tight mb-8 leading-none">
                   Van slimme rekentool naar <span className="text-white">festivalpartner.</span>
                </h1>
                <p className="font-sans text-2xl text-white/90 max-w-3xl leading-relaxed font-medium">
                   Wij bouwen de technologie die festivals laat draaien. Offline-first, zonder gedoe, zodat de ervaring centraal staat.
                </p>
            </div>
         </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-12 max-w-screen-2xl py-24">
         <div className="flex flex-col lg:flex-row gap-20 items-start mb-32">
            <div className="lg:w-1/3 sticky top-32">
               <div className="bg-neutral-light rounded-3xl overflow-hidden p-[1px] shadow-lg border border-neutral-light">
                  <div className="bg-white p-8 border-b border-neutral-light">
                     <h3 className="font-display font-bold text-dark text-xl">Whizz-kit in cijfers</h3>
                  </div>
                  <div className="grid grid-cols-1 gap-[1px] bg-neutral-light">
                     <div className="bg-white p-8 hover:bg-neutral-50 transition-colors">
                        <p className="font-display text-5xl font-extrabold text-primary mb-2">2022</p>
                        <p className="text-xs text-neutral-text font-bold font-mono uppercase tracking-wider">Jaar van oprichting</p>
                     </div>
                     <div className="bg-white p-8 hover:bg-neutral-50 transition-colors">
                        <p className="font-display text-5xl font-extrabold text-primary mb-2">350+</p>
                        <p className="text-xs text-neutral-text font-bold font-mono uppercase tracking-wider">Festivals per jaar</p>
                     </div>
                     <div className="bg-white p-8 hover:bg-neutral-50 transition-colors">
                        <p className="font-display text-5xl font-extrabold text-primary mb-2">1000+</p>
                        <p className="text-xs text-neutral-text font-bold font-mono uppercase tracking-wider">Kassa's beschikbaar</p>
                     </div>
                  </div>
               </div>
            </div>

            <div className="lg:w-2/3">
               <p className="font-sans font-medium text-2xl text-dark leading-relaxed mb-10">
                  Opgericht door Frank (festivalhoreca) en Christiaan (soft- en hardware). Wat begon als een oplossing voor een specifiek probleem aan de bar, groeide razendsnel uit tot een complete kassaoplossing.
               </p>
               
               <div className="prose prose-xl text-neutral-text font-sans mb-16 leading-relaxed">
                  <p>
                     Ons multidisciplinaire team combineert expertise uit horeca/catering, finance, design, software, hardware, productie en logistiek. We spreken de taal van de organisatie én de crew. We weten dat 'even wachten op internet' geen optie is als er 10.000 man voor de bar staat.
                  </p>
               </div>
               
               <div className="bg-neutral-light rounded-3xl overflow-hidden p-[1px] mb-16 border border-neutral-light">
                  <div className="grid md:grid-cols-2 gap-[1px] bg-neutral-light">
                    <div className="bg-white p-10 hover:bg-neutral-50 transition-colors">
                       <div className="w-12 h-12 rounded-xl flex items-center justify-center text-primary bg-neutral-lighter mb-6">
                          <Target size={24} />
                       </div>
                       <h4 className="font-display font-bold text-dark text-xl mb-3">Onze Missie</h4>
                       <p className="text-neutral-text font-medium leading-relaxed">Betrouwbaarheid garanderen in de meest dynamische omgevingen. Wij zorgen dat de verkoop altijd doorgaat.</p>
                    </div>
                    <div className="bg-white p-10 hover:bg-neutral-50 transition-colors">
                       <div className="w-12 h-12 rounded-xl flex items-center justify-center text-secondary bg-neutral-lighter mb-6">
                          <Heart size={24} />
                       </div>
                       <h4 className="font-display font-bold text-dark text-xl mb-3">Onze Passie</h4>
                       <p className="text-neutral-text font-medium leading-relaxed">Technologie onzichtbaar maken zodat de ervaring centraal staat voor zowel crew als bezoeker.</p>
                    </div>
                  </div>
               </div>

               <div className="bg-dark text-white p-10 rounded-3xl relative overflow-hidden shadow-2xl">
                  <div className="relative z-10">
                     <h2 className="font-display text-2xl font-bold mb-4">Onze Filosofie</h2>
                     <p className="text-primary-pale text-lg font-sans leading-relaxed">
                        Onze unieke <strong className="text-white">offline-first</strong> aanpak is de kern van alles wat we doen. Wij geloven niet in "cloud-only" op een afgelegen veld.
                     </p>
                  </div>
                  {/* Abstract circles */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
               </div>
            </div>
         </div>
         
         {/* Team Section */}
         <div className="mb-24">
             <div className="text-center mb-16">
                <h2 className="font-display text-4xl font-extrabold text-dark mb-4">Ontmoet het team</h2>
                <p className="text-xl text-neutral-text max-w-2xl mx-auto">De mensen achter de technologie. Een mix van horeca-experts en tech-specialisten.</p>
             </div>
             
             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 lg:gap-8">
                {team.map((member) => (
                   <div key={member.id} className="group">
                      <div className="aspect-[3/4] rounded-2xl overflow-hidden mb-4 relative bg-neutral-lighter">
                         <img 
                           src={member.image} 
                           alt={member.name} 
                           className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 grayscale group-hover:grayscale-0"
                         />
                         <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <h3 className="font-display font-bold text-dark text-lg leading-tight mb-1">{member.name}</h3>
                      <p className="font-sans text-neutral-text text-sm font-medium">{member.role}</p>
                   </div>
                ))}
             </div>
         </div>

         {/* Bottom CTA */}
         <div className="flex flex-col items-center justify-center bg-neutral-surface rounded-3xl p-12 text-center border border-neutral-light">
            <h2 className="font-display text-3xl font-bold text-dark mb-6">Zin om kennis te maken?</h2>
            <div className="flex flex-wrap gap-4 justify-center">
               <Link to="/demo" className="bg-secondary text-white px-8 py-4 rounded-xl font-bold font-display hover:bg-secondary-hover transition-colors text-lg shadow-lg">
                  Plan een kennismaking
               </Link>
               <Link to="/contact" className="bg-white text-dark font-bold font-display px-8 py-4 rounded-xl hover:bg-neutral-50 transition-colors border border-neutral-light text-lg">
                  Contact opnemen
               </Link>
            </div>
         </div>
      </div>
    </div>
  );
};

export default About;