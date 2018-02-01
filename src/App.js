import React, { Component } from "react";
import "./App.css";
import Footer from "./Footer/Footer";
import { ActivismProfile } from "./Tracker/ActivismProfile";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bills: []
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
        <ActivismProfile data={this.state.bills} />
        <Footer />
      </div>
    );
  }
}

export default App;
