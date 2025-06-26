import React, { useState } from "react";
import "./keyframeAnimation.css";

type DemoType = "pulse" | "bounce" | "rotate" | "opacity" | "hover" | null;

export default function KeyframeAnimation() {
    const [activeDemo, setActiveDemo] = useState<DemoType>(null);

    const toggleDemo = (demo: DemoType) => {
        setActiveDemo(activeDemo === demo ? null : demo);
    };

    return (
        <>
            {/* 1. PULSE */}
            <div className='demo-section'>
                <h3>1. Pulse Animation</h3>

                <div className='demo-controls'>
                    <button
                        className={`demo-button ${activeDemo === "pulse" ? "active" : ""}`}
                        onClick={() => toggleDemo("pulse")}>
                        Toggle pulse
                    </button>
                    <div
                        className={`demo-box pulse-box ${activeDemo === "pulse" ? "pulsed" : ""}`}
                    />
                </div>

                <div className='demo-code'>
                    <pre>{`css

    .pulse-box {
        transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);

        &.pulsed {
            animation: pulse-animation 1s ease-in-out infinite;
        }
    }

    @keyframes pulse-animation {
        0%,
        100% {
            transform: scale(1);
            opacity: 1;
        }

        50% {
            transform: scale(1.2);
            opacity: 0.7;
        }
    }
        `}</pre>
                </div>
            </div>

            {/* 2. BOUNCE */}
            <div className='demo-section'>
                <h3>2. Bounce Animation</h3>

                <div className='demo-controls'>
                    <button
                        className={`demo-button ${activeDemo === "bounce" ? "active" : ""}`}
                        onClick={() => toggleDemo("bounce")}>
                        Toggle Scale
                    </button>
                    <div
                        className={`demo-box bounce-box ${
                            activeDemo === "bounce" ? "bounced" : ""
                        }`}
                    />
                </div>

                <div className='demo-code'>
                    <pre>{`css

    .bounce-box {
        &.bounced {
            animation: bounce-animation 1s ease-in-out infinite;
        }
    }

    @keyframes bounce-animation {
        0%,
        20%,
        53%,
        80%,
        100% {
            transform: translateY(0);
        }
        40%,
        43% {
            transform: translateY(-30px);
        }
        70% {
            transform: translateY(-15px);
        }
        90% {
            transform: translateY(-4px);
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

    .rotate-box {
        &.bounced {
            animation: rotate-animation 1s ease-in-out infinite;
        }
    }

    @keyframes rotate-animation {
        from {
            transform: rotate(0deg);
        }
        to {
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
