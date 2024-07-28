import { PlusCircle, Trash } from 'phosphor-react'
import styles from './app.module.css'
import { Logo } from './assets/logo'
import { Clipboard } from './assets/clipboard'
import { ChangeEvent, FormEvent, useState } from 'react'

export interface Task {
  id: number
  content: string
  isCompleted: boolean
}

export function App() {
  const [tasks, setTasks] = useState<Task[]>([])

  const [taskContent, setTaskContent] = useState('')

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setTaskContent(event.target.value)
  }

  function createNewTask(event: FormEvent) {
    event.preventDefault()

    if (!taskContent.trim()) {
      return
    }

    const newTask: Task = {
      id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
      content: taskContent,
      isCompleted: false,
    }

    setTasks((tasks) => [...tasks, newTask])
    setTaskContent('')
  }

  function handleCheckboxChange(id: number) {
    setTasks((state) =>
      state.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task,
      ),
    )
  }

  function DeleteTask(idToRemove: number) {
    setTasks((state) => state.filter((task) => task.id !== idToRemove))
  }

  const countCompletedTasks = tasks.reduce(
    (total, task) => (task.isCompleted ? total + 1 : total),
    0,
  )

  return (
    <div className={styles.container}>
      <header>
        <Logo />
        <h1 className={styles.title}>
          to<span>do</span>
        </h1>
      </header>
      <main>
        <form className={styles.addTask} onSubmit={createNewTask}>
          <input
            type="text"
            placeholder="Adicione uma nova tarefa"
            value={taskContent}
            onChange={handleNewTaskChange}
          />
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
                <span>{tasks.length}</span>
              </div>
            </div>

            <div>
              <p>Concluídas</p>
              <div className={styles.counter}>
                <span>
                  {tasks.length
                    ? `${countCompletedTasks} de ${tasks.length}`
                    : 0}
                </span>
              </div>
            </div>
          </div>

          <div>
            {tasks.length ? (
              <div className={styles.taskList}>
                {tasks.map((task) => (
                  <div key={task.id} className={styles.task}>
                    <div className={styles.checkboxContainer}>
                      <input
                        type="checkbox"
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
                      onClick={() => DeleteTask(task.id)}
                    >
                      <Trash weight="bold" />
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className={styles.emptyState}>
                <Clipboard />
                <div className={styles.emptyMessages}>
                  <p>Você ainda não tem tarefas cadastradas</p>
                  <p>Crie tarefas e organize seus ítems a fazer</p>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  )
}
