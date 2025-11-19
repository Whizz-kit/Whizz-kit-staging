import React from 'react';
import { Link } from 'react-router-dom';
import { solutions, assets } from '../data';
import { ArrowRight, Layers, Check } from 'lucide-react';

const Solutions: React.FC = () => {
  const paymentSolutions = solutions.filter(s => s.category === 'payment');
  const functionalSolutions = solutions.filter(s => s.category === 'functionality');

  return (
    <div className="bg-[#FDFDFD] min-h-screen pb-32 pt-8">
      {/* Header */}
      <div className="container mx-auto px-4 lg:px-12 max-w-screen-2xl mt-12 lg:mt-8 mb-16 lg:mb-24">
        <div className="bg-neutral-lighter rounded-2xl lg:rounded-3xl p-8 lg:p-20 relative overflow-hidden flex items-center border border-neutral-light">
           <div className="relative z-10 max-w-3xl">
              <div className="inline-flex mb-6 p-3 lg:p-4 bg-white rounded-xl text-primary shadow-sm border border-neutral-light">
                  <Layers size={28} className="lg:w-8 lg:h-8" />
              </div>
              <h1 className="font-display text-3xl lg:text-6xl font-extrabold text-dark mb-4 lg:mb-6 tracking-tight">Ecosysteem</h1>
              <p className="font-sans text-lg lg:text-xl text-neutral-text leading-relaxed">
                  Alle modules vormen samen één geïntegreerd systeem. Modulair opgebouwd, dus u kiest precies wat u nodig heeft.
              </p>
           </div>
           
           {/* Subtle image background */}
           <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-10 pointer-events-none">
              <img src={assets.vision} alt="Whizz-kit Ecosystem" className="w-full h-full object-cover object-center" />
           </div>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-12 max-w-screen-2xl space-y-16 lg:space-y-24">
        
        {/* Payments Section - Unified Grid */}
        <div id="payments">
           <div className="flex items-center gap-4 mb-8 lg:mb-10">
              <h2 className="font-display text-2xl lg:text-3xl font-bold text-dark">Betaaloplossingen</h2>
              <div className="h-px bg-neutral-light flex-grow"></div>
           </div>
           
           <div className="bg-neutral-light border border-neutral-light rounded-2xl lg:rounded-3xl overflow-hidden p-[1px]">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-neutral-light">
                {paymentSolutions.map((solution) => (
                  <SolutionCard key={solution.slug} solution={solution} />
                ))}
              </div>
           </div>
        </div>

        {/* Functionalities Section - Unified Grid */}
        <div id="functionalities">
           <div className="flex items-center gap-4 mb-8 lg:mb-10">
              <h2 className="font-display text-2xl lg:text-3xl font-bold text-dark">Functionaliteiten & Tools</h2>
              <div className="h-px bg-neutral-light flex-grow"></div>
           </div>

           <div className="bg-neutral-light border border-neutral-light rounded-2xl lg:rounded-3xl overflow-hidden p-[1px]">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-neutral-light">
                {functionalSolutions.map((solution) => (
                  <SolutionCard key={solution.slug} solution={solution} />
                ))}
              </div>
           </div>
        </div>

      </div>
    </div>
  );
};

const SolutionCard: React.FC<{solution: any}> = ({ solution }) => (
  <div className="p-6 lg:p-10 flex flex-col bg-white hover:bg-neutral-50 transition-colors duration-200 h-full group">
    <div className="mb-6 lg:mb-8 flex items-center justify-between">
       <div className="w-10 h-10 lg:w-12 lg:h-12 bg-neutral-lighter rounded-xl flex items-center justify-center text-primary font-display font-bold text-lg lg:text-xl group-hover:bg-primary group-hover:text-white transition-colors">
          {solution.title.charAt(0)}
       </div>
    </div>
    
    <h2 className="font-display text-xl lg:text-2xl font-bold text-dark mb-2 lg:mb-3">{solution.shortTitle || solution.title}</h2>
    <p className="font-sans text-neutral-text text-sm lg:text-base mb-6 lg:mb-8 leading-relaxed flex-grow">{solution.sub}</p>
    
    <div className="pt-4 lg:pt-6 border-t border-neutral-lighter mt-auto">
      <ul className="space-y-2 lg:space-y-3 mb-6 lg:mb-8">
        {solution.bullets.slice(0, 3).map((bullet: string, idx: number) => (
          <li key={idx} className="text-xs lg:text-sm text-neutral-text font-medium flex items-start gap-2">
            <div className="text-primary mt-0.5">
              <Check size={14} strokeWidth={3} />
            </div>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
      <Link 
        to={`/oplossingen/${solution.slug}`} 
        className="inline-flex items-center gap-2 font-display font-bold text-dark hover:text-primary transition-colors text-sm lg:text-base"
      >
        Bekijk details <ArrowRight size={16} />
      </Link>
    </div>
  </div>
);

export default Solutions;