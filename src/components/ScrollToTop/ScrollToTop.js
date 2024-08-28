import styles from './ScrollToTop.module.css';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) { // Adjust this value as needed
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        isVisible && (
            <button className={styles.scrollToTopBtn} onClick={scrollToTop}>
                <FontAwesomeIcon icon={faArrowUp} />
            </button>
        )
    );
};

export default ScrollToTop;