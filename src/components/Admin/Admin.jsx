import React, { useState } from "react";
import Modal from "../Modal/Modal";
import { useAdmin } from "../../context/AdminContext";
import "./Admin.scss";

export default function Admin({ isOpen, onClose }) {
  const { isAdmin, setIsAdmin } = useAdmin();

  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const correctPassword = "123"; 

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password === correctPassword) {
      setIsAdmin(true);
      setError("");
      setPassword("");
      onClose(); 
    } else {
      setError("Incorrect password");
    }
  };

  const handleExitAdmin = () => {
    setIsAdmin(false);
    setPassword("");
    setError("");
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} width="350px">
      <div className="admin-modal">
        {!isAdmin && (
          <>
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
          </>
        )}

        {isAdmin && (
          <>
            <h2 className="admin-title">Admin mode active</h2>
            <p className="admin-info">
            </p>
            <button
              type="button"
              className="admin-submit admin-exit"
              onClick={handleExitAdmin}
            >
              Exit admin mode
            </button>
          </>
        )}
      </div>
    </Modal>
  );
}
