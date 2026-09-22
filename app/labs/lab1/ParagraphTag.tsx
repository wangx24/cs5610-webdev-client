export default function ParagraphTag() {
  return (
    <div id="wd-p-tag">
      <h4>Paragraph Tag</h4>
      <p id="wd-p-1">
        This is a paragraph. We often separate a long set of sentences with
        vertical spaces to make the text easier to read. Browsers ignore
        vertical white spaces and render all the text as one single set of
        sentences. To force the browser to add vertical spacing, wrap the
        paragraphs you want to separate with the paragraph tag
      </p>
      <p id="wd-p-2">
        This is the first paragraph. The paragraph tag is used to format
        vertical gaps between long pieces of text like this one.
      </p>
      <p id="wd-p-3">
        This is the second paragraph. Even though there is a deliberate white
        gap between the paragraph above and this paragraph, by default browsers
        render them as one contiguous piece of text as shown here on the right.
      </p>
      <p id="wd-p-4">
        This is the third paragraph. Wrap each paragraph with the paragraph tag
        to tell browsers to render the gaps.
      </p>
      <p id="wd-p-your-1">
        I come from China, Shanxi Province. Before I entered the CS Align
        program at Northeastern, I studied architcture, which is a fully
        different field.
      </p>
      <p id="wd-p-your-2">
        I understand this course as building one application six times over,
        each pass adding a layer: HTML structure first, then styling, then data,
        state, an API, and finally a database. What I want out of it is not just
        a finished Kambaz but the ability to look at any web app and have a
        rough mental model of what is happening underneath.
      </p>
      <p id="wd-ai-p">
        Wrapping text in a paragraph tag creates vertical spacing because the
        browser renders each p element as its own block and gives it a default
        top and bottom margin. Without the tag, the text flows together as one
        contiguous block no matter how many line breaks the source contains.
      </p>
    </div>
  );
}
