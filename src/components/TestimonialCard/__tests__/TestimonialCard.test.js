import { render, screen } from '@testing-library/react';
import TestimonialCard from '../TestimonialCard';
import '@testing-library/jest-dom';

jest.mock('@fortawesome/react-fontawesome', () => ({
    FontAwesomeIcon: ({ icon }) => <span>{icon.iconName}</span>
}));

const user = {
    id: 1,
    name: 'Jane Doe',
    nickname: 'jdoe',
    image: 'path/to/user-image.jpg',
    review: 4,
    description: 'An amazing experience! Highly recommend.'
};

describe('TestimonialCard', () => {
    test('renders TestimonialCard component with user details', () => {
        render(<TestimonialCard user={user} />);

        const imageElement = screen.getByAltText(`Card Testimonial ${user.id}`);
        expect(imageElement).toHaveAttribute('src', user.image);

        const nameElement = screen.getByText(user.name);
        expect(nameElement).toBeInTheDocument();

        const nicknameElement = screen.getByText(user.nickname);
        expect(nicknameElement).toBeInTheDocument();

        const descriptionElement = screen.getByText(user.description);
        expect(descriptionElement).toBeInTheDocument();
    });
});
