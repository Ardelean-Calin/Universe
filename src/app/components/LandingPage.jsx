import React from "react";
import HorizontalCard from "./HorizontalCard";
import { NewsCard } from "./NewsCard";

export class LandingPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div
          className="indigo valign-wrapper"
          style={{ width: "100%", height: "5rem" }}
        >
          <img
            src="https://i.imgur.com/uapthBf.png"
            style={{
              width: "13.43rem",
              height: "4rem",
              margin: "auto auto"
            }}
          />
        </div>
        <div
          style={{
            // backgroundColor: "#f5f6fa",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            paddingBottom: "2rem"
          }}
          className="container"
        >
          <NewsCard
            news={this.props.news}
            author={this.props.author}
            submitNews={this.props.submitNews}
            date={this.props.newsDate}
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
                className="btn-large waves-effect white black-text"
              >
                <i className="material-icons large left">library_books</i>
                Lectures
                <span
                  className="new badge right indigo"
                  data-badge-caption=""
                  style={{
                    position: "absolute",
                    top: "0.1rem",
                    right: "0.1rem",
                    minWidth: "2rem"
                  }}
                >
                  2
                </span>
              </button>

              <br />
              <br />
              <button
                // onClick={() =>
                //   setTimeout(() => this.props.history.push("/schedule"), 200)
                // }
                style={{ width: "15rem" }}
                className="btn-large waves-effect white black-text"
              >
                <i className="material-icons large left">date_range</i>
                Schedule
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
