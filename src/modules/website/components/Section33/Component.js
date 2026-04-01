import React from 'react';
import '../Section10/component.css';

const Section33 = () => {
  return (
    <div className="svc-intro">
      <div className="svc-intro-inner">
        <span className="svc-label">Service</span>
        <h2 className="svc-intro-title">Your Expert Partner in Social Media Management</h2>
        <p className="svc-intro-body">
          At Hypertonic IT Solutions, we specialize in creating and executing comprehensive social media strategies that elevate your brand presence and foster meaningful engagement with your audience. With our team of experienced social media managers and creative experts, we are dedicated to building your online community and driving impactful results that align with your business goals.
        </p>

        <div className="svc-details">
          <h3 className="svc-intro-title" style={{ fontSize: '28px', marginTop: '60px' }}>Why Choose Hypertonic</h3>

          <div className="svc-feature">
            <h4>Expertise:</h4>
            <p className="svc-intro-body">With years of experience in the social media landscape, our team has the strategic insight and technical know-how to craft compelling social media campaigns that resonate with your target audience. We stay ahead of the latest trends to ensure your brand remains relevant and engaging.</p>
          </div>

          <h3 className="svc-intro-title" style={{ fontSize: '28px', marginTop: '60px' }}>Our Social Media Management Services Include:</h3>

          <div className="svc-feature">
            <h4>Social Media Strategy Development:</h4>
            <p className="svc-intro-body">We craft data-driven social media strategies that align with your business goals, target audience, and industry trends. Our strategies are designed to increase brand awareness, drive traffic, and generate leads.</p>
          </div>

          <div className="svc-feature">
            <h4>Content Creation and Curation:</h4>
            <p className="svc-intro-body">We produce a steady stream of high-quality content, including images, videos, infographics, and articles, tailored to your brand and audience. We also curate relevant third-party content to keep your social media profiles fresh and engaging.</p>
          </div>

          <div className="svc-feature">
            <h4>Community Management:</h4>
            <p className="svc-intro-body">We actively engage with your audience, responding to comments, messages, and reviews in a timely and professional manner. Our community management services help build a loyal following and foster positive relationships with your customers.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section33;
