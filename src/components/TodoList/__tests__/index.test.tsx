import React from 'react';
import '@testing-library/jest-dom'
import { render, fireEvent, screen } from '@testing-library/react';
import TodoList from '../index';

describe('TodoList Component test cases', () => {
  const toggleComplete = jest.fn();

  const todos = [
    { text: 'Todo 1', completed: false },
    { text: 'Todo 2', completed: true },
    { text: 'Todo 3', completed: false }
  ];

  it('renders todos with default filter "all"', () => {
    render(<TodoList todos={todos} toggleComplete={toggleComplete} />);
    expect(screen.getByText('Todo 1')).toBeInTheDocument();
    expect(screen.getByText('Todo 2')).toBeInTheDocument();
    expect(screen.getByText('Todo 3')).toBeInTheDocument();
  });

  it('renders only completed todos with filter "completed"', () => {
    render(<TodoList todos={todos} toggleComplete={toggleComplete} />);
    fireEvent.click(screen.getByText('Completed'));
    expect(screen.queryByText('Todo 1')).not.toBeInTheDocument();
    expect(screen.getByText('Todo 2')).toBeInTheDocument();
    expect(screen.queryByText('Todo 3')).not.toBeInTheDocument();
  });

  it('renders only active todos with filter "active"', () => {
    render(<TodoList todos={todos} toggleComplete={toggleComplete} />);
    fireEvent.click(screen.getByText('Active'));
    expect(screen.getByText('Todo 1')).toBeInTheDocument();
    expect(screen.queryByText('Todo 2')).not.toBeInTheDocument();
    expect(screen.getByText('Todo 3')).toBeInTheDocument();
  });
});
