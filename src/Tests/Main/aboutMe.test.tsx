import React from 'react';
import { render, screen } from '@testing-library/react';
import { ImageContainer } from '../../Main/Sections/AboutMe';

test('Header should contain title', () => {
    const text = 'Test text.';
    render(<ImageContainer text={text} />);
    expect(screen.getByText(text)).toBeInTheDocument();
});
