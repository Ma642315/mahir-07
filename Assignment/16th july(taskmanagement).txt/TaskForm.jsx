import React, { useState, useEffect } from 'react';

function TaskForm({ addTask, editableTask, updateTask }) {
  const [task, setTask] = useState({
    title: '',
    description: '',
    priority: 'Low'
  });

  useEffect(() => {
    if (editableTask) setTask(editableTask);
  }, [editableTask]);

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.title.trim()) return;

    editableTask ? updateTask(task) : addTask(task);
    setTask({ title: '', description: '', priority: 'Low' });
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input type="text" name="title" value={task.title} onChange={handleChange} placeholder="Task Title" reuired />
      <textarea name="description" value={task.description} onChange={handleChange} placeholder="Description" />
      <select name="priority" value={task.priority} onChange={handleChange}>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>
      <button type="submit">{editableTask ? 'Update Task' : 'Add Task'}</button>
    </form>
  );
}

export default TaskForm;