import React from 'react';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import Section30 from '../../components/Section30/Component';
import Section31 from '../../components/Section31/Component';

const Web = () => {
  return (
    <>
      <Nav />
      <Section30 />
      <Section31 />
      
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

export default Web;
