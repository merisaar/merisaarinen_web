import React from 'react';
import { Link } from 'react-router-dom';
import '../../Styling/home.less';
import { HalfImage } from './HalfImage';
import { Breakpoint } from 'react-socks';

export const Home = (): JSX.Element => {
    return (
        <>
            <Breakpoint className="autoflow justify-content-center align-items-center" medium down>
                <div className="main-home-container">
                    <HalfImage imagePath="../Resources/startpage-image.jpg" />
                </div>
                <HomeTextContainer />
            </Breakpoint>
            <Breakpoint className="autoflow full-width" large up>
                <HomeTextContainer />

                <div className="main-home-container">
                    <HalfImage imagePath="../Resources/startpage-image.jpg" />
                </div>
            </Breakpoint>
        </>
    );
};

const HomeTextContainer = (): JSX.Element => (
    <div className="left-text-container fade-in-text-container">
        <div className="main-title flex-item">
            <p>
                Hello.<br></br>I am Meri.
            </p>
        </div>
        <Breakpoint lassName="secondary-title flex-item" medium down>
            <p>I am a software developer that loves trying out new technologies and solving problems through code.</p>
        </Breakpoint>
        <Breakpoint lassName="secondary-title flex-item" large up>
            <p>I am a software developer that loves trying out new technologies</p>
            <p>and solving problems through code.</p>
        </Breakpoint>
        <div className="startpage-link">
            <Link to="/about">
                More about me <i className="fa fa-arrow-right"></i>
            </Link>
        </div>
    </div>
);
