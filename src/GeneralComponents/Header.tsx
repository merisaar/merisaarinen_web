import React from 'react';
import '../Styling/header.less';

export const Header = (props: { title: string }) => {
    return (
        <div className="header-container secondary-title flex-item dark">
            <p>{props.title}</p>
            <div className="header-line"></div>
        </div>
    );
};
