import React from "react";
import { NewsCard } from "./NewsCard";
import { Badge } from "./Badge";

export class LandingPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
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
                style={{
                  width: "15rem",
                  marginBottom: "0.5rem",
                  marginTop: "0.5rem"
                }}
                className="btn-large waves-effect white black-text"
              >
                <i className="material-icons large left">library_books</i>
                Discipline
                <Badge noNotifications={this.props.numToReview} topRight />
              </button>
              <button
                // onClick={() =>
                //   setTimeout(() => this.props.history.push("/schedule"), 200)
                // }
                style={{
                  width: "15rem",
                  marginBottom: "0.5rem",
                  marginTop: "0.5rem"
                }}
                className="btn-large waves-effect white black-text"
              >
                <i className="material-icons large left">date_range</i>
                Orar
              </button>
              {/* <div className="divider" /> */}
              {/* <p>Urmeaza: </p> */}
              {/* <span className="new badge" data-badge-caption="6h" /> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
