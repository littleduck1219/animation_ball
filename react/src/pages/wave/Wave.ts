import React from "react";
import { Point } from "./Point";

type Props = {
    index: number;
    totalPoints: number;
    color: string;
};

type Points = {
    x: number;
    y: number;
    fixedY: number;
}[];

export default function Wave(props: Props) {
    const { index, totalPoints, color } = props;
    const points: Points = [];

    const resize = (stageWidth: number, stageHeight: number) => {
        const centerX = stageWidth / 2;
        const centerY = stageHeight / 2;

        const pointGap = stageWidth / (totalPoints - 1);

        if (points.length === 0) {
            init();
        } else {
            for (let i = 0; i < totalPoints; i++) {
                const point = points[i];
                point.x = pointGap * i;
                point.fixedY = centerY;
            }
        }
    };

    const init = () => {
        for (let i = 0; i < totalPoints; i++) {
            const point = new Point(index + i, pointGap * i, centerY);
            points.push(point);
        }
    };

    return {
        resize,
    };
}
