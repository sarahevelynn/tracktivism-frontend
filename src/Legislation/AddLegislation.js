import React from "react";

export class AddLegislation extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div id="add-legislation">
        <h2>Add Some Bills </h2>
        <form id="new-legislation" onSubmit={this.props.addLegislation}>
          <label htmlFor="StateBillID">Find your bill:</label>
          <input type="text" name="StateBillID" />
          <label htmlFor="StateCode">Enter your State Code:</label>
          <input type="text" name="StateCode" />
          <label htmlFor="BillName">Enter Bill Name:</label>
          <input type="text" name="BillName" />
          <label htmlFor="KeyWords">Enter Key Words</label>
          <input type="text" name="KeyWords" />
          <label htmlFor="Link">Enter Bill Link</label>
          <input type="text" name="Link" />
          <input
            type="submit"
            id="add-legislation-button"
            value="Submit Legislation"
          />
        </form>
      </div>
    );
  }
}
