import axios from "axios";

export const fetchHeroes = async (page: number, limit: number) => {
    const apiUrl = `https://sw-api.starnavi.io/people/?page=${page}&limit=${limit}`;
    const response = await axios(apiUrl);
    return response
}