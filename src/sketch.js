let grid;
let ant;
const SIZE = 5;

function setup() {
  createCanvas(1000, 1000);
  grid = new Grid(SIZE);
  ant = new Ant(grid.sizeX / 2, grid.sizeY / 2, grid);
}

function draw() {
  background(0);
  ant.moveForward();
  grid.draw();
}
