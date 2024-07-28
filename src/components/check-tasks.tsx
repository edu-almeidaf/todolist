import { InputHTMLAttributes } from 'react'
import styles from './check-tasks.module.css'

interface CheckTasksProps extends InputHTMLAttributes<HTMLInputElement> {}

export function CheckTasks(props: CheckTasksProps) {
  return (
    <div className={styles.checkboxContainer}>
      <input type="checkbox" {...props} />
    </div>
  )
}
