import React, { Component } from "react";
import Statistics from "./components/statistics/index";
const csv = require("./input.txt");
import MeasureWrap from "./utill/fit";

class App extends Component<{}, { input?: number[][] }> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    const res = await fetch(csv);
    const text = await res.text();
    console.log({ text });
    const arr = text.split("\n");
    const input: number[][] = arr.map(item =>
      item.split(",").map(num => parseInt(num))
    );
    input.shift();
    this.setState({ input });
  }

  render() {
    return (
      <div style={{ width: "100%", height: "100vh" }}>
        <MeasureWrap
          target={(a, b) => (
            <Statistics input={this.state.input} width={a} height={b} />
          )}
        />
      </div>
    );
  }
}

export default App;
