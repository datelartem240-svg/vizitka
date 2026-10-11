import { Link } from 'react-router'
import styles from '../styles/HomePage.module.css'
import Header from '../components/Header'
import SideBar from '../components/SideBar' 

export default function HomePage() {

    return <>
        <div className={styles.contentContainer}>
            <Header/>
            <SideBar/>
        </div>
    </>
}