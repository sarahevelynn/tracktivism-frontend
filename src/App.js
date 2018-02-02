import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import ActivismPortal from "./Tracker";
import LegislationPortal from "./Legislation";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bills: [],
      legislation: []
    };
    this.stringToBoolean = this.stringToBoolean.bind(this);
    this.getNewAction = this.getNewAction.bind(this);
    this.addActions = this.addActions.bind(this);
  }
  componentDidMount() {
    fetch("https://tracktivism.herokuapp.com/")
      .then(response => response.json())
      .then(response => {
        this.setState({
          legislation: response.legislation,
          bills: response.tracking
        });
      })
      .catch(error => console.log(error));
  }

  stringToBoolean(boolean) {
    if (boolean === "true") {
      return true;
    } else if (boolean === "false") {
      return false;
    }
  }

  getNewAction(event) {
    event.preventDefault();
    console.log(event.target);
    var data = new FormData(event.target);
    var response = data.get("response");
    var responseValues = this.stringToBoolean(
      data.get("Call", "Event", "Online", "SentOn", "Other")
    );
    return {
      name: data.get("StateBillID"),
      Position: data.get("Position"),
      Call: data.get("Call"),
      Event: data.get("Event"),
      Online: data.get("Online"),
      SentOn: data.get("SentOn"),
      Other: data.get("Other"),
      Notes: data.get("Notes"),
      NumberOfActions: data.get("NumberOfActions")
    };
  }

  addActions(event) {
    event.preventDefault();
    console.log("addActions");
    fetch("https://tracktivism.herokuapp.com/tracking", {
      method: "post",
      body: JSON.stringify(this.getNewAction(event)),
      headers: new Headers({
        "Content-Type": "application/json"
      })
    })
      .then(response => {
        console.log("response", response);
        this.componentDidMount();
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <div>
            <Route
              path="/tracker"
              render={() => (
                <ActivismPortal
                  bills={this.state.bills}
                  legislation={this.state.legislation}
                  add={this.addActions}
                />
              )}
            />
            <Route
              path="/legislation"
              render={() => (
                <LegislationPortal
                  bills={this.state.bills}
                  legislation={this.state.legislation}
                />
              )}
            />
          </div>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
