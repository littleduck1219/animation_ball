import React, { useState } from "react";
import "./cssBasicAnimations.css";
import css from "./../../../../node_modules/@emotion/react/src/css";

type DemoType = "scale" | "rotate" | "translate" | "color" | "multiple" | null;

export default function CSSBasicAnimations() {
    const [activeDemo, setActiveDemo] = useState<DemoType>(null);

    const toggleDemo = (demo: DemoType) => {
        setActiveDemo(activeDemo === demo ? null : demo);
    };

    return (
        <div className='css-animations-container'>
            {/* 1. 크기변화 */}
            <div className='demo-section'>
                <h3>1. Scale Animation</h3>

                <div className='demo-controls'>
                    <button
                        className={`demo-button ${activeDemo === "scale" ? "active" : ""}`}
                        onClick={() => toggleDemo("scale")}>
                        Toggle Scale
                    </button>
                    <div
                        className={`demo-box scale-box ${activeDemo === "scale" ? "scaled" : ""}`}
                    />
                </div>

                <div className='demo-code'>
                    <pre>{`css

    .scale-box {
        transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);

        &.scaled {
            transform: scale(1.5);
        }
    }
        `}</pre>
                </div>
            </div>

            {/* 2. 위치이동 */}
            <div className='demo-section'>
                <h3>2. Translate Animation</h3>

                <div className='demo-controls'>
                    <button
                        className={`demo-button ${activeDemo === "translate" ? "active" : ""}`}
                        onClick={() => toggleDemo("translate")}>
                        Toggle Scale
                    </button>
                    <div
                        className={`demo-box translate-box ${
                            activeDemo === "translate" ? "translated" : ""
                        }`}
                    />
                </div>

                <div className='demo-code'>
                    <pre>{`css

    .translate-box {
        transition: transform 1s ease-in-out;

        &.translated {
            transform: rotate(360deg);
        }
    }
        `}</pre>
                </div>
            </div>

            {/* 3. Opacity */}
            <div className='demo-section'>
                <h3>3. Opacity Animation</h3>

                <div className='demo-controls'>
                    <button
                        className={`demo-button ${activeDemo === "translate" ? "active" : ""}`}
                        onClick={() => toggleDemo("translate")}>
                        Toggle Scale
                    </button>
                    <div
                        className={`demo-box translate-box ${
                            activeDemo === "translate" ? "translated" : ""
                        }`}
                    />
                </div>
            </div>

            {/* 3. Opacity */}
            <div className='demo-section'>
                <h3>3. Opacity Animation</h3>

                <div className='demo-controls'>
                    <button
                        className={`demo-button ${activeDemo === "translate" ? "active" : ""}`}
                        onClick={() => toggleDemo("translate")}>
                        Toggle Scale
                    </button>
                    <div
                        className={`demo-box translate-box ${
                            activeDemo === "translate" ? "translated" : ""
                        }`}
                    />
                </div>
            </div>

            {/* 3. Opacity */}
            <div className='demo-section'>
                <h3>3. Opacity Animation</h3>

                <div className='demo-controls'>
                    <button
                        className={`demo-button ${activeDemo === "translate" ? "active" : ""}`}
                        onClick={() => toggleDemo("translate")}>
                        Toggle Scale
                    </button>
                    <div
                        className={`demo-box translate-box ${
                            activeDemo === "translate" ? "translated" : ""
                        }`}
                    />
                </div>
            </div>

            {/* 3. Opacity */}
            <div className='demo-section'>
                <h3>3. Opacity Animation</h3>

                <div className='demo-controls'>
                    <button
                        className={`demo-button ${activeDemo === "translate" ? "active" : ""}`}
                        onClick={() => toggleDemo("translate")}>
                        Toggle Scale
                    </button>
                    <div
                        className={`demo-box translate-box ${
                            activeDemo === "translate" ? "translated" : ""
                        }`}
                    />
                </div>
            </div>
        </div>
    );
}
