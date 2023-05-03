import { BallType, CreateBallOptionsType } from "./types";

// -- Animate ball
export function animate(ball: BallType, isRandomColor: boolean) {
  ball.x += ball.xSpeed;
  ball.y += ball.ySpeed;

  if (ball.x + ball.size > window.innerWidth || ball.x < 0) {
    ball.xSpeed = -ball.xSpeed;

    if (isRandomColor) {
      ball.element.style.backgroundColor = getRandomColor();
    }
  }

  if (ball.y + ball.size > window.innerHeight || ball.y < 0) {
    ball.ySpeed = -ball.ySpeed;

    if (isRandomColor) {
      ball.element.style.backgroundColor = getRandomColor();
    }
  }

  ball.element.style.left = ball.x + "px";
  ball.element.style.top = ball.y + "px";

  requestAnimationFrame(() => animate(ball, isRandomColor));
}

// -- Create ball inside DOM and return it's properties
export function createBall({ color, speed, size }: CreateBallOptionsType) {
  const app = document.getElementById("app")!;
  const ball = document.createElement("div");

  let leftPosition = Math.random() * window.innerWidth;
  let topPosition = Math.random() * window.innerHeight;

  if (leftPosition < 0 || leftPosition + size > window.innerWidth) {
    leftPosition = 0 + size;
  }

  if (topPosition < 0 || topPosition + size > window.innerHeight) {
    topPosition = 0 + size;
  }

  ball.classList.add("ball");
  ball.style.width = size + "px";
  ball.style.height = size + "px";
  ball.style.left = leftPosition + "px";
  ball.style.top = topPosition + "px";

  if (color === "random") {
    ball.style.backgroundColor = getRandomColor();
  } else {
    ball.style.backgroundColor = color;
  }

  app.appendChild(ball);

  return {
    element: ball,
    x: parseInt(ball.style.left),
    y: parseInt(ball.style.top),
    xSpeed: speed,
    ySpeed: speed,
    size,
  };
}

// -- Generate random color
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}
