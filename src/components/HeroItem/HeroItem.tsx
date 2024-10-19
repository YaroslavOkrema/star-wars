import React from 'react';
import './HeroItem.css';
import {useHeroItem} from "../../hooks/useHeroItem";


const HeroItem: React.FC = () => {
    const {hero} = useHeroItem();

    return (
       <div>
           {hero && (
               <div className="hero-container">
                   <div className="img">
                       <img
                           src={`https://starwars-visualguide.com/assets/img/characters/${hero.id}.jpg`}
                           alt={hero.name}
                           className="hero-image"
                       />
                   </div>
                   <div className="hero-info">
                       <strong>{hero.name}</strong>
                       <p>Birth Year: {hero.birth_year}</p>
                       <p>Height: {hero.height}</p>
                       <p>Mass: {hero.mass}</p>
                       <p>Gender: {hero.gender}</p>
                       <p>Hair: {hero.hair_color}</p>
                       <p>Skin Color: {hero.skin_color}</p>
                   </div>
               </div>
           )}
       </div>
    );
};

export default HeroItem;