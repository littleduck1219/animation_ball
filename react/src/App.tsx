import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
    return (
        <main>
            <Suspense
                fallback={
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "100vh",
                            color: "white",
                        }}>
                        로딩 중...
                    </div>
                }>
                <Outlet />
            </Suspense>
        </main>
    );
}

export default App;
