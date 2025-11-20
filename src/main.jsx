import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles/main.scss";

// 👇 Importamos el AdminProvider
import { AdminProvider } from "./context/AdminContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>

      {/* 👇 TODA TU APP vive dentro del AdminProvider */}
      <AdminProvider>
        <App />
      </AdminProvider>

    </BrowserRouter>
  </React.StrictMode>
);
