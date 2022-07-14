import React from 'react';
import { HashLink } from 'react-router-hash-link';
import '../../Styling/about-me.less';
import { Breakpoint } from 'react-socks';
import { Header } from '../../GeneralComponents/Header';
import { Link } from 'react-scroll';

export const AboutMeComponent = (): JSX.Element => {
    return (
        <>
            <Breakpoint className="autoflow" small down>
                <ImageContainer />
                <AboutMeTextContainer />
            </Breakpoint>
            <Breakpoint className="section main-padding" medium up>
                <div className="autoflow" id="about">
                    <div className="main-left-container">
                        <AboutMeTextContainer />
                    </div>
                    <div className="main-right-container">
                        <ImageContainer />
                    </div>
                </div>
            </Breakpoint>
        </>
    );
};

export const ImageContainer = () => (
    <div className="about-me-image-container">
        <img className="half-image-circle grow" src="../Resources/startpage-image.jpg" alt="" />
        <p className="italic">This is me. Proudly and gently holding my degree so I don't break it.</p>
    </div>
);

const AboutMeTextContainer = () => {
    return (
        <div className="about-me-container">
            <Header title="About me"></Header>
            <p>
                I love problem solving and finding solutions that fit best for the problem at hand. That is how I was
                able to obtain my degree in Master of Science in Technology.
                <br></br>
                <br></br>
                When I find something I love I can not seem to stop doing it. They say that when you do what you love,
                you never work a day in your life. Even though that is not even remotely true, I am fortunate to say
                that <b>I love coding</b> and have fun doing it as my job and as a hobby.
                <br></br>
                <br></br>I also enjoy my other hobbies which include <b>woodworking, sewing, singing, video games</b>{' '}
                and <b>working out</b>. Don't ask me how I have time for all of them, because I don't know.
                <br></br>
                <br></br>I'm mostly a people person, but sometimes dogs and cats just get me better. I like working in a
                team environment and enjoy making people laugh. It has, however, made lunch breaks at work almost
                impossible, as there never seems to be enough time left for eating.
                <br></br>
                <br></br>
                To learn more about me and my interests,{' '}
                <Breakpoint small down>
                    <HashLink to="/contact">
                        reach out <i className="fa fa-arrow-right"></i>
                    </HashLink>
                </Breakpoint>
                <Breakpoint medium up>
                    <Link to="contact">
                        reach out <i className="fa fa-arrow-right"></i>
                    </Link>
                </Breakpoint>
            </p>
        </div>
    );
};
