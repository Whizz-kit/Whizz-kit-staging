import React from 'react';
import { blogPosts } from '../data';
import { Clock, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const Blog: React.FC = () => {
  return (
    <div className="bg-[#FDFDFD] min-h-screen pb-32 pt-32">
      <SEO 
        title="Inzichten & Nieuws" 
        description="Blijf op de hoogte van de laatste trends in festivalbetalingen, wetgeving (SUP) en Whizz-kit product updates."
      />

      {/* Header */}
      <div className="container mx-auto px-4 lg:px-12 max-w-screen-2xl mb-24">
         <div className="bg-neutral-lighter border border-neutral-light rounded-3xl p-12 lg:p-20">
           <div className="max-w-3xl">
            <h1 className="font-display text-4xl lg:text-6xl font-extrabold text-dark mb-6 tracking-tight">Inzichten & Nieuws</h1>
            <p className="font-sans text-xl text-neutral-text leading-relaxed">
              Deep dives in festival operations, tech updates en wetgeving.
            </p>
           </div>
         </div>
      </div>

      <div className="container mx-auto px-4 lg:px-12 max-w-screen-2xl">
         {/* Categories */}
         <div className="flex gap-2 overflow-x-auto pb-8 mb-8">
            {['Alles', 'Product updates', 'Best practices', 'Wetgeving'].map((cat, i) => (
              <button key={i} className={`px-6 py-2.5 rounded-xl text-sm font-bold font-display whitespace-nowrap transition-colors ${i === 0 ? 'bg-dark text-white' : 'bg-white border border-neutral-light text-dark hover:bg-neutral-lighter'}`}>
                {cat}
              </button>
            ))}
         </div>

        {/* Unified Grid */}
        <div className="bg-neutral-light border border-neutral-light rounded-3xl overflow-hidden p-[1px]">
          <div className="grid md:grid-cols-3 gap-[1px] bg-neutral-light">
            {blogPosts.map((post) => (
              <Link key={post.slug} to={`/blog/${post.slug}`} className="group cursor-pointer bg-white flex flex-col h-full hover:bg-neutral-50 transition-colors">
                 <div className="aspect-[16/10] bg-neutral-lighter overflow-hidden relative">
                   <img 
                     src={`https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=2070&auto=format&fit=crop&seed=${post.slug}`} 
                     alt={post.title} 
                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                   />
                   <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1.5 rounded-lg text-xs font-bold font-mono text-dark flex items-center gap-2 shadow-sm">
                      <Clock size={12}/> {post.readTime}
                   </div>
                 </div>
                 
                 <div className="p-8 flex flex-col flex-grow">
                   <div className="flex items-center gap-3 mb-4">
                      <span className="text-primary font-bold text-xs uppercase tracking-wider font-mono bg-primary-ultralight px-2 py-1 rounded-md">{post.category}</span>
                      <span className="text-neutral-text text-sm font-medium font-sans">{new Date().toLocaleDateString('nl-NL')}</span>
                   </div>
                   
                   <h2 className="font-display text-2xl font-bold text-dark mb-4 group-hover:text-primary transition-colors leading-tight">
                      {post.title}
                   </h2>
                   <p className="font-sans text-neutral-text text-base leading-relaxed mb-8 line-clamp-3 flex-grow">
                      {post.summary}
                   </p>
                   
                   <div className="pt-6 border-t border-neutral-lighter mt-auto">
                     <div className="flex items-center gap-2 text-dark font-bold text-sm font-display hover:text-primary transition-colors">
                        Lees artikel <ArrowUpRight size={16} />
                     </div>
                   </div>
                 </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;