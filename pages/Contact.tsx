import React, { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo(0, 0);
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Whizz-kit",
    "image": "https://ik.imagekit.io/fto/whizz-kit/whizz-kit-logo-vibrant-blue%20(1).png",
    "telephone": "+31262022490",
    "email": "info@whizz-kit.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Arnhem",
      "addressCountry": "NL"
    },
    "url": "https://whizz-kit.com/contact"
  };

  return (
    <div className="bg-white min-h-screen">
       <SEO 
          title="Contact opnemen" 
          description="Heeft u vragen over onze festival betaaloplossingen? Neem contact op met ons team in Arnhem."
          schema={localBusinessSchema}
       />

       <div className="flex flex-col lg:flex-row min-h-screen">
          {/* Info Side */}
          <div className="lg:w-5/12 bg-dark text-white p-8 lg:p-20 flex flex-col justify-center">
             <div>
                <h1 className="font-display text-4xl lg:text-5xl font-extrabold mb-6 tracking-tight">Let's talk.</h1>
                <p className="font-sans text-lg text-primary-pale mb-12 max-w-md">
                   Heeft u vragen over implementatie, hardware of kosten? Wij denken graag mee.
                </p>

                <div className="space-y-8">
                   <div className="flex items-start gap-5">
                      <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white shrink-0">
                         <Mail size={20} />
                      </div>
                      <div>
                         <h3 className="font-display font-bold text-base mb-1">E-mail</h3>
                         <a href="mailto:info@whizz-kit.com" className="text-primary-pale font-sans hover:text-white transition-colors">info@whizz-kit.com</a>
                      </div>
                   </div>
                   <div className="flex items-start gap-5">
                      <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white shrink-0">
                         <Phone size={20} />
                      </div>
                      <div>
                         <h3 className="font-display font-bold text-base mb-1">Telefoon</h3>
                         <a href="tel:+31262022490" className="text-primary-pale font-sans hover:text-white transition-colors">+31 (0) 26 202 24 90</a>
                      </div>
                   </div>
                   <div className="flex items-start gap-5">
                      <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white shrink-0">
                         <MapPin size={20} />
                      </div>
                      <div>
                         <h3 className="font-display font-bold text-base mb-1">Hoofdkantoor</h3>
                         <p className="text-primary-pale font-sans">Arnhem, Nederland</p>
                      </div>
                   </div>
                </div>
             </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-7/12 p-8 lg:p-20 bg-white flex flex-col justify-center">
             <div className="max-w-xl mx-auto w-full">
                {submitted ? (
                  <div className="text-center py-20 bg-neutral-lighter rounded-2xl px-8 border border-neutral-light">
                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                       <CheckCircle size={32} />
                    </div>
                    <h2 className="font-display text-2xl font-bold text-dark mb-3">Bericht ontvangen!</h2>
                    <p className="font-sans text-neutral-text text-base mb-8">We nemen binnen 24 uur contact met u op.</p>
                    <button onClick={() => setSubmitted(false)} className="text-primary font-bold hover:underline font-display">Nieuw bericht sturen</button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                     <div className="space-y-5">
                        <div>
                           <label className="block text-xs font-bold font-mono text-dark uppercase tracking-wider mb-2">Naam</label>
                           <input type="text" required className="w-full bg-neutral-lighter border border-neutral-light focus:border-primary rounded-xl px-4 py-3 outline-none transition-colors font-sans text-dark" placeholder="Uw naam" />
                        </div>
                        <div>
                           <label className="block text-xs font-bold font-mono text-dark uppercase tracking-wider mb-2">E-mailadres</label>
                           <input type="email" required className="w-full bg-neutral-lighter border border-neutral-light focus:border-primary rounded-xl px-4 py-3 outline-none transition-colors font-sans text-dark" placeholder="naam@bedrijf.nl" />
                        </div>
                        <div className="grid grid-cols-2 gap-5">
                           <div>
                              <label className="block text-xs font-bold font-mono text-dark uppercase tracking-wider mb-2">Telefoon</label>
                              <input type="tel" className="w-full bg-neutral-lighter border border-neutral-light focus:border-primary rounded-xl px-4 py-3 outline-none transition-colors font-sans text-dark" placeholder="06..." />
                           </div>
                           <div>
                              <label className="block text-xs font-bold font-mono text-dark uppercase tracking-wider mb-2">Datum</label>
                              <input type="date" className="w-full bg-neutral-lighter border border-neutral-light focus:border-primary rounded-xl px-4 py-3 outline-none transition-colors font-sans text-dark" />
                           </div>
                        </div>
                        <div>
                           <label className="block text-xs font-bold font-mono text-dark uppercase tracking-wider mb-2">Bericht</label>
                           <textarea rows={4} className="w-full bg-neutral-lighter border border-neutral-light focus:border-primary rounded-xl px-4 py-3 outline-none transition-colors font-sans text-dark resize-none" placeholder="Hoe kunnen we helpen?"></textarea>
                        </div>
                     </div>
                     
                     <div className="flex items-center gap-3">
                        <input type="checkbox" id="privacy" required className="w-4 h-4 text-secondary rounded border-neutral-light focus:ring-secondary" />
                        <label htmlFor="privacy" className="text-sm text-neutral-text font-sans">Ik ga akkoord met het <a href="#" className="underline hover:text-dark">privacybeleid</a>.</label>
                     </div>

                     <button type="submit" className="w-full bg-dark text-white py-4 rounded-xl font-bold font-display text-lg hover:bg-primary transition-colors flex items-center justify-center gap-2">
                        Verstuur bericht <ArrowRight size={18}/>
                     </button>
                  </form>
                )}
             </div>
          </div>
       </div>
    </div>
  );
};

export default Contact;