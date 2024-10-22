import axios from "axios";
import {Film} from "../../hooks/useHeroItem";

export const fetchFilmById = async (filmId: number):Promise<Film> => {
    const apiUrl = `https://sw-api.starnavi.io/films/${filmId}/`;
    const response = await axios.get<Film>(apiUrl);
    return response.data;
}