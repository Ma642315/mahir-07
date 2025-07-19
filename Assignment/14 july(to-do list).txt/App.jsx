import React from "react";
import "./App.css";

const todos = [
  { id: 1, title: "Finish report", description: "Monthly financial report", category: "Work", completed: true },
  { id: 2, title: "Team meeting", description: "Sync with dev team", category: "Work", completed: false },
  { id: 3, title: "Buy groceries", description: "Milk, eggs, and bread", category: "Personal", completed: false },
  { id: 4, title: "Gym", description: "Leg day workout", category: "Personal", completed: true },
  { id: 5, title: "Read book", description: "Finish 'Atomic Habits'", category: "Hobby", completed: false },
  { id: 6, title: "Painting session", description: "Try new watercolor technique", category: "Hobby", completed: true },
];

function App() {
  // Unique categories
  const categories = [...new Set(todos.map(todo => todo.category))];

  return (
    <div className="App" style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Grouped To-Do List</h1>
      {categories.map(category => (
        <div key={category} style={{ marginTop: "20px" }}>
          <h2>{category}</h2>
          <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
            {todos
              .filter(todo => todo.category === category)
              .map(todo => (
                <li key={todo.id} style={{ marginBottom: "10px" }}>
                  <span style={{ marginRight: "10px" }}>
                    {todo.completed ? "✅" : "❌"}
                  </span>
                  <strong>{todo.title}</strong>
                  <div style={{ fontStyle: "italic", fontSize: "0.9em", marginLeft: "25px" }}>
                    {todo.description}
                  </div>
                </li>
              ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default App;