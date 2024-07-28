import styles from './app.module.css'
import { Logo } from './assets/logo'

export function App() {
  return (
    <>
      <header>
        <Logo />
        <h1 className={styles.title}>
          to<span>do</span>
        </h1>
      </header>
    </>
  )
}
