import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  type?: 'website' | 'article' | 'product';
  schema?: object; // For JSON-LD Structured Data
}

const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  image = 'https://ik.imagekit.io/fto/whizz-kit/Image%20(Bar%20staff).png', // Default fallback image
  type = 'website',
  schema
}) => {
  const location = useLocation();
  const siteUrl = 'https://whizz-kit.com'; // Replace with actual domain in production
  const currentUrl = `${siteUrl}${location.pathname}`;
  const fullTitle = `${title} | Whizz-kit`;

  useEffect(() => {
    // 1. Update Title
    document.title = fullTitle;

    // 2. Update Meta Tags Helper
    const updateMeta = (name: string, content: string, attribute: 'name' | 'property' = 'name') => {
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Standard SEO
    updateMeta('description', description);
    updateMeta('robots', 'index, follow');
    
    // Open Graph / Facebook
    updateMeta('og:type', type, 'property');
    updateMeta('og:title', fullTitle, 'property');
    updateMeta('og:description', description, 'property');
    updateMeta('og:image', image, 'property');
    updateMeta('og:url', currentUrl, 'property');
    updateMeta('og:site_name', 'Whizz-kit Festival Payments', 'property');

    // Twitter
    updateMeta('twitter:card', 'summary_large_image', 'name');
    updateMeta('twitter:title', fullTitle, 'name');
    updateMeta('twitter:description', description, 'name');
    updateMeta('twitter:image', image, 'name');

    // Canonical URL
    let linkCanonical = document.querySelector("link[rel='canonical']");
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', currentUrl);

    // 3. Inject JSON-LD Schema
    if (schema) {
      let script = document.querySelector('#json-ld-schema');
      if (!script) {
        script = document.createElement('script');
        script.id = 'json-ld-schema';
        script.setAttribute('type', 'application/ld+json');
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(schema);
    } else {
      // Clean up schema if not present on this page
      const script = document.querySelector('#json-ld-schema');
      if (script) script.remove();
    }

  }, [title, description, image, type, currentUrl, fullTitle, schema]);

  return null;
};

export default SEO;