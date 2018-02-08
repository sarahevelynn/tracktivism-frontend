import React from "react";

export class Update extends React.Component {
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
        {bill.StateCode} {bill.StateBillID}
      </option>
    );
  }

  change = event => {
    this.setState({id: event.target.value});
  }

  render() {
    return (
      <div>
        <h2>Update a Bill</h2>
        <form id="update-legislation" onSubmit={this.props.updateLegislation}>
        <label htmlFor="StateBillID">Select Bill to Update:</label>
        <select
          id="update-legislation"
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
          <label htmlFor="StateCode">Update State Code:</label>
          <input type="text" name="StateCode" />
          <label htmlFor="BillName">Update Bill Name:</label>
          <input type="text" name="BillName" />
          <label htmlFor="KeyWords">Update Key Words</label>
          <input type="text" name="KeyWords" />
          <label htmlFor="Link">Update Bill Link</label>
          <input type="text" name="Link" />
          <input type="submit" id="update-button" value="Update Bill" />
        </form>
      </div>
    );
  }
}
