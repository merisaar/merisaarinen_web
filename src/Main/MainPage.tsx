import React from 'react';
import { UnderWorkPage } from '../GeneralComponents/UnderWorkPage';
import { NavigationBar } from '../GeneralComponents/NavigationBar';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Home } from './Home';
export const MainPage = (): any => {
    return (
        <div className="flex-container">
            <div className="main-left-container startpage-column-container">
                <Switch>
                    <Route exact path="/">
                        {<Home />}
                    </Route>
                    <Route path="/about">{<UnderWorkPage />}</Route>
                    <Route path="/users">{<UnderWorkPage />}</Route>
                    <Route path="/projects">{<UnderWorkPage />}</Route>
                    <Redirect path="*" to="/" />
                </Switch>
            </div>
            <div className="main-right-container">
                <NavigationBar />
                <img className="half-image" src="../Resources/startpage-image.jpg" alt="" />
            </div>
        </div>
    );
};
