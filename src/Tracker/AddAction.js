import React from "react";

export class AddAction extends React.Component {
  constructor(props) {
    super(props);
    this.generateBills = this.generateBills.bind(this);
    this.state = { count: 0 };
    this.counter = this.counter.bind(this);
  }

  generateBills(bill) {
    return (
      <option key={bill.id} id={bill.id}>
        {bill.StateCode} {bill.StateBillID}
      </option>
    );
  }

  counter(event) {
    var count = this.state.count;
    if (event.target.value === "true") {
      this.setState({ count: count + 1 });
    // } else if (event.target.value === "false") {
    //   if (this.state.count === 0) {
    //     return;
    //   }
    //   this.setState({ count: count - 1 });
    }
  }

  updateCounter(count) {
    this.setState({ count: this.state.count + count });
  }

  render() {
    return (
      <div id="add-action">
        <h2>Add Some Action </h2>
        <form id="new-action" onSubmit={this.props.add}>
          <label htmlFor="StateBillID">Find your bill:</label>
          <select name="StateBillID" id="StateBillID">
            <option value="" disabled selected>
              Select something...
            </option>
            {this.props.data.map(this.generateBills)}
          </select>
          <label htmlFor="Position">Your Position on the Bill:</label>
          <select name="Position">
            <option value="" disabled selected>
              Select something...
            </option>
            <option value="Support">Support</option>
            <option value="Neutral">Neutral</option>
            <option value="Oppose">Oppose</option>
          </select>
          <label htmlFor="Call">Did you make a call?</label>
          <select name="Call" onChange={this.counter}>
            <option value="" disabled selected>
              Select something...
            </option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
          <label htmlFor="Event">Did you go to an event?</label>
          <select name="Event" onChange={this.counter}>
            <option value="" disabled selected>
              Select something...
            </option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
          <label htmlFor="Online">Did you engage online?</label>
          <select name="Online" onChange={this.counter}>
            <option value="" disabled selected>
              Select something...
            </option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
          <label htmlFor="SentOn">Did you send it on?</label>
          <select name="SentOn" onChange={this.counter}>
            <option value="" disabled selected>
              Select something...
            </option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
          <label htmlFor="Other">Another type of activism action?</label>
          <select required name="Other" onChange={this.counter}>
            <option value="" disabled selected>
              Select something...
            </option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
          <label htmlFor="Notes">Special Notes on Legislation</label>
          <input type="text" name="Notes" />
          <label htmlFor="NumberOfActions">Number of Actions on th:</label>
          <div name="NumberOfActions">
            <div>{this.state.count}</div>
          </div>
          <input type="submit" id="add-action-button" value="Submit Action" />
        </form>
      </div>
    );
  }
}
