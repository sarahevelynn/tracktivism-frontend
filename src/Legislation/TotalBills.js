import React from "react";

export default class BillsTracking extends React.Component {
  constructor(props) {
    super(props);
  }

  totalBills = bill => {
    var number = 0;
    for (var i = 0; i < bill.length; i++) {
      number = bill.length;
    }
    return number;
  };

  render() {
    return (
      <div id="counter">
        <h1 id="points">
          Bills to Keep an Eye On: {this.totalBills(this.props.data)}
        </h1>
      </div>
    );
  }
}
