(function() {
	var world = new World(20, 20);

	// var input = [
	//     '0 1 0 0 0',
	//     '1 0 0 1 1',
	//     '1 1 0 0 1',
	//     '0 1 0 0 0',
	//     '1 0 0 0 1'
	// ];

	var input20 = [
        '0 1 0 0 0 0 1 0 0 0 0 1 0 1 0 0 1 0 0 0',
        '1 0 0 1 1 1 0 0 1 1 1 0 0 1 0 1 0 0 1 1',
        '1 1 0 0 1 1 1 0 0 1 1 1 0 0 1 1 1 0 0 1',
        '0 1 0 0 0 0 1 0 0 0 0 1 0 0 1 0 1 0 0 0',
        '1 0 0 0 1 1 0 0 0 1 1 0 1 0 1 1 0 0 0 1',
        '0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0',
        '1 0 0 1 1 1 0 0 1 1 1 0 0 1 1 1 0 0 1 1',
        '1 1 0 0 1 1 1 0 0 1 1 1 0 0 1 1 1 0 0 1',
        '0 1 0 0 0 0 1 0 0 0 0 1 1 0 1 1 1 1 0 0',
        '1 0 0 0 1 1 0 0 0 1 1 0 0 0 1 1 0 0 0 1',
        '0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 1',
        '1 0 0 1 1 0 0 0 1 1 1 0 0 1 1 1 0 0 1 1',
        '1 1 0 0 1 0 1 0 0 1 1 1 1 0 1 0 1 0 0 1',
        '0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 1 0 0 0',
        '0 1 1 1 0 1 0 0 0 1 1 0 0 0 1 1 0 1 0 1',
        '0 1 0 0 0 0 1 0 0 0 0 1 1 0 0 0 1 1 0 0',
        '1 0 0 1 1 1 0 0 1 1 1 0 0 1 1 1 0 0 1 1',
        '1 1 0 0 0 1 1 0 0 1 1 0 1 0 1 1 1 0 0 1',
        '0 1 0 0 0 0 1 0 0 0 0 1 1 0 0 0 1 0 0 0',
        '1 0 0 0 0 1 0 0 0 1 0 0 0 0 1 1 0 0 0 1'
    ];

	var parseInput = (function(input) {
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
	})(input20);

	var iterate = function() {
		world.iterate();
		world.log();
	};

	world.log();
	iterate();

	setInterval(iterate, 500);
})();