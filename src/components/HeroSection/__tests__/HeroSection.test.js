import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HeroSection from '../HeroSection';
import { BrowserRouter as Router } from 'react-router-dom';

describe('HeroSection', () => {
    test('renders HeroSection with correct elements', () => {
        render(
            <Router>
                <HeroSection />
            </Router>
        );

        expect(screen.getByText(/Little Lemon/i)).toBeInTheDocument();

        expect(screen.getByText(/Chicago/i)).toBeInTheDocument();

        expect(screen.getByText(/We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist./i)).toBeInTheDocument();

        const reserveButton = screen.getByText(/Reserve a table/i);
        expect(reserveButton).toBeInTheDocument();
        expect(reserveButton.closest('a')).toHaveAttribute('href', '/reservations');

        expect(screen.getByAltText(/heroImg/i)).toBeInTheDocument();
    });
});
