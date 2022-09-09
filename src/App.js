import Header from './components/Header'
import Tasks from './components/Tasks';
import { useState } from "react";

import AddTask from './components/AddTask';
function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'Sept 8th at 3:11 pm',
      reminder: true,

    },
    {
      id: 2,
      text: 'Completing Assignment',
      day: 'Sept 8th at 9:11 pm',
      reminder: true,

    },
    {
      id: 3,
      text: 'Get Ice-Cream',
      day: 'Sept 9th at 9:45 pm',
      reminder: false,

    }

  ])

  // Toggle Reminer
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ?
      { ...task, reminder: !task.reminder } : task))
  }

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }


  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ?
        <Tasks tasks={tasks} onToggle={toggleReminder} onDelete={deleteTask} /> : ('No Tasks To Show')}
    </div>
  );
}

export default App;
