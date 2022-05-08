import React from 'react';
import ReactDOM from 'react-dom';
import { MainPage } from './Main/MainPage';
import { Footer } from 'rsuite';
import 'rsuite/styles/index.less';
import './Styling/common.less';
import { BrowserRouter as Router } from 'react-router-dom';
import { BreakpointProvider } from 'react-socks';

ReactDOM.render(
    <Router>
        <BreakpointProvider>
            <MainPage></MainPage>
            <Footer></Footer>
        </BreakpointProvider>
    </Router>,
    document.getElementById('root'),
);
