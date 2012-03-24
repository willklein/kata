var test = function(gridX, gridY, blocked) {

    var result = solve(gridX, gridY, blocked);
    document.getElementById("result").insertAdjacentHTML("beforeend", "Total " + gridX + "x" + gridY + " routes" + (!blocked ? "" : " (blocked)") + ": " + result + "<br/>");
};

(function() {
    test(3, 3, [{x:2,y:3}]);
    test(4, 4);
    test(5, 5);
    test(6, 6);
    test(7, 7);
    test(8, 8);
    test(9, 9);
    test(10, 10);
    test(11, 11);
    test(12, 12);
    test(13, 13);
    test(14, 14);
    test(15, 15);
    test(10, 20);

    var block19 = [
        {
            x: 8,
            y: 7
        },
        {
            x: 13,
            y: 4
        }
    ];

    test(19, 19); // 35345263800
    test(19, 19, block19); // 26310002565

    test(50, 50, block19);
    test(100, 100, block19);
    test(514, 514);
}());
