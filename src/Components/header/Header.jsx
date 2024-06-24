import styles from './header.module.css'
import { Link } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
export default function Header() {
  return (
    <header className={styles.header}>
     <Navbar/>


    </header>
  )
}
