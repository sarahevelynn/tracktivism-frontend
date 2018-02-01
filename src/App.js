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

  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <div>
            <Route
              path="/tracker"
              component={() => <ActivismPortal data={this.state.bills} />}
            />
            <Route
              path="/legislation"
              component={() => (
                <LegislationPortal data={this.state.legislation} />
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
