import React from "react";
import { Tracker } from "./Tracker";
import { ResistancePoints } from "./ResistancePoints";
import { AddAction } from "./AddAction";
import { Delete } from "./Delete";

export default class ActivismProfile extends React.Component {
  render() {
    return (
      <main>
        <ResistancePoints data={this.props.bills}/>
        <Tracker data={this.props.bills} />
        <AddAction data={this.props.legislation} add={this.props.add} />
        <Delete data={this.props.tracking} takeOff={this.props.takeOff} />
      </main>
    );
  }
}
