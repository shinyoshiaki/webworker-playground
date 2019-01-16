import * as React from "react";
export default class MeasureWrap extends React.Component<{
    target: (width: number, height: number) => any;
}, {
    width: number;
    height: number;
}> {
    constructor(props: any);
    render(): JSX.Element;
}
