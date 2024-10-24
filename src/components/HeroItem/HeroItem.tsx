import React from 'react';
import './HeroItem.css';
import { useHeroItem } from "./useHeroItem";
import HeroGraph from "../HeroGraph/HeroGraph";
import Loading from "../Loading/Loading";

const HeroItem: React.FC = () => {
    const { hero, films , starships, isLoading, handleBackClick} = useHeroItem();

    return (
        <div className="item-section">
            <div className="header">
                <button onClick={handleBackClick} className="back-btn">Back</button>
                <h1 className="title">Star Wars Heroes</h1>
            </div>
            {hero && (
                <div className="item-container">
                    <div className="img">
                        <img
                            src={`https://starwars-visualguide.com/assets/img/characters/${hero.id}.jpg`}
                            alt={hero.name}
                            className="item-photo"
                        />
                    </div>
                    <div className="item-info">
                        <strong className="item-name">{hero.name}</strong>
                        <p>Birth Year: {hero.birth_year}</p>
                        <p>Height: {hero.height}</p>
                        <p>Mass: {hero.mass}</p>
                        <p>Gender: {hero.gender}</p>
                        <p>Hair: {hero.hair_color}</p>
                        <p>Skin Color: {hero.skin_color}</p>
                    </div>
                </div>
            )}
            <div className="films-info">
                <div className="films-container">
                    <h3>Movies:</h3>
                    {isLoading ? (
                        <div className="loading">
                            <Loading />
                        </div>
                    ) : (
                        <div className="films-list">
                            {films.map((film) => (
                                <div className="film-item" key={film.id}>
                                    <img
                                        src={`https://starwars-visualguide.com/assets/img/films/${film.id}.jpg`}
                                        alt={film.title}
                                        className="film-photo"
                                    />
                                    <span className="film-title">{film.title}</span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <div className="starships-info">
                <div className="starships-container">
                    <h3>Starships:</h3>
                    {isLoading ? (
                        <Loading />
                    ): (
                        <div className="starship-list">
                            {starships.length > 0 ? (
                                starships.map((starship) => (
                                    <div className="starship-item" key={starship.id}>
                                        <img
                                            src={`https://starwars-visualguide.com/assets/img/starships/${starship.id}.jpg`}
                                            alt={starship.name}
                                            className="starship-photo"
                                        />
                                        <span className="starship-name">{starship.name}</span>
                                    </div>
                            ))
                            ) : (
                                <p className="starship-text">No starships available</p>
                            )}
                        </div>
                    )}
                </div>
            </div>
            <h1 className="graph-title">Graph</h1>
            {hero && (
                <HeroGraph
                    heroId={hero.id}
                    heroName={hero.name}
                    films={films}
                    starships={starships}
                />
            )}
        </div>
    );
};

export default HeroItem;
