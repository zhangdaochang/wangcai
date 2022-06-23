import React from 'react';
import {HashRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Money from "./Views/Money";
import Statistics from "./Views/Statistics";
import Tags from "./Views/Tags";
import NotMatch from "./Views/NotMatch";


function App() {
    return (
        <Router>
            <Switch>
                <Route path="/tags">
                    <Tags/>
                </Route>
                <Route path="/money">
                    <Money/>
                </Route>
                <Route path="/statistics">
                    <Statistics/>
                </Route>
                <Redirect exact from="/" to="/money"/>
                <Route path="*">
                    <NotMatch/>
                </Route>
            </Switch>
        </Router>
    );
}


export default App;
