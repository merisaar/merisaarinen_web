import React, { useState } from 'react';
import { UnderWorkPage } from '../GeneralComponents/UnderWorkPage';
import { NavigationBar } from '../GeneralComponents/NavigationBar';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Home } from './Home';
export const MainPage = (): any => {
    return (
        <div className="flex-container">
            <Switch>
                <Route exact path="/home">
                    {<Home />}
                </Route>
                <Route exact path="/about">
                    {<UnderWorkPage />}
                </Route>
                <Route exact path="/workhistory">
                    {<UnderWorkPage />}
                </Route>
                <Route exact path="/projects">
                    {<UnderWorkPage />}
                </Route>
                <Route exact path="/contact">
                    {<UnderWorkPage />}
                </Route>
                <Redirect path="*" to="/home" />
            </Switch>
            <NavigationBar />
        </div>
    );
};
