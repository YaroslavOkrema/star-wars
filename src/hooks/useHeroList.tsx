import {useEffect, useState} from "react";
import {Hero} from "../interfaces";
import {usePagination} from "./usePagination";
import {fetchHeroes} from "../services/requestByHeroes";
import {useNavigate} from "react-router-dom";

export function useHeroList() {
    const [heroes, setHeroes] = useState<Hero[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const ITEMS_PER_PAGE = 10;
    const {page, totalCount, totalPages, setTotal, nextPage, prevPage} = usePagination(1, ITEMS_PER_PAGE);
    const navigate = useNavigate();

    useEffect(() => {
        fetchData(page);
    }, []);

    const fetchData = async (page: number) => {
        setIsLoading(true);
        const response = await fetchHeroes(page, ITEMS_PER_PAGE);
        console.log(response.data.results);
        setHeroes(response.data.results);
        setTotal(response.data.count);
        setIsLoading(false);
    };

    const handleClick = (path: string) => {
        navigate(path);
    }

    return {
        heroes,
        isLoading,
        page,
        totalPages,
        nextPage,
        prevPage,
        handleClick
    }
}