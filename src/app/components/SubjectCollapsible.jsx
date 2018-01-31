import React from "react";

import { QeustionsPage, QuestionsPage } from "./QuestionsPage";

let currentCourse = null;

export default class SubjectCollapsible extends React.Component {
  constructor(props) {
    super(props);

    this.currentCourse = null;

    this.getDateString = this.getDateString.bind(this);
    this.getTimeString = this.getTimeString.bind(this);
    this.submitReview = this.submitReview.bind(this);
    this.loadModal = this.loadModal.bind(this);
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
        <div>
          <ul className="collapsible" data-collapsible="accordion">
            {this.props.courses.map(([key, value], index) => (
              <li data-id={key}>
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
                      <strong>Data: </strong>
                      <span style={{ marginLeft: "0.5rem" }}>
                        {this.getDateString(value.date)}
                      </span>
                    </p>
                    <p className="flow-text">
                      <strong>Ora: </strong>
                      <span style={{ marginLeft: "1.1rem" }}>
                        {this.getTimeString(value.date)}
                      </span>
                    </p>
                    <div
                      style={{ marginTop: "0.5rem", marginBottom: "1rem" }}
                      className="divider"
                    />
                    <QuestionsPage
                      questions={this.props.questions}
                      onSubmit={this.loadModal}
                    />
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div
            className="modal modal-fixed-footer"
            ref={modal => (this.modal = modal)}
          >
            <div className="modal-content">
              <h4>Are you sure?</h4>
              <p>
                Your review will be submitted and you will not be able to edit
                it anymore.
              </p>
            </div>
            <div className="modal-footer">
              <div style={{ display: "inline" }}>
                <button className="modal-action modal-close waves-effect waves-red btn-flat">
                  No
                </button>
                <button
                  onClick={this.submitReview}
                  className="modal-action modal-close waves-effect waves-green btn-flat"
                >
                  Yes, I am sure
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    else {
      return "";
    }
  }

  componentDidMount() {
    $(".collapsible").collapsible({
      onOpen: el => {
        currentCourse = el[0].getAttribute("data-id");
      }
    });

    $(".modal").modal();
  }

  componentDidUpdate() {
    $(".collapsible").collapsible({
      onOpen: el => {
        currentCourse = el[0].getAttribute("data-id");
      }
    });

    $(".modal").modal();
  }

  loadModal(answers, additionalComment) {
    this.answers = answers;
    this.additionalComment = additionalComment;
    $(this.modal).modal("open");
  }

  submitReview() {
    // $(".collapsible").collapsible("close", 0);
    this.props.submitReview(
      currentCourse,
      this.answers,
      this.additionalComment
    );
  }
}
