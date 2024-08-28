import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../Navbar';
import '@testing-library/jest-dom'

describe('Navbar', () => {
    test('renders Navbar component', () => {
        render(
            <Router>
                <Navbar />
            </Router>
        );
        const navElement = screen.getByRole('navigation');
        expect(navElement).toBeInTheDocument();
    });
});
