import * as React from "react";
import * as d3 from "d3";
import { select, axisBottom, axisLeft } from "d3";
import Worker from "worker-loader!./worker";
const csv=require("./input.txt")
console.log({ csv });

interface Props {
  input: number[][];
}

export default class Statistics extends React.Component<Props, {}> {
  worker = new (Worker as any)();
  constructor(props: Props) {
    super(props);
  }

  async componentDidMount() {
    const res = await fetch(csv);
    const input = await res.text();
    console.log({ input });
  }

  render() {
    return <div>a</div>;
  }
}
