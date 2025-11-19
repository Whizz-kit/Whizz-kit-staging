import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { blogPosts } from '../data';
import { ChevronLeft, Clock, Facebook, Linkedin, Twitter } from 'lucide-react';
import SEO from '../components/SEO';

const BlogDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "image": `https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=2070&auto=format&fit=crop&seed=${post.slug}`,
    "author": {
      "@type": "Organization",
      "name": "Whizz-kit Team"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Whizz-kit",
      "logo": {
        "@type": "ImageObject",
        "url": "https://ik.imagekit.io/fto/whizz-kit/whizz-kit-logo-vibrant-blue%20(1).png"
      }
    },
    "datePublished": new Date().toISOString(), // In real app, use actual date
    "description": post.summary
  };

  return (
    <div className="bg-white min-h-screen pt-32 pb-20">
       <SEO 
          title={post.title} 
          description={post.summary}
          image={`https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=2070&auto=format&fit=crop&seed=${post.slug}`}
          type="article"
          schema={blogSchema}
       />
       
       <div className="container mx-auto px-4 lg:px-12 max-w-4xl">
          <Link to="/blog" className="inline-flex items-center text-sm font-bold font-display text-neutral-text hover:text-dark mb-8 transition-colors uppercase tracking-wider">
             <ChevronLeft size={16} className="mr-1"/> Bekijk alle artikelen
          </Link>

          <header className="mb-12">
             <div className="flex items-center gap-4 mb-6">
                <span className="bg-primary-ultralight text-primary font-bold font-mono text-xs uppercase px-3 py-1 rounded-md tracking-wider">{post.category}</span>
                <span className="text-neutral-text font-medium text-sm flex items-center gap-1"><Clock size={14}/> {post.readTime} lezen</span>
             </div>
             <h1 className="font-display text-4xl lg:text-6xl font-extrabold text-dark mb-8 leading-tight">{post.title}</h1>
             <p className="font-sans text-xl text-neutral-text leading-relaxed border-l-4 border-primary pl-6 italic">
                {post.summary}
             </p>
          </header>

          <div className="aspect-[16/9] rounded-3xl overflow-hidden mb-12 shadow-lg">
             <img 
               src={`https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=2070&auto=format&fit=crop&seed=${post.slug}`} 
               alt={post.title}
               className="w-full h-full object-cover"
             />
          </div>

          <div className="grid lg:grid-cols-12 gap-12">
             <div className="lg:col-span-2 lg:sticky lg:top-32 h-fit">
                <p className="font-bold font-display text-dark text-sm mb-4">Delen</p>
                <div className="flex flex-row lg:flex-col gap-4">
                   <button className="w-10 h-10 rounded-full bg-neutral-lighter flex items-center justify-center text-dark hover:bg-[#0077b5] hover:text-white transition-colors">
                      <Linkedin size={18}/>
                   </button>
                   <button className="w-10 h-10 rounded-full bg-neutral-lighter flex items-center justify-center text-dark hover:bg-[#1877F2] hover:text-white transition-colors">
                      <Facebook size={18}/>
                   </button>
                   <button className="w-10 h-10 rounded-full bg-neutral-lighter flex items-center justify-center text-dark hover:bg-black hover:text-white transition-colors">
                      <Twitter size={18}/>
                   </button>
                </div>
             </div>

             <div className="lg:col-span-10">
                <article className="prose prose-lg prose-slate max-w-none font-sans text-dark">
                   <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </article>
             </div>
          </div>

          <hr className="my-16 border-neutral-light"/>

          <div className="bg-neutral-lighter rounded-3xl p-10 lg:p-16 text-center">
             <h2 className="font-display text-3xl font-bold text-dark mb-4">Meer weten over dit onderwerp?</h2>
             <p className="text-neutral-text mb-8 text-lg">Neem contact op met onze experts voor een verdiepend gesprek.</p>
             <div className="flex justify-center gap-4">
                <Link to="/contact" className="bg-dark text-white px-8 py-3 rounded-xl font-bold font-display hover:bg-primary transition-colors">Contact opnemen</Link>
                <Link to="/demo" className="bg-white text-dark border border-neutral-light px-8 py-3 rounded-xl font-bold font-display hover:bg-neutral-50 transition-colors">Demo aanvragen</Link>
             </div>
          </div>
       </div>
    </div>
  );
};

export default BlogDetail;