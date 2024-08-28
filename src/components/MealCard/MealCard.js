import styles from "./MealCard.module.css"
import { Link } from 'react-router-dom';
import { faMotorcycle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const MealCard = ({meal}) => {
    return (
        <div className={styles.card}>
            <div className={styles.cardHeader}>
                <img className={styles.cardImg} src={meal.image} alt={`Card Meal ${meal.id}`} />
            </div>
            <div className={styles.cardBody}>
                <div className={styles.cardContainer}>
                    <h3 className={styles.cardHeader}>{meal.name}</h3>
                    <span className={styles.cardPrice}>{meal.price}</span>
                </div>
                <p className={styles.cardText}>{meal.description}</p>
                <Link className={styles.cardLink} to="/order">
                    Order a delivery
                    <FontAwesomeIcon icon={faMotorcycle} size="lg"/>
                </Link>
            </div>
        </div>
    )
}

export default MealCard