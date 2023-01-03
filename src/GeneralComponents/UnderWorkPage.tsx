import React from 'react';
import '../Styling/underwork-page.less';
import robot from '../Resources/robot-hammering.gif';
import { HalfImage } from '../Main/Sections/HalfImage';
import { Breakpoint } from 'react-socks';
import image from '../Resources/startpage-image.jpg';

export const UnderWorkPage = (props: { title: string }): JSX.Element => {
    return (
        <>
            <div className="main-left-container startpage-column-container">
                <div className="underwork-page-left">
                    <Breakpoint className="back-icon-container" medium up>
                        <a href="/home">
                            <i className="fa fa-chevron-left"></i>
                        </a>
                    </Breakpoint>
                    <div className="middle">
                        <h1>{props.title}</h1>
                        <img src={robot} alt="robot repairing page title"></img>
                    </div>
                </div>
            </div>
            <Breakpoint className="main-right-container section main-padding" medium up>
                <HalfImage image={image} />
            </Breakpoint>
        </>
    );
};
