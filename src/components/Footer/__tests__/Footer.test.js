import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from '../Footer';
import { BrowserRouter as Router } from 'react-router-dom';

const renderWithRouter = (ui) => {
    return render(<Router>{ui}</Router>);
};

describe('Footer Component', () => {
    test('renders footer logo', () => {
        renderWithRouter(<Footer />);

        const logo = screen.getByAltText(/footer-logo/i);
        expect(logo).toBeInTheDocument();
        expect(logo).toHaveAttribute('src', 'logo-white.png');
    });

    test('renders navigation links', () => {
        renderWithRouter(<Footer />);

        expect(screen.getByText(/Home/i)).toBeInTheDocument();
        expect(screen.getByText(/About/i)).toBeInTheDocument();
        expect(screen.getByText(/Menu/i)).toBeInTheDocument();
        expect(screen.getByText(/Reservations/i)).toBeInTheDocument();
        expect(screen.getByText(/Order Online/i)).toBeInTheDocument();
        expect(screen.getByText(/Login/i)).toBeInTheDocument();
    });

    test('renders contact information', () => {
        renderWithRouter(<Footer />);

        expect(screen.getByText(/678 Pisa Ave, Chicago, IL 60611/i)).toBeInTheDocument();
        expect(screen.getByText(/\(312\) 593-2744/i)).toBeInTheDocument();
        expect(screen.getByText(/customer@littlelemon.com/i)).toBeInTheDocument();
    });

    test('renders social media links', () => {
        renderWithRouter(<Footer />);

        expect(screen.getByText(/Facebook/i)).toBeInTheDocument();
        expect(screen.getByText(/Twitter/i)).toBeInTheDocument();
        expect(screen.getByText(/Instagram/i)).toBeInTheDocument();
    });
});
