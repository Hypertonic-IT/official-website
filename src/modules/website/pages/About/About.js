import React from "react";
import { Helmet } from 'react-helmet-async';
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import Section6 from "../../components/Section6/Component";
import Section7 from "../../components/Section7/Component";
import Section8 from "../../components/Section8/Component";
import { OurStory, WhyChooseUs, StatsStrip } from "../../components/AboutExtras/AboutExtras";

function About() {
  return (
    <>
      <Helmet>
        <title>About Us | Hypertonic IT Solutions - Our Mission & Vision</title>
        <meta name="description" content="Discover the story behind Hypertonic IT Solutions. We are a team of passionate developers, designers, and strategists dedicated to delivering high-end digital products." />
        <meta name="keywords" content="About Hypertonic IT, IT Company India, Software Agency, Digital Transformation, Innovation, Technology Partners, IT Consultants, Our Team, Success Stories, Mission and Values" />
        <link rel="canonical" href="https://hypertonic.co.in/about" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hypertonic.co.in/about" />
        <meta property="og:title" content="About Us | Hypertonic IT Solutions" />
        <meta property="og:description" content="Learn about our journey, our values, and why businesses trust us with their digital transformation." />
        <meta property="og:image" content="https://hypertonic.co.in/img/hyperlogo.png" />
      </Helmet>
      <Nav />
      <main>
        {/* 1. HERO */}
        <Section6 />

        {/* 2. OUR STORY */}
        <OurStory />

        {/* 3. MISSION */}
        <Section7 />

        {/* 4. WHY CHOOSE US */}
        <WhyChooseUs />

        {/* 5. WHAT WE DO */}
        <Section8 />

        {/* 6. STATS STRIP */}
        <StatsStrip />
      </main>
      <Footer />
    </>
  );
}

export default About;
