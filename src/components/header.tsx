import { Logo } from '../assets/logo'
import styles from './header.module.css'

export function Header() {
  return (
    <header>
      <Logo />
      <h1 className={styles.title}>
        to<span>do</span>
      </h1>
    </header>
  )
}
