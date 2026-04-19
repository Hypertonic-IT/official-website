import React from 'react';
import { Helmet } from 'react-helmet-async';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import Section28 from '../../components/Section28/Component';
import Section29 from '../../components/Section29/Component';

const Web = () => {
  return (
    <>
      <Helmet>
        <title>SaaS Product Development | Hypertonic IT Solutions</title>
        <meta name="description" content="Launch your SaaS platform with Hypertonic. We offer end-to-end SaaS development from MVP to scalable production environments." />
        <meta name="keywords" content="SaaS Development, Software as a Service, MVP Development, Cloud Software, SaaS Architecture, Subscription Based Models, Multi-tenant Architecture, Scalable SaaS" />
        <link rel="canonical" href="https://hypertonic.co.in/saas" />
        <meta property="og:title" content="SaaS Product Development | Hypertonic IT Solutions" />
        <meta property="og:url" content="https://hypertonic.co.in/saas" />
      </Helmet>
      <Nav />
      <main>
        <Section28 />
        <Section29 />
        
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
