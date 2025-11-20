import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Admin from "../components/Admin/Admin";
import "./Layout.scss";

export default function Layout({ children }) {
  const [showAdminModal, setShowAdminModal] = useState(false);

  return (
    <div className="app-layout">
      <Navbar />

      <main className="app-content">{children}</main>

      <Footer onAdminClick={() => setShowAdminModal(true)} />

      {/* Modal de admin */}
      <Admin
        isOpen={showAdminModal}
        onClose={() => setShowAdminModal(false)}
      />
    </div>
  );
}
