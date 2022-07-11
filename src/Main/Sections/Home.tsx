import React, { useLayoutEffect, useRef } from 'react';
import { HashLink } from 'react-router-hash-link';
import '../../Styling/home.less';
import { HalfImage } from './HalfImage';
import { Breakpoint } from 'react-socks';

export const Home = (): JSX.Element => {
    return (
        <>
            <Breakpoint className="autoflow justify-content-center align-items-center" small down>
                <div className="main-home-container">
                    <HalfImage imagePath="../Resources/startpage-image.jpg" />
                </div>
                <HomeTextContainer />
            </Breakpoint>
            <Breakpoint className="section" medium up>
                <div id="home" className="autoflow full-width home-container">
                    <HomeTextContainer />

                    <div className="main-home-container">
                        <HalfImage imagePath="../Resources/startpage-image.jpg" />
                    </div>
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
        <Breakpoint lassName="secondary-title flex-item" small down>
            <p>I am a software developer that loves trying out new technologies and solving problems through code.</p>
        </Breakpoint>
        <Breakpoint lassName="secondary-title flex-item" medium up>
            <p>I am a software developer that loves trying out new technologies</p>
            <p>and solving problems through code.</p>
        </Breakpoint>
        <div className="startpage-link">
            <HashLink to="/about">
                More about me <i className="fa fa-arrow-right"></i>
            </HashLink>
        </div>
    </div>
);
