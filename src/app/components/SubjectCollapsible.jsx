import React from "react";

import { QeustionsPage, QuestionsPage } from "./QuestionsPage";

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
    if (this.props.courses.length > 0)
      return (
        <ul className="collapsible" data-collapsible="accordion">
          {this.props.courses.map(([key, value], index) => (
            <li>
              <div className="collapsible-header flow-text">
                {this.props.prefix == "Cursul" ? (
                  <i className="material-icons">import_contacts</i>
                ) : (
                  <i className="material-icons">build</i>
                )}
                {this.props.prefix} {value.index}
                <span
                  class="new badge"
                  data-badge-caption={this.getDateString(value.date, true)}
                />
              </div>
              <div
                className="collapsible-body"
                style={{ padding: "1rem", background: "#FAFAFA" }}
              >
                <div>
                  <h5>{value.title}</h5>
                  <p className="flow-text">{value.subtitle}</p>
                  <p className="flow-text">
                    <strong>Date: </strong>
                    <span style={{ marginLeft: "1.3rem" }}>
                      {this.getDateString(value.date)}
                    </span>
                  </p>
                  <p className="flow-text">
                    <strong>Time: </strong>
                    <span style={{ marginLeft: "1rem" }}>
                      {this.getTimeString(value.date)}
                    </span>
                  </p>
                  <div
                    style={{ marginTop: "0.5rem", marginBottom: "1rem" }}
                    className="divider"
                  />
                  <QuestionsPage questions={this.props.questions} />
                </div>
              </div>
            </li>
          ))}
        </ul>
      );
    else {
      return "";
    }
  }

  componentDidMount() {
    $(".collapsible").collapsible();
  }

  componentDidUpdate() {
    $(".collapsible").collapsible();
  }
}
