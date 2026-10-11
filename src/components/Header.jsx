import ThemeSwitcher from '../components/ThemeSwitcher'
import styles from '../styles/Header.module.css'
import { useState } from 'react'

export default function Header() {

    const [isOpen, setIsOpen] = useState(false);

    return<>
        <div className={styles.contentContainer}>
            <div></div>
            <h3 className={styles.linkEmail}>
                artem22october@gmail.com
            </h3>
            <ul className={styles.linksContainer}>
                <li><a></a></li>
                <li><a>About</a></li>
                <li><a>Projects</a></li>
                <li><a>Contact</a></li>
            </ul>
            <div className={styles.burgerContainer}>
                <button 
                    className={`${styles.burgerMenu} ${isOpen ? styles.open : ''}`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </div>
    </>
}