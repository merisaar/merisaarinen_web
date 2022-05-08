import React from 'react';
import { Link } from 'react-router-dom';
import '../../Styling/home.less';
import { HalfImage } from './HalfImage';
import { Breakpoint } from 'react-socks';

export const Home = (): JSX.Element => {
    return (
        <>
            <div className="main-left-container startpage-column-container">
                <div className="mesh-net"></div>
                <div className="left-text-container fade-in-text-container">
                    <div className="main-title flex-item">
                        <p>
                            Hello.<br></br>I am Meri.
                        </p>
                    </div>
                    <div className="secondary-title flex-item">
                        <Breakpoint large down>
                            <p>
                                I am a software developer that loves trying out new technologies and solving problems
                                through code.
                            </p>
                        </Breakpoint>
                        <Breakpoint large up>
                            <p>I am a software developer that loves trying out new technologies</p>
                            <p>and solving problems through code.</p>
                        </Breakpoint>
                    </div>
                    <div className="startpage-link">
                        <Link to="/about">
                            More about me <i className="fa fa-arrow-right"></i>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="main-right-container">
                <HalfImage imagePath="../Resources/startpage-image.jpg" />
            </div>
        </>
    );
};
