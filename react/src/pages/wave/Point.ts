import React from "react";

export class Point {
    x: number;
    y: number;
    fixedY: number;
    speed: number;
    cur: number;
    max: number;

    constructor(index: number, x: number, y: number) {
        this.x = x;
        this.y = y;
        this.fixedY = y;
        this.speed = 0.1;
        this.cur = index;
        this.max = Math.random() * 100 + 150;
    }

    update() {
        this.cur += this.speed;
        this.y = this.fixedY + Math.sin(this.cur) * this.max;
    }
}

// React 컴포넌트로 구현하는 방식 (참고용)
/*
import { useEffect, useState, useCallback } from 'react';

type PointProps = {
    initialX: number;
    initialY: number;
    index: number;
}

export function PointComponent({ initialX, initialY, index }: PointProps) {
    // 상태 관리
    const [x] = useState(initialX);
    const [y, setY] = useState(initialY);
    const [cur, setCur] = useState(index);

    // 고정 값들
    const fixedY = initialY;
    const speed = 0.1;
    const max = Math.random() * 100 + 150;

    // 업데이트 함수
    const update = useCallback(() => {
        setCur(prevCur => {
            const newCur = prevCur + speed;
            const newY = fixedY + Math.sin(newCur) * max;
            setY(newY);
            return newCur;
        });
    }, [fixedY, max, speed]);

    // 애니메이션 프레임 설정
    useEffect(() => {
        const animationFrame = requestAnimationFrame(function animate() {
            update();
            requestAnimationFrame(animate);
        });

        return () => cancelAnimationFrame(animationFrame);
    }, [update]);

    return { x, y }; // 좌표값만 반환
}
*/
