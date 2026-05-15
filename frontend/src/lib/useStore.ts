import { create } from "zustand";
import { StoreState, Todo } from "@/types/type";
import { persist } from "zustand/middleware";

const generatedId = (existingTodos: Todo[]): number => {
  if (existingTodos.length === 0) return 1;
  return Math.max(...existingTodos.map((todo) => todo.id)) + 1;
};

const useStore = create<StoreState>()(
  persist(
    (set, get) => ({
      todos: [],
      addTodo: (title) => {
        const currentTodos = get().todos;
        const newId = generatedId(currentTodos);
        set((prev) => ({
          todos: [...prev.todos, { id: newId, title, isComplete: false }],
        }));
      },
      removeTodo: (id) =>
        set((prev) => ({
          todos: prev.todos.filter((todo) => todo.id !== id),
        })),
      toggleTodo: (id) =>
        set((prev) => ({
          todos: prev.todos.map((todo) => (todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo)),
        })),
      updateTodo: (id, title) =>
        set((prev) => ({
          todos: prev.todos.map((todo) =>
            todo.id === id ? { ...todo, title: title.trim() } : todo
          ),
        })),
    }),
    {
      name: "todo-storage",
      onRehydrateStorage: () => (state, error) => {
        if (error) console.log("저장소 로드 실패:", error);
      },
    }
  )
);

export default useStore;
