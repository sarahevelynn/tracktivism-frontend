import React from "react";
import LegiTracker from "./LegislationTracker";
import BillsTracking from "./TotalBills";
import { AddLegislation } from "./AddLegislation";
import { Update } from "./UpdateLegislation";
import Delete from "./DeleteLegislation";
import DeleteBoth from "./DeleteBoth";

export default class RelivantLegislation extends React.Component {
  render(){
    return(
      <main>
      <BillsTracking data={this.props.legislation} />
      <LegiTracker data={this.props.legislation} />
      <AddLegislation data={this.props.legislation} addLegislation={this.props.addLegislation} />
      <Update data={this.props.legislation} updateLegislation={this.props.updateLegislation} />
      <Delete data={this.props.legislation} deleteLegislation={this.props.deleteLegislation} />
      <DeleteBoth data={this.props.legislation} deleteBoth={this.props.deleteBoth} />
      </main>
    )
  }
}
