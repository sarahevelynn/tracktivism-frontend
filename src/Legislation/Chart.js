import React from "react";
import { Radar } from "react-chartjs-2";

function countCivilRights(legislation) {
  var count = [];
  legislation.forEach(bill => {
    if (bill.KeyWords === "Civil Rights") {
      count.push(bill);
    }
  });
  return count.length;
}

function countSexDrugs(legislation) {
  var count = [];
  legislation.forEach(bill => {
    if (bill.KeyWords === "Sex & Drugs") {
      count.push(bill);
    }
  });
  return count.length;
}

function countLGBTQRights(legislation) {
  var count = [];
  legislation.forEach(bill => {
    if (bill.KeyWords === "LGBTQ") {
      count.push(bill);
    }
  });
  return count.length;
}

function countHealthCare(legislation) {
  var count = [];
  legislation.forEach(bill => {
    if (bill.KeyWords === "Health Care") {
      count.push(bill);
    }
  });
  return count.length;
}

function countEducation(legislation) {
  var count = [];
  legislation.forEach(bill => {
    if (bill.KeyWords === "Education") {
      count.push(bill);
    }
  });
  return count.length;
}

function countEnergy(legislation) {
  var count = [];
  legislation.forEach(bill => {
    if (bill.KeyWords === "Energy") {
      count.push(bill);
    }
  });
  return count.length;
}

function countScience(legislation) {
  var count = [];
  legislation.forEach(bill => {
    if (bill.KeyWords === "Science") {
      count.push(bill);
    }
  });
  return count.length;
}

function countFirearms(legislation) {
  var count = [];
  legislation.forEach(bill => {
    if (bill.KeyWords === "Firearms") {
      count.push(bill);
    }
  });
  return count.length;
}

function countBusiness(legislation) {
  var count = [];
  legislation.forEach(bill => {
    if (bill.KeyWords === "Business") {
      count.push(bill);
    }
  });
  return count.length;
}

function countRandom(legislation) {
  var count = [];
  legislation.forEach(bill => {
    if (bill.KeyWords === "Random") {
      count.push(bill);
    }
  });
  return count.length;
}

export default class Chart extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const chartData = {
      labels: [
        "Civil Rights",
        "Sex & Drugs",
        "LGBTQ",
        "Health Care",
        "Education",
        "Energy",
        "Science",
        "Firearms",
        "Business",
        "Random"
      ],
      datasets: [
        {
          label: "Your Web of Tracktivism",
          backgroundColor: "transparent",
          borderColor: "#0A918B",
          fill: "#159A95",
          radius: 2,
          pointRadius: 8,
          pointBorderWidth: 3,
          pointBackgroundColor: "#45F0E9",
          pointBorderColor: "#1E6865",
          pointHoverRadius: 10,
          data: [
            countCivilRights(this.props.data),
            countSexDrugs(this.props.data),
            countLGBTQRights(this.props.data),
            countHealthCare(this.props.data),
            countEducation(this.props.data),
            countEnergy(this.props.data),
            countScience(this.props.data),
            countFirearms(this.props.data),
            countBusiness(this.props.data),
            countRandom(this.props.data)
          ],
        }
      ]
    };
    var chartOptions = {
      scale: {
        gridLines: {
          color: "black",
          lineWidth: 2,
        },
        angleLines: {
          display: false
        },
        ticks: {
          beginAtZero: true,
          stepSize: 1,
          display: false,
        },
        pointLabels: {
          fontSize: 22,
          fontColor: "#488583",
        }
      },
      legend: {
        display: false
      },
      title: {
            display: true,
            text: "Your Web of Tracktivism",
            fontSize: 25,
            padding: 15
        }
    };

    return (
      <div id="catagories-chart">
        <Radar data={chartData} options={chartOptions}/>
      </div>
    );
  }
}
