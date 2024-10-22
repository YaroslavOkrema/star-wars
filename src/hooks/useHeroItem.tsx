import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {fetchHeroId} from "../services/requestById";
import {Hero} from "../interfaces";
import {fetchFilmById} from "../services/requestFilmById";

export interface Film {
    id: number;
    title: string;
}

export function useHeroItem(){
    const {id} = useParams<{ id: string }>();
    const [hero, setHero] = useState<Hero>();
    const [films, setFilms] = useState<Film[]>([]);

    useEffect(() => {
        const fetchHero = async () => {
            const response = await fetchHeroId(id!);
            setHero(response);

            const filmData: Film[] = [];

            for (const filmId of response.films) {
                const film = await fetchFilmById(filmId);
                filmData.push(film);
            }
            setFilms(filmData);
        };

        fetchHero();
    }, [id]);

    return {hero, films}
}