import React from "react";
import LegiTracker from "./LegislationTracker";
import BillsTracking from "./TotalBills";
import { AddLegislation } from "./AddLegislation";
import { Update } from "./UpdateLegislation";
import Delete from "./DeleteLegislation";
import DeleteBoth from "./DeleteBoth";
import Chart from "./Chart";

export default class RelivantLegislation extends React.Component {
  render(){
    return(
      <main>
      <BillsTracking data={this.props.legislation} />
      <LegiTracker data={this.props.legislation} />
      <div id ="bottom-menu">
      <div id="buttons">
      <AddLegislation data={this.props.legislation} catagories={this.props.catagories} addLegislation={this.props.addLegislation} />
      <Update data={this.props.legislation} catagories={this.props.catagories} updatePopulated={this.props.updatePopulated} updateLegislation={this.props.updateLegislation} />
      <Delete data={this.props.legislation} deleteLegislation={this.props.deleteLegislation} />
      <DeleteBoth data={this.props.legislation} deleteBoth={this.props.deleteBoth} />
      </div>
      <Chart data={this.props.legislation} />
      </div>
      </main>
    )
  }
}
