class Cell {
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.state = false;
    }

    draw() {
        fill(255);
        stroke(255);
        strokeWeight(0);
        if (this.state) {
            rect(this.x, this.y, SIZE, SIZE);
        }
    }

    setState(state) {
        this.state = state;
    }
}