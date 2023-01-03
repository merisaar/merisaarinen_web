import React from 'react';
import { render, screen } from '@testing-library/react';
import { UnderWorkPage } from '../../GeneralComponents/UnderWorkPage';

test('Social media container should display github link', () => {
    const title = 'test title';
    render(<UnderWorkPage title={title} />);
    expect(screen.getByText(title)).toBeInTheDocument();
});
