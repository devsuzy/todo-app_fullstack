export type Todo = {
  id: number;
  title: string;
  done: boolean;
};

export type StoreState = {
  todos: Todo[];
  addTodo: (title: string) => void;
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
  updatedTodo: (id: number, title: string) => void;
};
