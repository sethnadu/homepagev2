import React from 'react';

import Nav from "./Components/Nav.js";
import Professional from "./Components/Professional.js";
import Personal from "./Components/Personal.js";
import {Route, Switch} from "react-router-dom";

import './App.scss';






 
function App() {
 
  return (
    <div className="App">
    <Nav />
      <Switch >
        <Route path ="/professional" component ={Professional} />
        <Route path ="/personal" component ={Personal} />
    </Switch>
    </div>
  );
}

export default App;
