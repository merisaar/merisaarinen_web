import React from 'react';
import '../../../Styling/about-me.less';

interface HalfImageProps {
    imagePath: string;
}

export const AboutMeRightComponent = ({ imagePath }: HalfImageProps): JSX.Element => {
    return (
        <div className="about-me-right-container">
            <img className="half-image-circle grow" src={imagePath} alt="" />
            <p className="italic">This is me. Proudly and gently holding my degree so I don't break it.</p>
        </div>
    );
};
