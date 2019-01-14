import Node from "kad-rtc/lib/node/node";

export function load(){
    const node = new Node({ address: "35.231.49.162", port: "20000" });
    console.log({ node });
}