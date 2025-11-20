import React from "react";
import "./DarkBackground.scss";

export default function DarkBackground({
  children,
  wavePosition = "bottom", 
}) {
  const positionClass =
    wavePosition === "top"
      ? "dark-background--top"
      : "dark-background--bottom";

  return (
    <section className={`dark-background ${positionClass}`}>
      <div className="dark-background__inner">
        {children}
      </div>
    </section>
  );
}
