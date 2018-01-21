import React from "react";

import firebase from "firebase";

export class SignupPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: "",
      email: "",
      pass1: "",
      pass2: "",
      showError: false,
      errorMessage: ""
    };

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        user.updateProfile({
          displayName: this.state.displayName
          //  Does not work this way. Consider using Identicon.js in the future
          // photoURL: `https://github.com/identicons/${this.displayName.replace(
          //   " ",
          //   ""
          // )}.png`
        });
        console.log(user);
        this.setState({ showError: false });
      }
    });

    this.submitSignup = this.submitSignup.bind(this);
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
          <h4 className="center-align">Create an account</h4>
          <div className="divider" />
          <br />
          <form onSubmit={this.submitSignup}>
            <div className="input-field">
              <i className="material-icons prefix">person</i>
              <input
                id="inputName"
                type="text"
                className="validate"
                onChange={e => (this.state.displayName = e.target.value)}
              />
              <label htmlFor="inputName">Full Name</label>
            </div>
            <div className="input-field">
              <i className="material-icons prefix">email</i>
              <input
                id="inputMail"
                type="text"
                className="validate"
                onChange={e => (this.state.email = e.target.value)}
              />
              <label htmlFor="inputMail">E-Mail</label>
            </div>
            <div className="input-field">
              <i className="material-icons prefix">lock</i>
              <input
                id="inputPass"
                type="password"
                className="validate"
                onChange={e => (this.state.pass1 = e.srcElement.value)}
                data-error="Passwords do not match"
              />
              <label htmlFor="inputPass">Password</label>
            </div>
            <div className="input-field">
              <i className="material-icons prefix">lock</i>
              <input
                id="inputPass2"
                type="password"
                className="validate"
                onChange={e => (this.state.pass2 = e.target.value)}
                data-error="Passwords do not match"
              />
              <label htmlFor="inputPass2">Repeat Password</label>
            </div>
            <br />
            <div className="divider" />
            <br />
            <div>
              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: "100%" }}
              >
                Submit
              </button>
            </div>
          </form>
          <div className="divider" />
          {this.state.showError == true && (
            <p style={{ color: "#e74c3c" }}>{this.state.errorMessage}</p>
          )}
        </div>
      </div>
    );
  }

  submitSignup() {
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.pass1)
      .catch(err => {
        this.setState({
          showError: true,
          errorMessage: err.message
        });
      });
  }
}
