import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import ActivismPortal from "./Tracker";
import LegislationPortal from "./Legislation";

var baseURL = "https://tracktivism.herokuapp.com/";

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
    this.deleteAction = this.deleteAction.bind(this);
    this.getDeletedAction = this.getDeletedAction.bind(this);
  }
  componentDidMount() {
    fetch(baseURL)
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
    console.log(event);
    var data = new FormData(event.target);
    var dataTwo ={
      StateBillID: data.get("StateBillID"),
      Position: data.get("Position"),
      Call: this.stringToBoolean(data.get("Call")),
      Event: this.stringToBoolean(data.get("Event")),
      Online: this.stringToBoolean(data.get("Online")),
      SentOn: this.stringToBoolean(data.get("SentOn")),
      Other: this.stringToBoolean(data.get("Other")),
      Notes: data.get("Notes"),
      NumberOfActions: parseInt(data.get("NumberOfActions"))}
      return dataTwo;
  }

  addActions(event) {
    event.preventDefault();
    fetch(baseURL + "tracking", {
      method: "post",
      body: JSON.stringify(this.getNewAction(event)),
      headers: new Headers({
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      })
    })
      .then(response => {
        this.componentDidMount();
      })
      .catch(err => {
        console.log(err);
      });
  }

getDeletedAction(event){
  var response = new FormData(event);
  console.log(response);
  var StateBillID = response.get("StateBillID");
  return StateBillID.options[StateBillID.selectedIndex].id
}

  deleteAction(event){
    event.preventDefault();
    fetch(baseURL + "tracking", + this.getDeletedAction(), {
      method: "delete",
      headers: new Header({
        "Content-Type": "applicaiton/json"
      })
    })
    .then(() => this.componentDidMount())
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
              path="/tracking"
              render={() => (
                <ActivismPortal
                  bills={this.state.bills}
                  legislation={this.state.legislation}
                  add={this.addActions}
                  takeOff={this.deleteAction}
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
