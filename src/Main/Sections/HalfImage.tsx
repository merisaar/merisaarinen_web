import React, { useState } from 'react';

interface HalfImageProps {
    image: HTMLImageElement;
    imageRef?: React.RefObject<HTMLImageElement>;
}

export const HalfImage = ({ image, imageRef }: HalfImageProps): JSX.Element => {
    const [loaded, setLoaded] = useState(false);
    return (
        <div className="full-height">
            <img
                className="half-image"
                style={loaded ? {} : { display: 'none' }}
                src={image}
                onLoad={() => setLoaded(true)}
                alt=""
                ref={imageRef}
            />
        </div>
    );
};
