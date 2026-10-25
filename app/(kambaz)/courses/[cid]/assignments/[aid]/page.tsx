import Link from "next/link";
import * as db from "../../../../database";

export default async function AssignmentEditor({
  params,
}: {
  params: Promise<{ cid: string; aid: string }>;
}) {
  const { cid, aid } = await params;
  const assignment = db.assignments.find((a) => a._id === aid);
  return (
    <div id="wd-assignments-editor" className="max-w-3xl">
      <label htmlFor="wd-name" className="mb-1 block text-sm">
        Assignment Name
      </label>
      <input
        id="wd-name"
        defaultValue={assignment?.title ?? ""}
        className="mb-4 w-full rounded border border-neutral-300 px-3 py-2"
      />
      <p id="wd-assignment-id" className="mb-4 text-sm text-neutral-600">
        Assignment id: {aid}
      </p>
      <textarea
        id="wd-description"
        rows={12}
        defaultValue={assignment?.description ?? ""}
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
          defaultValue={assignment?.points ?? 100}
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
            defaultValue={assignment?.due}
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
                defaultValue={assignment?.available}
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
                defaultValue="2026-05-20T00:00"
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
        <Link
          href={`/courses/${cid}/assignments`}
          id="wd-cancel"
          className="rounded border border-neutral-300 bg-neutral-100 px-4 py-2 text-neutral-900 no-underline"
        >
          Cancel
        </Link>
        <Link
          href={`/courses/${cid}/assignments`}
          id="wd-save"
          className="rounded bg-red-600 px-4 py-2 text-white no-underline"
        >
          Save
        </Link>
      </div>
    </div>
  );
}
