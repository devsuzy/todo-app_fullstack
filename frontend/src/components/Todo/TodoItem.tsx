"use client";
import { memo, useEffect, useRef, useState } from "react";
import { StoreState, Todo } from "@/types/type";
import useStore from "@/lib/useStore";

const selectRemoveTodo = (state: StoreState) => state.removeTodo;
const selectToggleTodo = (state: StoreState) => state.toggleTodo;
const selectUpdateTodo = (state: StoreState) => state.updatedTodo;

const TodoItem = ({ todo }: { todo: Todo }) => {
  const removeTodo = useStore(selectRemoveTodo);
  const toggleTodo = useStore(selectToggleTodo);
  const updateTodo = useStore(selectUpdateTodo);

  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.title);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [isEditing]);

  const handleSave = () => {
    const trimmedText = editText.trim();
    if (trimmedText && trimmedText !== todo.title) {
      updateTodo(todo.id, trimmedText);
    }
    setIsEditing(false);
    setEditText(todo.title);
  };

  const handleCancel = () => {
    setEditText(todo.title);
    setIsEditing(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSave();
    } else if (e.key === "Escape") {
      handleCancel();
    }
  };

  return (
    <div className="w-full flex items-center justify-between pb-3 border-b-2 border-violet-200">
      <div className="flex gap-4">
        <input
          type="checkbox"
          id={String(todo.id)}
          className="bg-violet-800 hover:bg-violet-600 text-white min-w-5 min-h-5"
          checked={todo.done}
          onChange={() => toggleTodo(todo.id)}
        />

        {isEditing ? (
          <div className="flex-1 flex items-center gap-2">
            <input
              ref={inputRef}
              type="text"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              onKeyDown={handleKeyPress} // 키로 조작 가능
              onBlur={handleSave} // 포커스 잃으면 자동 저장
              className="w-auto max-w-52 px-2 py-1 border border-violet-300 rounded focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
            <button
              onClick={handleSave}
              className="px-2 py-1 rounded text-base transition-colors"
              disabled={!editText.trim()}
            >
              ✓
            </button>
            <button
              onClick={handleCancel}
              className="bg-gray-500 hover:bg-gray-600 text-white px-2 py-1 rounded text-base transition-colors"
            >
              ✕
            </button>
          </div>
        ) : (
          <span className={todo.done ? "line-through text-gray-400" : "text-gray-900 text-base"}>
            {todo.title}
          </span>
        )}
      </div>

      {!isEditing && (
        <div className="flex text-base">
          {!todo.done ? (
            <button
              onClick={() => setIsEditing(true)}
              className="py-1 px-2 rounded"
              disabled={todo.done}
              title="편집"
            >
              ✏️
            </button>
          ) : (
            <></>
          )}
          <button
            className="py-1 px-2 rounded"
            onClick={() => removeTodo(todo.id)}
            title="삭제"
          >
            🗑️
          </button>
        </div>
      )}
    </div>
  );
};

export const MemoedTodoItem = memo(TodoItem);
