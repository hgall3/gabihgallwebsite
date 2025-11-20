import React, { useState } from "react";
import Modal from "../Modal/Modal";
import "./ProjectCRUDModal.scss";

export default function ProjectCRUDModal({
  isOpen,
  onClose,
  mode = "create",      
  initialData = {},     
  onSave,               
}) {
  
  const emptyForm = {
    title: "",
    year: "",
    role: "",
    description: "",
    imageSrc: "",
    cardBgColor: "#959595",
    leftBgColor: "#B890B8",
  };

  
  const [formData, setFormData] = useState(() => {
    if (mode === "edit" && initialData) {
      return {
        title: initialData.title || "",
        year: initialData.year || "",
        role: initialData.role || "",
        description: initialData.description || "",
        imageSrc: initialData.imageSrc || "",
        cardBgColor: initialData.cardBgColor || "#959595",
        leftBgColor: initialData.leftBgColor || "#B890B8",
      };
    }
    return emptyForm;
  });

  const [errors, setErrors] = useState({}); 

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    
    if (errors[name]) {
      setErrors((prev) => {
        const clone = { ...prev };
        delete clone[name];
        return clone;
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = "Title is required";
    }

    if (!formData.year.trim()) {
      newErrors.year = "Year is required";
    }

    if (!formData.role.trim()) {
      newErrors.role = "Role is required";
    }

    if (!formData.description.trim()) {
      newErrors.description = "Description is required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return; // no guardes si hay errores
    }

    setErrors({});

    if (onSave) {
      onSave(formData);
    }

    onClose();
  };

  const titleText = mode === "edit" ? "Edit project" : "Create new project";

  return (
    <Modal isOpen={isOpen} onClose={onClose} width="520px">
      <div className="crud-modal">
        <h2 className="crud-modal__title">{titleText}</h2>

        <form className="crud-modal__form" onSubmit={handleSubmit}>
          <div className="crud-modal__row">
            <label className="crud-modal__label">
              Title
              <input
                type="text"
                name="title"
                className="crud-modal__input"
                value={formData.title}
                onChange={handleChange}
              />
              {errors.title && (
                <p className="crud-error">{errors.title}</p>
              )}
            </label>

            <label className="crud-modal__label">
              Year
              <input
                type="text"
                name="year"
                className="crud-modal__input"
                value={formData.year}
                onChange={handleChange}
                placeholder="2025"
              />
              {errors.year && (
                <p className="crud-error">{errors.year}</p>
              )}
            </label>
          </div>

          <label className="crud-modal__label">
            Role
            <input
              type="text"
              name="role"
              className="crud-modal__input"
              value={formData.role}
              onChange={handleChange}
              placeholder="UI/UX · Frontend Dev"
            />
            {errors.role && (
              <p className="crud-error">{errors.role}</p>
            )}
          </label>

          <label className="crud-modal__label">
            Description
            <textarea
              name="description"
              className="crud-modal__textarea"
              value={formData.description}
              onChange={handleChange}
              rows={4}
            />
            {errors.description && (
              <p className="crud-error">{errors.description}</p>
            )}
          </label>

          <label className="crud-modal__label">
            Image URL or path
            <input
              type="text"
              name="imageSrc"
              className="crud-modal__input"
              value={formData.imageSrc}
              onChange={handleChange}
              placeholder="/src/assets/..."
            />
            
          </label>

          <div className="crud-modal__row">
            <label className="crud-modal__label">
              Card background
              <input
                type="text"
                name="cardBgColor"
                className="crud-modal__input"
                value={formData.cardBgColor}
                onChange={handleChange}
                placeholder="#959595"
              />
            </label>

            <label className="crud-modal__label">
              Left panel background
              <input
                type="text"
                name="leftBgColor"
                className="crud-modal__input"
                value={formData.leftBgColor}
                onChange={handleChange}
                placeholder="#B890B8"
              />
            </label>
          </div>

          <div className="crud-modal__actions">
            <button
              type="button"
              className="crud-modal__btn crud-modal__btn--secondary"
              onClick={onClose}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="crud-modal__btn crud-modal__btn--primary"
            >
              {mode === "edit" ? "Save changes" : "Create project"}
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
}
