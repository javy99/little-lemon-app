import styles from "./Footer.module.css"
import footerLogo from "../../assets/logo-white.png"
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Link as ScrollLink } from 'react-scroll';


const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.footerContainer}`}>
                <img className={styles.footerLogo} src={footerLogo} alt="footer-logo"/>
                <nav className={styles.navigation}>
                    <h4>Sitemap</h4>
                    <ul className={styles.navLinks}>
                        <li><ScrollLink to="home" smooth={true} duration={500}>Home</ScrollLink></li>
                        <li><ScrollLink to="about" smooth={true} duration={500}>About</ScrollLink></li>
                        <li><ScrollLink to="menu" smooth={true} duration={500}>Menu</ScrollLink></li>
                        <li><Link to="/reservations">Reservations</Link></li>
                        <li><Link to="/">Order Online</Link></li>
                        <li><Link to="/">Login</Link></li>
                    </ul>
                </nav>
                <div>
                    <h4>Contact us</h4>
                    <ul className={styles.navLinks}>
                        <li>
                        <FontAwesomeIcon icon={faMapMarkerAlt} className={styles.icon}/> 678 Pisa Ave, Chicago, IL
                            60611
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faPhoneAlt} className={styles.icon}/> (312) 593-2744
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faEnvelope} className={styles.icon}/> customer@littlelemon.com
                        </li>
                    </ul>
                </div>
                <div>
                    <h4>Connect with us</h4>
                    <ul className={styles.navLinks}>
                        <li>
                            <Link to="/">
                                <FontAwesomeIcon icon={faFacebook} className={styles.icon}/> Facebook
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <FontAwesomeIcon icon={faTwitter} className={styles.icon}/> Twitter
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <FontAwesomeIcon icon={faInstagram} className={styles.icon}/> Instagram
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer