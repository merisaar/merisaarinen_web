import React from 'react';
import '../Styling/social-media-container.less';
export const SocialMediaLinkContainer = () => {
    return (
        <div className="social-media-container">
            <div className="social-media-link-container">
                <a href="https://github.com/merisaar" className="social-media-link" target="_blank" rel="noreferrer">
                    <i className="fa fa-github"></i>
                </a>
                <a
                    className="social-media-link"
                    href="https://www.linkedin.com/in/meri-saarinen-321b95138/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <i className="fa fa-linkedin"></i>
                </a>
            </div>
        </div>
    );
};
