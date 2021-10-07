import { Icon } from '@rsuite/icons';
import React, { useState, useEffect, FunctionComponent, ReactComponentElement, ReactElement } from 'react';
import { Container, Placeholder } from 'rsuite';
import {
    Link
} from "react-router-dom";

export const StartPage = (): any => {
    const { Paragraph } = Placeholder;
    return (
        <>
            <div className="flex-container">
                <div className="main-left-container startpage-column-container">
                    <div className="left-text-container">
                        <div className="main-title flex-item"><p>Hello.<br></br>I am Meri.</p></div>
                        <div className="secondary-title flex-item">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                        <div id="show-projects-link"><Link to="/projects">Show projects<i className="fa fa-arrow-right"></i></Link></div>
                    </div>
                    <div className="social-media-link-container"></div>
                </div>
                <div className="main-right-container"><img className="half-image" src="../Resources/startpage-image.jpg"></img></div>
            </div>

        </>
    )
}