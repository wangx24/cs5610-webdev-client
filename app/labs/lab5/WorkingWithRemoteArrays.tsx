"use client";
import { useState } from "react";
const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
export default function WorkingWithRemoteArrays() {
  const API = `${HTTP_SERVER}/lab5/todos`;
  const [todo, setTodo] = useState({
    id: "1",
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    completed: false,
  });
  return (
    <div>
      <h3>Working with Arrays</h3>
      <h4>Retrieving Arrays</h4>
      <div className="my-2 flex items-center gap-2">
        <a
          id="wd-retrieve-todos"
          className="rounded bg-blue-600 px-3 py-1.5 text-white underline"
          href={API}
        >
          Get Todos
        </a>
      </div>
      <h4>Retrieving an Item from an Array by ID</h4>
      <div className="my-2 flex items-center gap-2">
        <a
          id="wd-retrieve-todo-by-id"
          className="rounded bg-blue-600 px-3 py-1.5 text-white underline"
          href={`${API}/${todo.id}`}
        >
          Get Todo by ID
        </a>
        <input
          id="wd-todo-id"
          className="rounded border px-2 py-1"
          value={todo.id}
          onChange={(e) => setTodo({ ...todo, id: e.target.value })}
        />
      </div>
      <h4>Filtering Array Items</h4>
      <div className="my-2 flex items-center gap-2">
        <a
          id="wd-retrieve-completed-todos"
          className="rounded bg-blue-600 px-3 py-1.5 text-white underline"
          href={`${API}?completed=true`}
        >
          Get Completed Todos
        </a>
      </div>
      <h4>Creating new Items in an Array</h4>
      <div className="my-2 flex items-center gap-2">
        <a
          id="wd-create-todo"
          className="rounded bg-blue-600 px-3 py-1.5 text-white underline"
          href={`${API}/create`}
        >
          Create Todo
        </a>
      </div>
      <h4>Removing from an Array</h4>
      <div className="my-2 flex items-center gap-2">
        <a
          id="wd-remove-todo"
          className="rounded bg-red-600 px-3 py-1.5 text-white underline"
          href={`${API}/${todo.id}/delete`}
        >
          Remove Todo with ID = {todo.id}
        </a>
      </div>
      <h4>Updating an Item in an Array</h4>
      <div className="my-2 flex items-center gap-2">
        <a
          id="wd-update-todo-title"
          className="rounded bg-blue-600 px-3 py-1.5 text-white underline"
          href={`${API}/${todo.id}/title/${todo.title}`}
        >
          Update Todo
        </a>
        <input
          id="wd-todo-title"
          className="rounded border px-2 py-1"
          value={todo.title}
          onChange={(e) => setTodo({ ...todo, title: e.target.value })}
        />
      </div>
      <div className="my-2 flex items-center gap-2">
        <a
          id="wd-update-todo-completed"
          className="rounded bg-blue-600 px-3 py-1.5 text-white underline"
          href={`${API}/${todo.id}/completed/${todo.completed}`}
        >
          Complete Todo ID = {todo.id}
        </a>
        <input
          id="wd-todo-completed"
          type="checkbox"
          checked={todo.completed}
          onChange={(e) => setTodo({ ...todo, completed: e.target.checked })}
        />
      </div>
      <div className="my-2 flex items-center gap-2">
        <a
          id="wd-update-todo-description"
          className="rounded bg-blue-600 px-3 py-1.5 text-white underline"
          href={`${API}/${todo.id}/description/${todo.description}`}
        >
          Describe Todo ID = {todo.id}
        </a>
        <input
          id="wd-todo-description"
          className="rounded border px-2 py-1"
          value={todo.description}
          onChange={(e) => setTodo({ ...todo, description: e.target.value })}
        />
      </div>
      <hr />
    </div>
  );
}
