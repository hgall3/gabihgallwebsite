import React, { useState } from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import Pagination from "../Pagination/Pagination";
import "./ProjectCardStack.scss";
import CodeHappen from "../../assets/CodeHappens.svg";
import DreamyApp from "../../assets/GardenOfThoughts.png";
import PortfolioImg from "../../assets/try.png";
import Berlin from "../../assets/UselesslyTrue.png";

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
      description: "App conceptual sobre wellness y visualización emocional.",
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
      title: "Uselessly True",
      year: "2023",
      role: "UI/UX Design· Frontend Dev",
      description:
        "Mapa interactivo de arte urbano en Berlín con capas dinámicas.",
      imageSrc: Berlin,
      imageAlt: "Berlin culture map",
      cardBgColor: "#959595",
      leftBgColor: "#8396D4",
    },

    // EXTRA CARDS (12 new)
    {
      id: 5,
      title: "Dream Tracker",
      year: "2024",
      role: "App Concept · UI/UX",
      description:
        "Aplicación conceptual que registra patrones de sueños y estados emocionales.",
      imageSrc: DreamyApp,
      imageAlt: "Dream tracker mockup",
      cardBgColor: "#959595",
      leftBgColor: "#D5A6BD",
    },
    {
      id: 6,
      title: "Urban Explorer",
      year: "2023",
      role: "Frontend Dev · Mapping",
      description:
        "Mapa exploratorio sobre espacios urbanos con enfoque en accesibilidad.",
      imageSrc: Berlin,
      imageAlt: "Urban explorer UI",
      cardBgColor: "#959595",
      leftBgColor: "#AFAFAF",
    },
    {
      id: 7,
      title: "Visual Notes",
      year: "2024",
      role: "Product Design · Branding",
      description:
        "Herramienta visual para capturar ideas de forma creativa y organizada.",
      imageSrc: PortfolioImg,
      imageAlt: "Visual Notes concept",
      cardBgColor: "#959595",
      leftBgColor: "#BBD7F8",
    },
    {
      id: 8,
      title: "Synesthesia Lab",
      year: "2025",
      role: "UI Design · Concept Art",
      description:
        "Exploración sensorial que mezcla color, música y memoria.",
      imageSrc: CodeHappen,
      imageAlt: "Synesthesia lab concept",
      cardBgColor: "#959595",
      leftBgColor: "#C7A1F2",
    },

    // NEW 12 MOCK CARDS
    {
      id: 9,
      title: "Mind Journey",
      year: "2024",
      role: "UI Design · Prototype",
      description: "Experiencia interactiva que guía al usuario por estados mentales.",
      imageSrc: DreamyApp,
      imageAlt: "Mind Journey preview",
      leftBgColor: "#E8C8DC",
    },
    {
      id: 10,
      title: "Digital Bloom",
      year: "2023",
      role: "Web Design · Branding",
      description: "Sitio web floral animado inspirado en crecimiento personal.",
      imageSrc: PortfolioImg,
      imageAlt: "Digital Bloom preview",
      leftBgColor: "#EBA6BD",
    },
    {
      id: 11,
      title: "Neon Path",
      year: "2025",
      role: "Visual Design · Motion",
      description: "Interfaz luminosa con animaciones tipo neón.",
      imageSrc: CodeHappen,
      imageAlt: "Neon Path mockup",
      leftBgColor: "#FF87D7",
    },
    {
      id: 12,
      title: "Echoes App",
      year: "2024",
      role: "Product Design · UI/UX",
      description:
        "App conceptual sobre registros de audio y recuerdos.",
      imageSrc: Berlin,
      imageAlt: "Echoes App preview",
      leftBgColor: "#D8B3F0",
    },
    {
      id: 13,
      title: "Quiet Space",
      year: "2023",
      role: "Illustration · UI",
      description:
        "Interfaz calmada inspirada en mindfulness y silencio digital.",
      imageSrc: DreamyApp,
      imageAlt: "Quiet space concept",
      leftBgColor: "#C4D5FA",
    },
    {
      id: 14,
      title: "Orbit UI",
      year: "2025",
      role: "Web · UI/UX",
      description:
        "Sistema visual inspirado en órbitas, geometría y movimiento circular.",
      imageSrc: PortfolioImg,
      imageAlt: "Orbit UI preview",
      leftBgColor: "#A7CFFC",
    },
    {
      id: 15,
      title: "Monolith Map",
      year: "2024",
      role: "Frontend · Data Viz",
      description:
        "Mapa experimental sobre estructuras, caminos y tensión narrativa.",
      imageSrc: Berlin,
      imageAlt: "Monolith map preview",
      leftBgColor: "#90A7F0",
    },
    {
      id: 16,
      title: "Inner Garden",
      year: "2023",
      role: "App Design · Wellness",
      description:
        "Espacio interior digital para cultivar emociones positivas.",
      imageSrc: DreamyApp,
      imageAlt: "Inner garden mockup",
      leftBgColor: "#E2A4C7",
    },
  ];

  
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 4;

  const totalPages = Math.ceil(cards.length / cardsPerPage);

  const startIndex = (currentPage - 1) * cardsPerPage;
  const currentCards = cards.slice(startIndex, startIndex + cardsPerPage);

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return (
    <div className="project-card-stack-wrapper">
      <div className="project-card-stack">
        {currentCards.map((card) => (
          <ProjectCard key={card.id} {...card} />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onChangePage={handlePageChange}
      />
    </div>
  );
}
