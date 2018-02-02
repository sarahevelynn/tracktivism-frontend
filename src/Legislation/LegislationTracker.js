import React from "react";

export default class LegiTracker extends React.Component{
  constructor(props){
    super(props)
    this.createLegislationTable=this.createLegislationTable.bind(this);
  }

createLegislationTable(bill){
  return(
    <tr key={bill.id}>
      <td className="bill-id">{bill.StateBillID}</td>
      <td>{bill.StateCode}</td>
      <td>{bill.BillName}</td>
      <td>{bill.KeyWords}</td>
      <td>{bill.Link}</td>
    </tr>
  )
}
  render() {
    return(
      <div id="legislation-table">
        <table id="tracking">
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
    )
  }
}
