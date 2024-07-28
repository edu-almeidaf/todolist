import { PlusCircle } from 'phosphor-react'
import styles from './app.module.css'
import { Logo } from './assets/logo'

export function App() {
  return (
    <div className={styles.container}>
      <header>
        <Logo />
        <h1 className={styles.title}>
          to<span>do</span>
        </h1>
      </header>
      <main>
        <form className={styles.addTask}>
          <input type="text" placeholder="Adicione uma nova tarefa" />
          <button type="submit">
            Criar
            <PlusCircle weight="bold" />
          </button>
        </form>

        <section className={styles.tasks}>
          <div className={styles.tasksStats}>
            <div>
              <p>Tarefas criadas</p>
              <div className={styles.counter}>
                <span>0</span>
              </div>
            </div>

            <div>
              <p>Concluídas</p>
              <div className={styles.counter}>
                <span>0</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
