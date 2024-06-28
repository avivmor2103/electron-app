import './App.css';
import { useState, useEffect } from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { Layout } from './components/Layout';
import { Results } from './pages/Results';
import { Home } from './pages/Home';
import { Ipc } from './pages/Ipc';

function App() {

  const [tasks, setTasks] = useState(()=>{
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [] ;
  });


  useEffect(()=>{
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks(prevTasks => [
      {
        text: task,
        completed: false
      }, ...prevTasks]);
  }

  const markTaskCompleted = (index) => {
    const editedTasks = tasks.slice();
    editedTasks[index].completed = !editedTasks[index].completed;
    setTasks(editedTasks);
    return
  }

  const deleteTask = (index) => {
    const editedTasks = tasks.slice();
    editedTasks.splice(index, 1);
    setTasks(editedTasks);
  } 


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="/" element={<Home addTask={addTask} tasks={tasks} markTaskComplete={markTaskCompleted} deleteTask={deleteTask} />} />
            <Route path='/results' element={<Results tasks={tasks}/>}/>
            <Route path='/ipc' element={<Ipc/>} />
          </Route>
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
