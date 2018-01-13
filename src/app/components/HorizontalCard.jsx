import React from "react";
import Ink from "react-ink";
import { withRouter } from "react-router-dom";

class HorizontalCard extends React.Component {
  constructor(props) {
    super(props);
    this.navigateTo = this.navigateTo.bind(this);
  }

  render() {
    return (
      <div
        onClick={this.navigateTo}
        className="card horizontal waves-effect"
        style={{ height: "10rem" }}
      >
        <div
          className="card-image valign-wrapper"
          style={{ padding: "0.5rem" }}
        >
          <img className="responsive-img" src={this.props.image} />
        </div>
        <div className="card-stacked">
          <div className="card-content">
            <p className="flow-text">
              <strong>{this.props.title}</strong>
            </p>
            <p>{this.props.subtitle}</p>
          </div>
        </div>

        <Ink />
      </div>
    );
  }

  navigateTo() {
    // Only if we want to navigate we navigate
    if (this.props.linkTo) {
      setTimeout(() => {
        this.props.history.push(this.props.linkTo);
      }, 200);
    }
  }
}

export default withRouter(HorizontalCard);
