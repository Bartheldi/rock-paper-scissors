let playerSide = document.querySelector(".player-side");
let computerSide = document.querySelector(".computer-side");
let playerScore = document.querySelector(".player-score");
let computerScore = document.querySelector(".computer-score");
let drawScore = document.querySelector(".draw-score");
let newGame = document.querySelector(".newGame");
let resetCalc = document.querySelector(".resetCalc");

let player = {
    paper: playerSide.children[0],
    rock: playerSide.children[1],
    scissors: playerSide.children[2]
};

let computer = {
    paper: computerSide.children[0],
    rock: computerSide.children[1],
    scissors: computerSide.children[2]
};

computer.rock.classList.add("computerDisplayNone");
computer.scissors.classList.add("computerDisplayNone");
newGame.style.display = "none";
resetCalc.style.display = "none";

let goThrow = false;
let computerChoose;
let endShuffle = 0;

let playerScoreNum = JSON.parse(localStorage.getItem("playerScore"));
let computerScoreNum = JSON.parse(localStorage.getItem("computerScore"));
let drawScoreNum = JSON.parse(localStorage.getItem("drawScore"));
let scoreBoardPlayer;
let scoreBoardComputer;
let scoreBoardDraw;

const displayScore = (element, score) => {
    let scoreBoard = document.createElement("h1");
    scoreBoard.textContent = score || 0;
    element.appendChild(scoreBoard);
    return scoreBoard;
};

const resetScore = () => {
    scoreBoardPlayer.textContent = 0;
    scoreBoardComputer.textContent = 0;
    scoreBoardDraw.textContent = 0;
    localStorage.setItem("computerScore", JSON.stringify(0));
    localStorage.setItem("playerScore", JSON.stringify(0));
    localStorage.setItem("drawScore", JSON.stringify(0));
};

scoreBoardPlayer = displayScore(playerScore, playerScoreNum);
scoreBoardComputer = displayScore(computerScore, computerScoreNum);
scoreBoardDraw = displayScore(drawScore, drawScoreNum);

player.paper.addEventListener("click", function () {
    playerChoice(player.paper);
});

player.rock.addEventListener("click", function () {
    playerChoice(player.rock);
});

player.scissors.addEventListener("click", function () {
    playerChoice(player.scissors);
});

newGame.addEventListener("click", function () {
    newGame.style.zIndex = "500";
    newGame.style.border = "3px solid rgb(55, 130, 236)";
    new Audio("audio/newGame.mp3").play();
    setTimeout(() => {
        location.reload();
    }, 1500);
});

resetCalc.addEventListener("click", function () {
    resetCalc.classList.add("resetCalcBorder");

    const playerScore = JSON.parse(localStorage.getItem("playerScore"));
    const computerScore = JSON.parse(localStorage.getItem("computerScore"));
    const drawScore = JSON.parse(localStorage.getItem("drawScore"));

    if (playerScore === 0 && computerScore === 0 && drawScore === 0) {
        alert("All counters are at 0");
        return;
    }

    scoreBoardPlayer.textContent = 0;
    scoreBoardComputer.textContent = 0;
    scoreBoardDraw.textContent = 0;

    playerScore.appendChild(scoreBoardPlayer);
    computerScore.appendChild(scoreBoardComputer);
    drawScore.appendChild(scoreBoardDraw);

    localStorage.setItem("computerScore", JSON.stringify(0));
    localStorage.setItem("playerScore", JSON.stringify(0));
    localStorage.setItem("drawScore", JSON.stringify(0));

    new Audio(`audio/reset.mp3`).play();
});
