import React from "react";

export class NewsCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editMode: false,
      editText: ""
    };

    this.submitNews = this.submitNews.bind(this);
  }

  render() {
    return (
      <div className="card-panel white">
        {this.state.editMode ? (
          <div>
            <div className="input-field">
              <textarea
                id="editNews"
                className="materialize-textarea"
                maxLength="140"
                value={this.state.editText}
                onChange={e => this.setState({ editText: e.target.value })}
              />
              <label htmlFor="editNews">Edit message</label>
            </div>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <button className="btn" onClick={this.submitNews}>
                <i className="material-icons">done</i>
              </button>
              <button
                className="btn red darken-1"
                onClick={() => {
                  this.setState({ editMode: false, editText: "" });
                }}
              >
                <i className="material-icons">close</i>
              </button>
            </div>
          </div>
        ) : (
          <div>
            <span className="right">
              <button
                onClick={() => this.setState({ editMode: true })}
                className="btn-floating waves-effect waves-light"
              >
                <i className="material-icons">edit</i>
              </button>
            </span>
            <h5>Ultima noutate: </h5>
            <div className="divider" />
            <blockquote className="flow-text">{this.props.news}</blockquote>
            <div className="divider" />
            <p className="right-align">{this.props.author}</p>
          </div>
        )}
      </div>
    );
  }

  submitNews() {
    if (this.state.editText.length < 10) {
      Materialize.toast("Textul trebuie sa aiba minim 10 caractere.", 4000);
      return;
    }
    Materialize.toast("Anuntul a fost actualizat!", 4000);
    this.setState({ editMode: false });
    this.props.submitNews(this.state.editText);
  }
}
