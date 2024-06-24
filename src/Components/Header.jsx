import styles from './header.module.css'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className={styles.header}>
      <ul className={styles.menu}>
        <li><Link to="./">Home</Link></li>
        <li><Link to="./Product">Produtos</Link></li>
        <li><Link to="./Cart">Carrinho</Link></li>    
      </ul>


    </header>
  )
}
