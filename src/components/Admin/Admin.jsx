import React, { useState } from "react";
import Modal from "../Modal/Modal";
import { useAdmin } from "../../context/AdminContext";
import "./Admin.scss";

export default function Admin({ isOpen, onClose }) {
  const { setIsAdmin } = useAdmin();

  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const correctPassword = "123"; 
  // ⬆️ cámbiala cuando quieras

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password === correctPassword) {
      setIsAdmin(true);  
      setError("");
      setPassword("");
      onClose();          // cierra modal
    } else {
      setError("Incorrect password");
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} width="350px">
      <div className="admin-modal">
        <h2 className="admin-title">Admin Login</h2>

        <form onSubmit={handleSubmit} className="admin-form">

          <input
            type="password"
            className="admin-input"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <p className="admin-error">{error}</p>}

          <button type="submit" className="admin-submit">
            Enter
          </button>
        </form>
      </div>
    </Modal>
  );
}
