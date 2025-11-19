import React from "react";
import Navbar from "../components/Navbar/Navbar";
import "./Layout.scss";

export default function Layout({ children }) {
  return (
    <div className="app-layout">
      <Navbar />
      <main className="app-content">{children}</main>
    </div>
  );
}
