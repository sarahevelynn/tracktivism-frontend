import React from "react";

export class ResistancePoints extends React.Component {
  constructor(props) {
    super(props);
    this.resistanceTally = this.resistanceTally.bind(this);
  }

  resistanceTally = bill => {
    var tally = 0;
    for (var i = 0; i < bill.length; i++) {
      tally += bill[i].NumberOfActions;
    }
    return tally;
  }

  render() {
    return (
      <div id="counter">
        <h1 id="points">Resistance Points: {this.resistanceTally(this.props.data)}</h1>
      </div>
    );
  }
}
