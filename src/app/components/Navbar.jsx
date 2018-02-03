import React from "react";
import { withRouter } from "react-router";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ul id="slide-out" className="side-nav">
          <li>
            <div className="user-view">
              <div className="background">
                <img
                  className="resposive-img"
                  src="https://i.imgur.com/zmlXlpS.jpg"
                />
              </div>
              <a>
                <i className="circle material-icons large white-text">person</i>
              </a>
              <a>
                <span className="white-text name">
                  {this.props.displayName}
                </span>
              </a>
              <a>
                <span className="white-text email">{this.props.email}</span>
              </a>
            </div>
          </li>
          <li>
            <a className="subheader">Navigare</a>
          </li>
          <li>
            <a
              className="waves-effect"
              onClick={() => {
                this.props.history.push("/");
                $(".button-collapse").sideNav("hide");
              }}
            >
              <i className="material-icons">home</i>Pagină principală
            </a>
          </li>
          <li>
            <a
              className="waves-effect"
              onClick={() => {
                this.props.history.push("/subjects");
                $(".button-collapse").sideNav("hide");
              }}
            >
              <i className="material-icons">view_agenda</i>Listă discipline
            </a>
          </li>
          <li>
            <a className="waves-effect">
              <i className="material-icons">date_range</i>Orar
            </a>
          </li>
          <li>
            <div className="divider" />
          </li>
          <li>
            <a className="subheader">Alte opțiuni</a>
          </li>
          <li>
            <a className="waves-effect">
              <i className="material-icons">feedback</i>Raportați o problemă
            </a>
          </li>
        </ul>
        <div
          className="indigo valign-wrapper"
          style={{ width: "100%", height: "3rem" }}
        >
          <a
            data-activates="slide-out"
            className="button-collapse"
            style={{ marginTop: "0.5rem", marginLeft: "0.5rem" }}
          >
            <i className="material-icons small white-text">menu</i>
          </a>
          <img
            src="https://i.imgur.com/uapthBf.png"
            style={{
              width: "8.4rem",
              height: "2.5rem",
              margin: "auto auto"
            }}
          />
        </div>
      </div>
    );
  }

  componentDidMount() {
    $(".button-collapse").sideNav();
  }
}

export default withRouter(Navbar);