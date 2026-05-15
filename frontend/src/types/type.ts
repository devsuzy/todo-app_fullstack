export type Todo = {
  id: number;
  title: string;
  isComplete: boolean;
};

export type StoreState = {
  todos: Todo[];
  addTodo: (title: string) => void;
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
  updateTodo: (id: number, title: string) => void;
};
