import React from "react";
import DarkBackground from "../../components/DarkBackground/DarkBackground";
import HeroPic from "../../components/HeroPic/HeroPic";
import LogoName from "../../components/LogoName/LogoName";
import FrameSolidOne from "../../components/Forms/FrameSolidOne/FrameSolidOne";
import FrameSolidTwo from "../../components/Forms/FrameSolidTwo/FrameSolidTwo";
import "./Home.scss";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <DarkBackground wavePosition="bottom">
        <div className="home-hero">
          <div className="profile-image">
            <HeroPic alt="Gabi image" />
          </div>

          <div className="home-logo-description">
            <div className="logoname">
              <LogoName alt="Gabi H Gall website" />
            </div>
            <p className="home-text">
              Creative Designer <br />
              and Developer
            </p>
          </div>

          <p className="home-text-mobile">
            Creative Designer <br />
            and Developer
          </p>
        </div>
      </DarkBackground>

      {/* ABOUT ME */}
      <section className="about-me">
        <div className="about-content container">
          {/* Left */}
          <div className="about-left">
            <div className="frame-wrapper">
              <FrameSolidOne className="size-md is-centered" alt="About frame left" />

              <div className="frame-text">
                <h3 className="frame-title">How I see myself:</h3>
                <p className="frame-paragraph">
                  Much like the creative process itself, I'm constantly evolving. I don't move in straight lines — I flow, adapt, and transform with every project I take on.
                </p>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="about-right">
            <div className="frame-wrapper">
              <FrameSolidTwo className="size-md is-centered" alt="About frame right" />

              <div className="frame-text right-text">
                <h3 className="frame-title">My background:</h3>
                <p className="frame-paragraph">
                  I come from a blend of psychology, interior design, UX, and web development; a mix that’s taught me to learn fast, switch lenses with ease, and turn complexity into clear, human-centered solutions.
                </p>
              </div>
            </div>

            <div className="connect-block">
              <p className="connect-title">Let's connect</p>
              <div className="social-icons">
                <button aria-label="Instagram" className="social-btn">IG</button>
                <button aria-label="TikTok" className="social-btn">TT</button>
                <button aria-label="Contact (email)" className="social-btn">✉️</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Olas arriba */}
      <DarkBackground wavePosition="top">
        <div className="home-hero">
          <h2>DarkBackground con olas arriba</h2>
          <p>La misma imagen, pero usando la parte de las ondas arriba.</p>
        </div>
      </DarkBackground>
    </>
  );
}
