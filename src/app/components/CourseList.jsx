import React from "react";

import HorizontalCard from "./HorizontalCard";
import { Navbar } from "./Navbar";
import LectureItem from "./LectureItem";

import { Link } from "react-router-dom";

export class CourseList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {/* <Navbar /> */}
        <div>
          <ul className="collapsible" data-collapsible="accordion">
            {this.props.courses.map((item, index) => (
              <li>
                <div className="collapsible-header flow-text">
                  <i className="material-icons">show_chart</i>
                  {item.title}
                  <span class="new badge indigo">4</span>
                </div>
                <div
                  className="collapsible-body"
                  style={{ padding: "0.5rem", background: "#FAFAFA" }}
                >
                  <LectureItem index={index} />
                  <div className="divider" style={{ marginTop: "0.5rem" }} />
                  <br />
                  {/* <HorizontalCard
                    title={item.title}
                    subtitle={item.subtitle}
                    image={item.image}
                    key={index}
                    linkTo={"/course/" + item.index}
                  /> */}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  componentDidMount() {
    $(".collapsible").collapsible();
  }
}
