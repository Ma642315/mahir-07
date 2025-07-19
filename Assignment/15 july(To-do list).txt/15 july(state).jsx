import React, { useState } from 'react';

const State = () => {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
      <h2>Simple To-Do List</h2>
      <input
        type="text"
value={inputValue}
        placeholder="Enter a to-do item"
        onChange={(e) => setInputValue(e.target.value)}
        style={{ padding: '8px', width: '70%' }}
      />
      <button onClick={handleAddTodo} style={{ padding: '8px 12px', marginLeft: '8px' }}>
        Add
      </button>

      <ul style={{ marginTop: '20px' }}>
        {todos.map((todo, index) => (
          <li key={index} style={{ padding: '5px 0' }}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default State;