// "use client";

// import { useState, useMemo } from "react";

// export interface PaginationOptions {
//   initialPage?: number;
//   initialPageSize?: number;
//   totalItems: number;
//   pageSizeOptions?: number[];
// }

// export const usePagination = ({
//   initialPage = 1,
//   initialPageSize = 10,
//   totalItems,
//   pageSizeOptions = [5, 10, 20, 50],
// }: PaginationOptions) => {
//   const [currentPage, setCurrentPage] = useState(initialPage);
//   const [pageSize, setPageSize] = useState(initialPageSize);

//   const totalPages = useMemo(() => {
//     return Math.ceil(totalItems / pageSize);
//   }, [totalItems, pageSize]);

//   const startIndex = useMemo(() => {
//     return (currentPage - 1) * pageSize;
//   }, [currentPage, pageSize]);

//   const endIndex = useMemo(() => {
//     return Math.min(startIndex + pageSize, totalItems);
//   }, [startIndex, pageSize, totalItems]);

//   const goToPage = (page: number) => {
//     const validPage = Math.max(1, Math.min(page, totalPages));
//     setCurrentPage(validPage);
//   };

//   const nextPage = () => {
//     if (currentPage < totalPages) {
//       setCurrentPage((prev) => prev + 1);
//     }
//   };

//   const prevPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage((prev) => prev - 1);
//     }
//   };

//   const changePageSize = (newSize: number) => {
//     setPageSize(newSize);
//     setCurrentPage(1);
//   };

//   const getPageNumbers = () => {
//     const delta = 2;
//     const range = [];
//     const rangeWithDots = [];
//     let l;

//     for (let i = 1; i <= totalPages; i++) {
//       if (
//         i === 1 ||
//         i === totalPages ||
//         (i >= currentPage - delta && i <= currentPage + delta)
//       ) {
//         range.push(i);
//       }
//     }

//     for (let i of range) {
//       if (l) {
//         if (i - l === 2) {
//           rangeWithDots.push(l + 1);
//         } else if (i - l !== 1) {
//           rangeWithDots.push("...");
//         }
//       }
//       rangeWithDots.push(i);
//       l = i;
//     }

//     return rangeWithDots;
//   };

//   return {
//     currentPage,
//     pageSize,
//     totalPages,
//     totalItems,
//     startIndex,
//     endIndex,
//     goToPage,
//     nextPage,
//     prevPage,
//     changePageSize,
//     getPageNumbers,
//     pageSizeOptions,
//   };
// };