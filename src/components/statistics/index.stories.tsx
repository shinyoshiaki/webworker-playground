import * as React from "react";
import { storiesOf } from "@storybook/react";
import MeasureWrap from "../../utill/fit";
import ImportCss from "../../styles/index";
import StatisticsView from "./view";
const csv = require("./input.txt");
console.log({ csv });
ImportCss();

class LoadData extends React.Component<{}, { input?: number[][] }> {
  state = { input: [] };
  async componentDidMount() {
    const arr = csv.split("\n");
    console.log({ arr });
    const input: number[][] = arr.map((item: any) =>
      item.split(",").map((num: any) => parseInt(num))
    );
    this.setState({ input });
  }
  render() {
    return (
      <div style={{ width: "100%", height: "100vh" }}>
        <MeasureWrap
          target={(a, b) => (
            <StatisticsView input={this.state.input} width={a} height={b} />
          )}
        />
      </div>
    );
  }
}

storiesOf("components", module).add("statistics", () => {
  return <LoadData />;
});
