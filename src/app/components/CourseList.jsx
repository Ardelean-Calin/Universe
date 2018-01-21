import React from "react";

import HorizontalCard from "./HorizontalCard";
import { Navbar } from "./Navbar";

import { Link } from "react-router-dom";

export class CourseList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {/* <Navbar /> */}
        <div className="container">
          {this.props.courses.map((item, index) => (
            <HorizontalCard
              title={item.title}
              subtitle={item.subtitle}
              image={item.image}
              key={index}
              linkTo={"/course/" + item.index}
            />
          ))}
        </div>
      </div>
    );
  }
}
