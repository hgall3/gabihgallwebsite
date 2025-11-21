import React, { useState } from "react";
import Modal from "../Modal/Modal";
import emailjs from "@emailjs/browser";
import "./ContactModal.scss";

export default function ContactModal({ isOpen, onClose }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      await emailjs.send(
        "service_6zpys2f",   
        "template_unbtlwb",  
        form,
        "publicKey_hYWt2GR5f8MLwNpZt"  
      );

      setError("");
      onClose();
      alert("Message sent!");
    } catch (err) {
      console.error("Error:", err);
      setError("Something went wrong. Try again.");
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} width="450px">
      <div className="contact-modal">
        <h2 className="contact-modal__title">Let's talk</h2>

        <form onSubmit={handleSubmit} className="contact-modal__form">
          <input
            name="name"
            type="text"
            placeholder="Your name"
            value={form.name}
            onChange={handleChange}
          />

          <input
            name="email"
            type="email"
            placeholder="Your email"
            value={form.email}
            onChange={handleChange}
          />

          <textarea
            name="message"
            rows="4"
            placeholder="Write your message..."
            value={form.message}
            onChange={handleChange}
          />

          {error && <p className="contact-modal__error">{error}</p>}

          <button className="contact-modal__send">Send message</button>
        </form>
      </div>
    </Modal>
  );
}
