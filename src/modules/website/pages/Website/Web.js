import React from 'react';
import { Helmet } from 'react-helmet-async';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import Section9 from '../../components/Section9/Component';
import Section10 from '../../components/Section10/Component';
import Section11 from '../../components/Section11/Component';
import Section12 from '../../components/Section12/Component';

const Web = () => {
  return (
    <>
      <Helmet>
        <title>Website Development Services | Hypertonic IT Solutions</title>
        <meta name="description" content="Custom website development services including landing pages, corporate websites, and e-commerce solutions. High-performance, SEO-friendly, and mobile-responsive." />
        <meta name="keywords" content="Website Development, Custom Web Design, Responsive Web Design, SEO Friendly Websites, React Web Development, Landing Page Design, E-commerce Development, WordPress to React" />
        <link rel="canonical" href="https://hypertonic.co.in/website" />
        <meta property="og:title" content="Website Development Services | Hypertonic IT Solutions" />
        <meta property="og:url" content="https://hypertonic.co.in/website" />
      </Helmet>
      <Nav />
      <main>
        <Section9 />
        <Section10 />
        <Section11 />
        <Section12 />
        
        {/* Universal Service CTA */}
        <div style={{ background: 'transparent', textAlign: 'center', padding: '60px 0 120px', position: 'relative', zIndex: 10 }}>
          <h3 style={{ fontSize: '32px', color: '#fff', fontWeight: '800', marginBottom: '30px', letterSpacing: '-1px' }}>Ready to transform your vision?</h3>
          <a href="/contact" className="cta-btn-modern" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto', background: '#fff', color: '#000', padding: '16px 45px', borderRadius: '100px', fontWeight: '700', fontSize: '15px', textDecoration: 'none', boxShadow: '0 10px 30px rgba(255,255,255,0.1)' }}>
             Start Your Project <i className="ri-arrow-right-line" style={{ marginLeft: '10px' }}></i>
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Web;
