var Cell = function(row, column, state) {
    this.row = row;
    this.column = column;
    this.state = state;
    this.neighbors = [];
};

Cell.prototype.addNeighbor = function(cell) {
    this.neighbors.push(cell);
};

Cell.prototype.iterate = function() {
    var i, length;
    var neighbors = this.neighbors;
    var alive = 0;
    
    for (i = 0, length = neighbors.length; i < length; i++) {
        if (neighbors[i].state === '1') {
            alive++;
        }
    }
    
    if (this.state === '0' && alive === 3) {
        return 
    }
    
    if (this.state === '1' && (alive < 2 || alive > 3)) {
        return {
            cell: this,
            state: 0
        };
    }
};