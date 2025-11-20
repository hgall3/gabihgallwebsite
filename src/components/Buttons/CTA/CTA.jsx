import React from "react";
import "./CTA.scss";

export default function CTA({ label = "Click", onClick }) {
  return (
    <button className="cta-btn" onClick={onClick}>
      {label}
    </button>
  );
}
