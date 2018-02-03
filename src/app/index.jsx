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
import materialize from "../../node_modules/materialize-css/dist/css/materialize.css";
import materialIcons from "./fontstyle.css";
import animateCSS from "./animate.css";

// Components
import { SubjectPage } from "./components/SubjectPage";
import { SubjectList } from "./components/SubjectList";
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
      author: null,
      newsText: null,
      newsAuthor: "",
      newsDate: new Date(),
      subjects: {},
      courses: {},
      laboratories: {},
      courseQuestions: {},
      laboratoryQuestions: {},
      alreadyReviewed: []
    };

    this.notifications = {};

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        // Authentication successful
        this.setState({
          authed: true,
          userID: user.uid,
          author: user.displayName
        });
        console.log(user);

        this.loadDataFromDatabase();
        requestNotificationPermission(user.uid);
      } else {
        // Authentication unsuccessful
        this.setState({
          authed: false
        });
      }
    });

    this.loadDataFromDatabase = this.loadDataFromDatabase.bind(this);
    this.submitReview = this.submitReview.bind(this);
    this.submitNews = this.submitNews.bind(this);
  }

  loadDataFromDatabase() {
    firebase
      .database()
      .ref("subjects/")
      .once("value")
      .then(snapshot => {
        this.setState({
          subjects: snapshot.val()
        });
      });

    firebase
      .database()
      .ref("courses/")
      .once("value")
      .then(snapshot => {
        this.setState({
          courses: snapshot.val()
        });
      });

    firebase
      .database()
      .ref("laboratories/")
      .once("value")
      .then(snapshot => {
        this.setState({
          laboratories: snapshot.val()
        });
      });

    firebase
      .database()
      .ref("questionsCourses/")
      .once("value")
      .then(snapshot => {
        this.setState({
          courseQuestions: snapshot.val()
        });
      });

    firebase
      .database()
      .ref("questionsLaboratory/")
      .once("value")
      .then(snapshot => {
        this.setState({
          laboratoryQuestions: snapshot.val()
        });
      });

    firebase
      .database()
      .ref("users/" + this.state.userID)
      .on("value", snapshot => {
        this.setState({
          alreadyReviewed: Object.values(snapshot.val())
        });
      });

    // Update news article
    firebase
      .database()
      .ref("news/")
      .on("value", snapshot => {
        this.setState({
          newsAuthor: snapshot.val().author,
          newsText: snapshot.val().text,
          newsDate: snapshot.val().date
        });
      });
  }

  render() {
    return (
      <div style={{ height: "100%" }}>
        <Switch>
          <PrivateRoute
            exact
            path="/"
            authed={this.state.authed}
            render={props => (
              <LandingPage
                {...props}
                submitNews={this.submitNews}
                author={this.state.newsAuthor}
                news={this.state.newsText}
                newsDate={this.state.newsDate}
              />
            )}
          />
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
            render={props => (
              <SubjectPage
                {...props}
                subjectID={props.match.params.id}
                imageURL={this.state.subjects[props.match.params.id].imageURL}
                submitReview={this.submitReview}
                courses={this.filterBySubject(
                  this.state.courses,
                  props.match.params.id
                )}
                laboratories={this.filterBySubject(
                  this.state.laboratories,
                  props.match.params.id
                )}
                courseQuestions={Object.values(this.state.courseQuestions)}
                laboratoryQuestions={Object.values(
                  this.state.laboratoryQuestions
                )}
                subject={this.state.subjects[props.match.params.id]}
              />
            )}
          />
        </Switch>
      </div>
    );
  }

  // Filters courses based on subject ID
  filterBySubject(toBeFiltered, subjectID) {
    let currentDate = new Date();
    let filtered = Object.entries(toBeFiltered).filter(
      ([key, val]) =>
        val.subjectID == subjectID &&
        this.state.alreadyReviewed.includes(key) == false &&
        currentDate.getTime() > new Date(val.date).getTime()
    );

    this.notifications[subjectID] = filtered.length;
    // this.setState({
    //   notifications: { ...notifications }
    // });

    console.log(this.notifications);
    return filtered;
  }

  componentDidMount() {}

  componentWillUnmount() {
    // firebase.auth().signOut();
  }

  submitReview(index, answers, additionalComment) {
    firebase
      .database()
      .ref("answers/" + index + "/" + this.state.userID)
      .set({
        ...answers,
        additionalComment: additionalComment
      });

    firebase
      .database()
      .ref("users/" + this.state.userID)
      .push()
      .set(index)
      .then(() => {
        Materialize.toast("Recenzia a fost trimisa!", 4000);
      });
  }

  submitNews(content) {
    firebase
      .database()
      .ref("news/")
      .set({
        author: this.state.author || "Anonymous",
        text: content,
        date: new Date().toUTCString()
      });
  }
}

render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById("app")
);
