# Todo Application

## Overview

This application is a microfrontend Todo List application built with React and TypeScript. It allows users to create, manage and filter todo tasks. The application consists of these microfrontend modules:

1. **Todo**: Responsible to display todo list.
2. **TodoForm**: Responsible for rendering input box and button to add a todo.
3. **TodoList**: Responsible for rendering body of todo list. It shows filters and list of todo.
4. **TodoItem**: Responsible for rendering individual todos.

## Installation

To run this application locally, follow these steps:

1. Clone below repository to your local machine:

   ```bash
       git clone https://github.com/KetanAgarwal/todo-list.git
   ```

2. Navigate to the project directory:

   ```bash
       cd todo-list
   ```

3. Install dependencies using npm or yarn:

   ```bash
       npm install
       # or
       yarn install
   ```

4. Start the development server:

   ```bash
       npm start
       # or
       yarn start
   ```

5. Open your browser and visit `http://localhost:3000` to view the application.

## Usage

- Add new task by entering a task description in input field and pressing `Add Todo`.
- Mark tasks as completed by clicking on the checkbox next to each task.
- Filter the todo tasks list by selecting one of the option of dropdown i.e. all, active and completed.

## Features

- Add new todo task.
- Mark todo task completed or active.
- Filter todo task based on their completion status (all, active, completed).
- Persistence of the todo tasks using `localStorage` to ensure data persistence across page refreshes.


## Technologies Used

- React Js
- TypeScript
- Webpack