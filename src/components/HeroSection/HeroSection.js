import styles from "./HeroSection.module.css"
import heroImg from "../../assets/restaurant chef B.jpg"
import {Link} from "react-router-dom";

const HeroSection = () => {
    return (
        <div className={styles.heroSection} id="home">
            <div className={`container ${styles.heroContainer}`}>
                <div className={styles.heroSectionLeft}>
                    <h1>Little Lemon</h1>
                    <span>Chicago</span>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a
                        modern twist.</p>
                    <Link to="/reservations" className="btn">Reserve a table</Link>
                </div>
                <div className={styles.heroSectionRight}>
                    <img src={heroImg} alt="heroImg"/>
                </div>
            </div>
        </div>
    )
}

export default HeroSection