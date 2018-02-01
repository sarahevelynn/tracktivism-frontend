import React from "react";
var count = 0;

export default class Points extends {
  constructor(props) {
    super(props);
    this.countOfActions = this.countOfActions.bind(this);
}

countOfActions(tracking){
  for(var i = 0; i < tracking.length; i++){
    count += tracking.NumberOfActions
  }
  return count;
}
