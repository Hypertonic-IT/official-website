import React from 'react';
import '../Section10/component.css';

const AppDevelopmentServices = () => {
  return (
    <div className="svc-intro" style={{ paddingTop: '0px', borderBottom: 'none' }}>
      <div className="svc-intro-inner">
        <div className="svc-details">
          <h3 className="svc-intro-title">Our Android and iOS App Development Services Include:</h3>

          <div className="svc-feature">
            <h4>Native App Development</h4>
            <p className="svc-intro-body">We specialize in building native Android and iOS apps from scratch, leveraging the latest technologies and frameworks to ensure optimal performance and functionality.</p>
          </div>

          <div className="svc-feature">
            <h4>Hybrid App Development</h4>
            <p className="svc-intro-body">Looking for a cost-effective solution? Our hybrid app development services allow you to reach both Android and iOS users with a single codebase, saving time and resources.</p>
          </div>

          <div className="svc-feature">
            <h4>App UI/UX Design</h4>
            <p className="svc-intro-body">Our talented designers create stunning app interfaces that are not only visually appealing but also intuitive and easy to navigate, enhancing the overall user experience.</p>
          </div>

          <div className="svc-feature">
            <h4>App Testing & QA</h4>
            <p className="svc-intro-body">We conduct rigorous testing and quality assurance procedures to ensure that your app functions flawlessly on all devices and platforms before launching.</p>
          </div>

          <div className="svc-feature">
            <h4>Maintenance & Support</h4>
            <p className="svc-intro-body">Our commitment to client satisfaction extends beyond launch. We offer ongoing maintenance to keep your app running smoothly and up-to-date with latest technologies.</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AppDevelopmentServices;
