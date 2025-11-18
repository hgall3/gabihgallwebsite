import React from "react";
import DarkBackground from "../../components/DarkBackground/DarkBackground";
import HeroPic from "../../components/HeroPic/HeroPic";
import LogoName from "../../components/LogoName/LogoName"; 
import "./Home.scss";

export default function Home() {
  return (
    <>
      
      <DarkBackground wavePosition="bottom">
        <div className="home-hero">
          <div className="profile-image">
            <HeroPic alt="Gabi image" />
          </div>
          <div className="home-logo-description">
            <div className="logoname"><LogoName alt="Gabi H Gall website" /></div>
            <p className="home-text"> 
            Creative Designer <br />and Developer</p>  
          </div>
           <p className="home-text-mobile">
            Creative Designer <br />and Developer
           </p>
        </div>
      </DarkBackground>

      
      <section className="home-next-section">
        
      </section>

      
      <DarkBackground wavePosition="top">
        <div className="home-hero">
          
        </div>
      </DarkBackground>
    </>
  );
}
