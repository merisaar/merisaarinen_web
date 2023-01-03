import React, { useState, useEffect } from 'react';
import '../Styling/navigation-bar.less';
import { useLocation } from 'react-router-dom';
import { Breakpoint } from 'react-socks';
import { Nav, Navbar } from 'rsuite';
import { BiHomeAlt, BiUser, BiHistory, BiInfoCircle } from 'react-icons/bi';
import { Link } from 'react-scroll';
import { HashLink } from 'react-router-hash-link';

export const NavigationBar = (): JSX.Element => {
    const homeComponent = { title: 'Home', link: 'home' };
    const aboutMeComponent = { title: 'About me', link: 'about' };
    const workHistoryComponent = { title: 'Work history', link: 'workhistory' };
    const projectsComponent = { title: 'Projects', link: 'projects' };
    const contactMeComponent = { title: 'Contact me', link: 'contact' };
    const location = useLocation();
    const [activeNav, setActiveNav] = useState(location.pathname);

    useEffect(() => {
        setActiveNav(location.pathname);
    }, [location]);

    return (
        <>
            <Breakpoint small down>
                <Navbar id="navigation-bar" appearance="subtle">
                    {NavigationItems(
                        homeComponent,
                        activeNav,
                        aboutMeComponent,
                        workHistoryComponent,
                        projectsComponent,
                        contactMeComponent,
                    )}
                </Navbar>
            </Breakpoint>
            <Breakpoint medium up>
                <div id="navigation-bar">
                    <ul>
                        {NavigationItems(
                            homeComponent,
                            activeNav,
                            aboutMeComponent,
                            workHistoryComponent,
                            projectsComponent,
                            contactMeComponent,
                        )}
                    </ul>
                </div>
            </Breakpoint>
        </>
    );
};

interface INavItemProps {
    title: string;
    isActive?: boolean;
    linkName: string;
    icon?: JSX.Element;
}
export const NavItem = (props: INavItemProps): JSX.Element => {
    return (
        <>
            <Breakpoint small down>
                {GetHashLink(props)}
            </Breakpoint>
            <Breakpoint medium up>
                {GetLink(props.title)}
            </Breakpoint>
        </>
    );

    function GetLink(title: string) {
        return (
            <Link activeClass="active" smooth spy to={props.linkName}>
                <li>
                    <p>{title}</p>
                </li>
            </Link>
        );
    }

    function GetHashLink(props: INavItemProps) {
        return (
            <HashLink to={`/${props.linkName}`}>
                {props.icon}
                <li className={props.isActive ? 'nav-button-active' : ''}>
                    <p>{props.title}</p>
                </li>
            </HashLink>
        );
    }
};
export const NavigationItems = (
    homeComponent: { title: string; link: string },
    activeNav: string,
    aboutMeComponent: { title: string; link: string },
    workHistoryComponent: { title: string; link: string },
    projectsComponent: { title: string; link: string },
    contactMeComponent: { title: string; link: string },
) => {
    return (
        <Nav>
            <NavItem
                title={homeComponent.title}
                isActive={activeNav == homeComponent.link}
                linkName={homeComponent.link}
                icon={<BiHomeAlt />}
            ></NavItem>
            <NavItem
                title={aboutMeComponent.title}
                isActive={activeNav == aboutMeComponent.link}
                linkName={aboutMeComponent.link}
                icon={<BiUser />}
            ></NavItem>
            <NavItem
                title={workHistoryComponent.title}
                isActive={activeNav == workHistoryComponent.link}
                linkName={workHistoryComponent.link}
                icon={<BiHistory />}
            ></NavItem>
            {/* <NavItem
                title={projectsComponent.title}
                isActive={activeNav == projectsComponent.link}
                linkName={projectsComponent.link}
                icon={<BiChalkboard />}
            ></NavItem> */}
            <NavItem
                title={contactMeComponent.title}
                isActive={activeNav == contactMeComponent.link}
                linkName={contactMeComponent.link}
                icon={<BiInfoCircle />}
            ></NavItem>
        </Nav>
    );
};
