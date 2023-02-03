export interface Point {
    x: number;
    y: number;
}

export type LineType = Point[];

export interface LineProps {
    point1: Point;
    point2: Point;
    getColor?: (point1: Point, point2: Point) => string;
}