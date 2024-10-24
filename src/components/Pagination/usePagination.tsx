import {useState} from "react";

export function usePagination() {
    const storagePage = Number(localStorage.getItem('currentPage'));
    const [currentPage, setCurrentPage] = useState(storagePage || 1);
    const [totalPages] = useState(9);

    const nextPage = () => {
        const newCurrentPage = currentPage + 1;

        if (currentPage < totalPages) {
            setCurrentPage(newCurrentPage);
        }

        localStorage.setItem('currentPage', newCurrentPage.toString());
    };

    const prevPage = () => {
        const newCurrentPage = currentPage - 1;

        if (currentPage > 1) {
            setCurrentPage(newCurrentPage);
        }

        localStorage.setItem('currentPage', newCurrentPage.toString());
    };

    return {
        currentPage,
        totalPages,
        nextPage,
        prevPage
    }
}