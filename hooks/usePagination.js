import { useState } from 'react';

export const usePagination = ({ filteredHeros }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(15);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredHeros.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNum) => setCurrentPage(pageNum);

  return {
    itemsPerPage,
    currentItems,
    paginate,
  };
};
