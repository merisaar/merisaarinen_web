import React from 'react';
import ReactDOM from 'react-dom';
import { MainPage } from './Main/MainPage';
import { Footer } from 'rsuite';
import 'rsuite/styles/index.less';
import './Styling/common.less';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
    <Router>
        <MainPage></MainPage>
        <Footer></Footer>
    </Router>,
    document.getElementById('root'),
);
