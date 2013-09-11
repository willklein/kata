(function() {
    var ctx = document.getElementById('canvas').getContext('2d');
    
    var fill = function(column, row) {
        var size = 10;
        var margin = 50;
        ctx.fillRect(margin + 12 * column, 12 * row, size, size);
    }
    
    var draw = function() {
        ctx.fillStyle = this.state === '1' ? "rgb(200,0,0)" : "rgb(230,230,230)";
        fill(this.column, this.row);
    };
    
    var clear = function() {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    };
    
    var world = new World();
    
    var input5x5 = [
        '0 1 0 0 0',
        '1 0 0 1 1',
        '1 1 0 0 1',
        '0 1 0 0 0',
        '1 0 0 0 1'
    ];
    
    var input20x20 = [
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

	var parseInput = function(input) {
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

    parseInput(input5x5);
    
    world.log();
    world.each(draw)
    
    var generationElement = document.getElementById('generation');

    var iterate = function() {
        world.iterate();
        world.log();
        world.each(draw)
        generationElement.textContent = world.generation;
    };
    
    var interval;
    
    var play = function() {
        interval = setInterval(iterate, 500);
    };
    
    var stop = function() {
        clearInterval(interval);
    };
    
    var step = function() {
        stop();
        iterate();
    };


    var inputSetElement = document.getElementById('inputSet');

    var reset = function() {
        var inputSetValue = inputSetElement.options[inputSetElement.selectedIndex].value;
        
        switch (inputSetValue) {
            case '5x5':
                input = input5x5;
                break;
            
            case '20x20':
                input = input20x20;
                break;
            
            default:
                input = input5x5;
        }
        
        stop();
        clear();
        
        world = new World();
        parseInput(input);
        
        world.log();
        world.each(draw)
        generationElement.textContent = '1';
    };
    
    document.getElementById('play').onclick = play;
    document.getElementById('pause').onclick = stop;
    document.getElementById('step').onclick = step;
    document.getElementById('reset').onclick = reset;
    inputSetElement.onchange = reset;
})();
