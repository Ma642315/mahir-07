export const api = {
  async getTasks() {
    const response = await fetch("http://localhost:3001/tasks");
    return response.json();
  },
  
  async addTask(task) {
    const response = await fetch("http://localhost:3001/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task),
    });
    return response.json();
  },

  async deleteTask(id) {
    await fetch('http://localhost:3001/tasks/${id}', {
      method: "DELETE",
    });
  }
};