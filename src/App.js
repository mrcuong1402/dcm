import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Preloader from "./components/Preloader";
import Background from "./components/Background";
import Header from "./components/Header";
import Started from "./components/Started";
import AboutMe from "./components/about/AboutMe";
import ServiceItem from "./components/about/ServiceItem";
import PricingItem from "./components/about/PricingItem";
import FunfactItem from "./components/about/FunfactItem";
import Client from "./components/about/Client";
import Testimonial from "./components/about/Testimonial";
import ExperienceItem from "./components/resume/ExperienceItem";
import EducationItem from "./components/resume/EducationItem";
import SkillItem from "./components/resume/SkillItem";

function App() {
  return (
    <div>
      <Preloader />

      <Background />

      <div
        class="container opened"
        data-animation-in="fadeInLeft"
        data-animation-out="fadeOutLeft"
      >
        <Header />
        <Started />

        {/* Card - About */}
        <div class="card-inner animated active" id="about-card">
          <div class="card-wrap">
            <AboutMe />

            <div className="content services">
              {/* title */}
              <div className="title">My Services </div>
              {/* content */}
              <div className="row service-items border-line-v">
                <ServiceItem />
                <ServiceItem />
                <ServiceItem />
                <ServiceItem />
              </div>

              <div className="content pricing">
                {/* title */}
                <div className="title">Pricing</div>
                {/* content */}
                <div className="row pricing-items">
                  <PricingItem />
                  <PricingItem />
                </div>
              </div>

              <div className="content fuct">
                {/* title */}
                <div className="title">Fun Fact</div>
                {/* content */}
                <div className="row fuct-items">
                  <FunfactItem />
                  <FunfactItem />
                  <FunfactItem />
                  <FunfactItem />
                </div>
              </div>

              <div className="content clients">
                {/* title */}
                <div className="title">Clients</div>
                {/* content */}
                <div className="row client-items">
                  <Client />
                  <Client />
                  <Client />
                  <Client />
                </div>
              </div>

              <div className="content testimonials">
                {/* title */}
                <div className="title">Testimonials</div>
                {/* content */}
                <div className="row testimonials-items">
                  <div className="col col-d-12 col-t-12 col-m-12 border-line-v">
                    <div className="revs-carousel default-revs">
                      <div className="owl-carousel">
                        <Testimonial />
                        <Testimonial />
                        <Testimonial />
                        <Testimonial />
                        <Testimonial />
                        <Testimonial />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="clear"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Card - Resume */}

        <div className="card-inner" id="resume-card">
          <div className="card-wrap">
            {/*
						Resume
					*/}
            <div className="content resume">
              {/* title */}
              <div className="title">Resume</div>
              {/* content */}
              <div className="row">
                {/* experience */}
                <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
                  <div className="resume-title border-line-h">
                    <div className="icon">
                      <i className="ion ion-briefcase" />
                    </div>
                    <div className="name">Experience</div>
                    <div class="resume-items">
                      <ExperienceItem />
                      <ExperienceItem />
                      <ExperienceItem />
                    </div>
                  </div>
                </div>

                {/* education */}
                <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
                  <div className="resume-title border-line-h">
                    <div className="icon">
                      <i className="ion ion-university" />
                    </div>
                    <div className="name">Education</div>
                  </div>
                  <div className="resume-items">
                    <EducationItem />
                    <EducationItem />
                    <EducationItem />
                  </div>
                </div>
                <div className="clear"></div>
              </div>
            </div>

            {/* Skills 	*/}
            <div className="content skills">
              {/* title */}
              <div className="title">My Skills</div>
              {/* content */}
              <div className="row">
                {/* skill item */}

                <SkillItem />
                <SkillItem />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
