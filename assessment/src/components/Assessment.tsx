

import { Button } from "@chakra-ui/react"
import axios from "axios"
import { useEffect, useState } from "react"

interface Todo {
  id: number
  title: string
}

const Assessment = () => {
  const [tasks, setTasks] = useState<Todo[]>([])

  const fetchData = () => {
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then((response) => setTasks(response.data))
  }

  useEffect(() => {
    fetchData();
  }, [])

  const addUser = () => {
    const newTask: Todo = { id: Date.now(), title: 'What shall I do next?' }
    setTasks([newTask, ...tasks])
    axios.post('https://jsonplaceholder.typicode.com/todos', newTask)
      .then(response => setTasks([response.data, ...tasks]))
  }

  const deleteUser = (taskToDelete: Todo) => {
    setTasks(tasks.filter(task => task.id !== taskToDelete.id))
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${taskToDelete.id}`)
  }

  return (
    <>
      <h1>Todo List</h1>
      <Button onClick={addUser}>Add</Button>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {task.title}
            <Button onClick={() => deleteUser(task)}>Delete</Button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Assessment