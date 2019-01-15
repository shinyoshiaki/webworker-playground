import * as React from "react";
import * as d3 from "d3";
import { select, axisBottom, axisLeft } from "d3";
import { css } from "emotion";
import Worker from "worker-loader!./worker";
import { exp2x, exp2y, twopos2y } from "../../utill/\bcalc";

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
    if (!input) return <div />;

    const inputX = input.map(item => item[0]);
    const inputY = input.map(item => item[1]);

    const xMax = Math.max(...inputX);
    const yMax = Math.max(...inputY);
    const xM = xMax + xMax / 10;
    const yM = yMax + yMax / 10;

    const x = d3
      .scaleLinear()
      .domain([0, xM])
      .range([0, width]);

    const y = d3
      .scaleLinear()
      .domain([0, yM])
      .range([height, 0]);

    const points =
      res &&
      [[0, exp2y(res.m, res.b, 0)], [exp2x(res.m, res.b, yM), yM]].map(item => {
        return { x: item[0], y: item[1] };
      });

    const pos = points && [
      [0, twopos2y(points[0], points[1], 0)],
      [xM, twopos2y(points[0], points[1], xM)]
    ];

    return (
      <svg className="line-chart" width={width} height={height}>
        <g transform={`translate(50,-30)`}>
          <g
            className="axis axis--x"
            transform={`translate(0,${height})`}
            ref={node => select(node).call(axisBottom(x).ticks(10))}
          />
          <g
            className="axis axis--y"
            transform={`translate(0,0)`}
            ref={node => select(node).call(axisLeft(y).ticks(10))}
          />
          {input.map((item, i) => (
            <g className="circle" key={i}>
              <circle r={5} cx={x(item[0])} cy={y(item[1])} fill="black" />
            </g>
          ))}
          {res && (
            <g className="graph">
              <path
                className="line"
                style={{ stroke: "black" }}
                d={
                  d3
                    .line()
                    .x((d: any) => x(d[0]))
                    .y((d: any) => y(d[1]))(pos as any) as any
                }
                fill="none"
              />
            </g>
          )}
        </g>
      </svg>
    );
  }
}
