import React from "react";

export default class LegiTracker extends React.Component {
  constructor(props) {
    super(props);
  }

  createLegislationTable = bill => {
    return (
      <tr key={bill.id}>
        <td>{bill.StateCode}</td>
        <td>{bill.StateBillID}</td>
        <td>{bill.BillName}</td>
        <td>{bill.KeyWords}</td>
        <td>
          <a href={bill.Link}>Read Bill Here</a>
        </td>
      </tr>
    );
  };
  render() {
    return (
      <div id="table-div">
        <table id="tracking-table">
          <tbody>
            <tr>
              <th>Bill ID</th>
              <th>State Code</th>
              <th>Bill Name</th>
              <th>KeyWords</th>
              <th>Link</th>
            </tr>
            {this.props.data.map(this.createLegislationTable)}
          </tbody>
        </table>
      </div>
    );
  }
}
