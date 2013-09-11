var Cell = function(row, column, state) {
    this.row = row;
    this.column = column;
    this.state = state;
    this.neighbors = [];
    
    this.addNeighbor = function(cell) {
        this.neighbors.push(cell);
    };
};