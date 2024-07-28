import { Task } from './task'
import styles from './tasks-stats.module.css'

interface TasksStatsProps {
  tasks: Task[]
}

export function TasksStats({ tasks }: TasksStatsProps) {
  const countCompletedTasks = tasks.reduce(
    (total, task) => (task.isCompleted ? total + 1 : total),
    0,
  )

  return (
    <div className={styles.tasksStats}>
      <div>
        <p>Tarefas criadas</p>
        <div className={styles.counter}>
          <span>{tasks.length}</span>
        </div>
      </div>

      <div>
        <p>Concluídas</p>
        <div className={styles.counter}>
          <span>
            {tasks.length ? `${countCompletedTasks} de ${tasks.length}` : 0}
          </span>
        </div>
      </div>
    </div>
  )
}
