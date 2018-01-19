import React from "react";
import { render } from "react-dom";
import { HashRouter, Route, Switch } from "react-router-dom";

// Stylesheets
import slick from "../../node_modules/slick-carousel/slick/slick.css";
import slickTheme from "../../node_modules/slick-carousel/slick/slick-theme.css";
import materialize from "../../node_modules/materialize-css/dist/css/materialize.css";
import materialIcons from "./fontstyle.css";
import animateCSS from "./animate.css";

// Components
import { CoursePage } from "./components/CoursePage";
import { CourseList } from "./components/CourseList";
import { Navbar } from "./components/Navbar";
import { ThankYou } from "./components/ThankYou";
import { LandingPage } from "./components/LandingPage";
import { courses } from "./database";
import { LoginPage } from "./components/LoginPage";
import { SignupPage } from "./components/SignupPage";

let config = {
  apiKey: "AIzaSyDN6i-0wR7M-B6KYmY3S8dJqy8d65Tp9qk",
  authDomain: "university-f3ce2.firebaseapp.com",
  databaseURL: "https://university-f3ce2.firebaseio.com",
  projectId: "university-f3ce2",
  storageBucket: "university-f3ce2.appspot.com",
  messagingSenderId: "289185582138"
};
firebase.initializeApp(config);

class App extends React.Component {
  render() {
    return (
      <div style={{ height: "100%", background: "#ecf0f1" }}>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/signup" component={SignupPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route
            exact
            path="/courses"
            render={props => <CourseList courses={courses} />}
          />
          <Route
            exact
            path="/course/:number"
            render={({ match }) => (
              <CoursePage course={courses[parseInt(match.params.number - 1)]} />
            )}
          />
        </Switch>
      </div>
    );
  }

  componentDidMount() {
    // $('.modal').modal();
    // $('#modalThanks').modal('open');
    firebase.auth().signOut();
  }
}

render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById("app")
);
