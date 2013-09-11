(function() {
	var world = new World(5, 5);

	var input = [
	    '0 1 0 0 0',
	    '1 0 0 1 1',
	    '1 1 0 0 1',
	    '0 1 0 0 0',
	    '1 0 0 0 1'
	];

	var parseInput = function() {
	    var i, length;
	    var row = 0;
	    
	    var parseRow = function(rowInput) {
	        var i, length, state, cell;
	        var cells = rowInput.split(' ');
	        
	        for (i = 0, length = cells.length; i < length; i++) {
	            state = cells[i];
	            cell = new Cell(row, i, state);
	            world.add(cell);
	        }
	        
	        row++;
	    };
	    
	    for (i = 0, length = input.length; i < length; i++) {
	        parseRow(input[i]);
	    }
	};

	parseInput(input);

	world.log();
	world.iterate();
	world.log();
})();