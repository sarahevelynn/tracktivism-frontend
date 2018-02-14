import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import ActivismPortal from "./Tracker";
import LegislationPortal from "./Legislation";

var baseURL = "https://tracktivism.herokuapp.com/";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bills: [],
      legislation: [],
      catagories: []
    };
    this.stringToBoolean = this.stringToBoolean.bind(this);
    this.getNewAction = this.getNewAction.bind(this);
    this.addActions = this.addActions.bind(this);
    this.findBillById = this.findBillById.bind(this);
    this.updateAction = this.updateAction.bind(this);
    this.deleteAction = this.deleteAction.bind(this);
    this.getNewLegislation = this.getNewLegislation.bind(this);
    this.addLegislation = this.addLegislation.bind(this);
    this.updateLegislation = this.updateLegislation.bind(this);
    this.deleteLegislation = this.deleteLegislation.bind(this);
    this.deleteBoth = this.deleteBoth.bind(this);
  }
  componentDidMount() {
    fetch(baseURL)
      .then(response => response.json())
      .then(response => {
        this.setState({
          legislation: response.legislation,
          bills: response.tracking,
          catagories: response.catagories,
        });
      })
      .catch(error => console.log(error));
  }

  stringToBoolean = boolean => {
    if (boolean === "true") {
      return true;
    } else if (boolean === "false") {
      return false;
    }
  }

  findBillById = id => {
    return this.state.bills.find(bill => {
      return bill.id === id;
    });
  };

  findActionById = id => {
    return this.state.legislation.find(bill => {
      return bill.id === id;
    });
  };

  matchStateBillId = id => {
    return this.state.legislation.find(bill => {
      return bill.id === id;
    })
  }

  matchLegiAndActionIds = id => {
    return this.state.bills.find(bill => {
      return bill.LegislationID === id;
    })
  }


  getNewAction = event => {
    event.preventDefault();
    var data = new FormData(event.target);
    var bill = this.findActionById(parseInt(data.get("StateBillID")));
    var StateBillID = bill.StateCode + " " + bill.StateBillID;
    return {
      StateBillID: StateBillID,
      Position: data.get("Position"),
      Call: this.stringToBoolean(data.get("Call")),
      Event: this.stringToBoolean(data.get("Event")),
      Online: this.stringToBoolean(data.get("Online")),
      SentOn: this.stringToBoolean(data.get("SentOn")),
      Other: this.stringToBoolean(data.get("Other")),
      Notes: data.get("Notes"),
      NumberOfActions: parseInt(data.get("NumberOfActions")),
      LegislationID: parseInt(data.get("StateBillID"))
    };
  };

  addActions = event => {
    event.preventDefault();

    fetch(baseURL + "tracking", {
      method: "post",
      body: JSON.stringify(this.getNewAction(event)),
      headers: new Headers({
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      })
    })
      .then(response => {
        this.componentDidMount();
      })
      .catch(error => {
        console.log(error);
      });
  };

  getActionUpdate = event => {
    event.preventDefault();
    var data = new FormData(event.target);
    var bill = this.findBillById(parseInt(data.get("StateBillID")));
    var StateBillID = bill.StateBillID;
    return {
      StateBillID: StateBillID,
      Position: data.get("Position"),
      Call: this.stringToBoolean(data.get("Call")),
      Event: this.stringToBoolean(data.get("Event")),
      Online: this.stringToBoolean(data.get("Online")),
      SentOn: this.stringToBoolean(data.get("SentOn")),
      Other: this.stringToBoolean(data.get("Other")),
      Notes: data.get("Notes"),
      NumberOfActions: parseInt(data.get("NumberOfActions")),
      LegislationID: parseInt(data.get("StateBillID"))
    };
  };

  updateAction = event => {
    event.preventDefault();
    var data = new FormData(event.target);
    var id = parseInt(data.get("StateBillID"));
    const payload = this.getActionUpdate(event);

    return fetch(baseURL + "tracking/" + id, {
      method: "put",
      body: JSON.stringify(payload),
      headers: new Headers({
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      })
    })
      .then(() => this.componentDidMount())
      .catch(error => {
        console.log(error);
      });
  };

  deleteAction = event => {
    event.preventDefault();
    var data = new FormData(event.target);
    var id = parseInt(data.get("StateBillID"));
    console.log(id);

    return fetch(baseURL + "tracking/" + id, {
      method: "delete",
      headers: new Headers({
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      })
    })
      .then(() => this.componentDidMount())
      .catch(error => {
        console.log(error);
      });
  };

  getNewLegislation = event => {
    event.preventDefault();
    var data = new FormData(event.target);
    return {
      StateBillID: data.get("StateBillID"),
      StateCode: data.get("StateCode"),
      BillName: data.get("BillName"),
      KeyWords: data.get("KeyWords"),
      Link: data.get("Link")
    };
  };

  addLegislation = event => {
    event.preventDefault();
    fetch(baseURL + "legislation", {
      method: "post",
      body: JSON.stringify(this.getNewLegislation(event)),
      headers: new Headers({
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      })
    })
      .then(response => {
        this.componentDidMount();
      })
      .catch(err => {
        console.log(err);
      });
  }

  updatePopulated = event => {
    event.preventDefault();
    var data = event.target;
    var bill = this.matchStateBillId
  }

  getLegislationUpdate = event => {
    event.preventDefault();
    var data = new FormData(event.target);
    var bill = this.matchStateBillId(parseInt(data.get("StateBillID")));
    var StateBillID = bill.StateBillID;
    return {
      StateBillID: StateBillID ,
      StateCode: data.get("StateCode"),
      BillName: data.get("BillName"),
      KeyWords: data.get("KeyWords"),
      Link: data.get("Link")
    };
  };

  updateLegislation = event => {
    event.preventDefault();
    var data = new FormData(event.target);
    var id = parseInt(data.get("StateBillID"));

    return fetch(baseURL + "legislation/" + id, {
      method: "put",
      body: JSON.stringify(this.getLegislationUpdate(event)),
      headers: new Headers({
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      })
    })
      .then(() => this.componentDidMount())
      .catch(error => {
        console.log(error);
      });
  };

  deleteLegislation = event => {
    event.preventDefault();
    var data = new FormData(event.target);
    var id = parseInt(data.get("StateBillID"));

    return fetch(baseURL + "legislation/" + id, {
      method: "delete",
      headers: new Headers({
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      })
    })
      .then(() => this.componentDidMount())
      .catch(error => {
        console.log(error);
      });
  };

  deleteBoth = event => {
    event.preventDefault();
    var data = new FormData(event.target);
    var id = parseInt(data.get("StateBillID"));

     fetch(baseURL + "legislation/" + id, {
      method: "delete",
      headers: new Headers({
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      })
    })
      .then(() => this.componentDidMount())
      .catch(error => {
        console.log(error);
      });

    var bill = this.matchLegiAndActionIds(id);
    var ActionId = bill.id;
     fetch(baseURL + "tracking/" + ActionId, {
      method: "delete",
      headers: new Headers({
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      })
    })
      .then(() => this.componentDidMount())
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <div>
            <Route
              path="/tracking"
              render={() => (
                <ActivismPortal
                  bills={this.state.bills}
                  legislation={this.state.legislation}
                  addActions={this.addActions}
                  updateAction={this.updateAction}
                  deleteAction={this.deleteAction}
                />
              )}
            />
            <Route
              path="/legislation"
              render={() => (
                <LegislationPortal
                  bills={this.state.bills}
                  legislation={this.state.legislation}
                  catagories={this.state.catagories}
                  addLegislation={this.addLegislation}
                  updateLegislation={this.updateLegislation}
                  updatePopulated={this.updatePopulated}
                  deleteLegislation={this.deleteLegislation}
                  deleteBoth={this.deleteBoth}
                />
              )}
            />
          </div>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
