import styles from "./SpecialsSection.module.css"
import bruschettaImage from '../../assets/bruchetta.svg';
import greekSaladImage from '../../assets/greek salad.jpg';
import lemonDessertImage from '../../assets/lemon dessert.jpg';
import MealCard from "../MealCard/MealCard";

const meals = [
    {
        id: 1,
        name: 'Greek Salad',
        image: greekSaladImage,
        price: '$12.99',
        description: `The famous greek salad of crispy lettuce, peppers, olives and 
      our Chicago style feta cheese, garnished with crunchy garlic and rosemary 
      croutons.`,
    },
    {
        id: 2,
        name: 'Bruschetta',
        image: bruschettaImage,
        price: '$5.99',
        description: `Our Bruschetta is made from grilled bread that has been 
      smeared with garlic and seasoned with salt and olive oil.`,
    },
    {
        id: 3,
        name: 'Lemon Dessert',
        image: lemonDessertImage,
        price: '$5.00',
        description: `This comes straight from grandma's recipe book, every last 
      ingredient has been sourced and is as authentic as can be imagined.`,
    },
];

const SpecialsSection = () => {
    return (
        <section className={`container ${styles.specialsSection}`} id="menu">
            <div className={styles.specialsHeader}>
                <h2 className={styles.specialsHeading}>This week's specials!</h2>
                <button className="btn">Online Menu</button>
            </div>
            <div className={styles.mealsContainer}>
                {meals.map(meal => (
                    <MealCard key={meal.id} meal={meal} />
                ))}
            </div>
        </section>
    )
}

export default SpecialsSection
