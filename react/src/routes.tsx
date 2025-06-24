import { createBrowserRouter } from "react-router-dom";
import React from "react";
import App from "./App";
import WavePage from "./pages/wave/WavePage";
import Raf1 from "./pages/raf/Raf1";
import CSSBasicAnimations from "./pages/animation-tutorial/css/CSSBasicAnimations";
import TutorialMain from "./pages/animation-tutorial/TutorialMain";

const BounceBallPage = React.lazy(() => import("./pages/ball/BounceBallPage"));

export const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            {
                path: "ball",
                Component: BounceBallPage,
                loader: async () => {
                    return { message: "볼 애니메이션 페이지입니다." };
                },
            },
            {
                path: "wave",
                Component: WavePage,
                loader: async () => {
                    return { message: "웨이브 애니메이션 페이지입니다." };
                },
            },
            {
                path: "animation",
                Component: TutorialMain
            },
        ],
    },
]);
