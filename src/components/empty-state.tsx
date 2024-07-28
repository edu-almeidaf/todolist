import styles from './empty-state.module.css'
import { Clipboard } from '../assets/clipboard'

export function EmptyState() {
  return (
    <div className={styles.emptyState}>
      <Clipboard />
      <div className={styles.emptyMessages}>
        <p>Você ainda não tem tarefas cadastradas</p>
        <p>Crie tarefas e organize seus ítems a fazer</p>
      </div>
    </div>
  )
}
