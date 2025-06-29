import React, { useState } from "react";
import "./cssBasicAnimations.css";

type DemoType = "scale" | "translate" | "rotate" | "opacity" | "hover" | null;

export default function CSSBasicAnimations() {
    const [activeDemo, setActiveDemo] = useState<DemoType>(null);

    const toggleDemo = (demo: DemoType) => {
        setActiveDemo(activeDemo === demo ? null : demo);
    };

    return (
        <>
            {/* 1. SCALE */}
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

            {/* 2. TRANSLATE */}
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
            transform: translateX(10rem);
        }
    }

        `}</pre>
                </div>
            </div>

            {/* 3. ROTATE */}
            <div className='demo-section'>
                <h3>3. Rotate Animation</h3>

                <div className='demo-controls'>
                    <button
                        className={`demo-button ${activeDemo === "rotate" ? "active" : ""}`}
                        onClick={() => toggleDemo("rotate")}>
                        Toggle Scale
                    </button>
                    <div
                        className={`demo-box rotate-box ${
                            activeDemo === "rotate" ? "rotated" : ""
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

            {/* 4. OPACITY */}
            <div className='demo-section'>
                <h3>4. Opacity Animation</h3>

                <div className='demo-controls'>
                    <button
                        className={`demo-button ${activeDemo === "opacity" ? "active" : ""}`}
                        onClick={() => toggleDemo("opacity")}>
                        Toggle Scale
                    </button>
                    <div
                        className={`demo-box opacity-box ${
                            activeDemo === "opacity" ? "faded" : ""
                        }`}
                    />
                </div>

                <div className='demo-code'>
                    <pre>{`css

    .opacity-box {
        transition: opacity 1s ease-in-out;

        &.faded {
            opacity: 0.5;
        }
    }
        `}</pre>
                </div>
            </div>

            {/* 5. Hover */}
            <div className='demo-section'>
                <h3>5. Hover Animation</h3>

                <div className='demo-controls'>
                    {/* <button
                        className={`demo-button ${activeDemo === "hover" ? "active" : ""}`}
                        onClick={() => toggleDemo("hover")}>
                        Toggle Scale
                    </button> */}
                    <div
                        className={`demo-box hover-box ${activeDemo === "hover" ? "hovered" : ""}`}
                    />
                </div>

                <div className='demo-code'>
                    <pre>{`css

    .hover-box {
        transition: all 1s ease-in-out;
        cursor: pointer;

        &:hover {
            transform: scale(1.5);
            opacity: 0.8;
            background-color: #d98484;
        }
    }
        `}</pre>
                </div>
            </div>
        </>
    );
}
