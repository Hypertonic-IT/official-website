import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Nav from '../../components/Nav/Nav';
import Section4 from '../../components/Section4/Component'
import Footer from '../../components/Footer/Footer'

function Home() {
  return (
    <>
      <Helmet>
        <title>Portfolio | Hypertonic IT Solutions - Our Success Stories</title>
        <meta name="description" content="Explore our portfolio of successful digital projects. From custom web platforms to mobile apps and software solutions, see how we've helped businesses thrive." />
        <meta name="keywords" content="Software Portfolio, Web Development Projects, App Development Case Studies, Hypertonic IT Work, Client Success Stories" />
        <link rel="canonical" href="https://hypertonic.co.in/portfolio" />
        <meta property="og:title" content="Portfolio | Hypertonic IT Solutions - Our Success Stories" />
        <meta property="og:url" content="https://hypertonic.co.in/portfolio" />
      </Helmet>
      <Nav />
      <main>
        <Section4 />
        
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

export default Home;
