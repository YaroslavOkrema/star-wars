import {useEffect, useState} from "react";
import {Hero} from "../interfaces";
import {usePagination} from "./usePagination";
import {fetchHeroes} from "../services/requestByHeroes";
import {useNavigate} from "react-router-dom";

export function useHeroList() {
    const [heroes, setHeroes] = useState<Hero[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const {currentPage, totalPages, nextPage, prevPage} = usePagination();

    useEffect(() => {
        fetchData();
    }, [currentPage]);

    const fetchData = async () => {
        setIsLoading(true);
        const response = await fetchHeroes(currentPage);
        console.log(response.data.results);
        setHeroes(response.data.results);
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