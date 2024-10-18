import React, {useEffect, useState} from 'react';
import './HeroList.css';
import {fetchHeroes} from "../../services/requestByHeroes";
import {Hero} from "../../interfaces";
import Pagination from "../Pagination/Pagination";
import {usePagination} from "../../hooks/usePagination";

const HeroList: React.FC = () => {
    const [heroes, setHeroes] = useState<Hero[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const ITEMS_PER_PAGE = 10;
    const {page, totalCount, totalPages, setTotal, nextPage, prevPage} = usePagination(1, ITEMS_PER_PAGE);

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

    return (
        <div>
            <h2>Star Wars Heroes</h2>

            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <div>
                    <div className="heroes">
                        {heroes.map((hero) => (
                            <div key={hero.url} className="hero">
                                <div className="hero-content">
                                    <strong>{hero.name}</strong>
                                </div>
                                <div className="hero-btn">
                                    <button>Check</button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <Pagination
                        page={page}
                        totalPages={totalPages}
                        prevPage={prevPage}
                        nextPage={nextPage}
                    />
                </div>
            )}
        </div>
    );
};

export default HeroList;