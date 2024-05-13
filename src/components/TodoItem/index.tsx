import React, { ReactElement } from 'react';
import { TodoItemProps } from '../interface';

const TodoItem = ({ index, todo, toggleComplete }: TodoItemProps): ReactElement => {
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        data-testid={todo.text}
        onChange={() => toggleComplete(index)}
      />
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}</span>
    </li>
  );
}

export default TodoItem;