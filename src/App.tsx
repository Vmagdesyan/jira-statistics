import React from "react";

import { Plot } from "components/Plot";
import { Point } from "components/Plot/Line";

import { getLineColor, getStatistics } from "./helpers";

const App = () => {
    const { statistics, statuses } = getStatistics();
    const points = statistics.reduce<Point[][]>((acc, item) => {
        const points = item.hours.map((hour, index) => ({ x: hour, y: index }));
        acc.push(points);

        return acc;
    }, [])

    return (
        <Plot labelsX={[]} labelsY={statuses} lines={points} getLineColor={getLineColor} />
    )
}

export default App