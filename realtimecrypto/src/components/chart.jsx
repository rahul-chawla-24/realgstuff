import React, { PureComponent } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { curveCardinal } from "d3-shape";

const cardinal = curveCardinal.tension(0.2);

export default class BTChart extends PureComponent {
  static jsfiddleUrl = "https://jsfiddle.net/alidingling/xujpnxxp/";
  render() {
    const data = this.props.data;
    return (
      <div style={{ marginTop: "2rem" }}>
        <p style={{ textAlign: "center" }}>BTCUSD Crypto Chart</p>
        <AreaChart
          width={800}
          height={300}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="$"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.1}
          />
          <Area
            type={cardinal}
            dataKey="$"
            stroke="#82ca9d"
            fill="#82ca9d"
            fillOpacity={0.1}
          />
        </AreaChart>
      </div>
    );
  }
}
