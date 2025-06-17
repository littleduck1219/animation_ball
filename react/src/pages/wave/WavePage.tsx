import React from "react";
import useCanvasApp from "../../hooks/useCanvasApp";

export default function WavePage() {
    const { canvas, ctx, stageWidth, stageHeight, startAnimation, stopAnimation } = useCanvasApp();
    return <div>wave</div>;
}
