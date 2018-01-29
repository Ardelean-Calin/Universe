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
import { subjects } from "./database";
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
const messaging = firebase.messaging();
messaging.onMessage(payload => {
  console.log("Message received! ", payload);
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

// function PublicRoute({ authed }) {
//   return (
//     <Route
//       {...rest}
//       render={props =>
//         authed === false ? (
//           <Component {...props} />
//         ) : (
//           <Redirect to="/dashboard" />
//         )
//       }
//     />
//   );
// }

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      authed: firebase.auth().currentUser === null ? false : true // If user is authenticated, I start as authed
    };

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log("Authentication successful");
        this.setState({
          authed: true
        });
        requestNotificationPermission(user.uid);
        console.log(user.uid);
      } else {
        console.log("Not authenticated");
        this.setState({
          authed: false
        });
      }
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
            render={props => <SubjectList subjects={subjects} />}
          />
          <PrivateRoute
            exact
            path="/subject/:number"
            authed={this.state.authed}
            render={({ match }) => (
              <SubjectPage
                subject={subjects[parseInt(match.params.number - 1)]}
              />
            )}
          />
        </Switch>
      </div>
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
