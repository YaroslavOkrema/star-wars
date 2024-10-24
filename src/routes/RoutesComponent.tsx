import React from 'react';
import {Route, Routes} from "react-router-dom";
import HeroItem from "../components/HeroItem/HeroItem";
import HeroList from "../components/HeroList/HeroList";

const RoutesComponent: React.FC = () => {
    return (
        <div>
            <Routes>
                <Route path='/star-wars' element={<HeroList />} />
                <Route path='/hero/:id' element={<HeroItem />} />
            </Routes>
        </div>
    );
};

export default RoutesComponent;