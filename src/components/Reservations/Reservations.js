import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import styles from "./Reservations.module.css"
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ScrollToTop from "../ScrollToTop/ScrollToTop";

const reservationSchema = z.object({
    firstName: z.string().min(1, 'First name is required').max(100),
    lastName: z.string().min(1, 'Last name is required').max(100),
    reservationDate: z.string().nonempty('Date is required'),
    reservationTime: z.string().nonempty('Time is required'),
    numberOfGuests: z.number().min(1, 'At least one guest is required').max(20),
    occasion: z.string().nonempty('Occasion is required'),
});

const Reservations = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(reservationSchema),
    })

    const onSubmit = (data) => {
        localStorage.setItem('reservation', JSON.stringify(data));
        toast.success('Reservation successfully saved!', {
            theme: "colored"
        });
    }

    const handleDelete = () => {
        localStorage.removeItem('reservation');
        toast.error('Reservation deleted!', {
            theme: "colored"
        });
        setTimeout(() => window.location.reload(), 2000);
    };

    const savedReservation = JSON.parse(localStorage.getItem('reservation'));

    return (
        <>
            <Navbar />
            <section className={`container ${styles.reservationsSection}`} id="home">
                <h2>Table Reservation</h2>
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
                            <option value="12:00">12:00 PM</option>
                            <option value="12:30">12:30 PM</option>
                            <option value="13:00">1:00 PM</option>
                            <option value="13:30">1:30 PM</option>
                            <option value="14:00">2:00 PM</option>
                            <option value="18:00">6:00 PM</option>
                            <option value="18:30">6:30 PM</option>
                            <option value="19:00">7:00 PM</option>
                            <option value="19:30">7:30 PM</option>
                            <option value="20:00">8:00 PM</option>
                            <option value="20:30">8:30 PM</option>
                            <option value="21:00">9:00 PM</option>
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
                            {...register('numberOfGuests', {valueAsNumber: true})}
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


                {savedReservation && (
                    <div className={styles.reservationDetails} data-testid="reservation-details">
                        <h3>Reservation Details</h3>
                        <p><strong>First Name:</strong> <span data-testid="first-name">{savedReservation.firstName}</span></p>
                        <p><strong>Last Name:</strong> <span data-testid="last-name">{savedReservation.lastName}</span></p>
                        <p><strong>Date:</strong> <span data-testid="reservation-date">{savedReservation.reservationDate}</span></p>
                        <p><strong>Time:</strong> <span data-testid="reservation-time">{savedReservation.reservationTime}</span></p>
                        <p><strong>Number of Guests:</strong> <span data-testid="number-of-guests">{savedReservation.numberOfGuests}</span></p>
                        <p><strong>Occasion:</strong> <span data-testid="occasion">{savedReservation.occasion}</span></p>
                        <button className={`btn ${styles.deleteBtn}`} onClick={handleDelete}>Delete Reservation</button>
                    </div>
                )}
            </section>
            <Footer/>
            <ScrollToTop />
            <ToastContainer
                position="bottom-center"
                autoClose={2000}
            />
        </>
    )
}

export default Reservations