import React from "react";

import HorizontalCard from "./HorizontalCard";

import { Link } from "react-router-dom";

export class SubjectList extends React.Component {
  constructor(props) {
    super(props);

    this.getNoNotifications = this.getNoNotifications.bind(this);
  }

  // Get the number of non-reviewed items per subject
  getNoNotifications(subjectID) {
    let c = Object.keys(this.props.subjects[subjectID].cursuri);
    let s = Object.keys(this.props.subjects[subjectID].seminarii);
    let l = Object.keys(this.props.subjects[subjectID].laboratoare);

    let total = [...c, ...s, ...l];

    let noNotifications = 0;
    total.map(val => {
      if (this.props.toReview[val] == true) noNotifications++;
    });

    return noNotifications;
  }

  render() {
    return (
      <div>
        <div>
          {Object.entries(this.props.subjects).map(([key, value], index) => (
            <HorizontalCard
              title={value.titlu}
              subtitle={value.subtitlu}
              image={value.imageURL}
              notifications={this.getNoNotifications(key)}
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
