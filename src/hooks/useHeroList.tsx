import {useEffect, useState} from "react";
import {Hero} from "../interfaces";
import {usePagination} from "./usePagination";
import {fetchHeroes} from "../services/requestByHeroes";
import {useNavigate} from "react-router-dom";
import {useLoading} from "./useLoading";

export function useHeroList() {
    const [heroes, setHeroes] = useState<Hero[]>([]);
    const {isLoading, setIsLoading} = useLoading()
    const navigate = useNavigate();
    const {currentPage, totalPages, nextPage, prevPage} = usePagination();

    useEffect(() => {
        fetchData();
    }, [currentPage]);

    const fetchData = async () => {
        setIsLoading(true);
        const response = await fetchHeroes(currentPage);
        console.log(response.results);
        setHeroes(response.results);
        setIsLoading(false);
    };

    const handleClick = (path: string) => {
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