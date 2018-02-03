import React from "react";
import ReactDOM from "react-dom";

import RatingStar from "./RatingStar";
import SubjectCollapsible from "./SubjectCollapsible";
import { withRouter } from "react-router";

class SubjectPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card z-depth-0" style={{ marginTop: "0" }}>
        <div className="card-image">
          <img src={this.props.subject.imageURL} className="responsive-img" />
          <span className="card-title flow-text">
            {this.props.subject.title}
          </span>
          <a
            className="btn-floating halfway-fab waves-effect waves-light blue darken-1"
            onClick={() =>
              setTimeout(() => {
                this.props.history.goBack();
              }, 200)
            }
          >
            <i className="material-icons">view_agenda</i>
          </a>
        </div>
        <div className="card-content">
          {/* <p className="flow-text left-align">
            <strong>Urmatorul curs:</strong>
          </p>
          <br /> */}
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

export default withRouter(SubjectPage);
