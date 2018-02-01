
import React from "react";
import {Tracker} from "./Tracker";
import Header from "../Header/Header";

export class ActivismProfile extends React.Component {
  render() {
    return (
      <main>
      <Header />
      <Tracker data={this.props.data} />
      </main>
    );
  }
}
