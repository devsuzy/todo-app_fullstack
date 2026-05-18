import { create } from "zustand";
import { StoreState } from "@/types/type";
import { taskApi } from "@/lib/api";

const useStore = create<StoreState>()((set) => ({
  todos: [],
  isLoading: false,

  fetchTodos: async () => {
    set({ isLoading: true });
    const todos = await taskApi.getAll();
    const today = new Date().toDateString();
    const todayTodos = todos.filter(
      (t: { createdAt: string }) => new Date(t.createdAt).toDateString() === today
    );
    set({ todos: todayTodos, isLoading: false });
  },

  addTodo: async (title) => {
    const newTodo = await taskApi.create(title);
    set((prev) => ({ todos: [...prev.todos, newTodo] }));
  },

  removeTodo: async (id) => {
    await taskApi.delete(id);
    set((prev) => ({ todos: prev.todos.filter((t) => t._id !== id) }));
  },

  toggleTodo: async (id, currentValue) => {
    const updated = await taskApi.update(id, { isCompleted: !currentValue });
    set((prev) => ({
      todos: prev.todos.map((t) => (t._id === id ? updated : t)),
    }));
  },

  updateTodo: async (id, title) => {
    const updated = await taskApi.update(id, { title });
    set((prev) => ({
      todos: prev.todos.map((t) => (t._id === id ? updated : t)),
    }));
  },
}));

export default useStore;
