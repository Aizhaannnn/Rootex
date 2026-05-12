import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.scss'

export default function Navbar() {

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>MyApp</div>
      <div className={styles.links}>
        <NavLink to="/" end className={({ isActive }) => isActive ? styles.active : ''}>
          Главная
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? styles.active : ''}>
          О нас
        </NavLink>
        <NavLink to="/contacts" className={({ isActive }) => isActive ? styles.active : ''}>
          Контакты
        </NavLink>
      </div>
    </nav>
  )
}