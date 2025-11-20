import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import Pagination from "../Pagination/Pagination";
import CRUDButtons from "../Buttons/CRUDButtons/CRUDButtons";
import ProjectCRUDModal from "../CRUD/ProjectCRUDModal";
import WarningModal from "../Modal/WarningModal";
import SuccessModal from "../Modal/SuccessModal";
import { useAdmin } from "../../context/AdminContext";
import { useProjects } from "../../Hooks/useProjects";
import { usePagination } from "../../Hooks/usePagination";
import "./ProjectCardStack.scss";

const API_URL =
  "https://691f2da2bb52a1db22c0c757.mockapi.io/api-projects/projects";

export default function ProjectCardStack() {
  const { isAdmin } = useAdmin();

  
  const {
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
  } = useProjects(API_URL);

  
  const {
    currentPage,
    totalPages,
    currentItems: currentCards,
    handlePageChange,
  } = usePagination(cards, 4);

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

