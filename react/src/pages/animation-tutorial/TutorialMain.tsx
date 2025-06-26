import React, { ReactElement, useState } from "react";
import "./tutorialMain.css";
import CSSBasicAnimations from "./css/CSSBasicAnimations";
import KeyframeAnimation from "./keyframe/KeyframeAnimation";

type TabContentType = {
    id: number;
    label: string;
    node: ReactElement;
};

export default function TutorialMain() {
    const [tabState, setTabState] = useState(0);

    const tabContents: TabContentType[] = [
        {
            id: 0,
            label: "CSS Basic",
            node: <CSSBasicAnimations />,
        },
        {
            id: 1,
            label: "CSS Keyframes",
            node: <KeyframeAnimation />,
        },
        {
            id: 2,
            label: "Ref Basic",
            node: <></>,
        },
        {
            id: 3,
            label: "RAF Basic",
            node: <></>,
        },
        {
            id: 4,
            label: "Special",
            node: <></>,
        },
    ];

    const tabChangeHandler = (tabId: number) => {
        setTabState(tabId);
    };

    return (
        <div className='animation-tutorial-page'>
            <h1>Animation Practice</h1>

            <div className='button-wrapper'>
                {tabContents.map((content) => (
                    <button
                        key={content.id}
                        className={`tab-button ${tabState === content.id ? "active" : ""}`}
                        onClick={() => tabChangeHandler(content.id)}>
                        {content.label}
                    </button>
                ))}
            </div>

            <div className='content-wrapper'>
                <div className='animation-container'>
                    {tabContents.find((content) => tabState === content.id)?.node}
                </div>
            </div>
        </div>
    );
}
