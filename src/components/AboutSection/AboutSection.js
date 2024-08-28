import styles from "./AboutSection.module.css"
import img1 from "../../assets/Mario and Adrian A.jpg"
import img2 from "../../assets/restaurant.jpg"


const AboutSection = () => {
    return (
        <section id="about" className={`container ${styles.aboutSection}`}>
            <div className={styles.aboutSectionLeft}>
                <h2>Little Lemon</h2>
                <span>Chicago</span>
                <p>Little Lemon Chicago is a family owned Mediterranean restaurant located in the heart of the city. The restaurant is run by brothers Mario and Adrian, who have always had a passion for cooking and serving delicious food. Growing up in a Mediterranean household, the brothers were exposed to traditional recipes from an early age, and they decided to bring those recipes to the masses with a modern twist. At Little Lemon, you can expect to find a menu full of classic dishes with a creative twist that makes them stand out from the rest. Whether you're looking for a quick lunch or a leisurely dinner, Little Lemon Chicago is the perfect place to indulge in a delicious meal in a cozy and welcoming atmosphere.</p>
            </div>
            <div className={styles.aboutSectionRight}>
                <img src={img1} alt="About Img1"/>
                <img src={img2} alt="About Img2"/>
            </div>
        </section>
    )
}

export default AboutSection