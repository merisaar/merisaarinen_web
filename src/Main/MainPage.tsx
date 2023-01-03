import React from 'react';
import { UnderWorkPage } from '../GeneralComponents/UnderWorkPage';
import { NavigationBar } from '../GeneralComponents/NavigationBar';
import { AboutMeComponent as AboutMe } from './Sections/AboutMe';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Home } from './Sections/Home';
import { SocialMediaLinkContainer } from '../GeneralComponents/SocialMediaLinkContainer';
import { ContactMeComponent } from './Sections/ContactMe';
import { WorkHistoryComponent } from './Sections/WorkHistory';
import { Breakpoint } from 'react-socks';

export const MainPage = (): JSX.Element => {
    return (
        <>
            <Breakpoint className="content-container" small down>
                <div className="flex-container">
                    <SocialMediaLinkContainer></SocialMediaLinkContainer>
                    <div className="information-container">
                        <Routes>
                            <Route path="/home" element={<Home />}></Route>
                            <Route path="/about" element={<AboutMe />}></Route>
                            <Route path="/workhistory" element={<WorkHistoryComponent />}></Route>
                            <Route path="/projects" element={<UnderWorkPage title="UNDER WORK" />}></Route>
                            <Route path="/contact" element={<ContactMeComponent />}></Route>
                            <Route path="*" element={<Navigate to="/home" replace />} />
                        </Routes>
                    </div>
                    <NavigationBar />
                </div>
            </Breakpoint>
            <Breakpoint className="autoflow flex-flow-column" medium up>
                <SocialMediaLinkContainer></SocialMediaLinkContainer>
                <Home />
                <AboutMe />
                <WorkHistoryComponent />
                <ContactMeComponent />
                <NavigationBar />
            </Breakpoint>
        </>
    );
};
