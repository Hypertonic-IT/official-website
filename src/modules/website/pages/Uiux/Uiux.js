import React from 'react';
import { Helmet } from 'react-helmet-async';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import Section30 from '../../components/Section30/Component';
import Section31 from '../../components/Section31/Component';

const Web = () => {
  return (
    <>
      <Helmet>
        <title>UI/UX Design Services | Hypertonic IT Solutions</title>
        <meta name="description" content="User-centric UI/UX design services. We create beautiful, intuitive, and modern interfaces for websites and mobile applications that convert." />
        <meta name="keywords" content="UI/UX Design, User Experience Design, User Interface Design, Wireframing, Prototyping, Product Design Agency, Interaction Design, Visual Identity, Brand Design" />
        <link rel="canonical" href="https://hypertonic.co.in/uiux" />
        <meta property="og:title" content="UI/UX Design Services | Hypertonic IT Solutions" />
        <meta property="og:url" content="https://hypertonic.co.in/uiux" />
      </Helmet>
      <Nav />
      <main>
        <Section30 />
        <Section31 />
        
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
