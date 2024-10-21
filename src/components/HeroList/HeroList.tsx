import React from 'react';
import './HeroList.css';
import Pagination from "../Pagination/Pagination";
import Loading from "../Loading/Loading";
import {useHeroList} from "../../hooks/useHeroList";

const HeroList: React.FC = () => {
   const {heroes, isLoading, handleClick, currentPage, totalPages, prevPage, nextPage} = useHeroList();

    return (
        <div>
            <h2>Star Wars Heroes</h2>
            {isLoading ? (
                <Loading />
            ) : (
                <div>
                    <div className="heroes">
                        {heroes.map((hero) => (
                            <div key={hero.url} className="hero">
                                <div className="hero-content">
                                    <strong>{hero.name}</strong>
                                </div>
                                <img
                                    src={`https://starwars-visualguide.com/assets/img/characters/${hero.id}.jpg`}
                                    alt={hero.name}
                                    className="hero-image"
                                />
                                <button onClick={() => handleClick(`/hero/${hero.id}`)}>
                                    Check
                                </button>
                            </div>
                        ))}
                    </div>
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        nextPage={nextPage}
                        prevPage={prevPage}
                    />
                </div>
            )}
        </div>
    );
};

export default HeroList;