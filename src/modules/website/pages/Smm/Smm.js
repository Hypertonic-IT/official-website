import React from 'react';
import { Helmet } from 'react-helmet-async';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import Section32 from '../../components/Section32/Component';
import Section33 from '../../components/Section33/Component';

const Web = () => {
  return (
    <>
      <Helmet>
        <title>Social Media Management | Hypertonic IT Solutions</title>
        <meta name="description" content="Professional social media management services to grow your brand online. We handle content creation, scheduling, and engagement across all platforms." />
        <meta name="keywords" content="Social Media Management, SMM, Instagram Marketing, Facebook Marketing, LinkedIn Growth, Content Creation, Social Media Strategy, Community Management, Social Ads" />
        <link rel="canonical" href="https://hypertonic.co.in/smm" />
        <meta property="og:title" content="Social Media Management | Hypertonic IT Solutions" />
        <meta property="og:url" content="https://hypertonic.co.in/smm" />
      </Helmet>
      <Nav />
      <main>
        <Section32 />
        <Section33 />
        
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
