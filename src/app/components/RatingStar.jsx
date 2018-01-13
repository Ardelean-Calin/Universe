import React from "react";

import Stars from "./Stars";

export default class RatingStar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div style={{ display: "flex", flexFlow: "column nowrap" }}>
        <h5>{this.props.question.title}</h5>
        <p>{this.props.question.detail}</p>
        <Stars onClick={this.props.onReview} />
      </div>
    );
  }
}
