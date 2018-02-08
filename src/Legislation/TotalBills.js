import React from "react";

export default class BillsTracking extends React.Component {
  constructor(props) {
    super(props)
    this.totalBills = this.totalBills.bind(this);
  }

  totalBills(bill){
    var number = 0;
    for(var i =0; i<bill.length; i++){
      number = bill.length
    }
    return number;
  }

  render() {
    return(<h1>Total Number of Bills to Keep an Eye On: {this.totalBills(this.props.data)}</h1>
    )
  }
}
