"use client";
import { useState } from "react";
const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
export default function QueryParameters() {
  const [a, setA] = useState("34");
  const [b, setB] = useState("23");
  return (
    <div>
      <h3>Query Parameters</h3>
      <div className="my-2 flex gap-2">
        <input
          className="rounded border px-2 py-1"
          value={a}
          onChange={(e) => setA(e.target.value)}
        />
        <input
          className="rounded border px-2 py-1"
          value={b}
          onChange={(e) => setB(e.target.value)}
        />
      </div>
      <div className="my-2 flex gap-2">
        <a
          id="wd-query-parameter-add"
          className="rounded bg-blue-600 px-3 py-1.5 text-white underline"
          href={`${HTTP_SERVER}/lab5/calculator?operation=add&a=${a}&b=${b}`}
        >
          Add {a} + {b}
        </a>
        <a
          id="wd-query-parameter-subtract"
          className="rounded bg-red-600 px-3 py-1.5 text-white underline"
          href={`${HTTP_SERVER}/lab5/calculator?operation=subtract&a=${a}&b=${b}`}
        >
          Subtract {a} - {b}
        </a>
        <a
          id="wd-query-parameter-multiply"
          className="rounded bg-green-700 px-3 py-1.5 text-white underline"
          href={`${HTTP_SERVER}/lab5/calculator?operation=multiply&a=${a}&b=${b}`}
        >
          Multiply {a} × {b}
        </a>
        <a
          id="wd-query-parameter-divide"
          className="rounded bg-orange-600 px-3 py-1.5 text-white underline"
          href={`${HTTP_SERVER}/lab5/calculator?operation=divide&a=${a}&b=${b}`}
        >
          Divide {a} ÷ {b}
        </a>
      </div>
      <hr />
    </div>
  );
}
