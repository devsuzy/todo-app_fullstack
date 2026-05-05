"use client";
import { useState } from "react";
import useStore from "@/lib/useStore";
import { StoreState } from "@/types/type";

const selectAddTodo = (state: StoreState) => state.addTodo;

export const NewTodo = () => {
  const addTodo = useStore(selectAddTodo);
  const [text, setText] = useState("");

  const onAdd = () => {
    addTodo(text);
    setText("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onAdd();
    }
  };

  return (
    <div className="flex gap-2">
      <input
        className="w-full py-1 px-2 border border-violet-300 rounded focus:outline-none focus:ring-2 focus:ring-violet-500 dark:text-gray-100"
        value={text}
        placeholder="Enter your to-do list."
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button
        className="text-lg bg-violet-500 dark:bg-violet-800 hover:bg-violet-600 text-white py-2 px-3 rounded-sm disabled:opacity-60"
        onClick={onAdd}
        disabled={!text}
      >
        Add
      </button>
    </div>
  );
};
