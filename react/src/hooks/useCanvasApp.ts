import React, { useEffect, useRef, useState } from "react";

export default function useCanvasApp() {
    const canvas = useRef<HTMLCanvasElement>(null);
    const ctx = useRef<CanvasRenderingContext2D | null>(null);
    const rafRef = useRef<number | null>(null);

    const [stageWidth, setStageWidth] = useState(0);
    const [stageHeight, setStageHeight] = useState(0);

    const resize = () => {
        if (!canvas.current) return;

        const width = document.body.clientWidth;
        const height = document.body.clientHeight;

        setStageWidth(width);
        setStageHeight(height);

        canvas.current.width = width * 2;
        canvas.current.height = height * 2;

        if (ctx.current) {
            ctx.current.scale(2, 2);
        }
    };

    const startAnimation = (callback: () => void) => {
        const animate = () => {
            if (!ctx.current) return;

            ctx.current.clearRect(0, 0, stageWidth, stageHeight);

            callback();

            rafRef.current = requestAnimationFrame(animate);
        };

        animate();
    };

    const stopAnimation = () => {
        if (rafRef.current) {
            cancelAnimationFrame(rafRef.current);
        }
    };

    useEffect(() => {
        if (!canvas.current) return;

        ctx.current = canvas.current.getContext("2d");

        resize();
        window.addEventListener("resize", resize);

        return () => {
            window.removeEventListener("resize", resize);
            stopAnimation();
        };
    }, []);

    return {
        canvas,
        ctx,
        stageWidth,
        stageHeight,
        startAnimation,
        stopAnimation,
    };
}
