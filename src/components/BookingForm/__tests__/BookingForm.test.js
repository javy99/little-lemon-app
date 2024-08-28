import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import BookingForm from '../BookingForm';

jest.mock('react-hook-form', () => ({
    useForm: () => ({
        register: jest.fn(),
        handleSubmit: (callback) => (event) => {
            event.preventDefault();
            callback({
                firstName: 'Javlonbek',
                lastName: 'Kosimov',
                reservationDate: '2024-09-02',
                reservationTime: '20:00',
                numberOfGuests: 5,
                occasion: 'birthday'
            });
        },
        formState: {
            errors: {
                firstName: { message: 'First name is required' },
                lastName: { message: 'Last name is required' },
                reservationDate: { message: 'Date is required' },
                reservationTime: { message: 'Time is required' },
                numberOfGuests: { message: 'At least one guest is required' },
                occasion: { message: 'Occasion is required' }
            }
        }
    }),
}));

const availableTimes = ["12:00", "12:30", "13:00", "13:30", "14:00", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00"];

describe('BookingForm Component', () => {
    test('should render form fields correctly', () => {
        render(<BookingForm onSubmit={jest.fn()} availableTimes={availableTimes} />);

        expect(screen.getByLabelText(/First Name/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Last Name/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Choose Date/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Choose Time/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Number of Guests/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Occasion/i)).toBeInTheDocument();
    });

    test('should show validation errors for invalid input', async () => {
        render(<BookingForm onSubmit={jest.fn()} availableTimes={availableTimes} />);

        fireEvent.change(screen.getByLabelText(/First Name/i), { target: { value: '' } });
        fireEvent.change(screen.getByLabelText(/Last Name/i), { target: { value: '' } });
        fireEvent.change(screen.getByLabelText(/Choose Date/i), { target: { value: '' } });
        fireEvent.change(screen.getByLabelText(/Choose Time/i), { target: { value: '' } });
        fireEvent.change(screen.getByLabelText(/Number of Guests/i), { target: { value: '' } });
        fireEvent.change(screen.getByLabelText(/Occasion/i), { target: { value: '' } });

        fireEvent.click(screen.getByText(/Make your reservation/i));

        await waitFor(() => {
            expect(screen.getByText('First name is required')).toBeInTheDocument();
            expect(screen.getByText('Last name is required')).toBeInTheDocument();
            expect(screen.getByText('Date is required')).toBeInTheDocument();
            expect(screen.getByText('Time is required')).toBeInTheDocument();
            expect(screen.getByText('At least one guest is required')).toBeInTheDocument();
            expect(screen.getByText('Occasion is required')).toBeInTheDocument();
        });
    });

    test('should call onSubmit with correct data on valid submission', async () => {
        const mockOnSubmit = jest.fn();
        render(<BookingForm onSubmit={mockOnSubmit} availableTimes={availableTimes} />);

        fireEvent.change(screen.getByLabelText(/First Name/i), { target: { value: 'Javlonbek' } });
        fireEvent.change(screen.getByLabelText(/Last Name/i), { target: { value: 'Kosimov' } });
        fireEvent.change(screen.getByLabelText(/Choose Date/i), { target: { value: '2024-09-02' } });
        fireEvent.change(screen.getByLabelText(/Choose Time/i), { target: { value: '20:00' } });
        fireEvent.change(screen.getByLabelText(/Number of Guests/i), { target: { value: 5 } });
        fireEvent.change(screen.getByLabelText(/Occasion/i), { target: { value: 'birthday' } });

        fireEvent.click(screen.getByText(/Make your reservation/i));

        await waitFor(() => {
            expect(mockOnSubmit).toHaveBeenCalledWith({
                firstName: 'Javlonbek',
                lastName: 'Kosimov',
                reservationDate: '2024-09-02',
                reservationTime: '20:00',
                numberOfGuests: 5,
                occasion: 'birthday',
            });
        });
    });

    test('should render available times in the dropdown', () => {
        render(<BookingForm onSubmit={jest.fn()} availableTimes={availableTimes} />);

        availableTimes.forEach(time => {
            expect(screen.getByText(time)).toBeInTheDocument();
        });
    });
});
