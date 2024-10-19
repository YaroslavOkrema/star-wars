import {useParams} from "react-router-dom";
import {useHeroList} from "./useHeroList";

export function useHeroItem() {
    const { id } = useParams<{ id: string }>();
    const { heroes } = useHeroList();
    const hero = heroes.find(h => h.id === Number(id));

    return {hero}
}