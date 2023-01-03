import React from 'react';
import { render, screen } from '@testing-library/react';
import { Header } from '../../GeneralComponents/Header';

test('Header should contain title', () => {
    const title = 'test_title';
    render(<Header title={title} />);
    expect(screen.getByText(title)).toBeInTheDocument();
});
