var Cell = /** @class */ (function () {
    function Cell(x, y, haveHint) {
        if (haveHint === void 0) { haveHint = false; }
        this._isOccupied = false;
        this._team = null;
        this._haveHint = haveHint;
        this._x = x;
        this._y = y;
        this._button = document.getElementById("btn-" + this._x + "_" + this._y);
        this._button.innerHTML = this._haveHint ? "💡" : "";
    }
    Cell.prototype.getX = function () {
        return this._x;
    };
    Cell.prototype.getY = function () {
        return this._y;
    };
    Cell.prototype.isOccupied = function () {
        return this._isOccupied;
    };
    Cell.prototype.haveHint = function () {
        return this._haveHint;
    };
    Cell.prototype.occupy = function (team) {
        this._isOccupied = true;
        this._team = team;
        this._button.style.backgroundColor = team.getColor();
        // Check if this square made a line at least 3 cells long
        var directions = [
            { dx: 1, dy: 0 }, // Horizontal
            { dx: 0, dy: 1 }, // Vertical
            { dx: 1, dy: 1 }, // Diagonal (top-left to bottom-right)
            { dx: 1, dy: -1 } // Diagonal (bottom-left to top-right)
        ];
        for (var _i = 0, directions_1 = directions; _i < directions_1.length; _i++) {
            var _a = directions_1[_i], dx = _a.dx, dy = _a.dy;
            var count = 1;
            // Check in the positive direction
            for (var step = 1; step < 3; step++) {
                var neighbor = grid.getCell(this._x + step * dx, this._y + step * dy);
                if (neighbor && neighbor.isOccupiedBy(team)) {
                    count++;
                }
                else {
                    break;
                }
            }
            // Check in the negative direction
            for (var step = 1; step < 3; step++) {
                var neighbor = grid.getCell(this._x - step * dx, this._y - step * dy);
                if (neighbor && neighbor.isOccupiedBy(team)) {
                    count++;
                }
                else {
                    break;
                }
            }
            // If a line of at least 3 cells is formed, reward the team
            if (count >= 3) {
                team.reward();
                break;
            }
        }
    };
    Cell.prototype.die = function () {
        this._isOccupied = true;
        this._team = null;
        this._button.style.backgroundColor = "#111111";
    };
    Cell.prototype.isOccupiedBy = function (team) {
        return this._isOccupied && this._team === team;
    };
    Cell.prototype.isDead = function () {
        return this._isOccupied && this._team === null;
    };
    return Cell;
}());
var Grid = /** @class */ (function () {
    function Grid() {
        this._cells = [];
        /*for (var i = 1; i <= 6; i++) {
            for (var j = 1; j <= 6; j++) {
                var cell = new Cell(i, j, Math.random() < 0.1); // 10% chance to have a hint
                this._cells.push(cell);
            }
        }*/
    }
    Grid.prototype.getCells = function () {
        return this._cells;
    };
    Grid.prototype.getCell = function (x, y) {
        return this._cells.find(function (cell) { return cell.getX() === x && cell.getY() === y; });
    };
    return Grid;
}());
var grid = new Grid();
