export default function ListTags() {
  return (
    <div id="wd-lists">
      <h4>List Tags</h4>
      <h5>Ordered List Tag</h5>
      How to make pancakes:
      <ol id="wd-pancakes">
        <li>Mix dry ingredients.</li>
        <li>Add wet ingredients.</li>
        <li>Stir to combine.</li>
        <li>Heat a skillet or griddle.</li>
        <li>Pour batter onto the skillet.</li>
        <li>Cook until bubbly on top.</li>
        <li>Flip and cook the other side.</li>
        <li>Serve and enjoy!</li>
      </ol>
      My favorite recipe (pan-seared salmon):
      <ol id="wd-your-favorite-recipe">
        <li>Pat the fillet completely dry and season both sides with salt.</li>
        <li>Heat a skillet over medium-high until a drop of oil shimmers.</li>
        <li>
          Lay the fillet in skin-side down and press it flat for ten seconds.
        </li>
        <li>
          Sear four to five minutes, until the skin crisps and the flesh turns
          opaque partway up the side.
        </li>
        <li>Flip, add a knob of butter, and cook one to two minutes more.</li>
        <li>Rest it two minutes before serving.</li>
      </ol>
      <h5>Unordered List Tag</h5>
      My favorite books (in no particular order)
      <ul id="wd-my-books">
        <li>Dune</li>
        <li>Lord of the Rings</li>
        <li>Ender&apos;s Game</li>
        <li>Red Mars</li>
        <li>The Forever War</li>
      </ul>
      Your favorite books (in no particular order):
      <ul id="wd-your-books">
        <li>Dream of the Red Chamber</li>
        <li>One Hundred Years of Solitude</li>
        <li>Pride and Prejudice</li>
      </ul>
      HTML tags covered in this chapter:
      <ul id="wd-ai-html-tags">
        <li>h1 through h6 &ndash; section headings from largest to smallest</li>
        <li>p &ndash; a paragraph of text with vertical spacing around it</li>
        <li>ol &ndash; an ordered list, numbered for steps in sequence</li>
        <li>ul &ndash; an unordered list, bulleted for items with no order</li>
        <li>li &ndash; a single item inside an ordered or unordered list</li>
        <li>table &ndash; rows and columns of tabular data</li>
        <li>span &ndash; an inline wrapper that does not break the line</li>
      </ul>
    </div>
  );
}
