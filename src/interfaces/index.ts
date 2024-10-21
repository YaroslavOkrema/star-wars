export interface HeroResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: Hero[];
}

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
    currentPage: number;
    totalPages: number;
    prevPage: () => void;
    nextPage: () => void;
}
