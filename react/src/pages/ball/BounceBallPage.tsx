import React from "react";
import useCanvasApp from "../../hooks/useCanvasApp";
import Ball from "./components/Ball";

export default function BounceBallPage() {
    const { canvas, ctx, stageWidth, stageHeight, startAnimation, stopAnimation } = useCanvasApp();

    return (
        <div>
            <canvas ref={canvas} />
            {stageWidth > 0 && stageHeight > 0 && (
                <Ball
                    radius={30}
                    speed={15}
                    stageWidth={stageWidth}
                    stageHeight={stageHeight}
                    ctx={ctx}
                    startAnimation={startAnimation}
                    stopAnimation={stopAnimation}
                />
            )}
        </div>
    );
}
