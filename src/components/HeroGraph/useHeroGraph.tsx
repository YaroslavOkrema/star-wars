import { useMemo } from 'react';
import { Node, Edge, Position } from 'react-flow-renderer';

export function useHeroGraph(
    heroId: number,
    heroName: string,
    films: Array<{ id: number; title: string }>,
    starships: Array<{ id: number; name: string }>
) {
    const nodes: Node[] = useMemo(() => {
        const nodesArray: Node[] = [];

        // Hero node
        nodesArray.push({
            id: `hero-${heroId}`,
            data: {
                label: (
                    <div className="hero-node">
                        <img
                            src={`https://starwars-visualguide.com/assets/img/characters/${heroId}.jpg`}
                            alt={heroName}
                            className="hero-image"
                        />
                        <div>{heroName}</div>
                    </div>
                ),
            },
            position: { x: 100, y: 50 },
            sourcePosition: Position.Right,
            draggable: true,
        });

        // Film nodes
        films.forEach((film, index) => {
            nodesArray.push({
                id: `film-${film.id}`,
                data: { label: <div className="film-node">{film.title}</div> },
                position: { x: 300, y: 50 + index * 150 },
                sourcePosition: Position.Right,
                targetPosition: Position.Left,
                draggable: true,
            });
        });

        // Starship nodes
        starships.forEach((starship, index) => {
            nodesArray.push({
                id: `starship-${starship.id}`,
                data: { label: <div className="starship-node">{starship.name}</div> },
                position: { x: 500, y: 50 + index * 150 },
                targetPosition: Position.Left,
                draggable: true,
            });
        });

        return nodesArray;
    }, [heroId, heroName, films, starships]);

    const edges: Edge[] = useMemo(() => {
        const edgesArray: Edge[] = [];

        // Edges between hero and films
        films.forEach(film => {
            edgesArray.push({
                id: `edge-hero-film-${film.id}`,
                source: `hero-${heroId}`,
                target: `film-${film.id}`,
                type: 'smoothstep',
            });
        });

        // Edges between films and starships
        starships.forEach((starship, index) => {
            const filmIndex = index % films.length;
            edgesArray.push({
                id: `edge-film-starship-${starship.id}`,
                source: `film-${films[filmIndex].id}`,
                target: `starship-${starship.id}`,
                type: 'smoothstep',
            });
        });

        return edgesArray;
    }, [heroId, films, starships]);

    return { nodes, edges };
}
