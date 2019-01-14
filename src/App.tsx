import React, { Component } from "react";
import WebWorker from "./webworker";
import Worker from "./hello.worker.js";

class App extends Component<{}, { counter: number }> {
  worker = new (Worker as any)();
  constructor(props: any) {
    super(props);
    this.state = { counter: 0 };
    this.worker.postMessage(0);
  }

  componentDidMount() {
    this.worker.addEventListener("message", (event: any) => {
      console.log({ event });
      this.setState({ counter: event.data });
    });
  }

  render() {
    return <div>worker{this.state.counter}</div>;
  }
}

export default App;
