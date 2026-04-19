import React from "react";
import { Helmet } from 'react-helmet-async';
import Nav from "../../components/Nav/Nav";
import Section from "../../components/Section/Component";
import Section1 from "../../components/Section1/Component";
import Section2 from "../../components/Section2/Component";
import Section3 from "../../components/Section3/Component";
import Process from "../../components/Process/Component";
import Testimonials from "../../components/Testimonials/Component";
import Section5 from "../../components/Section5/Component";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <>
      <Helmet>
        <title>Hypertonic IT Solutions | Premium Web & App Development Agency</title>
        <meta name="description" content="Hypertonic IT Solutions is a premier digital agency specializing in custom web development, mobile apps, UI/UX design, and scalable software solutions. We build experiences, not just software." />
        <meta name="keywords" content="IT Solutions, Web Development, Mobile App Development, UI/UX Design, Software Development Company, SaaS, Digital Marketing, Hypertonic IT, Custom Software, Enterprise Solutions, E-commerce Development, Fintech Solutions" />
        <link rel="canonical" href="https://hypertonic.co.in/" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hypertonic.co.in/" />
        <meta property="og:title" content="Hypertonic IT Solutions | Premium Web & App Development Agency" />
        <meta property="og:description" content="Custom web development, mobile apps, and scalable software solutions tailored for your business growth." />
        <meta property="og:image" content="https://hypertonic.co.in/img/hyperlogo.png" />
      </Helmet>
      <Nav />
      <main>
        <Section />
        <Section1 />
        <Process />
        <Section2 />
        <Section3 />
        {/* <Testimonials /> */}
        <Section5 />
      </main>
      <Footer />
    </>
  );
}

export default Home;
