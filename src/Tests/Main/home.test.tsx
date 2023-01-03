import React from 'react';
import { render } from '@testing-library/react';
import { HomeTextContainer } from '../../Main/Sections/Home';

test('Home component should contain text', () => {
    render(<HomeTextContainer />);
});

test('Header should contain title', () => {
    const text = 'I am Meri.';
    const { container } = render(<HomeTextContainer />);
    const firstTextElement = container.querySelector('p');
    const elementContainsGreetingText = firstTextElement?.innerHTML.includes(text);
    expect(elementContainsGreetingText).toBeTruthy();
});
