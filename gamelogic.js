var teamManager = new TeamManager();
var darkScreen = document.getElementById("dark-screen");
var teamNameInput = document.getElementById("teamName");
var teamColorInput = document.getElementById("teamColor");
var addTeamButton = document.getElementById("team-button");
var addTeamForm = document.getElementById("done");
var teamElement = document.getElementById("team-element");
var question = document.getElementById("question");
var questionElement = document.getElementById("question-element");
var answerA = document.getElementById("a");
var answerB = document.getElementById("b");
var answerC = document.getElementById("c");
var answerD = document.getElementById("d");
var teams = document.getElementById("teams");
var retakers = document.getElementById("retakers");
var retakeElement = document.getElementById("retake-element");
var currentTeam;
var currentTeamIndex = 0;
var currentQuestion = null;
var isRetake = false;
function addTeam() {
    teamManager.addTeam(teamNameInput.value, teamColorInput.value);
    teamNameInput.value = "";
    teamColorInput.value = "#000000";
}
function doneTeams() {
    darkScreen.style.display = "none";
    teamElement.style.display = "none";
    currentTeam = teamManager.getTeams()[0];
    refreshTeams();
    refreshRetakers();
}
function refreshRetakers() {
    retakers.innerHTML = ""; // Clear previous retakers
    teamManager.getTeams().forEach(function (team) {
        if (team.getReoccupies() > 0) {
            retakers.innerHTML = retakers.innerHTML + "<button onclick='retake(\"" + team.getName() + "\")'>" + team.getName() + "</button>";
        }
    });
    retakers.innerHTML = retakers.innerHTML + "<button onclick='retake(null)'>❌</button>";
    var answers = document.querySelector(".answers");
}
function refreshTeams() {
    teams.innerHTML = ""; // Clear previous teams
    teamManager.getTeams().forEach(function (team) {
        var teamDiv = document.createElement("div");
        teamDiv.innerHTML = "\n            <b>".concat(team.getName(), "</b><br>\n            \uD83E\uDE99 ").concat(team.getPoints(), "<br>\n            \uD83D\uDCA1 ").concat(team.getHints(), "<br>\n            \uD83D\uDCAD ").concat(team.getReoccupies(), "\n        ");
        teamDiv.style.backgroundColor = team.getColor();
        teamDiv.style.color = team === currentTeam ? "#00bc00" : "#FFFFFF";
        teamDiv.style.padding = "10px";
        teamDiv.style.margin = "5px";
        teamDiv.className = "team-div";
        teams.appendChild(teamDiv);
    });
}
function showQuestion(x, y) {
    var cell = grid.getCell(x, y);
    if (cell === null || cell === void 0 ? void 0 : cell.isOccupied()) {
        return;
    }
    darkScreen.style.display = "block";
    questionElement.style.display = "block";
    questionElement.style.backgroundColor = currentTeam.getColor();
    questionElement.style.color = "#FFFFFF";
    currentQuestion = questions.find(function (q) { return q.getX() === x && q.getY() === y; }) || null;
    question.innerHTML = (currentQuestion === null || currentQuestion === void 0 ? void 0 : currentQuestion.getQuestion()) || "No question available";
    answerA.innerHTML = (currentQuestion === null || currentQuestion === void 0 ? void 0 : currentQuestion.getAnswers()[0]) || "No answer available";
    answerB.innerHTML = (currentQuestion === null || currentQuestion === void 0 ? void 0 : currentQuestion.getAnswers()[1]) || "No answer available";
    answerC.innerHTML = (currentQuestion === null || currentQuestion === void 0 ? void 0 : currentQuestion.getAnswers()[2]) || "No answer available";
    answerD.innerHTML = (currentQuestion === null || currentQuestion === void 0 ? void 0 : currentQuestion.getAnswers()[3]) || "No answer available";
}
function displayHint() {
    if (currentTeam.getHints() > 0) {
        currentTeam.removeHint();
        refreshTeams();
        var answers = currentQuestion === null || currentQuestion === void 0 ? void 0 : currentQuestion.getAnswers();
        if (answers) {
            var correctAnswerIndex = answers.indexOf((currentQuestion === null || currentQuestion === void 0 ? void 0 : currentQuestion.getCorrectAnswer()) || "");
            var randomIndex = Math.floor(Math.random() * answers.length);
            // Ensure the random index is not the same as the correct answer index
            var hintIndex = randomIndex === correctAnswerIndex
                ? (randomIndex + 1) % answers.length
                : randomIndex;
            var correctAnswerElement_1 = document.getElementById(["a", "b", "c", "d"][correctAnswerIndex]);
            var hintAnswerElement_1 = document.getElementById(["a", "b", "c", "d"][hintIndex]);
            if (correctAnswerElement_1) {
                correctAnswerElement_1.style.backgroundColor = "yellow";
            }
            if (hintAnswerElement_1) {
                hintAnswerElement_1.style.backgroundColor = "yellow";
            }
            setTimeout(function () {
                if ((correctAnswerElement_1 === null || correctAnswerElement_1 === void 0 ? void 0 : correctAnswerElement_1.style.backgroundColor) === "yellow") {
                    correctAnswerElement_1.style.backgroundColor = "#d6d6d6";
                }
                if ((hintAnswerElement_1 === null || hintAnswerElement_1 === void 0 ? void 0 : hintAnswerElement_1.style.backgroundColor) === "yellow") {
                    hintAnswerElement_1.style.backgroundColor = "#d6d6d6";
                }
            }, 10000);
        }
    }
}
document.addEventListener('keydown', function (event) {
    if (event.key === '\\') {
        callEnd();
    }
});
function callEnd() {
    if (darkScreen) {
        darkScreen.style.display = "none";
    }
    if (teamElement) {
        teamElement.style.display = "none";
    }
    if (addTeamForm) {
        addTeamForm.style.display = "none";
    }
    teamManager.getTeams().forEach(function (team) {
        team.updatePoints((team.getHints() * 75) + (team.getReoccupies() * 50));
    });
    refreshTeams();
}
function answerQuestion(answer) {
    if (currentQuestion) {
        var answerElement_1 = document.getElementById(answer);
        if (currentQuestion.getAnswers()[['a', 'b', 'c', 'd'].indexOf(answer)] === currentQuestion.getCorrectAnswer()) {
            if (answerElement_1) {
                answerElement_1.style.backgroundColor = "green";
            }
            currentTeam.updatePoints(currentQuestion.getY() * 15 / (isRetake ? 2 : 1));
            var cell = grid.getCell(currentQuestion.getX(), currentQuestion.getY());
            cell === null || cell === void 0 ? void 0 : cell.occupy(currentTeam);
            if (cell === null || cell === void 0 ? void 0 : cell.haveHint()) {
                currentTeam.giveHint();
            }
            setTimeout(function () {
                darkScreen.style.display = "none";
                questionElement.style.display = "none";
                if (answerElement_1) {
                    answerElement_1.style.backgroundColor = "#d6d6d6";
                }
                isRetake = false;
                currentTeamIndex = (currentTeamIndex + 1) % teamManager.getTeams().length;
                currentTeam = teamManager.getTeams()[currentTeamIndex];
                currentQuestion = null;
                refreshTeams();
            }, 5000);
        }
        else {
            if (answerElement_1) {
                answerElement_1.style.backgroundColor = "red";
            }
            //currentTeam.updatePoints(-currentQuestion.getX() * 15 / (isRetake ? 2 : 1));
            refreshRetakers();
            setTimeout(function () {
                retakeElement.style.display = "block";
                questionElement.style.display = "none";
                if (answerElement_1) {
                    answerElement_1.style.backgroundColor = "#d6d6d6";
                }
                isRetake = true;
                refreshTeams();
            }, 5000);
        }
    }
}
function retake(team) {
    var _a;
    if (team) {
        var selectedTeam = teamManager.getTeams().find(function (t) { return t.getName() === team; });
        if (selectedTeam && selectedTeam.getReoccupies() > 0) {
            currentTeam = selectedTeam;
            selectedTeam.removeReoccupy();
            isRetake = true;
            refreshTeams();
            retakeElement.style.display = "none";
            questionElement.style.display = "block";
        }
    }
    else {
        isRetake = false;
        retakeElement.style.display = "none";
        questionElement.style.display = "none";
        darkScreen.style.display = "none";
        currentTeamIndex = (currentTeamIndex + 1) % teamManager.getTeams().length;
        currentTeam = teamManager.getTeams()[currentTeamIndex];
        (_a = grid.getCell((currentQuestion === null || currentQuestion === void 0 ? void 0 : currentQuestion.getX()) || 0, (currentQuestion === null || currentQuestion === void 0 ? void 0 : currentQuestion.getY()) || 0)) === null || _a === void 0 ? void 0 : _a.die();
        currentQuestion = null;
    }
    refreshTeams();
}
