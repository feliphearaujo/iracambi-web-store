import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import styles from './footer.module.css'

export default function Footer(){
    return(
        <>
            <footer className={styles.footer}>
                    <div className={styles.moldura}>
                    <FontAwesomeIcon className={styles.icon} icon={faEnvelope} />
                    </div>
                    <div className={styles.moldura}>
                    <FontAwesomeIcon className={styles.icon} icon={faLocationDot} />
                    </div>
                    <div className={styles.moldura}>
                    <FontAwesomeIcon className={styles.icon} icon={faInstagram} />
                    </div>
            </footer>
        
        </>
    )
}