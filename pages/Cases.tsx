import React from 'react';
import { cases } from '../data';
import { Quote, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Cases: React.FC = () => {
  return (
    <div className="bg-[#FDFDFD] min-h-screen pb-32 pt-32">
      {/* Header */}
      <div className="container mx-auto px-4 lg:px-12 max-w-screen-2xl mb-12 lg:mb-16">
        <div className="bg-dark rounded-2xl lg:rounded-3xl p-8 lg:p-20 relative overflow-hidden shadow-2xl">
           <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent pointer-events-none"></div>
           {/* Abstract shapes */}
           <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>

           <div className="max-w-4xl relative z-10">
               <span className="inline-block px-3 py-1 rounded-lg bg-white/10 text-primary-light text-xs font-mono font-bold uppercase tracking-wider mb-6 border border-white/10">Portfolio</span>
               <h1 className="font-display text-3xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">Succesverhalen</h1>
               <p className="font-sans text-lg lg:text-xl text-primary-pale leading-relaxed max-w-2xl">
                 Ontdek hoe toonaangevende organisatoren vertrouwen op Whizz-kit voor hun kritieke betaalinfrastructuur.
               </p>
           </div>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-12 max-w-screen-2xl">
        {/* Bento Grid for Cases */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
            {cases.map((c, index) => {
              // Make the first case span 2 cols (or full width on mobile) for emphasis
              const isFeatured = index === 0;
              return (
                <Link 
                  key={c.slug} 
                  to={`/cases`} // In a real app this would go to detail, but for now just hover effect is enough or reload
                  className={`group bg-white border border-neutral-light rounded-2xl lg:rounded-3xl overflow-hidden hover:shadow-2xl hover:border-primary/30 transition-all duration-300 flex flex-col ${isFeatured ? 'lg:col-span-2 lg:flex-row' : 'lg:col-span-1'}`}
                >
                  {/* Image */}
                  <div className={`relative overflow-hidden bg-dark ${isFeatured ? 'lg:w-1/2 h-56 lg:h-auto' : 'h-56 w-full'}`}>
                     <img 
                       src={c.image || `https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070`} 
                       alt={c.title} 
                       className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" 
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent"></div>
                     <div className="absolute top-4 left-4 lg:top-6 lg:left-6">
                        <span className="bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-lg text-xs font-bold font-mono uppercase tracking-wider border border-white/10">
                           {c.organizer}
                        </span>
                     </div>
                  </div>
                  
                  {/* Content */}
                  <div className={`p-6 lg:p-10 flex flex-col justify-between ${isFeatured ? 'lg:w-1/2' : 'w-full'}`}>
                    <div>
                       <h2 className="font-display text-xl lg:text-2xl font-bold text-dark mb-3 lg:mb-4 group-hover:text-primary transition-colors">{c.title}</h2>
                       <div className="mb-4 lg:mb-6">
                          <Quote className="text-primary mb-2 lg:mb-3 fill-primary/10" size={20}/>
                          <p className="font-sans text-dark font-medium text-base lg:text-lg leading-relaxed">"{c.intro}"</p>
                       </div>
                       
                       <div className="space-y-4 mb-6 lg:mb-8">
                          <div>
                             <h4 className="font-mono text-[10px] font-bold text-neutral-text uppercase tracking-wider mb-1">Uitdaging</h4>
                             <p className="font-sans text-sm text-neutral-text leading-relaxed line-clamp-2">{c.challenge}</p>
                          </div>
                          <div>
                             <h4 className="font-mono text-[10px] font-bold text-neutral-text uppercase tracking-wider mb-1">Resultaat</h4>
                             <ul className="font-sans text-sm text-dark space-y-1">
                                {c.results.slice(0, 2).map((r, i) => <li key={i} className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-secondary shrink-0"></span>{r}</li>)}
                             </ul>
                          </div>
                       </div>
                    </div>

                    <div className="mt-auto pt-4 lg:pt-6 border-t border-neutral-lighter flex justify-between items-center">
                      <div className="flex flex-wrap gap-2">
                        {c.solution.slice(0, isFeatured ? 3 : 1).map((sol, i) => (
                          <span key={i} className="font-mono text-[10px] uppercase font-bold bg-neutral-lighter text-dark px-2 py-1 rounded-md tracking-wide border border-neutral-light">{sol}</span>
                        ))}
                        {c.solution.length > (isFeatured ? 3 : 1) && <span className="font-mono text-[10px] text-neutral-text px-1 py-1">+{c.solution.length - (isFeatured ? 3 : 1)}</span>}
                      </div>
                      <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-neutral-lighter flex items-center justify-center text-dark group-hover:bg-primary group-hover:text-white transition-colors">
                         <ArrowRight size={16} className="lg:w-[18px] lg:h-[18px]"/>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Cases;