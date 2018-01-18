import React from "react";

export class LoginPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container valign-wrapper" style={{ height: "100%" }}>
        <div className="card-panel">
          <h4 className="center-align">Please login to continue</h4>
          <div className="divider" />
          <br />
          <form action="">
            <div className="input-field">
              <i className="material-icons prefix">email</i>
              <input type="text" id="inputEmail" />
              <label htmlFor="inputEmail">E-Mail</label>
            </div>
            <div className="input-field">
              <i className="material-icons prefix">lock</i>
              <input type="password" id="inputPass" />
              <label htmlFor="inputPass">Password</label>
            </div>
            <button
              className="btn btn-primary"
              type="submit"
              style={{ width: "100%" }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}
