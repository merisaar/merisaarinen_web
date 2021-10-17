import React from 'react';
import ReactDOM from 'react-dom';
import { MainPage } from './Main/MainPage';
import { Footer } from 'rsuite';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import 'rsuite/styles/index.less';
import './Styling/common.less';
import { UnderWorkPage } from './General_components/UnderWorkPage';

ReactDOM.render(
    <>
        <Router>
            <Switch>
                <Route path="/about">{<UnderWorkPage />}</Route>
                <Route path="/users">{<UnderWorkPage />}</Route>
                <Route path="/projects">{<UnderWorkPage />}</Route>
                <Route path="/">{<MainPage />}</Route>
                <Redirect path="*" to="/" />
            </Switch>
        </Router>
        <Footer></Footer>
    </>,
    document.getElementById('root'),
);
