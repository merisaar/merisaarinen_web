import React, { useState } from 'react';
import { UnderWorkPage } from '../GeneralComponents/UnderWorkPage';
import { NavigationBar } from '../GeneralComponents/NavigationBar';
import { HalfImage } from './Sections/RightContainer/HalfImage';
import { AboutMeLeftComponent as AboutMeLeft } from './Sections/LeftContainer/AboutMe';
import { AboutMeRightComponent as AboutMeRight } from './Sections/RightContainer/AboutMe';
import { Routes, Route } from 'react-router-dom';
import { Home } from './Sections/LeftContainer/Home';
import { SocialMediaLinkContainer } from '../GeneralComponents/SocialMediaLinkContainer';
export const MainPage = (): JSX.Element => {
    const startPageImagePath = '../Resources/startpage-image.jpg';
    return (
        <div className="flex-container">
            <div className="main-left-container startpage-column-container">
                <Routes>
                    <Route path="/home" element={<Home />}></Route>
                    <Route path="/about" element={<AboutMeLeft />}></Route>
                    <Route path="/workhistory" element={<UnderWorkPage />}></Route>
                    <Route path="/projects" element={<UnderWorkPage />}></Route>
                    <Route path="/contact" element={<UnderWorkPage />}></Route>
                    <Route path="*" element={<Home />}></Route>
                </Routes>
                <SocialMediaLinkContainer></SocialMediaLinkContainer>
            </div>
            <div className="main-right-container">
                <NavigationBar />
                <Routes>
                    <Route path="/home" element={<HalfImage imagePath={startPageImagePath} />}></Route>
                    <Route path="/about" element={<AboutMeRight imagePath={startPageImagePath} />}></Route>
                    <Route path="*" element={<HalfImage imagePath={startPageImagePath} />}></Route>
                </Routes>
            </div>
        </div>
    );
};
