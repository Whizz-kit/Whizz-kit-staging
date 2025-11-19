import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

const Legal: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
         <Link to="/" className="inline-flex items-center text-sm font-bold font-display text-neutral-text hover:text-dark mb-8 transition-colors uppercase tracking-wider">
            <ChevronLeft size={16} className="mr-1"/> Ga naar home
         </Link>
         
         <h1 className="font-display text-3xl lg:text-4xl font-extrabold text-dark mb-8">Privacy & Voorwaarden</h1>
         
         <div className="prose prose-lg prose-slate font-sans text-neutral-text">
            <p className="lead font-medium text-dark">
               Whizz-kit hecht veel waarde aan de privacy van haar gebruikers. Op deze pagina vindt u binnenkort onze volledige privacyverklaring en algemene voorwaarden.
            </p>
            <hr className="my-8 border-neutral-lighter"/>
            
            <h3>Algemeen</h3>
            <p>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            
            <h3>Gegevensverwerking</h3>
            <p>
               Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            
            <h3>Voorwaarden</h3>
            <p>
               Tenzij schriftelijk anders overeengekomen, zijn op al onze offertes en overeenkomsten de Algemene Voorwaarden van Whizz-kit van toepassing.
            </p>
         </div>
      </div>
    </div>
  );
};

export default Legal;