import { useState, useEffect } from "react";

export function usePagination(items, itemsPerPage = 4) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(items.length / itemsPerPage) || 1;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = items.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  // Ajustar si la página actual se queda fuera de rango al borrar
  useEffect(() => {
    const newTotalPages = Math.ceil(items.length / itemsPerPage) || 1;
    if (currentPage > newTotalPages) {
      setCurrentPage(newTotalPages);
    }
  }, [items.length, itemsPerPage, currentPage]);

  return {
    currentPage,
    totalPages,
    currentItems,
    handlePageChange,
  };
}
