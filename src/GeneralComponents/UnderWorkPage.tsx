import React from 'react';
import '../Styling/underwork_page.less';
import robot from '../Resources/robot-hammering.gif';
export const UnderWorkPage = (): any => {
    return (
        <>
            <div className="main-left-container startpage-column-container">
                <div className="underwork-page-left">
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
            </div>
            <div className="main-right-container underwork-page-right">
                <img className="half-image" src="../Resources/startpage-image.jpg" alt="" />
            </div>
        </>
    );
};
