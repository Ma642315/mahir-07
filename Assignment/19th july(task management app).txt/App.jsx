import { useEffect, useState } from "react";
import { api } from "./api";
import TaskItem from "./components/TaskItem";

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  const fetchTasks = async () => {
    const res = await api.get("/tasks");
    setTasks(res.data);
  };

  const addTask = async () => {
    if (!title.trim()) return;
    const newTask = { title, completed: false };
    const res = await api.post("/tasks", newTask);
    setTasks([...tasks, res.data]);
    setTitle("");
  };

  const deleteTask = async (id) => {
    await api.delete(`/tasks/${id}`);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleComplete = async (task) => {
      const updated = { ...task, completed: !task.completed };
    const res = await api.put(`/tasks/${task.id}`, updated);
    setTasks(tasks.map(t => (t.id === task.id ? res.data : t)));
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="task-container">
      <h1>Task Manager</h1>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
         placeholder="Add a new task"
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            onDelete={deleteTask}
            onToggle={toggleComplete}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;