import axios from "axios";

export const fetchHeroes = async (page: number) => {
    const apiUrl = `https://sw-api.starnavi.io/people?page=${page}`;
    const response = await axios(apiUrl);
    return response;
}