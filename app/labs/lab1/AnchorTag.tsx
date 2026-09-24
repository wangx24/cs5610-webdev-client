export default function AnchorTag() {
  return (
    <>
      <h4>Anchor tag</h4>
      Please{" "}
      <a href="https://www.lipsum.com" id="wd-lipsum">
        click here
      </a>{" "}
      to get dummy text
      <br />
      <a href="https://github.com/wangx24/cs5610-webdev-client" id="wd-github">
        GitHub
      </a>
      <br />
      <a href="https://leetcode.com/problemset/" id="wd-your-link">
        Leetcode problemset
      </a>
      <br />
      <a
        href="https://github.com/wangx24"
        id="wd-your-github"
        target="_blank"
        rel="noreferrer"
      >
        My GitHub profile
      </a>
      <br />
      <a
        href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table"
        id="wd-ai-link"
        target="_blank"
        rel="noreferrer"
      >
        MDN: table element
      </a>
    </>
  );
}
