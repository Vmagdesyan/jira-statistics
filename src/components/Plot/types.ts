import { LineProps, LineType } from "./Line";

export interface PlotProps {
    lines: LineType[];
    labelsY: string[];
    labelsX: string[];
    getLineColor?: LineProps["getColor"];
}