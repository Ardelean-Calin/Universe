import React from "react";

import { QeustionsPage, QuestionsPage } from "./QuestionsPage";
let courseQuestions = [
  {
    title: "How would you rate the course?",
    detail:
      "Please rate the content of the course and it's usefulness to your personal development."
  },
  {
    title: "How would you rate the redaction of the course?",
    detail: "Was the course presented in a meaningful way? Was it engaging?"
  },
  {
    title: "How likely are you to recommend this course?",
    detail:
      'This is the overall "cool factor" of the course. Did you think it was worth your time?'
  }
];

export default class SubjectCollapsible extends React.Component {
  constructor(props) {
    super(props);

    this.getDateString = this.getDateString.bind(self);
    this.getTimeString = this.getTimeString.bind(self);
  }

  getDateString(dateString, short = false) {
    let dateObj = new Date(dateString);
    let options = {
      year: short ? "2-digit" : "numeric",
      month: short ? "short" : "long",
      day: "numeric"
    };
    return dateObj.toLocaleString("en-GB", options);
  }

  getTimeString(dateString) {
    let dateObj = new Date(dateString);
    let options = {
      hour: "numeric",
      minute: "numeric",
      hour12: true
    };
    return dateObj.toLocaleTimeString("en-GB", options);
  }

  render() {
    return (
      <ul className="collapsible" data-collapsible="accordion">
        {this.props.courses.map((c, index) => (
          <li>
            <div className="collapsible-header flow-text">
              {this.props.prefix == "Course" ? (
                <i className="material-icons">import_contacts</i>
              ) : (
                <i className="material-icons">build</i>
              )}
              {this.props.prefix} {c.number}
              <span
                class="new badge"
                data-badge-caption={this.getDateString(c.date, true)}
              />
            </div>
            <div
              className="collapsible-body"
              style={{ padding: "1rem", background: "#FAFAFA" }}
            >
              <div>
                <h5>{c.title}</h5>
                <p className="flow-text">{c.subtitle}</p>
                <p className="flow-text">
                  <strong>Date: </strong>
                  <span style={{ marginLeft: "1.3rem" }}>
                    {this.getDateString(c.date)}
                  </span>
                </p>
                <p className="flow-text">
                  <strong>Time: </strong>
                  <span style={{ marginLeft: "1rem" }}>
                    {this.getTimeString(c.date)}
                  </span>
                </p>
                <div
                  style={{ marginTop: "0.5rem", marginBottom: "1rem" }}
                  className="divider"
                />
                <QuestionsPage questions={courseQuestions} />
              </div>
            </div>
          </li>
        ))}
      </ul>
    );
  }

  componentDidMount() {
    $(".collapsible").collapsible();
  }
}
