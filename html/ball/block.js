export class Block {
    constructor(width, height, x, y) {
        this.width = width; // 블록의 너비
        this.height = height; // 블록의 높이
        this.x = x; // 블록의 x 좌표 (왼쪽 상단 기준점)
        this.y = y; // 블록의 y 좌표 (왼쪽 상단 기준점)
        this.maxX = width + x; // 블록의 가장 오른쪽 x 좌표
        this.maxY = height + y; // 블록의 가장 아래쪽 y 좌표
    }

    draw(ctx) {
        const xGap = 80; // 그림자의 x축 거리 (블록으로부터 얼마나 멀어질지)
        const yGap = 60; // 그림자의 y축 거리 (블록으로부터 얼마나 멀어질지)

        // 1. 메인 블록 그리기
        ctx.fillStyle = "#ff384e"; // 블록 색상 (빨간색)
        ctx.beginPath(); // 새로운 경로 시작
        ctx.rect(this.x, this.y, this.width, this.height); // 직사각형 그리기
        ctx.fill(); // 색상 채우기

        // 2. 하단 그림자 그리기
        ctx.fillStyle = "#190f3a"; // 그림자 색상 (어두운 보라색)
        ctx.beginPath();
        // 하단 그림자는 사다리꼴 모양입니다:
        ctx.moveTo(this.maxX, this.maxY); // 시작점: 블록의 오른쪽 아래
        ctx.lineTo(this.maxX - xGap, this.maxY + yGap); // 오른쪽 아래 그림자 끝점
        ctx.lineTo(this.x - xGap, this.maxY + yGap); // 왼쪽 아래 그림자 끝점
        ctx.lineTo(this.x, this.maxY); // 블록의 왼쪽 아래
        ctx.fill();

        // 3. 측면 그림자 그리기
        ctx.fillStyle = "#90d0919"; // 측면 그림자 색상
        ctx.beginPath();
        // 측면 그림자도 사다리꼴 모양입니다:
        ctx.moveTo(this.x, this.y); // 시작점: 블록의 왼쪽 위
        ctx.lineTo(this.x, this.maxY); // 블록의 왼쪽 아래
        ctx.lineTo(this.x - xGap, this.maxY + yGap); // 왼쪽 아래 그림자 끝점
        ctx.lineTo(this.x - xGap, this.maxY + yGap); // (중복된 점)
        ctx.lineTo(this.x - xGap, this.maxY + yGap - this.height); // 왼쪽 위 그림자 끝점
        ctx.fill();
    }
}
