import React, { Component } from "react";
import Worker from "worker-loader!./hello.worker";
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
    const raw = text.split(" ").slice(-1)[0];
    const arr = raw.split("\\n");
    const input: number[][] = arr.map(item =>
      item.split(",").map(num => parseInt(num))
    );
    input.shift();
    this.setState({ input });
  }

  render() {
    return (
      <div style={{ width: "100%", height: "100vh" }}>
        some
        <MeasureWrap
          target={(a, b) => (
            <Statistics input={this.state.input} width={a} height={b} />
          )}
        />
        some
      </div>
    );
  }
}

export default App;
