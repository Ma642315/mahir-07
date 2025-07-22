import React, { useState } from 'react';
import TaskForm from './components/taskForm';
import TaskList from './components/taskList';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [editableTask, setEditableTask] = useState(null);

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: Date.now(), status: 'Pending' }]);
  };

  const updateTask = (updatedTask) => {
    setTasks(tasks.map(task => task.id === updatedTask.id ? updatedTask : task));
    setEditableTask(null);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const changeStatus = (id, newStatus) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, status: newStatus } : task));
  };

  return (
    <div className="app-container">
      <h1>Task Manager</h1>
 <TaskForm addTask={addTask} editableTask={editableTask} updateTask={updateTask} />
      <TaskList 
        tasks={tasks} 
        onEdit={setEditableTask} 
        onDelete={deleteTask} 
        onChangeStatus={changeStatus}
      />
    </div>
  );
}

export default App;