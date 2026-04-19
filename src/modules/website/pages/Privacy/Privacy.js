import React from "react";
import { Helmet } from 'react-helmet-async';
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import Section25 from "../../components/Section25/Component";

const Software = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Hypertonic IT Solutions</title>
        <meta name="description" content="Read our privacy policy to learn how Hypertonic IT Solutions collects, uses, and protects your personal information." />
        <link rel="canonical" href="https://hypertonic.co.in/privacy" />
      </Helmet>
      <Nav />
      <main>
        <Section25 />
      </main>
      <Footer />
    </>
  );
};

export default Software;
