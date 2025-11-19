// ProjectCardStack.jsx
import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import "./ProjectCardStack.scss"; // estilos opcionales
import CodeHappen from "../../assets/CodeHappens.svg";

export default function ProjectCardStack() {
  // Aquí defines las tarjetas con sus props personalizados
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
      title: "Dreamy App",
      year: "2024",
      role: "Product Design · Motion UI",
      description:
        "App conceptual sobre wellness y visualización emocional.",
      imageSrc: "/images/projects/dreamy.png",
      imageAlt: "Dreamy app UI",
      cardBgColor: "#E8E2FF",
      leftBgColor: "#A46BA7",
    },
    {
      id: 3,
      title: "Portfolio 2025",
      year: "2025",
      role: "Branding · Frontend Dev",
      description:
        "Rediseño completo del portfolio personal con animación y storytelling.",
      imageSrc: "/images/projects/portfolio.png",
      imageAlt: "Portfolio mockup",
      cardBgColor: "#EEECEE",
      leftBgColor: "#B890B8",
    },
    {
      id: 4,
      title: "Berlin Culture Map",
      year: "2023",
      role: "DataViz · UX Research",
      description:
        "Mapa interactivo de arte urbano en Berlín con capas dinámicas.",
      imageSrc: "/images/projects/berlinmap.png",
      imageAlt: "Berlin culture map",
      cardBgColor: "#D9D9D9",
      leftBgColor: "#8B6C8B",
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
