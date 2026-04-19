import React from 'react';
import { Helmet } from 'react-helmet-async';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import Section36 from '../../components/Section36/Component';
import Section37 from '../../components/Section37/Component';

const Web = () => {
  return (
    <>
      <Helmet>
        <title>Advertising & Growth | Hypertonic IT Solutions</title>
        <meta name="description" content="Accelerate your business growth with our strategic advertising and performance marketing solutions." />
        <meta name="keywords" content="Advertising, Growth Marketing, PPC, Google Ads, Meta Ads, ROI Focused Marketing, Lead Generation, Display Advertising, Remarketing" />
        <link rel="canonical" href="https://hypertonic.co.in/addvertise" />
      </Helmet>
      <Nav />
      <main>
        <Section36 />
        <Section37 />
        
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
