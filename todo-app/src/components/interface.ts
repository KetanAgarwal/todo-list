export interface TodoState {
  text: string;
  completed: boolean;
}

export interface TodoItemProps {
  index: number;
  todo: TodoState;
  toggleComplete: (args0: number) => void;
}

export interface TodoFormProps {
  addTodo: (args0: string) => void;
}

export interface TodoListProps {
  todos: TodoState[];
  toggleComplete: (index: number) => void;
  showFilters?: boolean;
}

export interface TodoProps {
  showFilters?: boolean;
  heading?: string;
}
