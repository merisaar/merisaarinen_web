import React, { useState, useEffect } from 'react';
import { Nav, Navbar } from 'rsuite';
import '../Styling/navigation-bar.less';
import { Link, useLocation } from 'react-router-dom';

export const NavigationBar = (): JSX.Element => {
    const homeComponent = { title: 'Home', link: '/home' };
    const aboutMeComponent = { title: 'About me', link: '/about' };
    const workHistoryComponent = { title: 'Work history', link: '/workhistory' };
    const projectsComponent = { title: 'Projects', link: '/projects' };
    const contactMeComponent = { title: 'Contact me', link: '/contact' };
    const location = useLocation();
    const [activeNav, setActiveNav] = useState(location.pathname);

    useEffect(() => {
        setActiveNav(location.pathname);
    }, [location]);

    return (
        <>
            <Navbar id="navigation-bar" appearance="subtle">
                <Nav>
                    <NavItem
                        title={homeComponent.title}
                        isActive={activeNav == homeComponent.link}
                        linkName={homeComponent.link}
                    ></NavItem>
                    <NavItem
                        title={aboutMeComponent.title}
                        isActive={activeNav == aboutMeComponent.link}
                        linkName={aboutMeComponent.link}
                    ></NavItem>
                    <NavItem
                        title={workHistoryComponent.title}
                        isActive={activeNav == workHistoryComponent.link}
                        linkName={workHistoryComponent.link}
                    ></NavItem>
                    <NavItem
                        title={projectsComponent.title}
                        isActive={activeNav == projectsComponent.link}
                        linkName={projectsComponent.link}
                    ></NavItem>
                </Nav>
                <Nav pullRight>
                    <NavItem
                        title={contactMeComponent.title}
                        isActive={activeNav == contactMeComponent.link}
                        linkName={contactMeComponent.link}
                    ></NavItem>
                </Nav>
            </Navbar>
        </>
    );
};

interface INavItemProps {
    title: string;
    isActive?: boolean;
    linkName: string;
}
const NavItem = (prop: INavItemProps): JSX.Element => {
    return (
        <Nav.Item className={prop.isActive ? 'nav-button-active' : ''}>
            <Link to={prop.linkName}>{prop.title}</Link>
        </Nav.Item>
    );
};
