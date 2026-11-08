"use client";
import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  useAssignmentsStore,
  type Assignment,
} from "../../../../store/assignmentsStore";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const courseId = typeof cid === "string" ? cid : "";
  const assignmentId = typeof aid === "string" ? aid : "";
  const router = useRouter();
  const assignments = useAssignmentsStore((state) => state.assignments);
  const addAssignment = useAssignmentsStore((state) => state.addAssignment);
  const updateAssignment = useAssignmentsStore(
    (state) => state.updateAssignment,
  );
  const emptyAssignment: Assignment = {
    _id: "new",
    title: "New Assignment",
    course: courseId,
    description: "New Assignment Description",
    points: 100,
    due: "",
    available: "",
    until: "",
  };
  const existing = assignments.find((a) => a._id === assignmentId);
  const [assignment, setAssignment] = useState<Assignment>(
    existing ?? emptyAssignment,
  );
  const save = () => {
    if (assignmentId === "new") {
      addAssignment({ ...assignment, course: courseId });
    } else {
      updateAssignment(assignment);
    }
    router.push(`/courses/${courseId}/assignments`);
  };
  const cancel = () => {
    router.push(`/courses/${courseId}/assignments`);
  };
  return (
    <div id="wd-assignments-editor" className="max-w-3xl">
      <label htmlFor="wd-name" className="mb-1 block text-sm">
        Assignment Name
      </label>
      <input
        id="wd-name"
        value={assignment.title}
        onChange={(e) =>
          setAssignment({ ...assignment, title: e.target.value })
        }
        className="mb-4 w-full rounded border border-neutral-300 px-3 py-2"
      />
      <p id="wd-assignment-id" className="mb-4 text-sm text-neutral-600">
        Assignment id: {aid}
      </p>
      <textarea
        id="wd-description"
        rows={12}
        value={assignment.description}
        onChange={(e) =>
          setAssignment({ ...assignment, description: e.target.value })
        }
        className="mb-6 w-full rounded border border-neutral-300 px-3 py-2"
      />

      <div className="mb-4 flex gap-4">
        <label
          htmlFor="wd-points"
          className="w-40 shrink-0 pt-2 text-right text-sm"
        >
          Points
        </label>
        <input
          id="wd-points"
          type="number"
          value={assignment.points}
          onChange={(e) =>
            setAssignment({ ...assignment, points: Number(e.target.value) })
          }
          className="flex-1 rounded border border-neutral-300 px-3 py-2"
        />
      </div>

      <div className="mb-4 flex gap-4">
        <label
          htmlFor="wd-group"
          className="w-40 shrink-0 pt-2 text-right text-sm"
        >
          Assignment Group
        </label>
        <select
          id="wd-group"
          defaultValue="ASSIGNMENTS"
          className="flex-1 rounded border border-neutral-300 bg-white px-3 py-2"
        >
          <option value="ASSIGNMENTS">ASSIGNMENTS</option>
          <option value="QUIZZES">QUIZZES</option>
          <option value="EXAMS">EXAMS</option>
          <option value="PROJECT">PROJECT</option>
        </select>
      </div>

      <div className="mb-4 flex gap-4">
        <label
          htmlFor="wd-display-grade-as"
          className="w-40 shrink-0 pt-2 text-right text-sm"
        >
          Display Grade as
        </label>
        <select
          id="wd-display-grade-as"
          defaultValue="PERCENTAGE"
          className="flex-1 rounded border border-neutral-300 bg-white px-3 py-2"
        >
          <option value="PERCENTAGE">Percentage</option>
          <option value="POINTS">Points</option>
          <option value="LETTER">Letter Grade</option>
          <option value="COMPLETE">Complete/Incomplete</option>
        </select>
      </div>

      <div className="mb-4 flex gap-4">
        <label
          htmlFor="wd-submission-type"
          className="w-40 shrink-0 pt-2 text-right text-sm"
        >
          Submission Type
        </label>
        <div className="flex-1 rounded border border-neutral-300 p-4">
          <select
            id="wd-submission-type"
            defaultValue="ONLINE"
            className="mb-4 w-full rounded border border-neutral-300 bg-white px-3 py-2"
          >
            <option value="ONLINE">Online</option>
            <option value="PAPER">On Paper</option>
            <option value="NONE">No Submission</option>
          </select>
          <label className="mb-3 block font-semibold">
            Online Entry Options
          </label>
          <div className="mb-3 flex items-center gap-2">
            <input type="checkbox" id="wd-text-entry" />
            <label htmlFor="wd-text-entry">Text Entry</label>
          </div>
          <div className="mb-3 flex items-center gap-2">
            <input type="checkbox" id="wd-website-url" defaultChecked />
            <label htmlFor="wd-website-url">Website URL</label>
          </div>
          <div className="mb-3 flex items-center gap-2">
            <input type="checkbox" id="wd-media-recordings" />
            <label htmlFor="wd-media-recordings">Media Recordings</label>
          </div>
          <div className="mb-3 flex items-center gap-2">
            <input type="checkbox" id="wd-student-annotation" />
            <label htmlFor="wd-student-annotation">Student Annotation</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="wd-file-upload" />
            <label htmlFor="wd-file-upload">File Uploads</label>
          </div>
        </div>
      </div>

      <div className="mb-4 flex gap-4">
        <span className="w-40 shrink-0 pt-2 text-right text-sm">Assign</span>
        <div className="flex-1 rounded border border-neutral-300 p-4">
          <label htmlFor="wd-assign-to" className="mb-1 block font-semibold">
            Assign to
          </label>
          <input
            id="wd-assign-to"
            defaultValue="Everyone"
            className="mb-4 w-full rounded border border-neutral-300 px-3 py-2"
          />
          <label htmlFor="wd-due-date" className="mb-1 block font-semibold">
            Due
          </label>
          <input
            type="date"
            id="wd-due-date"
            value={assignment.due}
            onChange={(e) =>
              setAssignment({ ...assignment, due: e.target.value })
            }
            className="mb-4 w-full rounded border border-neutral-300 px-3 py-2"
          />
          <div className="flex gap-3">
            <div className="flex-1">
              <label
                htmlFor="wd-available-from"
                className="mb-1 block font-semibold"
              >
                Available from
              </label>
              <input
                type="date"
                id="wd-available-from"
                value={assignment.available}
                onChange={(e) =>
                  setAssignment({ ...assignment, available: e.target.value })
                }
                className="w-full rounded border border-neutral-300 px-3 py-2"
              />
            </div>
            <div className="flex-1">
              <label
                htmlFor="wd-available-until"
                className="mb-1 block font-semibold"
              >
                Until
              </label>
              <input
                type="datetime-local"
                id="wd-available-until"
                value={assignment.until ?? ""}
                onChange={(e) =>
                  setAssignment({ ...assignment, until: e.target.value })
                }
                className="w-full rounded border border-neutral-300 px-3 py-2"
              />
            </div>
          </div>
        </div>
      </div>

      <label htmlFor="wd-ai-editor-notes" className="mb-1 block text-sm">
        Sample notes
      </label>
      <textarea
        id="wd-ai-editor-notes"
        rows={4}
        className="mb-4 w-full rounded border border-neutral-300 px-3 py-2"
      />

      <hr className="my-4 border-neutral-300" />
      <div className="flex justify-end gap-2">
        <button
          type="button"
          onClick={cancel}
          id="wd-cancel"
          className="rounded border border-neutral-300 bg-neutral-100 px-4 py-2 text-neutral-900"
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={save}
          id="wd-save"
          className="rounded bg-red-600 px-4 py-2 text-white"
        >
          Save
        </button>
      </div>
    </div>
  );
}
