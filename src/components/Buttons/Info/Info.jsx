import React from "react";
import "./Info.scss";
export default function InfoButton({ label, onClick, className = "" }) {
  return (
    <button
      className={`info-btn ${className}`}
      onClick={onClick}
      aria-label={label}
    >
      {label}
    </button>
  );
}
