import axios from "axios";
import {HeroResponse} from "../../interfaces";

export const fetchHeroes = async (page: number): Promise<HeroResponse> => {
    const apiUrl = `https://sw-api.starnavi.io/people?page=${page}`;
    const response = await axios.get<HeroResponse>(apiUrl);
    return response.data;
};