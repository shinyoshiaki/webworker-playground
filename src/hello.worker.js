/* eslint-disable no-restricted-globals */

export default () => {
  self.addEventListener("message", event => {
    console.log("start");
    let initial = event.data;
    setInterval(() => {
      console.log("count", initial);
      self.postMessage(initial++);
    }, 1000);
  });
};
