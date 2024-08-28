import styles from "./HeroSection.module.css"
import heroImg from "../../assets/restaurant chef B.jpg"

const Header = () => {
    return (
        <div className={styles.heroSection} id="home">
            <div className={`container ${styles.heroContainer}`}>
                <div className={styles.heroSectionLeft}>
                    <h1>Little Lemon</h1>
                    <span>Chicago</span>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a
                        modern twist.</p>
                    <button className="btn">Reserve a table</button>
                </div>
                <div className={styles.heroSectionRight}>
                    <img src={heroImg} alt="heroImg"/>
                </div>
            </div>
        </div>
    )
}

export default Header