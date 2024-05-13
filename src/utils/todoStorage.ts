export const getTodos = () => {
  try {
    const storedTodos = JSON.parse(localStorage.getItem('todos') || '[]');
    return storedTodos;
  } catch {
    console.error('There is error while trying to retrieve data from localStorage');
  }
}
