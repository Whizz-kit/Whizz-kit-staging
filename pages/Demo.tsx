import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Zap, BarChart } from 'lucide-react';
import SEO from '../components/SEO';

const Demo: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col lg:flex-row">
      <SEO 
        title="Demo Aanvragen" 
        description="Ervaar zelf de stabiliteit en snelheid van het Whizz-kit kassasysteem. Vraag een vrijblijvende demo aan voor uw festival."
      />

      {/* Content Side */}
      <div className="lg:w-5/12 bg-dark text-white flex flex-col p-8 lg:p-16 justify-center">
         <div className="relative z-10">
            <Link to="/" className="inline-flex items-center text-primary-pale hover:text-white mb-10 text-sm font-bold font-display transition-colors uppercase tracking-wider"><ArrowLeft size={16} className="mr-2"/> Terug naar home</Link>
            
            <h1 className="font-display text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
               Ervaar de <span className="text-primary-light">stabiliteit</span> van Whizz-kit.
            </h1>
            <p className="font-sans text-lg text-primary-pale mb-12 leading-relaxed">
               Stop met gokken op internetverbindingen. Zie zelf hoe onze offline-first architectuur uw omzet veiligstelt.
            </p>

            <div className="space-y-6">
               <div className="flex gap-4 items-center bg-white/5 p-4 rounded-xl border border-white/10">
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-white shrink-0">
                     <BarChart size={20}/>
                  </div>
                  <div>
                     <h4 className="font-display font-bold text-white text-base">Live Dashboard</h4>
                     <p className="text-sm font-sans text-primary-pale">Realtime inzicht in omzet, voorraad en batterijstatus.</p>
                  </div>
               </div>
               <div className="flex gap-4 items-center bg-white/5 p-4 rounded-xl border border-white/10">
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-white shrink-0">
                     <Zap size={20}/>
                  </div>
                  <div>
                     <h4 className="font-display font-bold text-white text-base">Bliksemsnel</h4>
                     <p className="text-sm font-sans text-primary-pale">Geoptimaliseerde flows voor maximale doorstroom aan de bar.</p>
                  </div>
               </div>
            </div>
         </div>
      </div>

      {/* Form Side */}
      <div className="lg:w-7/12 bg-neutral-lighter p-8 lg:p-16 flex flex-col justify-center overflow-y-auto">
         <div className="max-w-xl mx-auto w-full bg-white p-8 lg:p-10 rounded-2xl border border-neutral-light shadow-sm">
            {submitted ? (
               <div className="text-center py-10">
                  <h2 className="font-display text-2xl font-bold text-dark mb-3">Aanvraag verstuurd!</h2>
                  <p className="font-sans text-neutral-text mb-8">Bedankt voor uw interesse. We nemen binnen één werkdag contact op.</p>
                  <Link to="/" className="inline-block bg-dark text-white px-6 py-3 rounded-xl font-bold font-display">Terug naar home</Link>
               </div>
            ) : (
               <>
                  <div className="mb-8">
                     <h2 className="font-display text-2xl font-bold text-dark mb-2">Plan uw demo</h2>
                     <p className="font-sans text-neutral-text text-sm">Vul het formulier in en wij bereiden een demo op maat voor.</p>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-5">
                     <div className="grid md:grid-cols-2 gap-5">
                        <div>
                           <label className="block text-xs font-bold font-mono text-dark uppercase tracking-wider mb-2">Naam</label>
                           <input type="text" required className="w-full bg-neutral-lighter border border-neutral-light focus:border-primary rounded-xl px-4 py-2.5 outline-none transition-all font-sans text-dark" />
                        </div>
                        <div>
                           <label className="block text-xs font-bold font-mono text-dark uppercase tracking-wider mb-2">Organisatie</label>
                           <input type="text" required className="w-full bg-neutral-lighter border border-neutral-light focus:border-primary rounded-xl px-4 py-2.5 outline-none transition-all font-sans text-dark" />
                        </div>
                     </div>

                     <div className="grid md:grid-cols-2 gap-5">
                        <div>
                           <label className="block text-xs font-bold font-mono text-dark uppercase tracking-wider mb-2">E-mail</label>
                           <input type="email" required className="w-full bg-neutral-lighter border border-neutral-light focus:border-primary rounded-xl px-4 py-2.5 outline-none transition-all font-sans text-dark" />
                        </div>
                        <div>
                           <label className="block text-xs font-bold font-mono text-dark uppercase tracking-wider mb-2">Telefoon</label>
                           <input type="tel" required className="w-full bg-neutral-lighter border border-neutral-light focus:border-primary rounded-xl px-4 py-2.5 outline-none transition-all font-sans text-dark" />
                        </div>
                     </div>

                     <div className="grid md:grid-cols-2 gap-5">
                        <div>
                           <label className="block text-xs font-bold font-mono text-dark uppercase tracking-wider mb-2">Datum Event</label>
                           <input type="date" className="w-full bg-neutral-lighter border border-neutral-light focus:border-primary rounded-xl px-4 py-2.5 outline-none transition-all font-sans text-dark" />
                        </div>
                        <div>
                           <label className="block text-xs font-bold font-mono text-dark uppercase tracking-wider mb-2">Bezoekersaantal</label>
                           <select className="w-full bg-neutral-lighter border border-neutral-light focus:border-primary rounded-xl px-4 py-2.5 outline-none transition-all font-sans text-dark">
                              <option>Kies aantal...</option>
                              <option>&lt; 5.000</option>
                              <option>5.000 - 15.000</option>
                              <option>15.000 - 50.000</option>
                              <option>50.000+</option>
                           </select>
                        </div>
                     </div>

                     <div>
                        <label className="block text-xs font-bold font-mono text-dark uppercase tracking-wider mb-2">Specifieke wensen</label>
                        <textarea rows={3} className="w-full bg-neutral-lighter border border-neutral-light focus:border-primary rounded-xl px-4 py-2.5 outline-none transition-all resize-none font-sans text-dark"></textarea>
                     </div>

                     <button type="submit" className="w-full bg-secondary text-white font-bold font-display py-3.5 rounded-xl hover:bg-secondary-hover transition-colors flex items-center justify-center gap-2 text-base">
                        Aanvragen <ArrowRight size={18}/>
                     </button>
                  </form>
               </>
            )}
         </div>
      </div>
    </div>
  );
};

export default Demo;