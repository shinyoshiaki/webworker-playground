import * as React from "react";
import { storiesOf } from "@storybook/react";
import * as d3 from "d3";
import Component from ".";
const csv = require("./input.txt");

import MeasureWrap from "../../utill/fit";
import ImportCss from "../../styles/index";

ImportCss();

console.log({ csv });

storiesOf("line", module).add("normal1", () => (
  <div style={{ width: "100%", height: "100vh" }} />
));
