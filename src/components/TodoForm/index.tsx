import React, { FormEvent, useState } from 'react';
import { TodoFormProps } from '../interface';

const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!text.trim()) {
      alert('Please enter valid Todo');
      return;
    }

    addTodo(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Add a new todo" value={text} onChange={(e) => setText(e.target.value)} />
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default TodoForm;