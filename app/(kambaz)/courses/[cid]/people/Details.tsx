"use client";
import { useEffect, useState } from "react";
import { FaUserCircle, FaCheck, FaPencilAlt } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import * as client from "../../../account/client";
export default function PeopleDetails({
  uid,
  onClose,
}: {
  uid: string | null;
  onClose: () => void;
}) {
  const [user, setUser] = useState<any>({});
  const [name, setName] = useState("");
  const [editing, setEditing] = useState(false);
  const saveUser = async () => {
    const [firstName, lastName] = name.split(" ");
    const updatedUser = { ...user, firstName, lastName };
    await client.updateUser(updatedUser);
    setUser(updatedUser);
    setEditing(false);
    onClose();
  };
  const deleteUser = async (uid: string) => {
    await client.deleteUser(uid);
    onClose();
  };
  const fetchUser = async () => {
    if (!uid) return;
    const user = await client.findUserById(uid);
    setUser(user);
  };
  useEffect(() => {
    if (uid) fetchUser();
  }, [uid]);
  if (!uid) return null;
  return (
    <div className="wd-people-details fixed top-0 end-0 bottom-0 z-20 w-full max-w-sm bg-white p-4 shadow">
      <button
        type="button"
        onClick={onClose}
        className="wd-close-details absolute end-2 top-2"
      >
        <IoCloseSharp className="text-3xl" />
      </button>
      <div className="mt-2 text-center">
        <FaUserCircle className="me-2 text-4xl text-neutral-500" />
      </div>
      <hr />
      {!editing && (
        <FaPencilAlt
          onClick={() => setEditing(true)}
          className="wd-edit float-end mt-2 text-lg"
        />
      )}
      {editing && (
        <FaCheck
          onClick={() => saveUser()}
          className="wd-save float-end mt-2 me-2 text-lg"
        />
      )}
      {!editing && (
        <div
          className="wd-name text-lg text-red-700"
          onClick={() => setEditing(true)}
        >
          {user.firstName} {user.lastName}
        </div>
      )}
      {user && editing && (
        <input
          className="wd-edit-name w-1/2 rounded border border-neutral-300 px-2 py-1"
          defaultValue={`${user.firstName} ${user.lastName}`}
          onChange={(e) => setName(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              saveUser();
            }
          }}
        />
      )}
      {editing && (
        <input
          type="email"
          className="wd-edit-email mt-2 block w-full rounded border border-neutral-300 px-2 py-1"
          value={user.email ?? ""}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
      )}
      {editing && (
        <select
          className="wd-edit-role mt-2 block w-full rounded border border-neutral-300 px-2 py-1"
          value={user.role}
          onChange={(e) => setUser({ ...user, role: e.target.value })}
        >
          <option value="STUDENT">Students</option>
          <option value="TA">Assistants</option>
          <option value="FACULTY">Faculty</option>
          <option value="ADMIN">Administrators</option>
        </select>
      )}
      <b>Roles:</b> <span className="wd-roles">{user.role}</span>
      <br />
      <b>Login ID:</b> <span className="wd-login-id">{user.loginId}</span>
      <br />
      <b>Section:</b> <span className="wd-section">{user.section}</span>
      <br />
      <b>Total Activity:</b>{" "}
      <span className="wd-total-activity">{user.totalActivity}</span>
      <button
        type="button"
        onClick={() => deleteUser(uid)}
        className="wd-delete float-end rounded bg-red-600 px-3 py-1 text-sm text-white"
      >
        Delete
      </button>
      <button
        type="button"
        onClick={onClose}
        className="wd-cancel float-end me-2 rounded bg-neutral-200 px-3 py-1 text-sm"
      >
        Cancel
      </button>
    </div>
  );
}
