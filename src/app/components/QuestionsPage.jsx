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

    this.gotoQestion = this.gotoQestion.bind(this);
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
              onReview={() => {
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
            Additional comment (280 characters)
          </label>
        </div>
        <div className="center-align">
          <a
            ref="buttonSubmit"
            className="btn-flat  modal-trigger"
            disabled={!this.state.canSubmit}
            href="#modalThanks"
          >
            Submit Review
          </a>
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
}
