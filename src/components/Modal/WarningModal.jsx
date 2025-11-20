import React from "react";
import Modal from "./Modal";
import "./WarningModal.scss";

export default function WarningModal({
  isOpen,
  title = "Are you sure?",
  message = "This action cannot be undone.",
  onCancel,
  onConfirm,
}) {
  return (
    <Modal isOpen={isOpen} onClose={onCancel} width="380px">
      <div className="warning-modal">
        <h2 className="warning-modal__title">{title}</h2>
        <p className="warning-modal__message">{message}</p>

        <div className="warning-modal__actions">
          <button
            type="button"
            className="warning-modal__btn warning-modal__btn--secondary"
            onClick={onCancel}
          >
            Cancel
          </button>

          <button
            type="button"
            className="warning-modal__btn warning-modal__btn--primary"
            onClick={onConfirm}
          >
            Yes, delete
          </button>
        </div>
      </div>
    </Modal>
  );
}
