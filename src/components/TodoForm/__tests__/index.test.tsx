import React from 'react';
import '@testing-library/jest-dom'
import { render, fireEvent, screen } from '@testing-library/react';
import AddTodoForm from '../index';

describe('TodoForm Component test cases', () => {
  it('Renders add todo form', () => {
    const addTodo = jest.fn();
    render(<AddTodoForm addTodo={addTodo} />);

    const addButton = screen.getByText('Add Todo');
    const input = screen.getByPlaceholderText('Add a new todo');

    expect(addButton).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });
  
  it('Calls addTodo function with input value when form is submitted', () => {
    const addTodo = jest.fn();
    render(<AddTodoForm addTodo={addTodo} />);

    const input = screen.getByPlaceholderText('Add a new todo');
    fireEvent.change(input, { target: { value: 'Test Todo' } });

    const addButton = screen.getByText('Add Todo');
    fireEvent.click(addButton);

    expect(addTodo).toHaveBeenCalledWith('Test Todo');
  });

  it('Calls addTodo function with input value when form is submitted but input is invalid', () => {
    const addTodo = jest.fn();
    render(<AddTodoForm addTodo={addTodo} />);

    const input = screen.getByPlaceholderText('Add a new todo');
    fireEvent.change(input, { target: { value: '' } });

    const addButton = screen.getByText('Add Todo');
    fireEvent.click(addButton);

    expect(addTodo).toHaveBeenCalledTimes(0);
  });
})
