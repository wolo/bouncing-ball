import { AnimateOptionsType } from "./types";

// -- Animate any passed element to be bouncy
export function animate(
  element: HTMLDivElement,
  options: AnimateOptionsType
): void {
  let { x, y, xSpeed, ySpeed } = options;

  x += xSpeed;
  y += ySpeed;

  if (x + element.getBoundingClientRect().width > window.innerWidth || x < 0) {
    xSpeed = -xSpeed;
  }

  if (
    y + element.getBoundingClientRect().height > window.innerHeight ||
    y < 0
  ) {
    ySpeed = -ySpeed;
  }

  element.style.left = x + "px";
  element.style.top = y + "px";

  requestAnimationFrame(() => animate(element, { x, y, xSpeed, ySpeed }));
}
