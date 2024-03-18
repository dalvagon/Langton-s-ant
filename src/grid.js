class Grid {
    constructor(cellSize) {
        this.cellSize = cellSize;
        this.sizeX = width / cellSize;
        this.sizeY = height / cellSize;
        this.cells = new Array(this.sizeX);
        this.init();
    }

    init() {
        for (let x = 0; x < this.sizeX; x++) {
            this.cells[x] = new Array(this.sizeY);
            for (let y = 0; y < this.sizeY; y++) {
                this.cells[x][y] = new Cell(x * this.cellSize, y * this.cellSize, this.cellSize);
            }
        }
    }

    draw() {
        for (let x = 0; x < width / this.cellSize; x++) {
            for (let y = 0; y < height / this.cellSize; y++) {
                this.cells[x][y].draw();
            }
        }
    }
}