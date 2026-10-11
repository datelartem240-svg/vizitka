import styles from '../styles/SideBar.module.css'
import telegram from '../assets/icons/telegram.png'
import email from '../assets/icons/email.png'
import x from '../assets/icons/x.png'
import github from '../assets/icons/github.png'

export default function SideBar() {

    return<>
        <div className={styles.contentContainer}>
            <a href='https://t.me/lavahound_cr' className={styles.links}>
                <img src={telegram}/>
            </a>
            <a href='https://t.me/lavahound_cr' className={styles.links}>
                <img src={email}/>
            </a>
            <a href='' className={styles.links}>
                <img src={x}/>
            </a>
            <a href='https://t.me/lavahound_cr' className={styles.links}>
                <img src={github}/>
            </a>
        </div>
    </>
}