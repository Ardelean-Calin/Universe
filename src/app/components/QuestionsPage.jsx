import React from "react";
import ReactDOM from "react-dom";
import RatingStar from "./RatingStar";

export class QuestionsPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      canSubmit: false,
      additionalComment: ""
    };

    this.answers = {};

    this.gotoQestion = this.gotoQestion.bind(this);
    this.submitReview = this.submitReview.bind(this);
  }

  render() {
    this.reviewedCourses = new Array(this.props.questions.length).fill(0);

    return (
      <div>
        {this.props.questions.map((question, index) => (
          <div key={index}>
            <RatingStar
              ref={`question_${index}`}
              question={question}
              onReview={answer => {
                this.answers[question.id] = answer;
                this.reviewedCourses[index] = 1;
                this.gotoQestion(
                  index == this.props.questions.length - 1
                    ? "buttonSubmit"
                    : `question_${index + 1}`
                );
              }}
            />
            <br />
          </div>
        ))}
        <div className="input-field">
          <textarea
            style={{ height: "5rem", maxHeight: "5rem", overflowY: "auto" }}
            maxLength="280"
            id="textAdditionalComment"
            className="materialize-textarea"
            value={this.state.additionalComment}
            onChange={e => this.setState({ additionalComment: e.target.value })}
          />
          <label htmlFor="textAdditionalComment">
            Comentariu aditional (280 de caractere)
          </label>
        </div>
        <div className="center-align">
          <button
            ref="buttonSubmit"
            className="btn-flat waves-effect"
            onClick={this.submitReview}
            disabled={!this.state.canSubmit}
          >
            Submit Review
          </button>
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

  submitReview() {
    this.props.onSubmit(this.answers, this.state.additionalComment);
  }
}
