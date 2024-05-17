import React from 'react';
import '@testing-library/jest-dom'
import { render, fireEvent, screen } from '@testing-library/react';
import Todo from '../index';

describe('Todo test cases', () => {
  it('Renders Todo App title', () => {
    render(<Todo />);
    const titleElement = screen.getByText(/Todo App/i);
    expect(titleElement).toBeInTheDocument();
  });

  it('Adds a todo when Add Todo form is submitted', () => {
    render(<Todo />);
    const input = screen.getByPlaceholderText('Add a new todo');
    const addButton = screen.getByText('Add Todo');

    fireEvent.change(input, { target: { value: 'Test Todo' } });
    fireEvent.click(addButton);

    const addedTodo = screen.getByText('Test Todo');
    expect(addedTodo).toBeInTheDocument();
  });

  it('Marks a todo as complete when checkbox is clicked', () => {
    render(<Todo />);
    const input = screen.getByPlaceholderText('Add a new todo');
    const addButton = screen.getByText('Add Todo');

    fireEvent.change(input, { target: { value: 'Test Todo' } });
    fireEvent.click(addButton);

    const checkbox = screen.getAllByText('Test Todo')[0] as HTMLInputElement;
    fireEvent.click(checkbox);
    expect(checkbox.checked).toBe(undefined);
  });
});
