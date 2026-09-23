import type { ReactNode } from "react";

function HighlightedBox({
  backgroundColor = "lightyellow",
  borderColor = "orange",
  borderWidth = 2,
  borderRadius = 8,
  children,
}: {
  backgroundColor?: string;
  borderColor?: string;
  borderWidth?: string | number;
  borderRadius?: string | number;
  children?: ReactNode;
}) {
  return (
    <div
      style={{
        backgroundColor,
        borderColor,
        borderWidth,
        borderStyle: "solid",
        borderRadius,
        padding: "0.75rem 1rem",
        marginBottom: "0.75rem",
      }}
    >
      {children}
    </div>
  );
}

export default function HighlightedBoxLab() {
  return (
    <div id="wd-highlighted-box">
      <h3>Highlighted Box</h3>
      <HighlightedBox
        backgroundColor="lavender"
        borderColor="purple"
        borderWidth={3}
        borderRadius={12}
      >
        <h4>Callout</h4>
        <p>
          This box wraps <strong>any</strong> children — headings, paragraphs,
          lists, and more.
        </p>
        <ul>
          <li>backgroundColor</li>
          <li>borderColor</li>
          <li>borderWidth</li>
          <li>borderRadius</li>
        </ul>
      </HighlightedBox>
      <HighlightedBox
        backgroundColor="#e8f5e9"
        borderColor="green"
        borderWidth={2}
        borderRadius={20}
      >
        <p>
          A second box with different style props wrapping different content.
        </p>
      </HighlightedBox>
      <HighlightedBox
        backgroundColor="#d9f2f0"
        borderColor="#0abab5"
        borderWidth={1}
        borderRadius={12}
      >
        <h4>Xinyu Wang</h4>
        <ul>
          <li>Build one application end to end, from markup to database.</li>
          <li>
            Understand what happens between typing a URL and seeing a page.
          </li>
          <li>
            Deploy early and often, so nothing breaks the night before a
            deadline.
          </li>
        </ul>
      </HighlightedBox>
      <HighlightedBox backgroundColor="honeydew" borderColor="seagreen">
        <h4>Sample nested content</h4>
        <ul>
          <li>p &ndash; a block of paragraph text</li>
          <li>table &ndash; rows and columns of data</li>
          <li>form &ndash; a group of input controls</li>
        </ul>
      </HighlightedBox>
    </div>
  );
}
