import React from "react";
import HorizontalCard from "./HorizontalCard";
import { NewsCard } from "./NewsCard";

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
          <NewsCard
            news={this.props.news}
            author={this.props.author}
            submitNews={this.props.submitNews}
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
                  setTimeout(() => this.props.history.push("/subjects"), 200)
                }
                style={{ width: "15rem" }}
                className="btn-large waves-effect waves-light indigo"
              >
                <i className="material-icons large white-text left">
                  library_books
                </i>
                Lectures
              </button>
              <br />
              <br />
              <button
                // onClick={() =>
                //   setTimeout(() => this.props.history.push("/schedule"), 200)
                // }
                style={{ width: "15rem" }}
                className="btn-large waves-effect waves-light indigo"
              >
                <i className="material-icons large white-text left">
                  date_range
                </i>
                Schedule
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
