import axios from "axios";
import {Hero} from "../../interfaces";

export const fetchHeroId = async (id: string): Promise<Hero> => {
    const apiUrl = `https://sw-api.starnavi.io/people/${id}`;
    const response = await axios.get<Hero>(apiUrl);
    return response.data;
}