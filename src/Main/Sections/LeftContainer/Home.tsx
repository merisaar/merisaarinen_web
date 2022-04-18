import React from 'react';
import { Link } from 'react-router-dom';
import '../../../Styling/home.less';

export const Home = (): JSX.Element => {
    return (
        <>
            <div className="mesh-net"></div>
            <div className="left-text-container fade-in-text-container">
                <div className="main-title flex-item">
                    <p>
                        Hello.<br></br>I am Meri.
                    </p>
                </div>
                <div className="secondary-title flex-item">
                    <p>I am a software developer that loves trying out new technologies</p>
                    <p>and solving problems through code.</p>
                </div>
                <div className="startpage-link">
                    <Link to="/about">
                        More about me <i className="fa fa-arrow-right"></i>
                    </Link>
                </div>
            </div>
        </>
    );
};
