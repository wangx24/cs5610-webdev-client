export default function Tables() {
  return (
    <div id="wd-tables">
      <h4>Table Tag</h4>
      <table border={1} width="100%">
        <thead>
          <tr>
            <th>Quiz</th>
            <th align="center">Topic</th>
            <th align="center">Date</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Q1</td>
            <td align="center">HTML</td>
            <td align="center">2/3/21</td>
            <td align="right">85</td>
          </tr>
          <tr>
            <td>Q2</td>
            <td align="center">CSS</td>
            <td align="center">2/10/21</td>
            <td align="right">90</td>
          </tr>
          <tr>
            <td>Q3</td>
            <td align="center">JavaScript</td>
            <td align="center">2/17/21</td>
            <td align="right">95</td>
          </tr>
          <tr>
            <td>Q4</td>
            <td align="center">HTML Forms</td>
            <td align="center">2/24/21</td>
            <td align="right">88</td>
          </tr>
          <tr>
            <td>Q5</td>
            <td align="center">The DOM</td>
            <td align="center">3/3/21</td>
            <td align="right">92</td>
          </tr>
          <tr>
            <td>Q6</td>
            <td align="center">React Components</td>
            <td align="center">3/10/21</td>
            <td align="right">78</td>
          </tr>
          <tr>
            <td>Q7</td>
            <td align="center">JSX</td>
            <td align="center">3/17/21</td>
            <td align="right">96</td>
          </tr>
          <tr>
            <td>Q8</td>
            <td align="center">State and Props</td>
            <td align="center">3/24/21</td>
            <td align="right">91</td>
          </tr>
          <tr>
            <td>Q9</td>
            <td align="center">Routing</td>
            <td align="center">3/31/21</td>
            <td align="right">84</td>
          </tr>
          <tr>
            <td>Q10</td>
            <td align="center">Node and APIs</td>
            <td align="center">4/7/21</td>
            <td align="right">91</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={3}>Average</td>
            <td align="right">89</td>
          </tr>
        </tfoot>
      </table>

      <h4>My Courses This Term</h4>
      <table id="wd-your-table" border={1} width="100%">
        <thead>
          <tr>
            <th>Course</th>
            <th align="center">Title</th>
            <th align="center">Day</th>
            <th align="center">Time</th>
            <th>Credits</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>CS 5610</td>
            <td align="center">Web Development</td>
            <td align="center">Mon</td>
            <td align="center">6:00&ndash;9:00 pm</td>
            <td align="right">4</td>
          </tr>
          <tr>
            <td rowSpan={2}>CS 5330</td>
            <td rowSpan={2} align="center">
              Pattern Recognition and Computer Vision
            </td>
            <td align="center">Mon</td>
            <td align="center">11:45 am&ndash;1:25 pm</td>
            <td rowSpan={2} align="right">
              4
            </td>
          </tr>
          <tr>
            <td align="center">Thu</td>
            <td align="center">11:45 am&ndash;1:25 pm</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
