import React from "react";
import { Link } from "react-router-dom";

const LectureItem = props => (
  <div>
    {/* Lecture number here. */}
    <h5>Lecture 1</h5>
    <p>In this lecture you will learn about X and Y and Z.</p>
    <p className="flow-text">
      <strong>Date: </strong>1 Jul. 2018
      <span style={{ marginLeft: "1rem" }}>
        <strong>Time: </strong>12 P.M.
      </span>
    </p>
    <div className="center-align" style={{ marginTop: "0.5rem" }}>
      <Link
        to={`/course/${props.index + 1}`}
        className="btn-flat waves-effect waves-light indigo grey-text text-lighten-3"
      >
        Leave review
      </Link>
    </div>
  </div>
);

export default LectureItem;
