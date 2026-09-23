export default function YourForm() {
  return (
    <form id="wd-your-form">
      <h5>Student Profile</h5>
      {/* Text fields */}
      <label htmlFor="wd-your-first-name">First name:</label>{" "}
      <input type="text" defaultValue="Xinyu" id="wd-your-first-name" />
      <br />
      <label htmlFor="wd-your-last-name">Last name:</label>{" "}
      <input type="text" defaultValue="Wang" id="wd-your-last-name" />
      <br />
      <label htmlFor="wd-your-student-id">Student ID:</label>{" "}
      <input type="password" placeholder="NUID" id="wd-your-student-id" />
      <br />
      {/* Textarea */}
      <label htmlFor="wd-your-bio">Why I am taking this course:</label>
      <br />
      <textarea
        id="wd-your-bio"
        cols={50}
        rows={5}
        defaultValue="Most of my coding so far has been isolated exercises: a class here, an algorithm there, nothing a person could open and use. I want to build something end to end. By December I want to have written the markup, the styling, the client state, the API, and the database for one application, and to understand why each layer needs the one beneath it. Not a tutorial I followed, but something I could rebuild from an empty folder."
      />
      <br />
      {/* Radio group 1 — class standing */}
      <p>Class standing:</p>
      <input
        type="radio"
        name="wd-your-standing"
        id="wd-standing-freshman"
      />{" "}
      <label htmlFor="wd-standing-freshman">Freshman</label>
      <br />
      <input
        type="radio"
        name="wd-your-standing"
        id="wd-standing-sophomore"
      />{" "}
      <label htmlFor="wd-standing-sophomore">Sophomore</label>
      <br />
      <input
        type="radio"
        name="wd-your-standing"
        id="wd-standing-junior"
      />{" "}
      <label htmlFor="wd-standing-junior">Junior</label>
      <br />
      <input
        type="radio"
        name="wd-your-standing"
        id="wd-standing-senior"
      />{" "}
      <label htmlFor="wd-standing-senior">Senior</label>
      <br />
      <input
        type="radio"
        name="wd-your-standing"
        id="wd-standing-graduate"
        defaultChecked
      />{" "}
      <label htmlFor="wd-standing-graduate">Graduate</label>
      <br />
      {/* Radio group 2 — campus */}
      <p>Campus:</p>
      <input
        type="radio"
        name="wd-your-campus"
        id="wd-campus-boston"
        defaultChecked
      />{" "}
      <label htmlFor="wd-campus-boston">Boston</label>
      <br />
      <input type="radio" name="wd-your-campus" id="wd-campus-oakland" />{" "}
      <label htmlFor="wd-campus-oakland">Oakland</label>
      <br />
      <input type="radio" name="wd-your-campus" id="wd-campus-seattle" />{" "}
      <label htmlFor="wd-campus-seattle">Seattle</label>
      <br />
      <input
        type="radio"
        name="wd-your-campus"
        id="wd-campus-silicon-valley"
      />{" "}
      <label htmlFor="wd-campus-silicon-valley">Silicon Valley</label>
      <br />
      <input type="radio" name="wd-your-campus" id="wd-campus-arlington" />{" "}
      <label htmlFor="wd-campus-arlington">Arlington</label>
      <br />
      <input type="radio" name="wd-your-campus" id="wd-campus-london" />{" "}
      <label htmlFor="wd-campus-london">London</label>
      <br />
      {/* Checkboxes — independent interests */}
      <p>Interests:</p>
      <input type="checkbox" id="wd-interest-frontend" defaultChecked />{" "}
      <label htmlFor="wd-interest-frontend">Front-end development</label>
      <br />
      <input type="checkbox" id="wd-interest-backend" defaultChecked />{" "}
      <label htmlFor="wd-interest-backend">Back-end development</label>
      <br />
      <input type="checkbox" id="wd-interest-vision" defaultChecked />{" "}
      <label htmlFor="wd-interest-vision">Computer vision</label>
      <br />
      <input type="checkbox" id="wd-interest-design" />{" "}
      <label htmlFor="wd-interest-design">Design systems</label>
      <br />
      {/* Single select — major */}
      <label htmlFor="wd-your-major">Major:</label>{" "}
      <select id="wd-your-major" defaultValue="CS">
        <option value="CS">Computer Science</option>
        <option value="DS">Data Science</option>
        <option value="IS">Information Systems</option>
        <option value="CYBER">Cybersecurity</option>
      </select>
      <br />
      {/* Multiple select — preselect two */}
      <label htmlFor="wd-your-topics">
        Topics I want to go deeper on this term:
      </label>
      <br />
      <select id="wd-your-topics" multiple defaultValue={["REACT", "DL"]}>
        <option value="HTML">HTML and CSS</option>
        <option value="REACT">React and Next.js</option>
        <option value="NODE">Node and Express</option>
        <option value="MONGO">MongoDB</option>
        <option value="CV">Classical computer vision</option>
        <option value="DL">Deep learning for vision</option>
      </select>
      <br />
      {/* Typed fields */}
      <label htmlFor="wd-your-email">School email:</label>{" "}
      <input
        type="email"
        defaultValue="wang.x24@northeastern.edu"
        id="wd-your-email"
      />
      <br />
      <label htmlFor="wd-your-grad-year">Expected graduation year:</label>{" "}
      <input
        type="number"
        defaultValue={2028}
        min={2026}
        max={2032}
        id="wd-your-grad-year"
      />
      <br />
      <label htmlFor="wd-your-start-date">Program start date:</label>{" "}
      <input type="date" defaultValue="2025-09-03" id="wd-your-start-date" />
      <br />
      <label htmlFor="wd-your-excitement">
        How excited I am about this course (0&ndash;10):
      </label>{" "}
      <input
        type="range"
        min={0}
        max={10}
        defaultValue={10}
        id="wd-your-excitement"
      />
      <br />
      {/* Buttons */}
      <button type="submit" id="wd-your-save">
        Save
      </button>{" "}
      <button type="button" id="wd-your-cancel">
        Cancel
      </button>
    </form>
  );
}
