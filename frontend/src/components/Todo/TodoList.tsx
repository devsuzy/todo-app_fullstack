"use client";
import useStore from "@/lib/useStore";
import { StoreState } from "@/types/type";
import { MemoedTodoItem } from "./TodoItem";

const selectTodos = (state: StoreState) => state.todos;

export const TodoList = () => {
  const todos = useStore(selectTodos);

  if (todos.length === 0) {
    return (
      <div className="w-full text-center text-gray-500">
        <p className="text-lg font-medium">⚠️ You have nothing to do today.</p>
        <p className="text-sm mt-2">Add a new to-do!</p>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col gap-2">
      {todos.map((todo) => (
        <MemoedTodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};
