import React from "react";

export class AddAction extends React.Component{
  constructor(){
    super()
  }

  render() {
    return(
      <div id="add-action">
      <h2>Add Some Action </h2>
      <form id="new-action" onSubmit={this.props.add}>
      <label htmlFor="StateBillID">Find your bill:</label>
      <select name="name" id="update-name">
              {this.props.data.map(this.createInviteList)}
            </select>
      </form>
      </div>
    )
  }
}
