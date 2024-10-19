import React, {useEffect, useState} from 'react';
import './HeroList.css';
import {fetchHeroes} from "../../services/requestByHeroes";
import {Hero} from "../../interfaces";
import Pagination from "../Pagination/Pagination";
import {usePagination} from "../../hooks/usePagination";
import Loading from "../Loading/Loading";
import {useHeroList} from "../../hooks/useHeroList";
import {useNavigate} from "react-router-dom";
import path from "node:path";

const HeroList: React.FC = () => {
   const {heroes, isLoading, page, totalPages, nextPage, prevPage, handleClick} = useHeroList();

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