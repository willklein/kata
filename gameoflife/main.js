(function() {


	var ctx = document.getElementById('canvas').getContext('2d');

	var fill = function(column, row) {
		var size = 10;
		var margin = 50;
		ctx.fillRect(margin + 12 * column, margin + 12 * row, size, size);
	}

	var draw = function() {
		ctx.fillStyle = this.state === '1' ? "rgb(200,0,0)" : "rgb(230,230,230)";
		fill(this.column, this.row);
	};


	var world = new World();

	var input5 = [
	    '0 1 0 0 0',
	    '1 0 0 1 1',
	    '1 1 0 0 1',
	    '0 1 0 0 0',
	    '1 0 0 0 1'
	];

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
		// world.log();
		world.each(draw)
		world.iterate();
	};

	setInterval(iterate, 500);
})();