import React from "react";
import SocialMediaLinks from "../../components/Buttons/Socials/SocialMediaLinks/SocialMediaLinks";
import "./ProjectCard.scss";

export default function ProjectCard({
  title = "Code Happen",
  year = "2025",
  role = "UI/UX Design · Web Development",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  imageSrc,
  imageAlt = "Project preview",
  socialComponent: SocialComponent = SocialMediaLinks,
  crudComponent: CrudComponent,
  isAdmin = false,
  cardBgColor = "#959595",  
  leftBgColor = "#B890B8",  
}) {
  return (
    <article 
      className="project-card"
      style={{ background: cardBgColor }}
    >
      <div 
        className="project-card__left"
        style={{ background: leftBgColor }}
      >
        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__year">{year}</p>
        <p className="project-card__role">{role}</p>
      </div>

      <div className="project-card__middle">
        <p className="project-card__description">{description}</p>

        {SocialComponent && (
          <div className="project-card__socials">
            <SocialComponent />
          </div>
        )}
      </div>

      <div className="project-card__right">
        <div className="project-card__image-wrapper">
          {imageSrc && (
            <img
              src={imageSrc}
              alt={imageAlt}
              className="project-card__image"
            />
          )}
        </div>

        {isAdmin && CrudComponent && (
          <div className="project-card__crud">
            <CrudComponent />
          </div>
        )}
      </div>
    </article>
  );
}
