import { Button } from "@chakra-ui/react"
import axios from "axios"
import { useEffect, useState } from "react"

interface todos{
    id:number
    title:string
}


const Assessment = () => {
const [tasks, setTasks] = useState<todos[]>([])


    const FetchData = () => {
        axios.get(' https://jsonplaceholder.typicode.com/todos')
        .then((response) => setTasks(response.data))
    }

    useEffect(() => {
        FetchData();
        
      
    }, [])

    const addUser = () => {
        const newTask = {id: 0, title: 'What shall i do next?'}
        setTasks([newTask, ...tasks])
        axios.post('https://jsonplaceholder.typicode.com/todos', newTask)
        .then(response => setTasks([response.data, ...tasks]))
    }

    // const updateUser = (title:todos) => {

    //     const updatedUser = {...tasks, title: title  + 'Finished'}
    //     setTasks(tasks.map((u) => (u.id === tasks.id ? updatedUser : u)))
    // }

    const deleteUser = (tasks: todos) => {
        setTasks(tasks.filter(u => u.id !== tasks.id))
        axios.delete('https://jsonplaceholder.typicode.com/todos' )
    }

    


  return (
   <>   
   <h1>
    <ul>
    <button className="btn btn-primary mx-3 mb-3" onClick={addUser}>Add</button>
        {tasks.map(task => (<li key={task.id}>{task.title}</li>))}
        <div>
   
        </div>
    </ul>
   </h1>
        
   </>
  )
}

export default Assessment