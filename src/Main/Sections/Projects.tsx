import React from 'react';
import '../../Styling/projects.less';

export const Projects = (): JSX.Element => {
    return (
        <>
            <Card></Card>
        </>
    );
};
const Card = () => {
    return (
        <div className="project-card">
            <img src={'../Resources/background.jpg'} alt=""></img>
            <h1>Project</h1>
            <p>Project description</p>
        </div>
    );
};
