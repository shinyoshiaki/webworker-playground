/* eslint-disable no-restricted-globals */
const Node = require("kad-rtc/lib/node/node");

export default () => {
  const node = new Node({ address: "35.231.49.162", port: "20000" });
  console.log({ node });

  self.addEventListener("message", event => {
    console.log("start");
    let initial = event.data;
    setInterval(() => {
      console.log("count", initial);
      (self as any).postMessage(initial++);
    }, 1000);
  });
};
