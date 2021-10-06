import React from 'react';
import ReactDOM from 'react-dom';
import { StartPage } from './Main/StartPage';
import { Container, Header, Footer, Navbar, Nav, Dropdown } from 'rsuite';
import { Admin } from '@rsuite/icons';
import {
  BrowserRouter as Router, Switch, Route, Link
} from "react-router-dom";
import 'rsuite/styles/index.less';
import { Grommet } from 'grommet';
import './index.css';

ReactDOM.render(
  <Grommet plain>
    <Router>
      <Switch>
        <Route path="/about">
          {/* <About /> */}
        </Route>
        <Route path="/users">
          {/* <Users /> */}
        </Route>
        <Route path="/projects">
          {/* <Users /> */}
        </Route>
        <Route path="/">
          {/* <Home /> */}
        </Route>
      </Switch>
      <Header>

      </Header>
      <StartPage />
    </Router>
    <Footer></Footer>
  </Grommet>,
  document.getElementById('root')
);