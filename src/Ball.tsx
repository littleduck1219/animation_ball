import React, { useEffect, useRef } from "react";

type Props = {
    radius: number;
    speed: number;
    stageWidth: number;
    stageHeight: number;
    ctx: React.MutableRefObject<CanvasRenderingContext2D | null>;
    startAnimation: (callback: () => void) => void;
    stopAnimation: () => void;
};

export default function Ball({
    radius,
    speed,
    stageWidth,
    stageHeight,
    ctx,
    startAnimation,
    stopAnimation,
}: Props) {
    const x = useRef(radius + Math.random() * (stageWidth - radius * 2));
    const y = useRef(radius + Math.random() * (stageHeight - radius * 2));
    const vx = useRef(speed * (Math.random() - 0.5));
    const vy = useRef(speed * (Math.random() - 0.5));

    const draw = () => {
        if (!ctx.current) return;

        x.current += vx.current;
        y.current += vy.current;

        const minX = radius;
        const maxX = stageWidth - radius;
        const minY = radius;
        const maxY = stageHeight - radius;

        if (x.current <= minX || x.current >= maxX) {
            vx.current *= -1;
            x.current += vx.current;
        } else if (y.current <= minY || y.current >= maxY) {
            vy.current *= -1;
            y.current += vy.current;
        }

        ctx.current.beginPath();
        ctx.current.fillStyle = "#fdd700";
        ctx.current.arc(x.current, y.current, radius, 0, 2 * Math.PI, false);
        ctx.current.fill();
    };

    useEffect(() => {
        startAnimation(draw);
        return () => stopAnimation();
    }, [stageWidth, stageHeight]);

    return null;
}
