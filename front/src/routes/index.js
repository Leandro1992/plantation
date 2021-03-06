import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from '../views/Home/';
import Login from '../views/Login/';
import Plantas from '../views/Plantas/';
import Sensores from '../views/Sensores/';
import Garden from '../views/Garden/';

export default () => (
    <Router>
        <div>
            <Route exact path="/" component={Login} />
            <Route path="/home" component={Home} />
            <Route path="/plantas" component={Plantas} />
            <Route path="/sensores" component={Sensores} />
            <Route path="/hortas" component={Garden} />
        </div>
    </Router>
);