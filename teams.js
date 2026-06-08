var Team = /** @class */ (function () {
    function Team(name, color) {
        this._points = 0;
        this._hints = 0;
        this._reoccupies = 3;
        this._color = color;
        this._name = name;
    }
    Team.prototype.removeHint = function () {
        if (this._hints > 0) {
            this._hints -= 1;
        }
    };
    Team.prototype.removeReoccupy = function () {
        if (this._reoccupies > 0) {
            this._reoccupies -= 1;
        }
    };
    Team.prototype.giveHint = function () {
        this._hints += 1;
    };
    Team.prototype.getName = function () {
        return this._name;
    };
    Team.prototype.getPoints = function () {
        return this._points;
    };
    Team.prototype.updatePoints = function (points) {
        this._points += points;
    };
    Team.prototype.getColor = function () {
        return this._color;
    };
    Team.prototype.reward = function () {
        this._points += 10;
        this._reoccupies += 1;
        this._hints += 1;
    };
    Team.prototype.getHints = function () {
        return this._hints;
    };
    Team.prototype.getReoccupies = function () {
        return this._reoccupies;
    };
    return Team;
}());
var TeamManager = /** @class */ (function () {
    function TeamManager() {
        this.teams = [];
    }
    TeamManager.prototype.addTeam = function (name, color) {
        var team = new Team(name, color);
        this.teams.push(team);
    };
    TeamManager.prototype.getTeams = function () {
        return this.teams;
    };
    TeamManager.prototype.getTeamByName = function (name) {
        return this.teams.find(function (team) { return team.getName() === name; });
    };
    return TeamManager;
}());
