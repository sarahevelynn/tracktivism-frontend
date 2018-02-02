import React from "react";
import LegiTracker from "./LegislationTracker";
import BillsTracking from "./TotalBills";

export default class RelivantLegislation extends React.Component {
  render(){
    return(
      <main>
      <BillsTracking data={this.props.legislation} />
      <LegiTracker data={this.props.legislation} />
      </main>
    )
  }
}
