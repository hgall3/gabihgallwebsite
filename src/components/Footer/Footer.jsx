import React from "react";
import AdminButton from "../Buttons/AdminButton/AdminButton";
import "./Footer.scss";

export default function Footer({ onAdminClick }) {
  return (
    <footer className="footer">
      <AdminButton onClick={onAdminClick} />
    </footer>
  );
}
