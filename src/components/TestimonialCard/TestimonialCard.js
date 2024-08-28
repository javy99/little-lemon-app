import styles from "./TestimonialCard.module.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';

const TestimonialCard = ({user}) => {
    const totalStars = 5;
    const rating = user.review;

    return (
        <div className={styles.card}>
            <div className={styles.cardHeader}>
                <img className={styles.cardImg} src={user.image} alt={`Card Testimonial ${user.id}`}/>
                <div className={styles.cardContainer}>
                    <h4>{user.name}</h4>
                    <p>{user.nickname}</p>
                </div>
            </div>
            <div className={styles.cardBody}>
                <div className={styles.starContainer}>
                    {[...Array(totalStars)].map((_, index) => (
                        <FontAwesomeIcon
                            key={index}
                            icon={index < rating ? solidStar : regularStar}
                            className={index < rating ? styles.starFilled : styles.starEmpty}
                        />
                    ))}
                </div>
                <p className={styles.cardDescription}>{user.description}</p>
            </div>
        </div>
    )
}

export default TestimonialCard