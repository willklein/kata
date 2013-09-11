var World = function(rows, columns) {
    this.rows = rows;
    this.columns = columns;
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
    
    var linkTopLeft = function() {
        var topLeftCell = this.getCell(row - 1, column - 1);

        topLeftCell.addNeighbor(cell);
        cell.addNeighbor(topLeftCell);
    };
    
    var linkTop = function() {
        var topCell = this.getCell(row - 1, column);

        topCell.addNeighbor(cell);
        cell.addNeighbor(topCell);
    };
    
    var linkTopRight = function() {
        var topRightCell = this.getCell(row - 1, column + 1);

        topRightCell.addNeighbor(cell);
        cell.addNeighbor(topRightCell);
    };
    
    var linkLeft = function() {
        var leftCell = this.getCell(row, column - 1);

        leftCell.addNeighbor(cell);
        cell.addNeighbor(leftCell);
    };
    
    if (!isTopEdge) {
        if (!isLeftEdge) {
            linkTopLeft.call(this);
        }
        
        linkTop.call(this);
        
        if (!isRightEdge) {
            linkTopRight.call(this);
        }
    }
    
    if (!isLeftEdge) {
        linkLeft.call(this);
    }
};


World.prototype.add = function(cell) {
    this.cells.push(cell);
    this.linkNeighbors(cell);
};

World.prototype.log = function() {
    console.log('Generation ' + this.generation);

    for (var i = 0; i < this.rows; i++) {
        var row = '';
        
        for (var j = 0; j < this.columns; j++) {
            row += this.getCell(i, j).state + ' ';
        }
        
        console.log(row);
    }
};