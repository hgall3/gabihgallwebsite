import React from "react";
import DarkBackground from "../../components/DarkBackground/DarkBackground";
import HeroPic from "../../components/HeroPic/HeroPic";
import LogoName from "../../components/LogoName/LogoName"; 
import FormOne from "../../components/Forms/FrameSolidOne/FrameSolidOne";
import FormTwo from "../../components/Forms/FrameSolidTwo/FrameSolidTwo";
import SocialMediaLinks from "../../components/Buttons/Socials/SocialMediaLinks/SocialMediaLinks";
import Marquee from "../../components/Marquee/Marquee";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import ProjectCardStack from "../../components/ProjectCard/ProjectCardStack";
import ContactSection from "../../components/ContactSection/ContactSection";
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
       <FormOne className="home-form-one" alt="Decorative frame 1"/>
       <div className="form-two-group"> 
         <FormTwo className="home-form-two" alt="Decorative frame 2"/>
         <div className="socials-group">
         <p><h2>Lets Connect!</h2></p>
         <SocialMediaLinks />
         </div>
       </div>  
      </section>

      
      <DarkBackground wavePosition="top">
        <Marquee />
        <div className="home-projects">
          <ProjectCardStack/>  
        </div>
      </DarkBackground>
      <ContactSection />
    </>
  );
}
