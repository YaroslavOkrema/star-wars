import axios from "axios";
import {Starship} from "../../interfaces";

export const fetchStarshipById = async (starshipId: number):Promise<Starship> => {
    const apiUrl = `https://sw-api.starnavi.io/starships/${starshipId}/`;
    const response = await axios.get<Starship>(apiUrl);
    return response.data;
}