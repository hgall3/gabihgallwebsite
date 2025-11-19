
import React from "react";
import "./Pagination.scss";

export default function Pagination({ currentPage, totalPages, onChangePage }) {
  if (totalPages <= 1) return null; 
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handlePrev = () => onChangePage(currentPage - 1);
  const handleNext = () => onChangePage(currentPage + 1);

  return (
    <div className="pagination">
      
      {currentPage > 1 && (
        <button
          className="pagination__arrow"
          onClick={handlePrev}
          aria-label="Previous page"
        >
          ‹
        </button>
      )}

     
      {pages.map((page) => (
        <button
          key={page}
          className={`pagination__page ${
            page === currentPage ? "is-active" : ""
          }`}
          onClick={() => onChangePage(page)}
        >
          {page}
        </button>
      ))}

      
      {currentPage < totalPages && (
        <button
          className="pagination__arrow"
          onClick={handleNext}
          aria-label="Next page"
        >
          ›
        </button>
      )}
    </div>
  );
}
