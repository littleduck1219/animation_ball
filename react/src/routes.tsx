import { createBrowserRouter } from "react-router-dom";
import React from "react";
import App from "./App";

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
        ],
    },
]);
