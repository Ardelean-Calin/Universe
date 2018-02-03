import React from "react";
import { Link, withRouter } from "react-router-dom";

import firebase from "firebase";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showError: false,
      errorMessage: "",
      email: "",
      password: ""
    };

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ showError: false });
      }
    });

    this.submitLogin = this.submitLogin.bind(this);
  }

  render() {
    return (
      <div className="center-align" style={{ height: "auto" }}>
        <div
          className="blue darken-1"
          style={{
            height: "12rem",
            display: "flex",
            justifyContent: "center",
            alignContent: "center"
          }}
        >
          <img
            src="https://i.imgur.com/FSvbyvW.png"
            style={{
              width: "8rem",
              height: "8rem",
              margin: "auto"
            }}
          />
        </div>
        <div style={{ width: "80%", margin: "auto" }}>
          <h4 className="center-align">LOGIN</h4>
          <div className="divider" />
          <form>
            <div className="input-field">
              <i className="material-icons prefix">email</i>
              <input
                value={this.state.email}
                type="text"
                id="inputEmail"
                onChange={e => (this.state.email = e.target.value)}
              />
              <label htmlFor="inputEmail">E-Mail</label>
            </div>
            <div className="input-field">
              <i className="material-icons prefix">lock</i>
              <input
                value={this.state.password}
                type="password"
                id="inputPass"
                onChange={e => (this.state.password = e.target.value)}
              />
              <label htmlFor="inputPass">Password</label>
            </div>
            <button
              className="btn btn-primary blue darken-1 waves-effect"
              style={{ width: "100%" }}
              onClick={this.submitLogin}
              type="button"
            >
              LOG IN
            </button>
          </form>
          <br />
          {this.state.showError == true && (
            <p style={{ color: "#e74c3c" }}>{this.state.errorMessage}</p>
          )}
          <Link to="/signup" style={{ marginBottom: "1rem" }}>
            Don't have an account?
          </Link>
        </div>
      </div>
    );
  }

  submitLogin() {
    // First reset any previous errors.
    this.setState({
      showError: false
    });

    let email = this.state.email;
    let password = this.state.password;

    // Get the user to the loading page.
    this.props.history.push("/");
    // This is done by putting the authed state of index.jsx to null
    this.props.loadingLogin();

    let promise = firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(err => {
        this.setState({ showError: true, errorMessage: err.message });
      });
  }
}

export default withRouter(LoginPage);
