import React from "react";

import HorizontalCard from "./HorizontalCard";
import SubjectCollapsible from "./SubjectCollapsible";

import { Link } from "react-router-dom";

export class SubjectList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          {this.props.subjects.map((item, index) => (
            <HorizontalCard
              title={item.title}
              subtitle={item.subtitle}
              image={item.image}
              notifications={2}
              key={index}
              linkTo={"/subject/" + item.index}
            />
          ))}
        </div>
      </div>
    );
  }

  componentDidMount() {
    $(".collapsible").collapsible();
  }
}
