import React from 'react';
import { Helmet } from 'react-helmet-async';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import Section13 from '../../components/Section13/Component';
import Section14 from '../../components/Section14/Component';
import Section15 from '../../components/Section15/Component';
import Section16 from '../../components/Section16/Component';

const AppDevelopment = () => {
  return (
    <>
      <Helmet>
        <title>App Development Services | Hypertonic IT Solutions</title>
        <meta name="description" content="Native and cross-platform mobile app development services. Android, iOS, and hybrid apps with premium UI/UX and high performance." />
        <meta name="keywords" content="App Development, Mobile App Design, Android App Development, iOS App Development, React Native, Flutter, Hybrid Apps, Custom Mobile Solutions, Startup App Development" />
        <link rel="canonical" href="https://hypertonic.co.in/app" />
        <meta property="og:title" content="App Development Services | Hypertonic IT Solutions" />
        <meta property="og:url" content="https://hypertonic.co.in/app" />
      </Helmet>
      <Nav />
      <main>
        <Section13 />
        <Section14 />
        <Section15 />
        <Section16 />
        
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

export default AppDevelopment;
