import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ArrowRight, Linkedin, Instagram, CreditCard, Coins, Wifi, Server, Smartphone, Layers, Calculator, QrCode, BarChart3, Package } from 'lucide-react';
import { solutions, assets } from '../data';

const Layout: React.FC<{ children: React.ReactNode; hideHeaderFooter?: boolean }> = ({ children, hideHeaderFooter = false }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Helper to map icons based on slug
  const getIconForSolution = (slug: string) => {
    switch(slug) {
      case 'card-payments': return <CreditCard size={20} />;
      case 'token-only': return <Coins size={20} />;
      case 'rfid-cards-wristbands': return <Wifi size={20} />;
      case 'rfid-stations': return <Server size={20} />;
      case 'tap-to-pay': return <Smartphone size={20} />;
      case 'hybrid-payments': return <Layers size={20} />;
      case 'tokenpos': return <Calculator size={20} />;
      case 'qr-redeem': return <QrCode size={20} />;
      case 'analytics-dashboard': return <BarChart3 size={20} />;
      case 'inventory-management': return <Package size={20} />;
      default: return <CreditCard size={20} />;
    }
  };

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setIsSolutionsOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  // Handle scroll for floating nav effect styling (optional enhancement, used for internal blur)
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (hideHeaderFooter) return <>{children}</>;

  const isActive = (path: string) => location.pathname === path || (path !== '/' && location.pathname.startsWith(path));

  const paymentSolutions = solutions.filter(s => s.category === 'payment');
  const functionalSolutions = solutions.filter(s => s.category === 'functionality');

  return (
    <div className="min-h-screen flex flex-col bg-[#FDFDFD]">
      {/* Floating Navigation - Matches Content Width */}
      <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 lg:px-12 pointer-events-none">
        <div className={`w-full max-w-screen-2xl bg-white/90 backdrop-blur-xl border border-white/20 shadow-xl rounded-2xl h-16 lg:h-20 flex items-center justify-between px-4 lg:px-8 pointer-events-auto transition-all duration-300 ${scrolled ? 'shadow-2xl' : 'shadow-xl'}`}>
            
            {/* Logo - Increased size for mobile (h-10) */}
            <Link to="/" className="flex items-center gap-3 group">
               <img src={assets.logoDark} alt="Whizz-kit Logo" className="h-10 lg:h-10 w-auto object-contain" />
            </Link>

            {/* Desktop Nav - Increased font size to text-base */}
            <div className="hidden lg:flex items-center gap-1">
              <Link 
                to="/" 
                className={`px-5 py-2 rounded-full text-base font-bold transition-all font-sans ${isActive('/') ? 'bg-neutral-lighter text-dark' : 'text-neutral-text hover:text-dark hover:bg-neutral-lighter'}`}
              >
                Home
              </Link>
              
              {/* Mega Menu Trigger */}
              <div className="relative group">
                <button 
                  className={`flex items-center gap-1 px-5 py-2 rounded-full text-base font-bold transition-all font-sans group-hover:bg-neutral-lighter ${isActive('/oplossingen') ? 'bg-neutral-lighter text-dark' : 'text-neutral-text hover:text-dark'}`}
                >
                  Oplossingen <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
                </button>
                
                {/* Dropdown */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-6 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 ease-out w-[900px]">
                  <div className="bg-white rounded-2xl border border-neutral-light shadow-2xl p-2 overflow-hidden grid grid-cols-12 gap-2">
                     
                     {/* Sidebar */}
                     <div className="col-span-3 bg-neutral-lighter/50 rounded-xl p-6 flex flex-col justify-between">
                        <div>
                          <h3 className="font-display font-bold text-lg text-dark mb-2">Ecosysteem</h3>
                          <p className="text-sm text-neutral-text leading-relaxed mb-6 font-medium">
                             Modulair. Schaalbaar. Offline-first.
                          </p>
                          <Link to="/oplossingen" className="text-primary text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all">
                            Alle modules <ArrowRight size={14}/>
                          </Link>
                        </div>
                     </div>

                     {/* Payments Column */}
                     <div className="col-span-5 p-4">
                        <h4 className="font-mono text-xs font-bold text-neutral-text uppercase tracking-wider mb-4 px-2">Betaaloplossingen</h4>
                        <div className="space-y-1">
                          {paymentSolutions.map(s => (
                            <Link key={s.slug} to={`/oplossingen/${s.slug}`} className="flex items-center gap-3 p-2 rounded-xl hover:bg-neutral-lighter transition-colors group/item">
                              <div className="w-8 h-8 rounded-lg bg-white border border-neutral-light flex items-center justify-center text-neutral-text group-hover/item:text-primary group-hover/item:border-primary transition-colors">
                                  {getIconForSolution(s.slug)}
                              </div>
                              <span className="font-display font-bold text-dark text-sm">{s.shortTitle || s.title}</span>
                            </Link>
                          ))}
                        </div>
                     </div>

                     {/* Functionalities Column */}
                     <div className="col-span-4 p-4 bg-neutral-surface rounded-xl">
                        <h4 className="font-mono text-xs font-bold text-neutral-text uppercase tracking-wider mb-4 px-2">Functionaliteiten</h4>
                        <div className="space-y-1">
                          {functionalSolutions.map(s => (
                            <Link key={s.slug} to={`/oplossingen/${s.slug}`} className="flex items-center gap-3 p-2 rounded-xl hover:bg-white transition-colors group/item">
                              <div className="w-8 h-8 rounded-lg bg-white border border-neutral-light flex items-center justify-center text-neutral-text group-hover/item:text-secondary group-hover/item:border-secondary transition-colors">
                                  {getIconForSolution(s.slug)}
                              </div>
                              <span className="font-display font-bold text-dark text-sm">{s.shortTitle || s.title}</span>
                            </Link>
                          ))}
                        </div>
                     </div>
                  </div>
                </div>
              </div>

              <Link 
                to="/cases" 
                className={`px-5 py-2 rounded-full text-base font-bold transition-all font-sans ${isActive('/cases') ? 'bg-neutral-lighter text-dark' : 'text-neutral-text hover:text-dark hover:bg-neutral-lighter'}`}
              >
                Cases
              </Link>
              <Link 
                to="/blog" 
                className={`px-5 py-2 rounded-full text-base font-bold transition-all font-sans ${isActive('/blog') ? 'bg-neutral-lighter text-dark' : 'text-neutral-text hover:text-dark hover:bg-neutral-lighter'}`}
              >
                Blog
              </Link>
              <Link 
                to="/over-ons" 
                className={`px-5 py-2 rounded-full text-base font-bold transition-all font-sans ${isActive('/over-ons') ? 'bg-neutral-lighter text-dark' : 'text-neutral-text hover:text-dark hover:bg-neutral-lighter'}`}
              >
                Over ons
              </Link>
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Link 
                 to="/contact" 
                 className="px-5 py-2.5 text-base font-bold text-dark hover:text-primary transition-colors font-display"
              >
                Contact
              </Link>
              <Link 
                to="/demo" 
                className="bg-secondary text-white px-6 py-2.5 rounded-xl text-base font-bold font-display hover:bg-secondary-hover transition-colors shadow-sm"
              >
                Demo aanvragen
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className="lg:hidden p-2 text-dark"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={28} strokeWidth={2.5} /> : <Menu size={28} strokeWidth={2.5} />}
            </button>
        </div>
      </header>

      {/* Mobile Menu Overlay - Slide from top */}
      <div className={`fixed inset-0 bg-white/95 backdrop-blur-xl z-40 lg:hidden transition-transform duration-500 cubic-bezier(0.4, 0, 0.2, 1) ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        {/* Added pt-28 to ensure content starts below the floating header */}
        <div className="flex flex-col pt-28 px-6 h-full pb-10 overflow-y-auto">
          <nav className="flex flex-col gap-2 text-2xl font-display font-bold text-dark">
            <Link to="/" className="py-4 border-b border-neutral-light">Home</Link>
            
            <div className="py-4 border-b border-neutral-light">
              <button 
                onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                className="flex items-center justify-between w-full"
              >
                Oplossingen <ChevronDown size={24} className={`transition-transform duration-300 ${isSolutionsOpen ? 'rotate-180' : ''}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${isSolutionsOpen ? 'max-h-[1200px] mt-6' : 'max-h-0'}`}>
                <div className="grid grid-cols-1 gap-6 pl-4">
                  <div className="space-y-4">
                    <p className="text-xs font-mono font-bold text-neutral-text uppercase">Betalen</p>
                    {paymentSolutions.map(s => (
                      <Link key={s.slug} to={`/oplossingen/${s.slug}`} className="flex items-center gap-3 text-dark text-lg font-medium">
                          {getIconForSolution(s.slug)} {s.shortTitle || s.title}
                      </Link>
                    ))}
                  </div>
                  <div className="space-y-4">
                    <p className="text-xs font-mono font-bold text-neutral-text uppercase">Functionaliteiten</p>
                    {functionalSolutions.map(s => (
                      <Link key={s.slug} to={`/oplossingen/${s.slug}`} className="flex items-center gap-3 text-dark text-lg font-medium">
                          {getIconForSolution(s.slug)} {s.shortTitle || s.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <Link to="/cases" className="py-4 border-b border-neutral-light">Cases</Link>
            <Link to="/blog" className="py-4 border-b border-neutral-light">Blog</Link>
            <Link to="/over-ons" className="py-4 border-b border-neutral-light">Over ons</Link>
            <Link to="/contact" className="py-4 border-b border-neutral-light">Contact</Link>
          </nav>
          
          <div className="mt-auto flex flex-col gap-4 pt-8">
            <Link 
              to="/demo" 
              className="w-full text-center bg-secondary text-white py-4 rounded-xl font-display font-bold text-xl shadow-lg"
            >
              Demo aanvragen
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-dark text-white pt-16 lg:pt-24 pb-8 lg:pb-12 mt-auto">
        <div className="container mx-auto px-6 lg:px-12 max-w-screen-2xl">
            <div className="grid md:grid-cols-12 gap-8 lg:gap-12 mb-12 lg:mb-16 border-b border-white/10 pb-12 lg:pb-16">
              {/* Brand */}
              <div className="md:col-span-4">
                  <Link to="/" className="block mb-6 group w-fit">
                     <img src={assets.logoLight} alt="Whizz-kit Logo" className="h-8 lg:h-12 w-auto object-contain" />
                  </Link>
                  <p className="text-primary-pale mb-8 font-medium max-w-xs leading-relaxed text-sm lg:text-base">
                    De betrouwbare standaard voor festivalbetalingen. Offline-first, data-driven en altijd operationeel.
                  </p>
                  <div className="flex gap-4">
                    <a href="#" className="h-10 w-10 rounded-lg bg-white/10 flex items-center justify-center text-white hover:bg-primary transition-colors"><Linkedin size={20}/></a>
                    <a href="#" className="h-10 w-10 rounded-lg bg-white/10 flex items-center justify-center text-white hover:bg-primary transition-colors"><Instagram size={20}/></a>
                  </div>
              </div>

              <div className="md:col-span-2">
                  <h3 className="font-display font-bold mb-4 lg:mb-6 text-lg text-white">Betalen</h3>
                  <ul className="space-y-2 lg:space-y-3 font-medium text-primary-pale text-sm lg:text-base">
                    {paymentSolutions.map(s => (
                        <li key={s.slug}><Link to={`/oplossingen/${s.slug}`} className="hover:text-white transition-colors inline-block">{s.shortTitle || s.title}</Link></li>
                    ))}
                  </ul>
              </div>
              
              <div className="md:col-span-2">
                   <h3 className="font-display font-bold mb-4 lg:mb-6 text-lg text-white">Tools</h3>
                   <ul className="space-y-2 lg:space-y-3 font-medium text-primary-pale text-sm lg:text-base">
                    {functionalSolutions.map(s => (
                        <li key={s.slug}><Link to={`/oplossingen/${s.slug}`} className="hover:text-white transition-colors inline-block">{s.shortTitle || s.title}</Link></li>
                    ))}
                  </ul>
              </div>

              <div className="md:col-span-2">
                  <h3 className="font-display font-bold mb-4 lg:mb-6 text-lg text-white">Bedrijf</h3>
                  <ul className="space-y-2 lg:space-y-3 font-medium text-primary-pale text-sm lg:text-base">
                    <li><Link to="/cases" className="hover:text-white transition-colors inline-block">Cases</Link></li>
                    <li><Link to="/blog" className="hover:text-white transition-colors inline-block">Blog</Link></li>
                    <li><Link to="/over-ons" className="hover:text-white transition-colors inline-block">Over ons</Link></li>
                    <li><Link to="/contact" className="hover:text-white transition-colors inline-block">Contact</Link></li>
                  </ul>
              </div>

              <div className="md:col-span-2">
                  <h3 className="font-display font-bold mb-4 lg:mb-6 text-lg text-white">Contact</h3>
                  <ul className="space-y-2 lg:space-y-3 font-medium text-primary-pale text-sm lg:text-base">
                    <li>Arnhem, NL</li>
                    <li><a href="tel:+31262022490" className="hover:text-white">+31 26 202 24 90</a></li>
                    <li><a href="mailto:info@whizz-kit.com" className="hover:text-white">info@whizz-kit.com</a></li>
                  </ul>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-medium text-primary-pale">
              <p>&copy; {new Date().getFullYear()} Whizz-kit B.V.</p>
              <div className="flex gap-8">
                {/* Single link for legal */}
                <Link to="/privacy-voorwaarden" className="hover:text-white">Privacy & Voorwaarden</Link>
              </div>
            </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;