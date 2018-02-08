import React from "react";

export class Delete extends React.Component {
  constructor() {
    super();
    this.state = {
      id: ""
    };
    this.generateBills = this.generateBills.bind(this);
  }


  generateBills(bill) {
    return (
      <option key={bill.id} id={bill.id} value={bill.id}>
        {bill.StateBillID}
      </option>
    );
  }

  change = event => {
    this.setState({id: event.target.value});
  }

  render() {
    return (
      <div>
        <h2>Remove an Action</h2>
        <form id="delete-actions" onSubmit={this.props.deleteAction}>
          <label htmlFor="StateBillID">Find Bill:</label>
          <select
            id="delete-action"
            name="StateBillID"
            onChange={this.change} value={this.state.id}
            onClick={this.change}
            onKeyUp={this.change}
            onMouseLeave={this.change}
          >
            <option value="" disabled selected>
              Select something...
            </option>
            {this.props.data.map(this.generateBills)}
          </select>
          <input type="submit" id="delete-button" value="Remove Action" />
        </form>
      </div>
    );
  }
}
