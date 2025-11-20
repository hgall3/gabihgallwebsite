import React, { useState, useEffect } from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import Pagination from "../Pagination/Pagination";
import CRUDButtons from "../Buttons/CRUDButtons/CRUDButtons";
import ProjectCRUDModal from "../CRUD/ProjectCRUDModal";
import WarningModal from "../Modal/WarningModal";
import SuccessModal from "../Modal/SuccessModal";
import { useAdmin } from "../../context/AdminContext";
import "./ProjectCardStack.scss";

const API_URL =
  "https://691f2da2bb52a1db22c0c757.mockapi.io/api-projects/projects";

export default function ProjectCardStack() {
  const { isAdmin } = useAdmin();

  
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
        const res = await fetch(API_URL);
        const data = await res.json();
        setCards(data);
      } catch (err) {
        console.error("Error fetching projects from MockAPI:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCards();
  }, []);

  
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
       
        const res = await fetch(`${API_URL}/${selectedCard.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        const updated = await res.json();

        setCards((prev) =>
          prev.map((c) => (c.id === updated.id ? updated : c))
        );

        setSuccessMessage("Project updated successfully");
        setShowSuccess(true);
      } else {
        
        const res = await fetch(API_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
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
      
      await fetch(`${API_URL}/${cardToDelete.id}`, {
        method: "DELETE",
      });

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

  
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 4;
  const totalPages = Math.ceil(cards.length / cardsPerPage) || 1;
  const startIndex = (currentPage - 1) * cardsPerPage;
  const currentCards = cards.slice(startIndex, startIndex + cardsPerPage);
  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };
  useEffect(() => {
  const newTotalPages = Math.ceil(cards.length / cardsPerPage) || 1;

  if (currentPage > newTotalPages) {
    setCurrentPage(newTotalPages);
  }
}, [cards.length, cardsPerPage, currentPage]);
  
  if (loading) {
    return (
      <div className="project-card-stack-wrapper">
        <p>Loading projects…</p>
      </div>
    );
  }

  return (
    <div className="project-card-stack-wrapper">
      {isAdmin && (
        <div className="project-card-stack__toolbar">
          <button
            className="project-card-stack__create-btn"
            onClick={openCreateModal}
          >
            + Create project
          </button>
        </div>
      )}

      <div className="project-card-stack">
        {currentCards.map((card) => (
          <ProjectCard
            key={card.id}
            {...card}
            isAdmin={isAdmin}
            crudComponent={() => (
              <CRUDButtons
                onEdit={() => openEditModal(card)}
                onCreate={openCreateModal}
                onDelete={() => askDeleteCard(card)}
              />
            )}
          />
        ))}

        {cards.length === 0 && (
          <p className="no-projects">
            No projects yet. Use admin mode to create your first one.
          </p>
        )}
      </div>

      {cards.length > 0 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onChangePage={handlePageChange}
        />
      )}

      <ProjectCRUDModal
        key={crudMode === "edit" ? selectedCard?.id ?? "new" : "new"}
        isOpen={isCrudOpen}
        onClose={() => setIsCrudOpen(false)}
        mode={crudMode}
        initialData={selectedCard}
        onSave={handleSave}
      />

      <WarningModal
        isOpen={showDeleteWarning}
        title="Delete project?"
        message={
          cardToDelete
            ? `Are you sure you want to delete "${cardToDelete.title}"? This action cannot be undone.`
            : "Are you sure you want to delete this project?"
        }
        onCancel={cancelDelete}
        onConfirm={confirmDeleteCard}
      />

      <SuccessModal
        isOpen={showSuccess}
        message={successMessage}
        onClose={() => setShowSuccess(false)}
      />
    </div>
  );
}
