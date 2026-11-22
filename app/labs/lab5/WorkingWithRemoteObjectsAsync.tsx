"use client";
import { useEffect, useState } from "react";
import * as client from "./client";
export default function WorkingWithRemoteObjectsAsynchronously() {
  const [assignment, setAssignment] = useState({
    id: 0,
    title: "",
    description: "",
    due: "",
    completed: false,
    score: 0,
  });
  const fetchAssignment = async () => {
    setAssignment(await client.fetchAssignment());
  };
  const updateTitle = async () => {
    setAssignment(await client.updateTitle(assignment.title));
  };
  useEffect(() => {
    fetchAssignment();
  }, []);
  return (
    <div>
      <h3>Working with Objects Asynchronously</h3>
      <h4>Assignment</h4>
      <input
        className="my-1 block w-full max-w-xl rounded border px-2 py-1"
        value={assignment.title}
        onChange={(e) =>
          setAssignment({ ...assignment, title: e.target.value })
        }
      />
      <textarea
        className="my-1 block w-full max-w-xl rounded border px-2 py-1"
        value={assignment.description}
        onChange={(e) =>
          setAssignment({ ...assignment, description: e.target.value })
        }
      />
      <input
        type="date"
        className="my-1 block rounded border px-2 py-1"
        value={assignment.due}
        onChange={(e) => setAssignment({ ...assignment, due: e.target.value })}
      />
      <label className="my-1 flex items-center gap-2">
        <input
          type="checkbox"
          checked={assignment.completed}
          onChange={(e) =>
            setAssignment({ ...assignment, completed: e.target.checked })
          }
        />
        Completed
      </label>
      <button
        type="button"
        onClick={updateTitle}
        className="my-1 rounded bg-blue-600 px-3 py-1.5 text-white"
      >
        Update Title
      </button>
      <pre>{JSON.stringify(assignment, null, 2)}</pre>
      <hr />
    </div>
  );
}
