import React from "react";
import { Point } from "./Point";

export class Wave {
    points: Point[] = [];
    index: number;
    totalPoints: number;
    color: string;
    stageWidth: number = 0;
    stageHeight: number = 0;
    centerX: number = 0;
    centerY: number = 0;
    pointGap: number = 0;

    constructor(index: number, totalPoints: number, color: string) {
        this.index = index;
        this.totalPoints = totalPoints;
        this.color = color;
    }

    resize(stageWidth: number, stageHeight: number) {
        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;

        this.centerX = stageWidth / 2;
        this.centerY = stageHeight / 2;

        this.pointGap = this.stageWidth / (this.totalPoints - 1);

        if (this.points.length === 0) {
            this.init();
        } else {
            this.points.forEach((point, i) => {
                point.x = this.pointGap * i;
                point.fixedY = this.centerY;
            });
        }
    }

    init() {
        for (let i = 0; i < this.totalPoints; i++) {
            const point = new Point(this.index + i, this.pointGap * i, this.centerY);
            this.points.push(point);
        }
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.fillStyle = this.color;

        this.points[0].update();
        let prevX = this.points[0].x;
        let prevY = this.points[0].y;

        ctx.moveTo(prevX, prevY);

        for (let i = 1; i < this.totalPoints; i++) {
            const point = this.points[i];
            point.update();

            const cx = (prevX + point.x) / 2;
            const cy = (prevY + point.y) / 2;

            ctx.quadraticCurveTo(prevX, prevY, cx, cy);

            prevX = point.x;
            prevY = point.y;
        }

        ctx.lineTo(prevX, prevY);
        ctx.lineTo(this.stageWidth, this.stageHeight);
        ctx.lineTo(this.points[0].x, this.stageHeight);
        ctx.fill();
        ctx.closePath();
    }
}
