
import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import "./ProjectCardStack.scss"; 
import CodeHappen from "../../assets/CodeHappens.svg";
import DreamyApp from "../../assets/GardenOfThoughts.png";
import PortfolioImg from "../../assets/try.png"
import Berlin from "../../assets/UselesslyTrue.png"

export default function ProjectCardStack() {
  
  const cards = [
    {
      id: 1,
      title: "Code Happen",
      year: "2025",
      role: "UI/UX Design · Web Development",
      description:
        "Plataforma interactiva con enfoque educativo para explicar procesos técnicos.",
      imageSrc: CodeHappen, 
      imageAlt: "Code Happen preview",
      cardBgColor: "#959595",
      leftBgColor: "#B890B8",
    },
    {
      id: 2,
      title: "Garden of Thoughts",
      year: "2025",
      role: "UI/UX Design· Frontend Dev",
      description:
        "App conceptual sobre wellness y visualización emocional.",
      imageSrc: DreamyApp,
      imageAlt: "Dreamy app UI",
      cardBgColor: "#959595",
      leftBgColor: "#AEA2DA",
    },
    {
      id: 3,
      title: "Portfolio 2025",
      year: "2025",
      role: "Branding · Frontend Dev",
      description:
        "Rediseño completo del portfolio personal con animación y storytelling.",
      imageSrc: PortfolioImg,
      imageAlt: "Portfolio mockup",
      cardBgColor: "#959595",
      leftBgColor: "#A5B2F8",
    },
    {
      id: 4,
      title: "Uselessly true",
      year: "2023",
      role: "UI/UX Design· Frontend Dev",
      description:
        "Mapa interactivo de arte urbano en Berlín con capas dinámicas.",
      imageSrc: Berlin,
      imageAlt: "Berlin culture map",
      cardBgColor: "#959595",
      leftBgColor: "#8396d4ff",
    },
  ];

  return (
    <div className="project-card-stack">
      {cards.map((card) => (
        <ProjectCard key={card.id} {...card} />
      ))}
    </div>
  );
}
