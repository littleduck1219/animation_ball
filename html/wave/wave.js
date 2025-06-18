import { Point } from "./point.js";

export class Wave {
    constructor(index, totalPoints, color) {
        this.index = index;
        this.totalPoints = totalPoints;
        this.color = color;
        this.points = [];
    }

    resize(stageWidth, stageHeight) {
        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;

        this.centerX = stageWidth / 2;
        this.centerY = stageHeight / 2;

        this.pointGap = this.stageWidth / (this.totalPoints - 1);

        if (this.points.length === 0) {
            this.init();
        } else {
            for (let i = 0; i < this.totalPoints; i++) {
                const point = this.points[i]; 
                point.x = this.pointGap * i;
                point.fixedY = this.centerY;
            }
        }
    }

    init() {
        for (let i = 0; i < this.totalPoints; i++) {
            const point = new Point(this.index + i, this.pointGap * i, this.centerY);
            this.points.push(point);
        }
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.fillStyle = this.color;

        this.points[0].update();

        let prevX = this.points[0].x;
        let prevY = this.points[0].y;

        ctx.moveTo(prevX, prevY);

        for (let i = 1; i < this.totalPoints; i++) {
            this.points[i].update();

            const currentX = this.points[i].x;
            const currentY = this.points[i].y;

            const cx = (prevX + currentX) / 2;
            const cy = (prevY + currentY) / 2;

            ctx.quadraticCurveTo(prevX, prevY, cx, cy);

            prevX = currentX;
            prevY = currentY;
        }

        ctx.lineTo(prevX, prevY);
        ctx.lineTo(this.stageWidth, this.stageHeight);
        ctx.lineTo(this.points[0].x, this.stageHeight);
        ctx.fill();
        ctx.closePath();

        // this.point.update();

        // ctx.arc(this.point.x, this.point.y, 30, 0, 2 * Math.PI);
        // ctx.fill();
    }
}
