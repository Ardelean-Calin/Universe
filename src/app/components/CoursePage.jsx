import React from "react";
import ReactDOM from "react-dom";

import { Element, scroller } from "react-scroll";

import RatingStar from "./RatingStar";
import ThankYou from "./ThankYou";

export class CoursePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      canSubmit: false
    };

    this.gotoQestion = this.gotoQestion.bind(this);
  }

  render() {
    console.log(this.props.course.questions.length);
    this.reviewedCourses = new Array(this.props.course.questions.length).fill(
      0
    );
    return (
      <div className="card z-depth-0">
        <div className="card-image">
          <img src={this.props.course.image} className="responsive-img" />
          <span className="card-title flow-text">{this.props.title}</span>
          <a className="btn-floating halfway-fab indigo">
            <i className="material-icons">format_align_justify</i>
          </a>
        </div>
        <div className="card-content" ref="questionContainer">
          <div>
            <p>{this.props.course.description}</p>
          </div>
          <br />
          <div className="divider" />
          {this.props.course.questions.map((question, index) => (
            <div key={index}>
              <RatingStar
                ref={`question_${index}`}
                question={question}
                onReview={() => {
                  this.reviewedCourses[index] = 1;
                  this.gotoQestion(
                    index == this.props.course.questions.length - 1
                      ? "buttonSubmit"
                      : `question_${index + 1}`
                  );
                }}
              />
              <br />
              <div className="divider" />
            </div>
          ))}
          <div className="input-field">
            <textarea
              style={{ height: "5rem", maxHeight: "5rem", overflowY: "auto" }}
              maxLength="280"
              id="textAdditionalComment"
              className="materialize-textarea"
            />
            <label htmlFor="textAdditionalComment">
              Additional comment (280 characters)
            </label>
          </div>

          <a
            ref="buttonSubmit"
            className="btn indigo modal-trigger"
            style={{ width: "100%" }}
            disabled={!this.state.canSubmit}
            href="#modalThanks"
          >
            Submit Review
          </a>
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

  gotoQestion(reference) {
    let node = ReactDOM.findDOMNode(this.refs[reference]);
    node.scrollIntoView({
      alignToTop: false,
      behavior: "smooth",
      block: "center"
    });

    if (this.reviewedCourses.includes(0) == false) {
      this.setState({
        canSubmit: true
      });
    }
  }

  showThanks() {
    alert("Not yet implemented! Back-end not ready.");
  }

  componentDidMount() {
    // $('.slick-div').slick({
    //   dots: true,
    //   draggable: false,
    //   infinite: false,
    //   mobileFirst: true
    // });
    $(".modal").modal();
  }
}
