import React from "react";

import HorizontalCard from "./HorizontalCard";

import { Link } from "react-router-dom";

export class SubjectList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          {Object.entries(this.props.subjects).map(([key, value], index) => (
            <HorizontalCard
              title={value.title}
              subtitle={value.subtitle}
              image={value.imageURL}
              notifications={2}
              key={index}
              linkTo={"/subject/" + key}
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
