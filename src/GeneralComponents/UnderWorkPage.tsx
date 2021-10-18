import React from 'react';
import '../Styling/underwork_page.less';
import robot from '../Resources/robot-hammering.gif';
export const UnderWorkPage = (): any => {
    return (
        <div className="underwork-page">
            <div className="back-icon-container">
                <a href="/home">
                    <i className="fa fa-chevron-left"></i>Back
                </a>
            </div>
            <div className="middle">
                <h1>UNDER WORK</h1>
                <img src={robot} alt=""></img>
            </div>
        </div>
    );
};
