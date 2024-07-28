import { PlusCircle } from 'phosphor-react'
import styles from './create-task-form.module.css'
import { ChangeEvent, useState, FormEvent } from 'react'

interface CreateTaskFormProps {
  createNewTask: (task: string) => void
}

export function CreateTaskForm({ createNewTask }: CreateTaskFormProps) {
  const [taskContent, setTaskContent] = useState('')

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setTaskContent(event.target.value)
  }

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()

    if (!taskContent.trim()) {
      return
    }

    createNewTask(taskContent)
    setTaskContent('')
  }

  return (
    <form className={styles.addTask} onSubmit={handleCreateNewTask}>
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
  )
}
