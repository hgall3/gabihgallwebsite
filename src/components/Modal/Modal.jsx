import React from "react";
import "./Modal.scss";

export default function Modal({ isOpen, onClose, children, width = "auto" }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      
      {/* 
        modal-container tiene blur + efecto macOS.
        width es personalizable: "auto", "400px", "80%", etc.
        Comentado abajo para que puedas cambiarlo cuando quieras.
      */}
      <div
        className="modal-container"
        style={{ width }}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}
