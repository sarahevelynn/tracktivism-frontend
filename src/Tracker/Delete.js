import React from "react";

export class Delete extends React.Component {
  constructor() {
    super();
    this.generateBills = this.generateBills.bind(this);
  }

  generateBills(bill) {
    return (
      <option key={bill.id} id={bill.id}>
        {bill.StateBillID}
      </option>
    );
  }

  render() {
    return (
      <div>
        <h2>Remove an Action</h2>
        <form id="delete-actions" onSubmit={this.props.takeOff}>
          <label htmlFor="StateBillID">Find Bill:</label>
          <select id="delete-action" name="StateBillID">
            {this.props.data.map(this.generateBills)}
          </select>
          <input type="submit" id="delete-button" value="Remove Bill" />
        </form>
      </div>
    );
  }
}
