import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import MealCard from '../MealCard';
import '@testing-library/jest-dom';
import { faMotorcycle } from '@fortawesome/free-solid-svg-icons';

jest.mock('@fortawesome/react-fontawesome', () => ({
    FontAwesomeIcon: ({ icon }) => <span>{icon.iconName}</span>
}));

const meal = {
    id: 1,
    name: 'Greek Salad',
    image: 'path/to/greek-salad.jpg',
    price: '$12.99',
    description: 'A delicious Greek salad with crispy lettuce, peppers, olives, and feta cheese.'
};

describe('MealCard', () => {
    test('renders MealCard component with meal details', () => {
        render(
            <Router>
                <MealCard meal={meal} />
            </Router>
        );

        const imageElement = screen.getByAltText(`Card Meal ${meal.id}`);
        expect(imageElement).toHaveAttribute('src', meal.image);

        const nameElement = screen.getByText(meal.name);
        expect(nameElement).toBeInTheDocument();

        const priceElement = screen.getByText(meal.price);
        expect(priceElement).toBeInTheDocument();

        const descriptionElement = screen.getByText(meal.description);
        expect(descriptionElement).toBeInTheDocument();

        const linkElement = screen.getByRole('link', { name: /Order a delivery/i });
        expect(linkElement).toBeInTheDocument();

        const iconElement = screen.getByText(faMotorcycle.iconName);
        expect(iconElement).toBeInTheDocument();
    });

});