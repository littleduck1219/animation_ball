import React, { useState } from "react";
import "./cssBasicAnimations.css";

export default function CSSBasicAnimations() {
    const [activeDemo, setActiveDemo] = useState<string | null>(null);

    return (
        <div className='animations-container'>
            {/* 1. 크기변화 */}
            <div className='demo-section'>
                <h3>1. 기본 크기 변화</h3>
                <div className='demo-controls'>
                    <button onClick={() => setActiveDemo(activeDemo === "scale" ? null : "scale")}>
                        크기변경토글
                    </button>
                    <div
                        className={`box scale-box ${activeDemo === "scale" ? "scaled" : ""}`}></div>
                </div>
            </div>
        </div>
    );
}
