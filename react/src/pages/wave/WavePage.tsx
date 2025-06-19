import React, { useEffect, useRef } from "react";
import useCanvasApp from "../../hooks/useCanvasApp";
import { WaveGroup } from "./WaveGroup";

export default function WavePage() {
    const { canvas, ctx, stageWidth, stageHeight, startAnimation, stopAnimation } = useCanvasApp();
    const waveGroup = useRef<WaveGroup | null>(null);

    useEffect(() => {
        if (!ctx.current || stageWidth === 0 || stageHeight === 0) return;

        waveGroup.current = new WaveGroup();
        waveGroup.current.resize(stageWidth, stageHeight);

        const draw = () => {
            if (!waveGroup.current || !ctx.current) return;
            waveGroup.current.draw(ctx.current);
        };

        startAnimation(draw);
        return () => stopAnimation();
    }, [ctx, stageWidth, stageHeight, startAnimation, stopAnimation]);

    return <canvas ref={canvas} />;
}
