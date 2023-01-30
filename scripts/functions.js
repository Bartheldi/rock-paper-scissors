function clicked(element, elementDel1, elementDel2) {

  new Audio(`audio/click.wav`).play()

  setTimeout(() => {
    elementDel1.remove()
    elementDel2.remove()
  }, 2000)

  setTimeout(() => {
    element.style.width = "50%"
    element.style.height = "60%"
    element.style.transition = "height 1s, width 1s"
  }, 2500)

  setTimeout(() => {
    element.style.border = "0"
  }, 4000)
}



function shuffleOptions() {

  if (endShuffle < 10) {

    //paper
    setTimeout(() => {
      computer["rock"].classList.remove("computerDisplay")
      computer["rock"].classList.add("computerDisplayNone")
      computer["scissors"].classList.remove("computerDisplay")
      computer["scissors"].classList.add("computerDisplayNone")
      computer["paper"].classList.remove("computerDisplayNone")
      computer["paper"].classList.add("computerDisplay")
      new Audio(`audio/shuffle.mp3`).play()
    }, 150)


    // rock
    setTimeout(() => {
      computer["paper"].classList.remove("computerDisplay")
      computer["paper"].classList.add("computerDisplayNone")
      computer["scissors"].classList.remove("computerDisplay")
      computer["scissors"].classList.add("computerDisplayNone")
      computer["rock"].classList.remove("computerDisplayNone")
      computer["rock"].classList.add("computerDisplay")
      new Audio(`audio/shuffle.mp3`).play()
    }, 300)

    //scissors
    setTimeout(() => {
      computer["paper"].classList.remove("computerDisplay")
      computer["paper"].classList.add("computerDisplayNone")
      computer["rock"].classList.remove("computerDisplay")
      computer["rock"].classList.add("computerDisplayNone")
      computer["scissors"].classList.remove("computerDisplayNone")
      computer["scissors"].classList.add("computerDisplay")
      new Audio(`audio/shuffle.mp3`).play()
    }, 450)

    endShuffle++
    setTimeout(shuffleOptions, 600)
  }

}



function computerWinOption() {
  let randomNumber
  randomNumber = getRandom0To2()

  //paper
  if (randomNumber === 0) {
    computer["rock"].classList.remove("computerDisplay")
    computer["rock"].classList.add("computerDisplayNone")
    computer["scissors"].classList.remove("computerDisplay")
    computer["scissors"].classList.add("computerDisplayNone")
    computer["paper"].classList.remove("computerDisplayNone")
    computer["paper"].classList.add("computerDisplay")
    return computer["paper"]
  } else
    //rock
    if (randomNumber === 1) {
      computer["paper"].classList.remove("computerDisplay")
      computer["paper"].classList.add("computerDisplayNone")
      computer["scissors"].classList.remove("computerDisplay")
      computer["scissors"].classList.add("computerDisplayNone")
      computer["rock"].classList.remove("computerDisplayNone")
      computer["rock"].classList.add("computerDisplay")
      return computer["rock"]
    } else
      //scissors
      if (randomNumber === 2) {
        computer["paper"].classList.remove("computerDisplay")
        computer["paper"].classList.add("computerDisplayNone")
        computer["rock"].classList.remove("computerDisplay")
        computer["rock"].classList.add("computerDisplayNone")
        computer["scissors"].classList.remove("computerDisplayNone")
        computer["scissors"].classList.add("computerDisplay")
        return computer["scissors"]
      }
}



function chooseWinner(playerOption, computerOption) {
  // 0 = paper
  // 1 = rock
  // 2 = scissors


  // Check draw
  if (computerOption === computer["paper"] && playerOption === player["paper"] ||
    computerOption === computer["rock"] && playerOption === player["rock"] ||
    computerOption === computer["scissors"] && playerOption === player["scissors"]) {
    addDrawScore()
  } else

    // Player paper
    if (playerOption === player["paper"]) {

      if (computerOption === computer["rock"]) {
        addPlayerScore()
      }

      if (computerOption === computer["scissors"]) {
        addComputerScore()
      }
    }

  // Player rock
  if (playerOption === player["rock"]) {

    if (computerOption === computer["paper"]) {
      addComputerScore()
    }

    if (computerOption === computer["scissors"]) {
      addPlayerScore()
    }
  }

  // Player scissors
  if (playerOption === player["scissors"]) {

    if (computerOption === computer["paper"]) {
      addPlayerScore()
    }

    if (computerOption === computer["rock"]) {
      addComputerScore()
    }
  }
}


function getRandom0To2() {
  return Math.floor(Math.random() * 3)
}

function addPlayerScore() {
  playerScoreNum++
  scoreBoardPlayer.textContent = playerScoreNum
  playerScore.appendChild(scoreBoardPlayer)
  localStorage.setItem("playerScore", JSON.stringify(playerScoreNum))
  new Audio(`audio/playerScore.mp3`).play()
}

function addComputerScore() {
  computerScoreNum++
  scoreBoardComputer.textContent = computerScoreNum
  computerScore.appendChild(scoreBoardComputer)
  localStorage.setItem("computerScore", JSON.stringify(computerScoreNum))
  new Audio(`audio/computerScore.mp3`).play()
}

function addDrawScore() {
  drawScoreNum++
  scoreBoardDraw.textContent = drawScoreNum
  drawScore.appendChild(scoreBoardDraw)
  localStorage.setItem("drawScore", JSON.stringify(drawScoreNum))
  new Audio(`audio/draw.mp3`).play()
}