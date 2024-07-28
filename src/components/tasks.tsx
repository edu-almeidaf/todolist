import styles from './tasks.module.css'
import { useState } from 'react'
import { CreateTaskForm } from './create-task-form'
import { TasksStats } from './tasks-stats'
import { EmptyState } from './empty-state'
import { Task } from './task'

export function Tasks() {
  const [tasks, setTasks] = useState<Task[]>([])

  function createNewTask(taskContent: string) {
    const newTask: Task = {
      id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
      content: taskContent,
      isCompleted: false,
    }

    setTasks((tasks) => [...tasks, newTask])
  }

  function handleCheckboxChange(id: number) {
    setTasks((state) =>
      state.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task,
      ),
    )
  }

  function deleteTask(idToRemove: number) {
    setTasks((state) => state.filter((task) => task.id !== idToRemove))
  }

  return (
    <main>
      <CreateTaskForm createNewTask={createNewTask} />

      <section className={styles.tasks}>
        <TasksStats tasks={tasks} />

        <div>
          {tasks.length ? (
            <div className={styles.taskList}>
              {tasks.map((task) => (
                <Task
                  key={task.id}
                  task={task}
                  handleCheckboxChange={handleCheckboxChange}
                  deleteTask={deleteTask}
                />
              ))}
            </div>
          ) : (
            <EmptyState />
          )}
        </div>
      </section>
    </main>
  )
}
