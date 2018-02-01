import React from "react";
import { Tracker } from "./Tracker";
import {ResistancePoints} from "./ResistancePoints";

export default class ActivismProfile extends React.Component {
  render() {
    return (
      <main>
        <ResistancePoints data={this.props.data}/>
        <Tracker data={this.props.data} />
      </main>
    );
  }
}
