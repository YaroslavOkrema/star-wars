export interface Hero {
    name: string;
    url: string;
    id: number;
    birth_year: string;
    height: string;
    mass: string;
    gender: string;
    hair_color: string;
    skin_color: string;
}

export interface PaginationProps {
    page: number;
    totalPages: number;
    prevPage: () => void;
    nextPage: () => void;
}