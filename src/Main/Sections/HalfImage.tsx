import React, { useState } from 'react';

interface HalfImageProps {
    image: HTMLImageElement;
}

export const HalfImage = ({ image }: HalfImageProps): JSX.Element => {
    const [loaded, setLoaded] = useState(false);
    return (
        <img
            className="half-image"
            style={loaded ? {} : { display: 'none' }}
            src={image}
            onLoad={() => setLoaded(true)}
            alt=""
        />
    );
};
