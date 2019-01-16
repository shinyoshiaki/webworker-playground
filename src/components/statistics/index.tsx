import * as React from "react";
import Worker from "worker-loader!./worker";
import StatisticsView from "./view";

interface Props {
  input?: number[][];
  width: number;
  height: number;
}

export default class Statistics extends React.Component<
  Props,
  { res?: { m: number; b: number } }
> {
  worker = new Worker();
  constructor(props: Props) {
    super(props);
    this.state = { res: undefined };
    this.worker.addEventListener("message", (event: any) => {
      console.log({ event });
      this.setState({ res: event.data });
    });
  }

  componentWillUpdate(nextProps: Props) {
    if (nextProps.input != this.props.input)
      this.worker.postMessage(nextProps.input);
  }

  render() {
    const { width, height, input } = this.props;
    const { res } = this.state;
    return (
      <StatisticsView width={width} height={height} input={input} res={res} />
    );
  }
}
