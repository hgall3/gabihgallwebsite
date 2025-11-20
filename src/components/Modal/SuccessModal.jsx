import React, { useEffect } from "react";
import Modal from "./Modal";
import "./SuccessModal.scss";

export default function SuccessModal({
  isOpen,
  message = "Deleted successfully",
  duration = 1500,
  onClose,
}) {
  useEffect(() => {
    if (!isOpen) return;

    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [isOpen, duration, onClose]);

  return (
    <Modal isOpen={isOpen} onClose={onClose} width="300px">
      <div className="success-modal">
        <p className="success-message">{message}</p>
      </div>
    </Modal>
  );
}
