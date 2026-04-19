import React from 'react';
import { Helmet } from 'react-helmet-async';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import Section34 from '../../components/Section34/Component';
import Section35 from '../../components/Section35/Component';

const Web = () => {
  return (
    <>
      <Helmet>
        <title>Digital Marketing Services | Hypertonic IT Solutions</title>
        <meta name="description" content="Comprehensive digital marketing solutions including SEO, SEM, and performance marketing to boost your business ROI." />
        <meta name="keywords" content="Digital Marketing, SEO, SEM, Performance Marketing, Online Advertising, Growth Hacking, Content Marketing, Email Marketing, Conversion Rate Optimization" />
        <link rel="canonical" href="https://hypertonic.co.in/social" />
        <meta property="og:title" content="Digital Marketing Services | Hypertonic IT Solutions" />
        <meta property="og:url" content="https://hypertonic.co.in/social" />
      </Helmet>
      <Nav />
      <main>
        <Section34 />
        <Section35 />
        
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
