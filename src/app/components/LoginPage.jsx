import React from "react";
import { Link, withRouter } from "react-router-dom";

import firebase from "firebase";

export class LoginPage extends React.Component {
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
      <div
        className="container center-align valign-wrapper"
        style={{ height: "100%" }}
      >
        <div
          className="card-panel"
          style={{
            margin: "auto",
            width: "100%"
          }}
        >
          <h4 className="center-align">Please sign in</h4>
          <div className="divider" />
          <br />
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
              className="btn btn-primary indigo"
              style={{ width: "100%" }}
              onClick={this.submitLogin}
            >
              Submit
            </button>
          </form>
          <br />
          {this.state.showError == true && (
            <p style={{ color: "#e74c3c" }}>{this.state.errorMessage}</p>
          )}
          <Link to="/signup">Don't have an account?</Link>
        </div>
      </div>
    );
  }

  submitLogin() {
    let email = this.state.email;
    let password = this.state.password;

    let promise = firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log("Successfully logged in!");
        this.props.history.push("/");
      })
      .catch(err => {
        this.setState({ showError: true, errorMessage: err.message });
      });
  }
}
