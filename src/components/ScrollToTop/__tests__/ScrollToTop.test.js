import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ScrollToTop from '../ScrollToTop';
import { act } from 'react';

describe('ScrollToTop', () => {
    beforeEach(() => {
        Object.defineProperty(window, 'scrollTo', {
            value: jest.fn(),
            writable: true,
        });
    });

    test('should not render the button initially', () => {
        render(<ScrollToTop />);
        const button = screen.queryByRole('button');
        expect(button).not.toBeInTheDocument();
    });

    test('should render the button when scrolled down', () => {
        render(<ScrollToTop />);

        act(() => {
            window.scrollY = 301;
            window.dispatchEvent(new Event('scroll'));
        });

        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
    });

    test('should scroll to top when button is clicked', () => {
        render(<ScrollToTop />);

        // Simulate scrolling
        act(() => {
            window.scrollY = 301;
            window.dispatchEvent(new Event('scroll'));
        });

        const button = screen.getByRole('button');
        fireEvent.click(button);
        expect(window.scrollTo).toHaveBeenCalledWith({
            top: 0,
            behavior: 'smooth',
        });
    });

    test('should hide the button when scrolled back up', () => {
        render(<ScrollToTop />);

        act(() => {
            window.scrollY = 301;
            window.dispatchEvent(new Event('scroll'));
        });

        let button = screen.getByRole('button');
        expect(button).toBeInTheDocument();

        act(() => {
            window.scrollY = 100;
            window.dispatchEvent(new Event('scroll'));
        });

        button = screen.queryByRole('button');
        expect(button).not.toBeInTheDocument();
    });
});
