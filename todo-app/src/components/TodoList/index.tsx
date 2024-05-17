import React, { useState } from 'react';
import TodoItem from '../TodoItem';
import { TodoListProps, TodoState } from '../interface'

const TodoList: React.FC<TodoListProps> = ({ todos, toggleComplete, showFilters }) => {
  const [filter, setFilter] = useState('all');

  const filteredTodos = todos.filter(todo => {
    if (filter === 'completed') {
      return todo.completed;
    } else if (filter === 'active') {
      return !todo.completed;
    } else {
      return true;
    }
  });

  return (
    <div>
      {showFilters && (
        <div>
          <button onClick={() => setFilter('all')}>All</button>
          <button onClick={() => setFilter('completed')}>Completed</button>
          <button onClick={() => setFilter('active')}>Active</button>
        </div>
      )}
      <ul>
        {filteredTodos.map((todo: TodoState, index: number) => (
          <TodoItem key={index} index={index} todo={todo} toggleComplete={toggleComplete} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
