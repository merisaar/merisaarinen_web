import React from 'react';
import { HashLink } from 'react-router-hash-link';
import '../../Styling/home.less';
import { HalfImage } from './HalfImage';
import { Breakpoint } from 'react-socks';
import Particles from 'react-tsparticles';

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
    <div>
        <Particles
            options={{
                fullScreen: {
                    enable: false,
                    zIndex: 0,
                },
                fpsLimit: 120,
                interactivity: {
                    detectsOn: 'canvas',
                    events: {
                        onHover: {
                            enable: true,
                            mode: 'attract',
                        },
                        resize: true,
                    },
                    modes: {
                        bubble: {
                            distance: 400,
                            duration: 2,
                            opacity: 1,
                            size: 40,
                        },
                        push: {
                            quantity: 4,
                        },
                    },
                },
                particles: {
                    number: {
                        value: 30,
                        density: {
                            enable: true,
                        },
                    },
                    color: {
                        value: ['#610909', '#975050', '#ba7d7d'],
                    },
                    shape: {
                        type: 'circle',
                    },
                    opacity: {
                        value: 0.2,
                        random: {
                            enable: true,
                            minimumValue: 0.4,
                        },
                        animation: {
                            enable: false,
                            speed: 0.25,
                            minimumValue: 0.1,
                            sync: false,
                        },
                    },
                    size: {
                        value: 50,
                        random: {
                            enable: true,
                            minimumValue: 30,
                        },
                        animation: {
                            enable: true,
                            speed: 10,
                            minimumValue: 10,
                            sync: false,
                        },
                    },
                    move: {
                        enable: true,
                        speed: 1,
                        direction: 'top',
                        random: false,
                        straight: false,
                        outModes: {
                            default: 'out',
                        },
                    },
                },
                detectRetina: false,
            }}
        />
        <div className="left-text-container fade-in-text-container">
            <div className="main-title flex-item">
                <p>
                    Hello.<br></br>I am Meri.
                </p>
            </div>
            <Breakpoint lassName="secondary-title flex-item" small down>
                <p>
                    I am a software developer that loves trying out new technologies and solving problems through code.
                </p>
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
    </div>
);
