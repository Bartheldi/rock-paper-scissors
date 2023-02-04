function playerChoice(option) {
  if (goThrow === false) {
    const options = [player["paper"], player["rock"], player["scissors"]];
    options.forEach(el => el.classList.add("playerOptionNone"));

    setTimeout(() => {
      shuffleOptions();
    }, 4000);

    option.classList.remove("playerOptionNone");
    option.classList.add("playerOptionMove");

    clicked(option, ...options.filter(el => el !== option));

    setTimeout(() => {
      computerChoose = computerWinOption();
      chooseWinner(option, computerChoose);
      newGame.style.display = "";
      resetCalc.style.display = "";
    }, 10000);
  }
  goThrow = true;
}





function clicked(element, elementDel1, elementDel2) {
  new Audio(`audio/click.wav`).play();

  setTimeout(() => {
    elementDel1.remove();
    elementDel2.remove();
  }, 2000);

  setTimeout(() => {
    element.style.border = "0";
    setElementStyles(element);
  }, 4000);
}

function setElementStyles(element) {
  let maxMedia850 = window.matchMedia("(max-width: 850px)");
  let maxMedia500 = window.matchMedia("(max-width: 500px)");
  let maxMedia340 = window.matchMedia("(max-width: 340px)");

  let width, height;
  if (maxMedia850.matches === true && maxMedia500.matches === true && maxMedia340.matches === true) { // 340
    width = "40%";
    height = "70%";
  } else if (maxMedia850.matches === true && maxMedia500.matches === true && maxMedia340.matches === false) { // 500
    width = "40%";
    height = "70%";
  } else if (maxMedia850.matches === true && maxMedia500.matches === false && maxMedia340.matches === false) { // 850
    width = "40%";
    height = "90%";
  } else {
    width = "50%";
    height = "60%";
  }

  element.style.width = width;
  element.style.height = height;
  element.style.transition = "height 1s, width 1s";
}



function shuffleOptions() {
  const options = ["rock", "paper", "scissors"];

  if (endShuffle < 10) {
    options.forEach((option, i) => {
      setTimeout(() => {
        Object.values(computer).forEach((el) => el.classList.add("computerDisplayNone"));
        computer[option].classList.remove("computerDisplayNone");
        new Audio(`audio/shuffle.mp3`).play();
      }, i * 150);
    });

    endShuffle++;
    setTimeout(shuffleOptions, 600);
  }
}



function computerWinOption() {
  let options = ["rock", "paper", "scissors"];
  let randomNumber = getRandom0To2();
  let computerOption = computer[options[randomNumber]];
  options.forEach(option => {
    computer[option].classList.remove("computerDisplay");
    computer[option].classList.add("computerDisplayNone");
  });
  computerOption.classList.remove("computerDisplayNone");
  computerOption.classList.add("computerDisplay");
  return computerOption;
}



function chooseWinner(playerOption, computerOption) {
  let isDraw = computerOption === playerOption;
  let isPlayerWin = false;
  
  if (!isDraw) {
    switch(playerOption) {
      case player["paper"]:
        isPlayerWin = computerOption === computer["rock"];
        break;
      case player["rock"]:
        isPlayerWin = computerOption === computer["scissors"];
        break;
      case player["scissors"]:
        isPlayerWin = computerOption === computer["paper"];
        break;
    }
  }
  
  if (isDraw) {
    addDrawScore();
  } else if (isPlayerWin) {
    addPlayerScore();
    playerOption.classList.remove("playerOptionMove");
    playerOption.classList.add("winRotation");
  } else {
    addComputerScore();
    computerOption.classList.add("winRotation");
  }
}



function getRandom0To2() {
  return Math.floor(Math.random() * 3)
}


function addPlayerScore() {
  playerScoreNum++
  scoreBoardPlayer.textContent = playerScoreNum
  playerScore.appendChild(scoreBoardPlayer).classList.add("counterAnimation")
  localStorage.setItem("playerScore", JSON.stringify(playerScoreNum))
  new Audio(`audio/playerScore.mp3`).play()
}


function addComputerScore() {
  computerScoreNum++
  scoreBoardComputer.textContent = computerScoreNum
  computerScore.appendChild(scoreBoardComputer).classList.add("counterAnimation")
  localStorage.setItem("computerScore", JSON.stringify(computerScoreNum))
  new Audio(`audio/computerScore.mp3`).play()
}


function addDrawScore() {
  drawScoreNum++
  scoreBoardDraw.textContent = drawScoreNum
  drawScore.appendChild(scoreBoardDraw).classList.add("counterAnimation")
  localStorage.setItem("drawScore", JSON.stringify(drawScoreNum))
  new Audio(`audio/draw.mp3`).play()
}