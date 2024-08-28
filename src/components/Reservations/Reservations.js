import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import styles from "./Reservations.module.css";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import BookingForm from "../BookingForm/BookingForm";

const Reservations = () => {
    const availableTimes = ["12:00", "12:30", "13:00", "13:30", "14:00", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00"];

    const onSubmit = (data) => {
        localStorage.setItem('reservation', JSON.stringify(data));
        toast.success('Reservation successfully saved!', {
            theme: "colored"
        });
        setTimeout(() => window.location.reload(), 2000);
    };

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
                <BookingForm onSubmit={onSubmit} availableTimes={availableTimes} />

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
            <Footer />
            <ScrollToTop />
            <ToastContainer
                position="bottom-center"
                autoClose={2000}
            />
        </>
    );
};

export default Reservations;
