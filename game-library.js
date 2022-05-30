// GAME LIBRARY

// Global Variables
let cnv = document.getElementById("canvasEl");
let ctx = cnv.getContext("2d");

let mouseX;
let mouseY;
let mouseIsPressed = false;
let keyPressed = {};

// Canvas Default Size
cnv.width = 400;
cnv.height = 400;

// Set the canvas to the provided size
function canvasSize(width, height) {
  cnv.width = width;
  cnv.height = height;
}

// Determine the distance between two points
function dist(x1, y1, x2, y2) {
  return Math.hypot(x2 - x1, y2 - y1);
}

// Test if point is in circle
function ptInCircle(x, y, aCircle) {
  return dist(x, y, aCircle.x, aCircle.y) < aCircle.r;
}

// Test if point is in rectangle
function ptInRectangle(x, y, aRect) {
  return (x > aRect.x && x < aRect.x + aRect.w && y > aRect.y && y < aRect.y + aRect.h);
}

// Test if two circle objects intersect
function circleCollide(circle1, circle2) {
  return dist(circle1.x, circle1.y, circle2.x, circle2.y) < (circle1.r + circle2.r);
}

// Test if two rectangle objects intersect
function rectCollide(rect1, rect2) {
  let le1 = rect1.x;
  let re1 = rect1.x + rect1.w;
  let te1 = rect1.y;
  let be1 = rect1.y + rect1.h;
  let le2 = rect2.x;
  let re2 = rect2.x + rect2.w;
  let te2 = rect2.y;
  let be2 = rect2.y + rect2.h;
  return le1 < re2 && re1 > le2 && be1 > te2 && te1 < be2;
}

// Event Listeners & Handlers
document.addEventListener("mousedown", () => mouseIsPressed = true);
document.addEventListener("mouseup", () => mouseIsPressed = false);
document.addEventListener("mousemove", mousemoveHandlerLib);
document.addEventListener("keydown", (e) => keyPressed[e.code] = true);
document.addEventListener("keyup", (e) => keyPressed[e.code] = false);

function mousemoveHandlerLib(event) {
  // Get rectangle info about canvas location
  let cnvRect = cnv.getBoundingClientRect();

  // Calc mouse coordinates using mouse event and canvas location info
  mouseX = Math.round(event.clientX - cnvRect.left);
  mouseY = Math.round(event.clientY - cnvRect.top);
}