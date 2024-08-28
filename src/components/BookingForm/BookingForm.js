import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import styles from "./BookingForm.module.css"
import PropTypes from 'prop-types';

const reservationSchema = z.object({
    firstName: z.string().min(1, 'First name is required').max(100),
    lastName: z.string().min(1, 'Last name is required').max(100),
    reservationDate: z.string().nonempty('Date is required'),
    reservationTime: z.string().nonempty('Time is required'),
    numberOfGuests: z.number().min(1, 'At least one guest is required').max(20),
    occasion: z.string().nonempty('Occasion is required'),
});

const BookingForm = ({ onSubmit, availableTimes }) => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(reservationSchema),
    })

    return (
        <form className={styles.reservationsForm} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.formGroupInline}>
                <div className={styles.formGroup}>
                    <label htmlFor="firstName">First Name</label>
                    <input
                        id="firstName"
                        className={`${styles.formInput} ${errors.firstName ? styles.errorBorder : ''}`}
                        type="text"
                        {...register('firstName')}
                    />
                    {errors.firstName && <p className={styles.errorMessage}>{errors.firstName.message}</p>}
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        id="lastName"
                        className={`${styles.formInput} ${errors.lastName ? styles.errorBorder : ''}`}
                        type="text"
                        {...register('lastName')}
                    />
                    {errors.lastName && <p className={styles.errorMessage}>{errors.lastName.message}</p>}
                </div>
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="reservationDate">Choose Date</label>
                <input
                    id="reservationDate"
                    className={`${styles.formInput} ${errors.reservationDate ? styles.errorBorder : ''}`}
                    type="date"
                    {...register('reservationDate')}
                />
                {errors.reservationDate &&
                    <p className={styles.errorMessage}>{errors.reservationDate.message}</p>}
            </div>

            <div className={`${styles.formGroup} ${styles.selectContainer}`}>
                <label htmlFor="reservationTime">Choose Time</label>
                <select
                    id="reservationTime"
                    className={`${styles.formInput} ${errors.reservationTime ? styles.errorBorder : ''}`}
                    {...register('reservationTime')}
                >
                    <option value="" disabled>Select time</option>
                    {availableTimes.map(time => (
                        <option key={time} value={time}>{time}</option>
                    ))}
                </select>
                {errors.reservationTime &&
                    <p className={styles.errorMessage}>{errors.reservationTime.message}</p>}
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="numberOfGuests">Number of Guests</label>
                <input
                    id="numberOfGuests"
                    className={`${styles.formInput} ${errors.numberOfGuests ? styles.errorBorder : ''}`}
                    type="number"
                    {...register('numberOfGuests', { valueAsNumber: true })}
                />
                {errors.numberOfGuests &&
                    <p className={styles.errorMessage}>{errors.numberOfGuests.message}</p>}
            </div>

            <div className={`${styles.formGroup} ${styles.selectContainer}`}>
                <label htmlFor="occasion">Occasion</label>
                <select
                    id="occasion"
                    className={`${styles.formInput} ${errors.occasion ? styles.errorBorder : ''}`}
                    {...register('occasion')}
                >
                    <option value="" disabled>Select occasion</option>
                    <option value="birthday">Birthday</option>
                    <option value="anniversary">Anniversary</option>
                    <option value="business">Business Meeting</option>
                    <option value="other">Other</option>
                </select>
                {errors.occasion && <p className={styles.errorMessage}>{errors.occasion.message}</p>}
            </div>
            <button className={`btn ${styles.formBtn}`}>Make your reservation</button>
        </form>
    );
};

BookingForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    availableTimes: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default BookingForm;
