import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import SpecialsSection from '../SpecialsSection';
import '@testing-library/jest-dom'

describe('SpecialsSection', () => {
    test('renders SpecialsSection component with meals and link', () => {
        render(
            <Router>
                <SpecialsSection />
            </Router>
        );

        const headingElement = screen.getByText("This week's specials!");
        expect(headingElement).toBeInTheDocument();

        const linkElement = screen.getByRole('link', { name: /Online Menu/i });
        expect(linkElement).toBeInTheDocument();

        const mealNames = ['Greek Salad', 'Bruschetta', 'Lemon Dessert'];
        mealNames.forEach(name => {
            const mealElement = screen.getByText(name);
            expect(mealElement).toBeInTheDocument();
        });

        const mealsContainer = screen.getByTestId('meals-container');
        expect(mealsContainer).toBeInTheDocument();
    });
});