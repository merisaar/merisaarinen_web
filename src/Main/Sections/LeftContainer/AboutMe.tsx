import React from 'react';
import aboutMeText from '../../../Resources/about-me.txt';
import { Link } from 'react-router-dom';
import '../../../Styling/about-me.less';

export const AboutMeLeftComponent = (): JSX.Element => {
    return (
        <div className="about-me-container">
            <div className="main-title flex-item dark">
                <p>About me</p>
            </div>
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
                <Link to="/contact">
                    reach out <i className="fa fa-arrow-right"></i>
                </Link>
            </p>
        </div>
    );
};
