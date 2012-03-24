var solve = function(gridX, gridY, blocked) {

    var notBlocked = function(x, y) {
        var i, len;

        if (!blocked) {
            return true;
        }

        for (i = 0, len = blocked.length; i < len; i++) {
            if (x === blocked[i].x && y === blocked[i].y) {
                blocked.splice(i, 1);
                return false;
            } else if (x > blocked[i].x && y > blocked[i].y) {
                return true;
            }
        }

        return true;
    };

    var x, y,
        maxX = gridX + 1,
        maxY = gridY + 1,
        memo = [];

    memo[0] = [];
    memo[0][1] = 1;

    for (x = 1; x <= maxX; x++) {
        memo[x] = [];

        for (y = 1; y <= maxY; y++) {
            memo[x][y] = notBlocked(x, y) ? (memo[x - 1][y] || 0) + (memo[x][y - 1] || 0) : 0;
        }
    }

    return memo[x - 1][y - 1];
};