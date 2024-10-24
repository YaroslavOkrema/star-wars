import React from 'react';
import './App.css';
import RoutesComponent from "./routes/RoutesComponent";
import {BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
      <Router>
          <div className="App">
              <RoutesComponent />
          </div>
      </Router>
  );
}

export default App;
