import {HashRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Details from "Views/Details";
import Me from "Views/Me";
import Statistics from "Views/Statistics";
import NotMatch from "Views/NotMatch";
import TypeManage from "Views/TypeManage/TypeManage";
import DetailsChild from "Views/DetailsChild/DetailsChild";

function App() {
    return (
            <Router>
                <Switch>
                    <Route path={'/details'}>
                        <Details/>
                    </Route>
                    <Route path="/statistics">
                        <Statistics/>
                    </Route>
                    <Route path="/me">
                        <Me/>
                    </Route>
                    <Route path={"/typemanage"}>
                        <TypeManage/>
                    </Route>
                    <Route path={"/detailschild"}>
                        <DetailsChild/>
                    </Route>
                    <Redirect exact from="/" to="/details"/>
                    <Route path="*">
                        <NotMatch/>
                    </Route>
                </Switch>
            </Router>
    );
}

export default App;
