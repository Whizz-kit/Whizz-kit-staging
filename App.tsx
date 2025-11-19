import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Solutions from './pages/Solutions';
import SolutionDetail from './pages/SolutionDetail';
import Cases from './pages/Cases';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import Demo from './pages/Demo';
import Legal from './pages/Legal';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        {/* Standalone Page */}
        <Route path="/demo" element={<Demo />} />
        
        {/* Main Site Layout */}
        <Route path="*" element={
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/oplossingen" element={<Solutions />} />
              <Route path="/oplossingen/:slug" element={<SolutionDetail />} />
              <Route path="/cases" element={<Cases />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogDetail />} />
              <Route path="/over-ons" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy-voorwaarden" element={<Legal />} />
              {/* Fallback for old links if any */}
              <Route path="/privacy" element={<Legal />} />
              <Route path="/voorwaarden" element={<Legal />} />
            </Routes>
          </Layout>
        } />
      </Routes>
    </HashRouter>
  );
};

export default App;