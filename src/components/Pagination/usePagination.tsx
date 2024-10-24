import {useState} from "react";

export function usePagination() {
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages] = useState(9);

    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return {
        currentPage,
        totalPages,
        nextPage,
        prevPage
    }
}