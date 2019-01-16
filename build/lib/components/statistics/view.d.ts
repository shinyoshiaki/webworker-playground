import * as React from "react";
interface Props {
    input?: number[][];
    res?: {
        m: number;
        b: number;
    };
    width: number;
    height: number;
}
export default class StatisticsView extends React.Component<Props, {}> {
    render(): JSX.Element;
}
export {};
