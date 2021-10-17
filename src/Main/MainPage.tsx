import React, { useState } from 'react';
import { Nav, Navbar } from 'rsuite';
import { Link } from 'react-router-dom';
import '../Styling/start_page.less';

export const MainPage = (): any => {
    const [active, setActive] = useState(true);
    return (
        <>
            <div className="flex-container">
                <div className="main-left-container startpage-column-container">
                    <div className="mesh-net"></div>
                    <div className="left-text-container">
                        <div className="main-title flex-item">
                            <p>
                                Hello.<br></br>I am Meri.
                            </p>
                        </div>
                        <div className="secondary-title flex-item">
                            <p>I am a software developer that loves trying out new technologies</p>
                            <p>and solving problems through code.</p>
                        </div>
                        <div id="startpage-link">
                            <Link to="/about">
                                More about me <i className="fa fa-arrow-right"></i>
                            </Link>
                        </div>
                    </div>
                    <div className="social-media-link-container">
                        <a
                            href="https://github.com/merisaar"
                            className="social-media-link"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i className="fa fa-github"></i>
                        </a>
                        <a
                            className="social-media-link"
                            href="https://www.linkedin.com/in/meri-saarinen-321b95138/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i className="fa fa-linkedin"></i>
                        </a>
                    </div>
                </div>
                <div className="main-right-container">
                    <div>
                        <Navbar className="navigation-bar" appearance="subtle">
                            <Nav>
                                <Nav.Item eventKey="1" className={active ? 'nav-button-active' : ''}>
                                    Home
                                </Nav.Item>
                                <Nav.Item eventKey="2">CV</Nav.Item>
                                <Nav.Item eventKey="3">Work history</Nav.Item>
                                <Nav.Item eventKey="4">Projects</Nav.Item>
                            </Nav>
                            <Nav pullRight>
                                <Nav.Item>Settings</Nav.Item>
                            </Nav>
                        </Navbar>
                    </div>
                    <img className="half-image" src="../Resources/startpage-image.jpg" alt=""></img>
                </div>
            </div>
        </>
    );
};
