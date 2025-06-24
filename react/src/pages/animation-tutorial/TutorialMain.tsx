import React, { ReactElement, useState } from "react";
import CSSBasicAnimations from "./css/CSSBasicAnimations";

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
            node: <CSSBasicAnimations />,
        },
        {
            id: 2,
            label: "Ref Basic",
            node: <CSSBasicAnimations />,
        },
        {
            id: 3,
            label: "RAF Basic",
            node: <CSSBasicAnimations />,
        },
        {
            id: 4,
            label: "Special",
            node: <CSSBasicAnimations />,
        },
    ];

    const tabChangeHandler = (tabId: number) => {
        setTabState(tabId);
    };

    return (
        <div>
            <div>
                <h1>Animation Practice</h1>
            </div>

            {tabContents.map((content) => (
                <button onClick={() => tabChangeHandler(content.id)}>{content.label}</button>
            ))}

            {tabContents.find((content) => tabState === content.id)?.node}
        </div>
    );
}
