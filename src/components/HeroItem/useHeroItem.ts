import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {fetchHeroId} from "../../services/requestById";
import {Film, Hero, Starship} from "../../interfaces";
import {fetchFilmById} from "../../services/requestFilmById";
import {fetchStarshipById} from "../../services/requestStarshipById";
import {useLoading} from "../Loading/useLoading";

export function useHeroItem(){
    const {id} = useParams<{ id: string }>();
    const [hero, setHero] = useState<Hero>();
    const [films, setFilms] = useState<Film[]>([]);
    const [starships, setStarships] = useState<Starship[]>([]);
    const {isLoading, setIsLoading} = useLoading();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchHero = async ():Promise<void> => {
            setIsLoading(true);
            const response = await fetchHeroId(id!);
            setHero(response);

            const filmData: Film[] = [];
            const starshipData: Starship[] = [];

            for (const filmId of response.films) {
                const film = await fetchFilmById(filmId);
                filmData.push(film);
            }
            setFilms(filmData);

            for (const starshipId of response.starships) {
                const starship = await fetchStarshipById(starshipId);
                starshipData.push(starship);
            }
            setStarships(starshipData);
            setIsLoading(false);
        };

        fetchHero();
    }, [id]);

    const handleBackClick = ():void => {
        navigate('/star-wars');
    }

    return {
        hero,
        films,
        starships,
        isLoading,
        handleBackClick
    }
}