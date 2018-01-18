import React from "react";

export class SignupPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pass1: "",
      pass2: ""
    };
  }

  render() {
    return (
      <div
        className="container center-align valign-wrapper"
        style={{ height: "100%" }}
      >
        <div className="card-panel">
          <h4 className="center-align">Please create an account</h4>
          <div className="divider" />
          <br />
          <form>
            <div className="input-field">
              <i className="material-icons prefix">person</i>
              <input id="inputName" type="text" className="validate" />
              <label htmlFor="inputName">Full Name</label>
            </div>
            <div className="input-field">
              <i className="material-icons prefix">email</i>
              <input id="inputMail" type="text" className="validate" />
              <label htmlFor="inputMail">E-Mail</label>
            </div>
            <div className="input-field">
              <i className="material-icons prefix">email</i>
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
              <i className="material-icons prefix">email</i>
              <input
                id="inputPass2"
                type="password"
                className="validate"
                data-error="Passwords do not match"
              />
              <label htmlFor="inputPass2">Repeat Password</label>
            </div>
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
        </div>
      </div>
    );
  }

  componentDidMount() {}
}
