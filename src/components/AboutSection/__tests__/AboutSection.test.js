import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AboutSection from '../AboutSection';

describe('AboutSection', () => {
    test('renders the AboutSection with the correct text content', () => {
        render(<AboutSection />);

        const heading = screen.getByRole('heading', { level: 2 });
        expect(heading).toHaveTextContent(/Little Lemon/i);

        const paragraph = screen.getByText(/Little Lemon Chicago is a family owned Mediterranean restaurant/i);
        expect(paragraph).toBeInTheDocument();
    });

    test('renders images with the correct src and alt attributes', () => {
        render(<AboutSection />);

        const img1 = screen.getByAltText(/About Img1/i);
        expect(img1).toBeInTheDocument();
        expect(img1).toHaveAttribute('src', expect.stringContaining('Mario and Adrian A.jpg'));

        const img2 = screen.getByAltText(/About Img2/i);
        expect(img2).toBeInTheDocument();
        expect(img2).toHaveAttribute('src', expect.stringContaining('restaurant.jpg'));
    });
});
