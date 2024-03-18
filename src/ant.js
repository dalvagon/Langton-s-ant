class Ant {
    constructor(x, y, grid) {
        this.x = x;
        this.y = y;
        this.direction = 3;
        this.grid = grid;
    }

    moveForward() {
        if (grid.cells[this.x][this.y].state) {
            grid.cells[this.x][this.y].setState(false);
            this.turnCounterClockwise();
        } else {
            grid.cells[this.x][this.y].setState(true);
            this.turnClockwise();
        }
        switch (this.direction) {
            case 0:
                this.y--;
                break;
            case 1:
                this.x++;
                break;
            case 2:
                this.y++;
                break;
            case 3:
                this.x--;
                break;
        }
        if (this.x < 0 || this.x >= grid.sizeX || this.y < 0 || this.y >= grid.sizeY) {
            this.x = grid.sizeX / 2;
            this.y = grid.sizeY / 2;
        }
    }

    turnClockwise() {
        if (this.direction === 3) {
            this.direction = 0;
        } else {
            this.direction++;
        }
    }

    turnCounterClockwise() {
        if (this.direction === 0) {
            this.direction = 3;
        } else {
            this.direction--;
        }
    }
}