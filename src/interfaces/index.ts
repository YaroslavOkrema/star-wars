export interface Hero {
    name: string;
    url: string;
}

export interface PaginationProps {
    page: number;
    totalPages: number;
    prevPage: () => void;
    nextPage: () => void;
}