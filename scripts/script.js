let playerSide = document.querySelector(".player-side")
let computerSide = document.querySelector(".computer-side")
let playerScore = document.querySelector(".player-score")
let computerScore = document.querySelector(".computer-score")
let drawScore = document.querySelector(".draw-score")
let newGame = document.querySelector(".newGame")
let resetCalc = document.querySelector(".resetCalc")


let player = new Array(3)
player["paper"] = playerSide.children[0]
player["rock"] = playerSide.children[1]
player["scissors"] = playerSide.children[2]

let computer = new Array(3)
computer["paper"] = computerSide.children[0]
computer["rock"] = computerSide.children[1]
computer["scissors"] = computerSide.children[2]

computer["rock"].classList.add("computerDisplayNone")
computer["scissors"].classList.add("computerDisplayNone")
newGame.style.display = "none"
resetCalc.style.display = "none"

let goThrow = false
let computerChoose
let endShuffle = 0


let playerScoreNum = JSON.parse(localStorage.getItem("playerScore"))
let computerScoreNum = JSON.parse(localStorage.getItem("computerScore"))
let drawScoreNum = JSON.parse(localStorage.getItem("drawScore"))
let scoreBoardPlayer
let scoreBoardComputer
let scoreBoardDraw


scoreBoardPlayer = document.createElement("h1")
scoreBoardPlayer.textContent = ""
scoreBoardComputer = document.createElement("h1")
scoreBoardComputer.textContent = ""
scoreBoardDraw = document.createElement("h1")
scoreBoardDraw.textContent = ""

if (playerScoreNum === null) {
    scoreBoardPlayer.textContent = 0
    playerScore.appendChild(scoreBoardPlayer)
} else {
    scoreBoardPlayer.textContent = playerScoreNum
    playerScore.appendChild(scoreBoardPlayer)
}

if (computerScoreNum === null) {
    scoreBoardComputer.textContent = 0
    computerScore.appendChild(scoreBoardComputer)
} else {
    scoreBoardComputer.textContent = computerScoreNum
    computerScore.appendChild(scoreBoardComputer)
}

if (drawScoreNum === null) {
    scoreBoardDraw.textContent = 0
    drawScore.appendChild(scoreBoardDraw)
} else {
    scoreBoardDraw.textContent = drawScoreNum
    drawScore.appendChild(scoreBoardDraw)
}


player["paper"].addEventListener("click", function (e) {

    if (goThrow === false) {
        player["paper"].classList.add("playerOptionMove")
        player["rock"].classList.add("playerOptionNone")
        player["scissors"].classList.add("playerOptionNone")

        clicked(player["paper"], player["rock"], player["scissors"])

        setTimeout(() => {
            shuffleOptions()
        }, 4000)

        setTimeout(() => {
            computerChoose = computerWinOption()
            chooseWinner(player["paper"], computerChoose)
            newGame.style.display = ""
            resetCalc.style.display = ""
        }, 10000)



    }
    goThrow = true
})



player["rock"].addEventListener("click", function (e) {

    if (goThrow === false) {
        player["paper"].classList.add("playerOptionNone")
        player["rock"].classList.add("playerOptionMove")
        player["scissors"].classList.add("playerOptionNone")

        clicked(player["rock"], player["paper"], player["scissors"])

        setTimeout(() => {
            shuffleOptions()
        }, 4000)

        setTimeout(() => {
            computerChoose = computerWinOption()
            chooseWinner(player["rock"], computerChoose)
            newGame.style.display = ""
            resetCalc.style.display = ""
        }, 10000)


    }
    goThrow = true
})



player["scissors"].addEventListener("click", function (e) {

    if (goThrow === false) {
        player["paper"].classList.add("playerOptionNone")
        player["rock"].classList.add("playerOptionNone")
        player["scissors"].classList.add("playerOptionMove")

        clicked(player["scissors"], player["rock"], player["paper"])

        setTimeout(() => {
            shuffleOptions()
        }, 4000)

        setTimeout(() => {
            computerChoose = computerWinOption()
            chooseWinner(player["scissors"], computerChoose)
            newGame.style.display = ""
            resetCalc.style.display = ""
        }, 10000)


    }
    goThrow = true
})


newGame.addEventListener("click", function () {
    newGame.style.border = "3px solid  rgb(55, 130, 236)"
    new Audio(`audio/newGame.mp3`).play()
    setTimeout(() => {
        location.reload()
    }, 1500)
})


resetCalc.addEventListener("click", function () {

    if (JSON.parse(localStorage.getItem("playerScore") == 0) &&
        JSON.parse(localStorage.getItem("computerScore") == 0) &&
        JSON.parse(localStorage.getItem("drawScore") == 0)) {

        alert("All counters are at 0")

    } else {
        resetCalc.classList.add("resetCalcBorder")
        alert("Are you sure you want to delete points?")

        scoreBoardPlayer.textContent = 0
        scoreBoardComputer.textContent = 0
        scoreBoardDraw.textContent = 0

        playerScore.appendChild(scoreBoardPlayer)
        computerScore.appendChild(scoreBoardComputer)
        drawScore.appendChild(scoreBoardDraw)

        localStorage.setItem("computerScore", JSON.stringify(0))
        localStorage.setItem("playerScore", JSON.stringify(0))
        localStorage.setItem("drawScore", JSON.stringify(0))

        new Audio(`audio/reset.mp3`).play()

    }


})
