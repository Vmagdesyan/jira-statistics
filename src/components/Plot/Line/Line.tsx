import React from "react";
import { Line as LineMafs, useMovablePoint } from "mafs"

import { LineProps } from "./types";

export const Line = (props: LineProps) => {
    const { point1, point2, getColor } = props;
    const pointFirst = useMovablePoint([point1.x, point1.y])
    const pointSecond = useMovablePoint([point2.x, point2.y])
    const color = getColor ? getColor(point1, point2) : "green";

    return (
        <LineMafs.Segment point1={pointFirst.point} point2={pointSecond.point} color={color} />
    )
}