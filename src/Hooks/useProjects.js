import { useState, useEffect } from "react";

export function useProjects(apiUrl) {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  const [isCrudOpen, setIsCrudOpen] = useState(false);
  const [crudMode, setCrudMode] = useState("create");
  const [selectedCard, setSelectedCard] = useState(null);

  const [showDeleteWarning, setShowDeleteWarning] = useState(false);
  const [cardToDelete, setCardToDelete] = useState(null);

  const [showSuccess, setShowSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setCards(data);
      } catch (err) {
        console.error("Error fetching projects from MockAPI:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCards();
  }, [apiUrl]);

  const openCreateModal = () => {
    setCrudMode("create");
    setSelectedCard(null);
    setIsCrudOpen(true);
  };

  const openEditModal = (card) => {
    setCrudMode("edit");
    setSelectedCard(card);
    setIsCrudOpen(true);
  };

  const handleSave = async (data) => {
    try {
      if (crudMode === "edit" && selectedCard) {
        const res = await fetch(`${apiUrl}/${selectedCard.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
        const updated = await res.json();

        setCards((prev) =>
          prev.map((c) => (c.id === updated.id ? updated : c))
        );
        setSuccessMessage("Project updated successfully");
        setShowSuccess(true);
      } else {
        const res = await fetch(apiUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
        const created = await res.json();

        setCards((prev) => [...prev, created]);
        setSuccessMessage("Project created successfully");
        setShowSuccess(true);
      }
    } catch (err) {
      console.error("Error saving project:", err);
      setSuccessMessage("Error saving project");
      setShowSuccess(true);
    }
  };

  const askDeleteCard = (card) => {
    setCardToDelete(card);
    setShowDeleteWarning(true);
  };

  const confirmDeleteCard = async () => {
    if (!cardToDelete) return;
    try {
      await fetch(`${apiUrl}/${cardToDelete.id}`, { method: "DELETE" });
      setCards((prev) => prev.filter((c) => c.id !== cardToDelete.id));
      setSuccessMessage("Project deleted successfully");
      setShowSuccess(true);
    } catch (err) {
      console.error("Error deleting project:", err);
      setSuccessMessage("Error deleting project");
      setShowSuccess(true);
    } finally {
      setCardToDelete(null);
      setShowDeleteWarning(false);
    }
  };

  const cancelDelete = () => {
    setCardToDelete(null);
    setShowDeleteWarning(false);
  };

  return {
    cards,
    loading,
    isCrudOpen,
    crudMode,
    selectedCard,
    showDeleteWarning,
    cardToDelete,
    showSuccess,
    successMessage,
    setIsCrudOpen,
    setShowSuccess,
    openCreateModal,
    openEditModal,
    handleSave,
    askDeleteCard,
    confirmDeleteCard,
    cancelDelete,
  };
}
