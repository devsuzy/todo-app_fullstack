export type Todo = {
  _id: string;
  title: string;
  isCompleted: boolean;
  description?: string;
  createdAt: string;
};

export type StoreState = {
  todos: Todo[];
  isLoading: boolean;
  fetchTodos: () => Promise<void>;
  addTodo: (title: string) => Promise<void>;
  removeTodo: (id: string) => Promise<void>;
  toggleTodo: (id: string, currentValue: boolean) => Promise<void>;
  updateTodo: (id: string, title: string) => Promise<void>;
};
