import React from 'react';

interface HalfImageProps {
    imagePath: string;
}

export const HalfImage = ({ imagePath }: HalfImageProps): JSX.Element => {
    return <img className="half-image" src={imagePath} alt="" />;
};
