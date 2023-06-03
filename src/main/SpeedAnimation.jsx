import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const SpeedAnimation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Canvas 설정
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = 925;

    // 애니메이션 루프
    let particles = [];
    let pIndex = 0;

    // 입자 객체 Particle 생성자 함수
    function Particle(height, color, vx, gravity, life) {
      this.x = getRandom(-canvas.width / 4, canvas.width);
      this.y = canvas.height * Math.random();
      this.vx = vx;
      this.gravity = gravity;
      particles[pIndex] = this;
      this.id = pIndex;
      pIndex++;
      this.life = 0;
      this.height = height;
      this.width = 0;
      this.color = color;
      this.maxlife = life;
    }

    // draw = 입자를 그리는 메서드
    Particle.prototype.draw = function () {
      this.vx *= this.gravity;
      this.width += this.vx;
      this.x += this.vx;

      ctx.strokeStyle = this.color;
      ctx.beginPath();
      ctx.moveTo(this.x, this.y);
      ctx.lineTo(this.x + this.width, this.y);
      ctx.closePath();
      ctx.stroke();
      ctx.lineWidth = this.height;

      this.life++;
      // 생명주기
      if (this.life >= this.maxlife) {
        delete particles[this.id];
      }
    };

    function loop() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const maxParticles = 0.1;
      const maxSpeed = 3;

      for (let i = 0; i < maxParticles; i++) {
        const height = getRandom(1, 10);
        const color = 'rgba(255, 255, 255, 0.8)';
        const vx = getRandom(1, maxSpeed);
        const gravity = 1.1;
        const life = 80;

        new Particle(height, color, vx, gravity, life);
      }
      for (let i in particles) {
        particles[i].draw();
      }
      requestAnimationFrame(loop);
    }

    loop();

    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = 925;
    });

    function getRandom(min, max) {
      return Math.random() * (max - min) + min;
    }
  }, []);

  return (
    <Canvas>
      <canvas ref={canvasRef} />
    </Canvas>
  );
};

export default SpeedAnimation;

const Canvas = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 925px;
`;
