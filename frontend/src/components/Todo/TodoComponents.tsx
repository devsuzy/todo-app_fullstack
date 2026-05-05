"use client";
import { useEffect, useState } from "react";
import useStore from "@/lib/useStore";
import { NewTodo, TodoList } from ".";
import LoadingSpinner from "../UI/LoadingSpinner";
import TodayDate from "../UI/TodayDate";

export default function TodoComponents() {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    const unsubscribe = useStore.persist.onFinishHydration(() => {
      setIsHydrated(true);
    });

    if (useStore.persist.hasHydrated()) {
      setIsHydrated(true);
    }

    return unsubscribe;
  }, []);

  return (
    <div className="w-80 max-w-80 flex flex-col gap-16 items-center">
      {!isHydrated ? (
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
