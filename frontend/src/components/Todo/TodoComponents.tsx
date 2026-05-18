"use client";
import { useEffect } from "react";
import useStore from "@/lib/useStore";
import { NewTodo, TodoList } from ".";
import LoadingSpinner from "../UI/LoadingSpinner";
import TodayDate from "../UI/TodayDate";

export default function TodoComponents() {
  const fetchTodos = useStore((state) => state.fetchTodos);
  const isLoading = useStore((state) => state.isLoading);

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  return (
    <div className="w-80 max-w-80 flex flex-col gap-16 items-center">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className="flex flex-col gap-8">
          <TodayDate />
          <TodoList />
          <NewTodo />
        </div>
      )}
    </div>
  );
}
