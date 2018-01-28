import React from "react";
import HorizontalCard from "./HorizontalCard";

export class LandingPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        style={{
          backgroundColor: "#f5f6fa",
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingBottom: "2rem"
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignContent: "center"
          }}
        >
          <HorizontalCard
            style={{ padding: "1rem" }}
            image="https://www.shareicon.net/download/2015/08/04/80089_newspaper.svg"
            title="News here"
            subtitle="More details here"
          />
          <div className="divider" />
          <br />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignContent: "center",
              width: "100%"
            }}
          >
            <div className="center-align">
              <button
                onClick={() =>
                  setTimeout(() => this.props.history.push("/courses"), 200)
                }
                style={{ width: "15rem" }}
                className="btn-large waves-effect indigo"
              >
                <i className="material-icons large white-text left">
                  library_books
                </i>
                Lectures
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
