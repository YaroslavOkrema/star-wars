import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {fetchHeroId} from "../services/requestById";
import {Hero} from "../interfaces";

export function useHeroItem(){
    const {id} = useParams<{ id: string }>();
    const [hero, setHero] = useState<Hero>();

    useEffect(() => {
        const fetchHero = async () => {
            const response = await fetchHeroId(id!);
            setHero(response);
        };

        fetchHero();
    }, [id]);

    return {hero}
}