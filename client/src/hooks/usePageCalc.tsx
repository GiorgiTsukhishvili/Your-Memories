import { useState } from "react";

const searchPerPage: number = 6;

const usePageCalc = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const indexOfLastSearch = currentPage * searchPerPage;
  const indexOfFirstSearch = indexOfLastSearch - searchPerPage;

  return {
    currentPage,
    setCurrentPage,
    indexOfFirstSearch,
    indexOfLastSearch,
    searchPerPage,
  };
};

export default usePageCalc;
