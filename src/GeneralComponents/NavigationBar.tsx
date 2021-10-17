import React, { useState, Dispatch, SetStateAction } from 'react';
import { Nav, Navbar } from 'rsuite';
import '../Styling/navigation-bar.less';

export const NavigationBar = (): any => {
    const homeComponent = { title: 'Home', type: 'home' };
    const aboutMeComponent = { title: 'About me', type: 'aboutMe' };
    const workHistoryComponent = { title: 'Work history', type: 'workHistory' };
    const projectsComponent = { title: 'Projects', type: 'projects' };
    const contactMeComponent = { title: 'Contact me', type: 'ContactMe' };
    const [activeNav, setActiveNav] = useState(homeComponent.type);

    return (
        <>
            <Navbar className="navigation-bar" appearance="subtle">
                <Nav>
                    <NavItem
                        setActiveNav={setActiveNav}
                        title={homeComponent.title}
                        isActive={activeNav == homeComponent.type}
                    ></NavItem>
                    <NavItem
                        setActiveNav={setActiveNav}
                        title={aboutMeComponent.title}
                        isActive={activeNav == aboutMeComponent.type}
                    ></NavItem>
                    <NavItem
                        setActiveNav={setActiveNav}
                        title={workHistoryComponent.title}
                        isActive={activeNav == workHistoryComponent.type}
                    ></NavItem>
                    <NavItem
                        setActiveNav={setActiveNav}
                        title={projectsComponent.title}
                        isActive={activeNav == projectsComponent.type}
                    ></NavItem>
                </Nav>
                <Nav pullRight>
                    <NavItem
                        setActiveNav={setActiveNav}
                        title={contactMeComponent.title}
                        isActive={activeNav == contactMeComponent.type}
                    ></NavItem>
                </Nav>
            </Navbar>
        </>
    );
};

interface INavItemProps {
    title: string;
    isActive?: boolean;
    setActiveNav: Dispatch<SetStateAction<string>>;
}
const NavItem = (prop: INavItemProps): JSX.Element => {
    return <Nav.Item className={prop.isActive ? 'nav-button-active' : ''}>{prop.title}</Nav.Item>;
};
