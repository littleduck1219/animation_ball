import React from "react";
import "./App.css";
import useCanvasApp from "./useCanvasApp";
import Ball from "./Ball";

function App() {
    const { canvas, ctx, stageWidth, stageHeight, startAnimation, stopAnimation } = useCanvasApp();

    return (
        <div className='App'>
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

export default App;
