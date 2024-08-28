import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Reservations from '../Reservations';
import { MemoryRouter } from 'react-router-dom';
import { toast } from 'react-toastify';

// Mock the react-toastify functions
jest.mock('react-toastify', () => ({
    toast: {
        success: jest.fn(),
        error: jest.fn(),
    },
    ToastContainer: () => null,
}));

describe('Reservations Component', () => {
    beforeEach(() => {
        localStorage.clear();
    });

    const renderWithRouter = (ui, { route = '/' } = {}) => {
        window.history.pushState({}, 'Test page', route);
        return render(<MemoryRouter>{ui}</MemoryRouter>);
    };

    test('should render form fields and labels', () => {
        renderWithRouter(<Reservations />);

        expect(screen.getByLabelText(/First Name/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Last Name/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Choose Date/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Choose Time/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Number of Guests/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Occasion/i)).toBeInTheDocument();
    });

    test('should successfully submit the form and save reservation', async () => {
        renderWithRouter(<Reservations />);

        fireEvent.change(screen.getByLabelText(/First Name/i), { target: { value: 'Javlonbek' } });
        fireEvent.change(screen.getByLabelText(/Last Name/i), { target: { value: 'Kosimov' } });
        fireEvent.change(screen.getByLabelText(/Choose Date/i), { target: { value: '2024-09-02' } });
        fireEvent.change(screen.getByLabelText(/Choose Time/i), { target: { value: '20:00' } });
        fireEvent.change(screen.getByLabelText(/Number of Guests/i), { target: { value: 11 } });
        fireEvent.change(screen.getByLabelText(/Occasion/i), { target: { value: 'birthday' } });

        fireEvent.click(screen.getByText(/Make your reservation/i));

        await waitFor(() => {
            expect(localStorage.getItem('reservation')).not.toBeNull();
            expect(toast.success).toHaveBeenCalledWith('Reservation successfully saved!', {
                theme: "colored"
            });
        });
    });

    test('should display reservation details if reservation exists', async () => {
        localStorage.setItem('reservation', JSON.stringify({
            firstName: 'Javlonbek',
            lastName: 'Kosimov',
            reservationDate: '2024-09-02',
            reservationTime: '20:00',
            numberOfGuests: 11,
            occasion: 'birthday'
        }));

        renderWithRouter(<Reservations />);

        expect(await screen.findByTestId('reservation-details')).toBeInTheDocument();
        expect(await screen.findByTestId('first-name')).toHaveTextContent('Javlonbek');
        expect(await screen.findByTestId('last-name')).toHaveTextContent('Kosimov');
        expect(await screen.findByTestId('reservation-date')).toHaveTextContent('2024-09-02');
        expect(await screen.findByTestId('reservation-time')).toHaveTextContent('20:00');
        expect(await screen.findByTestId('number-of-guests')).toHaveTextContent('11');
        expect(await screen.findByTestId('occasion')).toHaveTextContent('birthday');
    });


    test('should delete reservation and show toast', async () => {
        localStorage.setItem('reservation', JSON.stringify({
            firstName: 'Javlonbek',
            lastName: 'Kosimov',
            reservationDate: '2024-09-02',
            reservationTime: '20:00',
            numberOfGuests: 11,
            occasion: 'birthday'
        }));

        renderWithRouter(<Reservations />);

        fireEvent.click(screen.getByText(/Delete Reservation/i));

        await waitFor(() => {
            expect(localStorage.getItem('reservation')).toBeNull();
            expect(toast.error).toHaveBeenCalledWith('Reservation deleted!', {
                theme: "colored"
            });
        });
    });
});
