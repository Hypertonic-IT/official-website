import React from 'react';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import Section17 from '../../components/Section17/Component';
import Section18 from '../../components/Section18/Component';
import Section19 from '../../components/Section19/Component';
import Section20 from '../../components/Section20/Component';

const Software = () => {
  return (
    <>
      <Nav />
      <Section17 />
      <Section18 />
      <Section19 />
      <Section20 />
      
      {/* Universal Service CTA */}
      <div style={{ background: 'transparent', textAlign: 'center', padding: '60px 0 120px', position: 'relative', zIndex: 10 }}>
        <h3 style={{ fontSize: '32px', color: '#fff', fontWeight: '800', marginBottom: '30px', letterSpacing: '-1px' }}>Ready to transform your vision?</h3>
        <a href="/contact" className="cta-btn-modern" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto', background: '#fff', color: '#000', padding: '16px 45px', borderRadius: '100px', fontWeight: '700', fontSize: '15px', textDecoration: 'none', boxShadow: '0 10px 30px rgba(255,255,255,0.1)' }}>
           Start Your Project <i className="ri-arrow-right-line" style={{ marginLeft: '10px' }}></i>
        </a>
      </div>
      <Footer />
    </>
  );
}

export default Software;
