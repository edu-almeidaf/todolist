import { PlusCircle } from 'phosphor-react'
import styles from './create-task-form.module.css'
import { ChangeEvent, useState, FormEvent, InvalidEvent } from 'react'

interface CreateTaskFormProps {
  createNewTask: (task: string) => void
}

export function CreateTaskForm({ createNewTask }: CreateTaskFormProps) {
  const [taskContent, setTaskContent] = useState('')

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('')
    setTaskContent(event.target.value)
  }

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()

    createNewTask(taskContent)
    setTaskContent('')
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório!')
  }

  return (
    <form className={styles.addTask} onSubmit={handleCreateNewTask}>
      <input
        type="text"
        required
        onInvalid={handleNewTaskInvalid}
        placeholder="Adicione uma nova tarefa"
        value={taskContent}
        onChange={handleNewTaskChange}
      />
      <button type="submit" disabled={!taskContent.length}>
        Criar
        <PlusCircle weight="bold" />
      </button>
    </form>
  )
}
