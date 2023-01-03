import React from 'react';
import { render, screen } from '@testing-library/react';
import { SocialMediaLinkContainer } from '../../GeneralComponents/SocialMediaLinkContainer';

test('Social media container should display github link', () => {
    render(<SocialMediaLinkContainer />);
});
