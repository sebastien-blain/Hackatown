import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./HomePage";
import LikePage from './LikePage'


export default function RouterPage() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path='/' exact>
                        <HomePage />
                    </Route>
                    <Route path='/like' exact>
                        <LikePage />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}
