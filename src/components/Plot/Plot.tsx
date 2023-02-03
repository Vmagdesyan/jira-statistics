import { Mafs, Coordinates, Plot as PlotMafs } from "mafs"
import React from "react";

import "mafs/core.css";
import "mafs/font.css";

import { PlotProps } from "./types";
import { Line, Point } from "./Line";


export const Plot = (props: PlotProps) => {
    const { labelsX, labelsY, lines, getLineColor } = props;
    const getLabelByNubmer = (labels: string[]) => (n: number) =>
        labels.length > 0 ?
            n && n < labels.length ?
                labels[n] :
                "" :
            n;
    const labelsForY = getLabelByNubmer(labelsY);
    const labelsForX = getLabelByNubmer(labelsX);
    const renderLine = (point: Point, index: number, line: Point[]) => line.length > index + 1 ?
        (<Line getColor={getLineColor} point1={point} point2={line[index + 1]} key={`${point.x}:${point.y}:${index}`} />) :
        null


    return (
        <Mafs viewBox={{ x: [-5, 5], y: [-5, 5] }}>
            <>
                <Coordinates.Cartesian yAxis={{
                    lines: 1,
                    labels: labelsForY,

                }} xAxis={{
                    lines: 1,
                    labels: labelsForX,
                }} />
                {lines.map((line) =>
                    line.map(renderLine)
                )}
            </>
        </Mafs >
    )
}