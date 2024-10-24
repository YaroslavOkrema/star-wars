import {useEffect, useState} from "react";
import {Hero} from "../../interfaces";
import {usePagination} from "../Pagination/usePagination";
import {fetchHeroes} from "../../services/requestByHeroes";
import {useNavigate} from "react-router-dom";
import {useLoading} from "../Loading/useLoading";

export function useHeroList() {
    const [heroes, setHeroes] = useState<Hero[]>([]);
    const {isLoading, setIsLoading} = useLoading()
    const navigate = useNavigate();
    const {currentPage, totalPages, nextPage, prevPage} = usePagination();

    useEffect(() => {
        fetchData();
    }, [currentPage]);

    const fetchData = async (): Promise<void> => {
        setIsLoading(true);
        const response = await fetchHeroes(currentPage);
        setHeroes(response.results);
        setIsLoading(false);
    };

    const handleClick = (path: string): void => {
        navigate(path);
    }

    return {
        heroes,
        isLoading,
        handleClick,
        currentPage,
        totalPages,
        nextPage,
        prevPage
    }
}