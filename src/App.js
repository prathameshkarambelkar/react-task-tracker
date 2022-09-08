import Header from './components/Header'
import Tasks from './components/Tasks';
import { useState } from "react"
function App() {
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


  return (
    <div className="container">
      <Header/>
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
