import React from "react";
import ReactDOM from "react-dom";

import { Element, scroller } from "react-scroll";

import RatingStar from "./RatingStar";
import ThankYou from "./ThankYou";
import SubjectCollapsible from "./SubjectCollapsible";

export class SubjectPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card z-depth-0">
        <div className="card-image">
          <img src={this.props.subject.image} className="responsive-img" />
          <span className="card-title flow-text">
            {this.props.subject.title}
          </span>
          <a className="btn-floating halfway-fab indigo">
            <i className="material-icons">format_align_justify</i>
          </a>
        </div>
        <div className="card-content">
          <div>
            <p>{this.props.subject.description}</p>
          </div>
          <div
            style={{ marginTop: "0.5rem", marginBottom: "0.5rem" }}
            className="divider"
          />
          <SubjectCollapsible
            courses={this.props.subject.courses}
            prefix="Course"
          />
          <SubjectCollapsible
            courses={this.props.subject.laboratories}
            prefix="Laboratory"
          />
        </div>

        <div
          className="modal modal-fixed-footer"
          id="modalThanks"
          style={{ height: "20rem" }}
        >
          <div className="modal-content">
            <h4>Are you sure?</h4>
            <p>
              Your review will be submitted and you will not be able to edit it
              anymore.
            </p>
          </div>
          <div className="modal-footer">
            <div style={{ display: "inline" }}>
              <button className="modal-action modal-close waves-effect waves-red btn-flat">
                No
              </button>
              <button className="modal-action modal-close waves-effect waves-green btn-flat">
                Yes, I am sure
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  showThanks() {
    alert("Not yet implemented! Back-end not ready.");
  }

  componentDidMount() {
    $(".modal").modal();
  }
}
