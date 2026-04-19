import React from 'react';
import { Helmet } from 'react-helmet-async';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import Section26 from '../../components/Section26/Component';
import Section27 from '../../components/Section27/Component';

const Web = () => {
  return (
    <>
      <Helmet>
        <title>Webapp Development | Hypertonic IT Solutions</title>
        <meta name="description" content="Complex web application development with scalable architecture. Dashboards, CRM, and custom business applications tailored to your requirements." />
        <meta name="keywords" content="Webapp Development, Custom Web Application, Full Stack Development, React Webapp, Enterprise Software, Dashboard Development, SaaS Application, Cloud Webapp" />
        <link rel="canonical" href="https://hypertonic.co.in/webapp" />
        <meta property="og:title" content="Webapp Development | Hypertonic IT Solutions" />
        <meta property="og:url" content="https://hypertonic.co.in/webapp" />
      </Helmet>
      <Nav />
      <main>
        <Section26 />
        <Section27 />
        
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
