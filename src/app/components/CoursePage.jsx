import React from "react";

import Slider from "react-slick";

import RatingStar from "./RatingStar";
import ThankYou from "./ThankYou";

export class CoursePage extends React.Component {
  constructor(props) {
    super(props);
    this.nextQuestion = this.nextQuestion.bind(this);
    this.state = {
      index: 0
    };
  }
  // TODO: Check if question was already rated, in which case I don't `slickNext` as to not annoy the user
  nextQuestion() {
    setTimeout(() => {
      this.slider.slickNext();
    }, 150);
    this.setState({
      index: this.state.index + 1
    });
  }

  render() {
    return (
      <div className="card z-depth-0">
        <div className="card-image">
          <img src={this.props.course.image} className="responsive-img" />
          <span className="card-title flow-text">{this.props.title}</span>
          <a className="btn-floating halfway-fab indigo">
            <i className="material-icons">format_align_justify</i>
          </a>
        </div>
        <div className="card-content">
          <div>
            <p>{this.props.course.description}</p>
          </div>
          <br />
          <div className="divider" />
          <Slider ref={c => (this.slider = c)} dots={true} infinite={false}>
            {this.props.course.questions.map((question, index) => (
              <div key={index}>
                <RatingStar
                  question={question}
                  onReview={() => this.nextQuestion()}
                />
              </div>
            ))}
          </Slider>

          <br />
          <br />

          <button
            className="btn"
            style={{ width: "100%" }}
            disabled={this.state.index != 3}
            onClick={this.showThanks}
          >
            Submit Review
          </button>
        </div>
      </div>
    );
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
  }
}
