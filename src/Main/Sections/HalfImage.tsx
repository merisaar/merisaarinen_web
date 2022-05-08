import React, { useState } from 'react';

interface HalfImageProps {
    imagePath: string;
}

export const HalfImage = ({ imagePath }: HalfImageProps): JSX.Element => {
    const [loaded, setLoaded] = useState(false);
    return (
        <img
            className="half-image"
            style={loaded ? {} : { display: 'none' }}
            src={imagePath}
            onLoad={() => setLoaded(true)}
            alt=""
        />
    );
};
