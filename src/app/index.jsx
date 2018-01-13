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

class App extends React.Component {
  render() {
    return (
      <div style={{ height: "100%" }}>
        <Switch>
          <Route exact path="/" component={LandingPage} />
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
  }
}

render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById("app")
);
