import { Trash } from 'phosphor-react'
import styles from './task.module.css'
import { CheckTasks } from './check-tasks'

export interface Task {
  id: number
  content: string
  isCompleted: boolean
}

interface TaskProps {
  task: Task
  handleCheckboxChange: (id: number) => void
  deleteTask: (id: number) => void
}

export function Task({ task, deleteTask, handleCheckboxChange }: TaskProps) {
  return (
    <div className={styles.task}>
      <div className={styles.checkboxContainer}>
        <CheckTasks
          checked={task.isCompleted}
          onChange={() => handleCheckboxChange(task.id)}
          id={`task-${task.id}`}
        />
      </div>
      <label
        className={`${styles.taskContent} ${task.isCompleted && styles.completed}`}
        htmlFor={`task-${task.id}`}
      >
        <span>{task.content}</span>
      </label>
      <button
        type="button"
        className={styles.deleteTask}
        onClick={() => deleteTask(task.id)}
      >
        <Trash weight="bold" />
      </button>
    </div>
  )
}
