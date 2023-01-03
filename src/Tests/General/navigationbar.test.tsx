import React from 'react';
import { render, screen } from '@testing-library/react';
import { NavItem } from '../../GeneralComponents/NavigationBar';
const resizeWindow = (x: number, y: number) => {
    window.innerWidth = x;
    window.innerHeight = y;
    window.dispatchEvent(new Event('resize'));
};
describe('Website navigation bar tests', () => {
    beforeEach(() => {
        resizeWindow(1800, 1200);
    });

    test('Navigation bar should be correctly rendered', () => {
        const title = 'title';
        const linkName = 'linkName';
        render(<NavItem title={title} linkName={linkName} />);
        expect(screen.getByText(title)).toBeInTheDocument();
    });
});

describe('Mobile navigation bar tests', () => {
    beforeEach(() => {
        resizeWindow(900, 600);
    });

    test('Navigation bar should be correctly rendered', () => {
        const title = 'title';
        const linkName = 'linkName';
        render(<NavItem title={title} linkName={linkName} />);
        expect(screen.getByText(title)).toBeInTheDocument();
    });
});
