import React from 'react';
import '@testing-library/jest-dom'
import { render, fireEvent, screen } from '@testing-library/react';
import TodoItem from '../index';

describe('TodoItem Component test cases', () => {
  it('Renders todo item', () => {
    const todo = { text: 'Test Todo', completed: false };
    const toggleComplete = jest.fn();

    render(<TodoItem index={0} todo={todo} toggleComplete={toggleComplete} />);
    const todoText = screen.getByText(todo.text);
    expect(todoText).toBeInTheDocument();
  });
  
  it('Calls toggleComplete when checkbox is clicked', () => {
    const todo = { text: 'Test Todo', completed: false };
    const toggleComplete = jest.fn();
  
    render(<TodoItem todo={todo} index={0} toggleComplete={toggleComplete} />);
    const checkbox = screen.getByTestId('Test Todo');
    fireEvent.click(checkbox);
  
    expect(toggleComplete).toHaveBeenCalledTimes(1);
    expect(toggleComplete).toHaveBeenCalledWith(0);
  });
})
