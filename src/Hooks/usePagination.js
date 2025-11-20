
import { useState } from "react";

export function usePagination(items = [], itemsPerPage = 4) {
 
  const [rawPage, setRawPage] = useState(1);

  const safeItems = Array.isArray(items) ? items : [];

  const totalPages =
    safeItems.length > 0 ? Math.ceil(safeItems.length / itemsPerPage) : 1;

  
  const currentPage =
    rawPage > totalPages ? totalPages : rawPage < 1 ? 1 : rawPage;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = safeItems.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page) => {
    setRawPage((prev) => {
      const next = typeof page === "number" ? page : prev;
      if (next < 1) return 1;
      if (next > totalPages) return totalPages;
      return next;
    });
  };

  return {
    currentPage,
    totalPages,
    currentItems,
    handlePageChange,
  };
}
