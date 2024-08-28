import styles from "./Navbar.module.css"
import logo from "../../assets/Logo.svg"
import {Link} from "react-router-dom";
import { Link as ScrollLink } from 'react-scroll';
import {useState} from "react";
import burgerIcon from "../../assets/🦆 icon _hamburger menu.svg"

const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    }

    return (
        <header>
            <nav className="container">
                <div className={styles.logo}>
                    <Link to="/">
                        <img src={logo} alt="logo"/>
                    </Link>
                </div>
                <div className={styles.burger} onClick={toggleNav}>
                    <img src={burgerIcon} alt=""/>
                </div>
                <ul className={`${styles.navLinks} ${isNavOpen ? styles.active : ''}`}>
                    <li><ScrollLink to="home" smooth={true} duration={500}>Home</ScrollLink></li>
                    <li><ScrollLink to="about" smooth={true} duration={500}>About</ScrollLink></li>
                    <li><ScrollLink to="menu" smooth={true} duration={500}>Menu</ScrollLink></li>
                    <li><Link to="/reservations">Reservations</Link></li>
                    <li><Link to="/">Order Online</Link></li>
                    <li><Link to="/">Login</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar