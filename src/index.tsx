import React from 'react';
import ReactDOM from 'react-dom';
import { MainPage } from './Main/MainPage';
import { Footer } from 'rsuite';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'rsuite/styles/index.less';
import './Styling/common.less';
import { UnderWorkPage } from './General_components/UnderWorkPage';

ReactDOM.render(
    <Grommet plain>
        <Router>
            <Switch>
                <Route exact path="/about">
                    {<UnderWorkPage />}
                </Route>
                <Route path="/users">{<UnderWorkPage />}</Route>
                <Route path="/projects">{<UnderWorkPage />}</Route>
                <Route path="/">{<MainPage />}</Route>
            </Switch>
        </Router>
        <Footer></Footer>
    </Grommet>,
    document.getElementById('root'),
);
