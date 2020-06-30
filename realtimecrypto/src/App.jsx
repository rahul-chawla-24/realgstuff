import React from "react";
import moment from "moment";
import io from "socket.io-client";
import BTChart from "./components/chart";
import "./App.css";
import { connect } from "react-redux";

class App extends React.Component {
  componentDidMount() {
    const getData = () => {
      const url = "https://api.coindesk.com/v1/bpi/historical/close.json";

      fetch(url)
        .then((r) => r.json())
        .then((bitcoinData) => {
          const sortedData = [];
          let count = 0;
          // console.log(bitcoinData.bpi)
          for (let date in bitcoinData.bpi) {
            sortedData.push({
              date: moment(date).format("MMM DD"),
              amt: bitcoinData.bpi[date].toLocaleString("us-EN", {
                style: "currency",
                currency: "USD",
              }),
              pv: count,
              $: bitcoinData.bpi[date],
            });
            count++;
          }
          console.log(sortedData);
          this.props.dispatch({
            type: "SET_DATA",
            payload: sortedData,
          });
        })
        .catch((e) => {
          console.log(e);
        });
    };
    getData();

    this.socket = io("http://localhost:5000", {
      transports: ["websocket", "polling"],
    });
    this.socket.on("realtime", (value) => {
      console.log(value)
      this.props.dispatch({
        type: "REALTIME_DATA",
        payload: value,
      });
    });
  }
  render() {
    return (
      <div
        className="App"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div>{this.props.data && <BTChart data={this.props.data} />}</div>
      </div>
    );
  }
}

const stateMapper = (state) => {
  return {
    data: state.data,
  };
};
export default connect(stateMapper)(App);
