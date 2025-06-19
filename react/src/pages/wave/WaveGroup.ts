import { Wave } from "./Wave";

export class WaveGroup {
    totalWaves: number;
    totalPoints: number;
    color: string[];
    waves: Wave[];

    constructor() {
        this.totalWaves = 3;
        this.totalPoints = 6;
        this.color = ["rgba(0,199,235,0.4)", "rgba(0,146,199,0.4)", "rgba(0,87,158,0.4)"];
        this.waves = [];

        for (let i = 0; i < this.totalWaves; i++) {
            const wave = new Wave(i, this.totalPoints, this.color[i]);
            this.waves[i] = wave;
        }
    }

    resize(stageWidth: number, stageHeight: number) {
        this.waves.forEach((wave) => {
            wave.resize(stageWidth, stageHeight);
        });
    }

    draw(ctx: CanvasRenderingContext2D) {
        this.waves.forEach((wave) => {
            wave.draw(ctx);
        });
    }
}
