import {useState} from "react";

export function usePagination(initialPage: number = 1, itemPerPage: number = 10) {
    const [page, setPage] = useState(initialPage);
    const [totalCount, setTotalCount] = useState(0);

    const totalPages = Math.ceil(totalCount / itemPerPage);

    const prevPage = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };

    const nextPage = () => {
        if (page < totalPages) {
            setPage(page + 1);
        }
    };

    const setTotal = (count: number) => {
        setTotalCount(count);

        if (page > totalPages) {
            setPage(totalPages);
        }
    };

    return {
        page,
        totalCount,
        totalPages,
        setTotal,
        nextPage,
        prevPage
    };
}