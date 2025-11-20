import React, { useState, useEffect } from "react";
import Modal from "../Modal/Modal";
import "./ProjectCRUDModal.scss";

export default function ProjectCRUDModal({
  isOpen,
  onClose,
  mode = "create",      // "create" | "edit"
  initialData = {},     // datos de la card cuando editas
  onSave,               // callback para guardar
}) {
  // Valores por defecto del formulario
  const emptyForm = {
    title: "",
    year: "",
    role: "",
    description: "",
    imageSrc: "",
    cardBgColor: "#959595",
    leftBgColor: "#B890B8",
  };

  const [formData, setFormData] = useState(emptyForm);

  // Cuando se abre el modal o cambia initialData, rellenamos el formulario
  useEffect(() => {
    if (mode === "edit" && initialData) {
      setFormData({
        title: initialData.title || "",
        year: initialData.year || "",
        role: initialData.role || "",
        description: initialData.description || "",
        imageSrc: initialData.imageSrc || "",
        cardBgColor: initialData.cardBgColor || "#959595",
        leftBgColor: initialData.leftBgColor || "#B890B8",
      });
    } else if (mode === "create") {
      setFormData(emptyForm);
    }
  }, [mode, initialData, isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // onSave decide qué hacer con los datos en el padre (create o edit)
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
                required
              />
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
