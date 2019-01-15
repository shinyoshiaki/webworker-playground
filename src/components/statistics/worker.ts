/* eslint-disable no-restricted-globals */
import * as ss from "simple-statistics";

self.addEventListener("message", event => {
  const input: number[][] = event.data;
  const res = ss.linearRegression(input);
  (self as any).postMessage(res);
});
