import React, { useState, useEffect } from 'react';

import TodoList from './TodoList';
import AddTodoForm from './TodoForm';

import { getTodos } from '../utils/todoStorage';
import { TodoProps, TodoState } from './interface'

const Todo: React.FC<TodoProps> = ({ showFilters }) => {
  const [todos, setTodos] = useState(() => getTodos());

  useEffect(() => {
    try {
      localStorage.setItem('todos', JSON.stringify(todos));
    } catch {
      console.error('There is error while trying to save data localStorage');
    }
  }, [todos]);

  const addTodo = (text: string) => {
    if (!todos.some((todo: TodoState) => todo.text?.toLowerCase() === text?.toLowerCase())) {
      setTodos([...todos, { text, completed: false }]);
    } else {
      alert('Todo item already present')
    }
  };

  const toggleComplete = (index: number) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  return (
    <div>
      <h1>Todo App</h1>
      <AddTodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleComplete={toggleComplete} showFilters={showFilters} />
    </div>
  );
}

export default Todo;