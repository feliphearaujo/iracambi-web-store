import styles from './header.module.css'
import Navbar from './components/navbar/Navbar'


export default function Header() {
  return (
    <>

      <header className={styles.header}>

      < Navbar/>
 
     </header>

    <div className={styles.slogan}>

      <h1>Iracambi</h1>
      <h2>Salvando florestas, transformando vidas</h2>

    </div>
 
    </>
    
  )
}