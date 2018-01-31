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
          <img src={this.props.subject.imageURL} className="responsive-img" />
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
          {Object.keys(this.props.courses).length == 0 &&
          Object.keys(this.props.laboratories).length == 0 ? (
            <p className="flow-text center-align">
              Nici-o recenzie disponibila!
            </p>
          ) : (
            <div>
              <SubjectCollapsible
                courses={this.props.courses}
                questions={this.props.courseQuestions}
                submitReview={this.props.submitReview}
                prefix="Cursul"
              />
              <SubjectCollapsible
                courses={this.props.laboratories}
                questions={this.props.laboratoryQuestions}
                submitReview={this.props.submitReview}
                prefix="Laboratorul"
              />
            </div>
          )}
        </div>
      </div>
    );
  }
}
