import React from 'react';
import './HeroGraph.css';
import {HeroGraphProps} from "../../interfaces";
import {useHeroGraph} from "./useHeroGraph";
import ReactFlow from "react-flow-renderer";

const HeroGraph: React.FC<HeroGraphProps> = ({ heroId, heroName, films, starships }) => {
    const { nodes, edges } = useHeroGraph(heroId, heroName, films, starships);

    return (
        <div className="graph-container">
            <ReactFlow
                nodes={nodes}
                edges={edges}
                nodesConnectable={false}
                nodesDraggable={true}
            />
        </div>
    );
};

export default HeroGraph;
