/* eslint-disable no-restricted-globals */

const sha1 = require("sha1");

self.addEventListener("message", event => {
  console.log(sha1("start"));
  let initial = event.data;
  setInterval(() => {
    console.log("count", initial);
    self.postMessage(initial++);
  }, 1000);
});
