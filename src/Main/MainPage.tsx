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
                    <Route exact path="/home">
                        {<Home />}
                    </Route>
                    <Route exact path="/about">
                        {<UnderWorkPage />}
                    </Route>
                    <Route exact path="/users">
                        {<UnderWorkPage />}
                    </Route>
                    <Route exact path="/projects">
                        {<UnderWorkPage />}
                    </Route>
                    <Redirect path="*" to="/home" />
                </Switch>
            </div>
            <div className="main-right-container">
                <NavigationBar />
                <img className="half-image" src="../Resources/startpage-image.jpg" alt="" />
            </div>
        </div>
    );
};
