import React from "react";
import "./Tracker.css";
import yes from "./yes.png";
import no from "./no.png";
import thumbsUp from "./thumbsUp.png";
import thumbsNeutral from "./thumbsNeutral.png";
import thumbsDown from "./thumbsDown.png";

export class Tracker extends React.Component {
  constructor(props) {
    super(props);
    this.positionIcon = this.positionIcon.bind(this);
    this.actionIcon = this.actionIcon.bind(this);
    this.createActivismTable = this.createActivismTable.bind(this);
  }

  positionIcon(response) {
    console.log(response);
    if (response === "Support") {
      return <img id="response-icon" src={thumbsUp} alt="Support" className="position-icon" />;
    } else if (response === "Neutral") {
      return (
        <img id="response-icon" src={thumbsNeutral} alt="Neutral" className="position-icon" />
      );
    } else if (response === "Oppose") {
      return <img id="response-icon" src={thumbsDown} alt="Oppose" className="position-icon" />;
    }
  }

  actionIcon(response) {
    if (response === true) {
      return <img id="response-icon" src={yes} alt="Yes" className="action-icon" />;
    } else if (response === false) {
      return <img id="response-icon" src={no} alt="No" className="action-icon" />;
    }
  }

  createActivismTable(bill) {
    return (
      <tr key={bill.id}>
        <td className="bill-id">{bill.StateBillID}</td>
        <td>{this.positionIcon(bill.Position)}</td>
        <td>{this.actionIcon(bill.Call)}</td>
        <td>{this.actionIcon(bill.Event)}</td>
        <td>{this.actionIcon(bill.Online)}</td>
        <td>{this.actionIcon(bill.SentOn)}</td>
        <td>{this.actionIcon(bill.Other)}</td>
        <td>{bill.Notes}</td>
        <td>{bill.NumberOfActions}</td>
      </tr>
    );
  }

  render() {
    return (
      <div id="activism-table">
        <h3>Legislation Engaged With</h3>
        <table id="tracking">
          <tbody>
            <tr>
              <th>State Bill ID</th>
              <th>Position</th>
              <th>Made Call</th>
              <th>Went to Event</th>
              <th>Engaged Online</th>
              <th>Sent On</th>
              <th>Other</th>
              <th>Notes</th>
              <th>Number of Actions</th>
            </tr>
            {this.props.data.map(this.createActivismTable)}
          </tbody>
        </table>
      </div>
    );
  }
}
