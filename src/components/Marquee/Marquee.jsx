import React from "react";
import ProjectSVG from "/src/assets/Projects.svg";
import "./Marquee.scss";

export default function Marquee() {
  return (
    <div className="marquee">
      <div className="marquee-track">
        {/* TRACK 1 */}
        <img src={ProjectSVG} alt="projects" className="marquee-item" />
        <img src={ProjectSVG} alt="projects" className="marquee-item" />
        <img src={ProjectSVG} alt="projects" className="marquee-item" />
        <img src={ProjectSVG} alt="projects" className="marquee-item" />
        <img src={ProjectSVG} alt="projects" className="marquee-item" />
        <img src={ProjectSVG} alt="projects" className="marquee-item" />

        {/* TRACK 2 (duplicado para el loop infinito) */}
        <img src={ProjectSVG} alt="projects" className="marquee-item" />
        <img src={ProjectSVG} alt="projects" className="marquee-item" />
        <img src={ProjectSVG} alt="projects" className="marquee-item" />
        <img src={ProjectSVG} alt="projects" className="marquee-item" />
        <img src={ProjectSVG} alt="projects" className="marquee-item" />
        <img src={ProjectSVG} alt="projects" className="marquee-item" />
      </div>
    </div>
  );
}
