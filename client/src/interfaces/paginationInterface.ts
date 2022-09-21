export interface PaginationProps {
  currentPage: number;
  setCurrentPage(type: number): void;
  length: number;
  perPage: number;
}
