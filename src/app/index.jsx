// React
import React from "react";
import { render } from "react-dom";
import {
  HashRouter,
  Route,
  Switch,
  Redirect,
  withRouter
} from "react-router-dom";

// Firebase stuff
import firebase from "firebase";

// Stylesheets
import slick from "../../node_modules/slick-carousel/slick/slick.css";
import slickTheme from "../../node_modules/slick-carousel/slick/slick-theme.css";
import materialize from "../../node_modules/materialize-css/dist/css/materialize.css";
import materialIcons from "./fontstyle.css";
import animateCSS from "./animate.css";

// Components
import { SubjectPage } from "./components/SubjectPage";
import { SubjectList } from "./components/SubjectList";
import { ThankYou } from "./components/ThankYou";
import { LandingPage } from "./components/LandingPage";
import { LoginPage } from "./components/LoginPage";
import { SignupPage } from "./components/SignupPage";

const config = {
  apiKey: "AIzaSyDN6i-0wR7M-B6KYmY3S8dJqy8d65Tp9qk",
  authDomain: "university-f3ce2.firebaseapp.com",
  databaseURL: "https://university-f3ce2.firebaseio.com",
  projectId: "university-f3ce2",
  storageBucket: "university-f3ce2.appspot.com",
  messagingSenderId: "289185582138"
};
firebase.initializeApp(config);

// Push notifications
const messaging = firebase.messaging();
messaging.onMessage(payload => {
  Materialize.toast("Recenzie noua disponibila!", 4000);
});

// Request notification permissions from the User. This function is only run
// after successfuly authentication.
function requestNotificationPermission(userID) {
  messaging
    .requestPermission()
    .then(() => {
      console.log("Push notifications allowed!");
      return messaging.getToken();
    })
    .then(token => {
      console.log("Sending token to server: ", token);
      firebase
        .database()
        .ref("notificationTokens/" + userID)
        .set(token);
    })
    .catch(err => {
      console.log("Push notifications denied!");
    });
}

function PrivateRoute(props) {
  console.log("Private Route: ", props);
  return (
    <Route
      exact
      path={props.path}
      render={
        // If I am authed, I return the render function given as props. Otherwise
        // I render a redirect.
        props.authed === true ? props.render : () => <LoginPage />
      }
    />
  );
}

// function PublicRoute(props) {
//   return (
//     <Route
//       exact
//       path={props.path}
//       render={props.authed === false ? props.render : () => <LandingPage />}
//     />
//   );
// }

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      authed: firebase.auth().currentUser === null ? false : true, // If user is authenticated, I start as authed
      userID: null,
      subjects: {},
      courses: {},
      laboratories: {},
      courseQuestions: {},
      laboratoryQuestions: {}
    };

    this.loadDataFromDatabase = this.loadDataFromDatabase.bind(this);

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        // Authentication successful
        this.setState({
          authed: true,
          userID: user.uid
        });

        this.loadDataFromDatabase();
        requestNotificationPermission(user.uid);
      } else {
        // Authentication unsuccessful
        this.setState({
          authed: false
        });
      }
    });
  }

  loadDataFromDatabase() {
    firebase
      .database()
      .ref("/subjects")
      .once("value")
      .then(snapshot => {
        this.setState({
          subjects: snapshot.val()
        });
      });

    firebase
      .database()
      .ref("/courses")
      .once("value")
      .then(snapshot => {
        this.setState({
          courses: snapshot.val()
        });
        this.filterBySubject(this.state.courses, "s1");
      });

    firebase
      .database()
      .ref("/laboratories")
      .once("value")
      .then(snapshot => {
        this.setState({
          laboratories: snapshot.val()
        });
      });

    firebase
      .database()
      .ref("/questionsCourses")
      .once("value")
      .then(snapshot => {
        this.setState({
          courseQuestions: snapshot.val()
        });
      });

    firebase
      .database()
      .ref("/questionsLaboratory")
      .once("value")
      .then(snapshot => {
        this.setState({
          laboratoryQuestions: snapshot.val()
        });
      });
  }

  render() {
    return (
      <div style={{ height: "100%" }}>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route
            exact
            path="/signup"
            authed={this.state.authed}
            component={SignupPage}
          />
          <Route
            exact
            path="/login"
            authed={this.state.authed}
            component={LoginPage}
          />
          <PrivateRoute
            exact
            path="/subjects"
            authed={this.state.authed}
            render={props => <SubjectList subjects={this.state.subjects} />}
          />
          <PrivateRoute
            exact
            path="/subject/:id"
            authed={this.state.authed}
            render={({ match }) => (
              <SubjectPage
                subjectID={match.params.id}
                imageURL={this.state.subjects[match.params.id].imageURL}
                courses={this.filterBySubject(
                  this.state.courses,
                  match.params.id
                )}
                laboratories={this.filterBySubject(
                  this.state.laboratories,
                  match.params.id
                )}
                courseQuestions={Object.values(this.state.courseQuestions)}
                laboratoryQuestions={Object.values(
                  this.state.laboratoryQuestions
                )}
                subject={this.state.subjects[match.params.id]}
              />
            )}
          />
        </Switch>
      </div>
    );
  }

  // Filters courses based on subject ID
  filterBySubject(toBeFiltered, subjectID) {
    return Object.entries(toBeFiltered).filter(
      ([key, val]) => val.subjectID == subjectID
    );
  }

  componentDidMount() {}

  componentWillUnmount() {
    firebase.auth().signOut();
  }
}

render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById("app")
);
