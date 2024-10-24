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
    films: number[];
    starships: number[];
}

export interface PaginationProps {
    currentPage: number;
    totalPages: number;
    prevPage: () => void;
    nextPage: () => void;
}

export interface Film {
    id: number;
    title: string;
}

export interface Starship {
    id: number;
    name: string;
}

export interface HeroGraphProps {
    heroId: number;
    heroName: string;
    films: { id: number, title: string }[];
    starships: { id: number, name: string }[];
}
