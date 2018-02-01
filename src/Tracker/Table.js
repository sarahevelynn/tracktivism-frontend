import React from "react";

export class Table extends React.Component {
  render() {
    return this.props.bills.tracking.map(bill => {
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
      </tr>;
    });
  }
}
