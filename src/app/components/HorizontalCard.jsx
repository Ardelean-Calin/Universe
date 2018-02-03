import React from "react";
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
          {this.props.notifications ? (
            <span
              style={{ position: "absolute", top: "5px", right: "5px" }}
              class="new badge blue darken-1"
              data-badge-caption={`${this.props.notifications} ${
                this.props.notifications == 1 ? " nou" : " noi"
              }`}
            />
          ) : (
            ""
          )}
        </div>
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
