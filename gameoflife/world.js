var World = function() {
    this.rows = 1;
    this.columns = 1;
    this.cells = [];
    this.generation = 1;
};

World.prototype.getCell = function(row, column) {
    return this.cells[row * this.columns + column];
};

World.prototype.iterate = function() {
    var i, j, cell, change;
    var changes = [];

    for (i = 0; i < this.rows; i++) {
        for (j = 0; j < this.columns; j++) {
            cell = this.getCell(i, j);
            
            change = cell.iterate();
            
            if (change) {
                changes.push(change);
            }
        }
    }
    
    for (i = 0; i < changes.length; i++) {
        change = changes[i];
        change.cell.state = change.state;
    }

    this.generation++;
};

World.prototype.linkNeighbors = function(cell) {
    var row = cell.row;
    var column = cell.column;
    var isTopEdge = !row;
    var isLeftEdge = !column;
    var isRightEdge = column === this.columns - 1;
    
    var link = function(row, column) {
        var neighbor = this.getCell(row, column);
        
        neighbor.addNeighbor(cell);
        cell.addNeighbor(neighbor);
    };
    
    if (!isTopEdge) {
        if (!isLeftEdge) {
            link.call(this, row - 1, column - 1);
        }
        
        link.call(this, row - 1, column);
        
        if (!isRightEdge) {
            link.call(this, row - 1, column + 1);
        }
    }
    
    if (!isLeftEdge) {
        link.call(this, row, column - 1);
    }
};


World.prototype.add = function(cell) {
    if (cell.row + 1 > this.rows) {
        this.rows = cell.row + 1;
    }
    
    if (cell.column + 1 > this.columns) {
        this.columns = cell.column + 1;
    }

    this.cells.push(cell);
    this.linkNeighbors(cell);
};

World.prototype.log = function() {
	var i, j, row;

    console.log('Generation ' + this.generation);

    for (i = 0; i < this.rows; i++) {
        row = '';
        
        for (j = 0; j < this.columns; j++) {
            row += this.getCell(i, j).state + ' ';
        }
        
        console.log(row);
    }
};

World.prototype.each = function(fn) {
	var i, j, cell;

    for (i = 0; i < this.rows; i++) {
        for (j = 0; j < this.columns; j++) {
        	cell = this.getCell(i, j);
            fn.call(cell);
        }
    }
};