import React from "react";

export class ThankYou extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        id="modalThanks"
        className="modalContainer"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          alignContent: "center",
          backgroundColor: "rbga(0, 0, 0)",
          zIndex: 1000
        }}
      >
        <div
          className="card-panel center-align"
          style={{ width: "70%", margin: "15% auto" }}
        >
          <h4>Thank you!</h4>
          <i className="material-icons large">sentiment_very_satisfied</i>
          <p>Your review has been sent!</p>
        </div>
      </div>
    );
  }
}
