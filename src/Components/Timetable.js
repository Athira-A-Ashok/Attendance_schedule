import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Timetable.css";

function Timetable() {
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;
  var today = new Date();
  var time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  return (
    <div>
      <h1 className="table-heading">Time Table</h1>
      <p className="date">Date {date}</p>
      <table>
        <tr className="row">
          <th>Days</th>
          <th>9am-10am</th>
          <th>10am-11am</th>
          <th>11am-12pm</th>
          <th>12pm-1pm</th>
          <th>1pm-1:45pm</th>
          <th>1:45pm-2:45pm</th>
          <th>2:45pm-3:45pm</th>
          <th>3:45pm-4:30pm</th>
        </tr>
        <tr>
          <td>Monday</td>
          <td>
            English<button>Join Now</button>
          </td>
          <td>Maths</td>
          <td>physics</td>
          <td>Sanskrit</td>
          <th style={{ width: "150px", color: "blue" }} rowSpan={6}>
            L<br />U<br />N<br />C<br />H<br />
            <br />B<br />R<br />E<br />A<br />K<br />
          </th>
          <td>Social</td>
          <td>Computer</td>
          <td>Activity</td>
        </tr>
        <tr>
          <td>Tuesday</td>
          <td>English</td>
          <td>Maths</td>
          <td>physics</td>
          <td>Sanskrit</td>
          <td>Social</td>
          <td>Computer</td>
          <td>Activity</td>
        </tr>
        <tr>
          <td>Wednesday</td>
          <td>English</td>
          <td>Maths</td>
          <td>physics</td>
          <td>Sanskrit</td>
          <td>Social</td>
          <td>Computer</td>
          <td>Activity</td>
        </tr>
        <tr>
          <td>Thursday</td>
          <td>English</td>
          <td>Maths</td>
          <td>physics</td>
          <td>Sanskrit</td>
          <td>Social</td>
          <td>Computer</td>
          <td>Activity</td>
        </tr>
        <tr>
          <td>Friday</td>
          <td>English</td>
          <td>Maths</td>
          <td>physics</td>
          <td>Sanskrit</td>
          <td>Social</td>
          <td>Computer</td>
          <td>Activity</td>
        </tr>
        <tr>
          <td>Saturday</td>
          <td>English</td>
          <td>Maths</td>
          <td>physics</td>
          <td>Sanskrit</td>
          <td>Social</td>
          <td>Computer</td>
          <td>Activity</td>
        </tr>
      </table>
    </div>
  );
}

export default Timetable;
