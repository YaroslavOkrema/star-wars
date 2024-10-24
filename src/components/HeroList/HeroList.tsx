import React from 'react';
import './HeroList.css';
import Pagination from "../Pagination/Pagination";
import Loading from "../Loading/Loading";
import {useHeroList} from "./useHeroList";
import {Hero} from "../../interfaces";

const HeroList: React.FC = () => {
   const {heroes, isLoading, handleClick, currentPage, totalPages, prevPage, nextPage} = useHeroList();

    return (
        <div className="hero-section">
            <h1 className="title">Star Wars Heroes</h1>
            {isLoading ? (
                <Loading />
            ) : (
                <div>
                    <div className="heroes">
                        {heroes.map((hero: Hero) => (
                            <div key={hero.url} className="hero">
                                <div className="hero-content">
                                    <div className="hero-name">{hero.name}</div>
                                </div>
                                <img
                                    src={`https://starwars-visualguide.com/assets/img/characters/${hero.id}.jpg`}
                                    alt={hero.name}
                                    className="hero-image"
                                />
                                <button className="hero-btn" onClick={() => handleClick(`/hero/${hero.id}`)}>
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