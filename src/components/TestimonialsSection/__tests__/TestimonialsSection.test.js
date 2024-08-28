import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TestimonialsSection from '../TestimonialsSection';

jest.mock('../../TestimonialCard/TestimonialCard', () => ({
    __esModule: true,
    default: ({ user }) => (
        <div data-testid={`testimonial-card-${user.id}`}>
            <h4>{user.name}</h4>
            <p>{user.nickname}</p>
            <p>{user.review}</p>
            <p>{user.description}</p>
        </div>
    )
}));

describe('TestimonialsSection', () => {
    test('renders TestimonialsSection component with heading and testimonial cards', () => {
        render(<TestimonialsSection />);

        const headingElement = screen.getByText("What do people say about us?");
        expect(headingElement).toBeInTheDocument();

        const users = [
            { id: 1, name: "Jane Doe" },
            { id: 2, name: "John Smith" },
            { id: 3, name: "Alice Johnson" },
            { id: 4, name: "Bob Brown" }
        ];

        users.forEach(user => {
            const cardElement = screen.getByTestId(`testimonial-card-${user.id}`);
            expect(cardElement).toBeInTheDocument();
            expect(screen.getByText(user.name)).toBeInTheDocument();
        });
    });
});
