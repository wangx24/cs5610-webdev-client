function HighlightedParagraph({
  text = "This paragraph is highlighted using component props.",
  backgroundColor = "lightyellow",
  borderColor = "orange",
  borderWidth = 2,
  borderRadius = 8,
}: {
  text?: string;
  backgroundColor?: string;
  borderColor?: string;
  borderWidth?: string | number;
  borderRadius?: string | number;
}) {
  return (
    <p
      style={{
        backgroundColor,
        borderColor,
        borderWidth,
        borderStyle: "solid",
        borderRadius,
        padding: "0.5rem 0.75rem",
      }}
    >
      {text}
    </p>
  );
}

export default function HighlightedParagraphLab() {
  return (
    <div id="wd-highlighted-paragraph">
      <h3>Highlighted Paragraph</h3>
      <HighlightedParagraph text="Default highlight: light yellow background, orange border." />
      <HighlightedParagraph
        text="Custom props: light blue background, navy border, thicker width, more rounding."
        backgroundColor="lightblue"
        borderColor="navy"
        borderWidth={4}
        borderRadius={16}
      />
      <HighlightedParagraph
        text="Another variation: misty rose background, crimson border, square corners."
        backgroundColor="#ffe4e1"
        borderColor="crimson"
        borderWidth="3px"
        borderRadius="0px"
      />
      <HighlightedParagraph
        text="I enjoy spending time outdoors on weekends. I often go to parks or trails with my camera. Hiking and photography are two of my favorite hobbies because they both give me a chance to slow down and pay attention to my surroundings."
        backgroundColor="#d9f2f0"
        borderColor="#0abab5"
        borderWidth={1}
        borderRadius={12}
      />
      <HighlightedParagraph
        text="Props let the same component render with different colors."
        backgroundColor="lavender"
        borderColor="purple"
        borderWidth={3}
        borderRadius={12}
      />
    </div>
  );
}
