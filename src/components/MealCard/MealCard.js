import styles from "./MealCard.module.css"
import { Link } from 'react-router-dom';
import { faMotorcycle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

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

MealCard.propTypes = {
    meal: PropTypes.shape({
        id: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
    }).isRequired,
};

export default MealCard