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
      computer[1].classList.remove("rock")
      computer[1].classList.add("rock-none")
      computer[2].classList.remove("scissors")
      computer[2].classList.add("scissors-none")
      computer[0].classList.remove("paper-none")
      computer[0].classList.add("paper")
      console.log(computer[0])
    }, 150)


    // rock
    setTimeout(() => {
      computer[0].classList.remove("paper")
      computer[0].classList.add("paper-none")
      computer[2].classList.remove("scissors")
      computer[2].classList.add("scissors-none")
      computer[1].classList.remove("rock-none")
      computer[1].classList.add("rock")
      console.log(computer[1])
    }, 300)

    //scissors
    setTimeout(() => {
      computer[0].classList.remove("paper")
      computer[0].classList.add("paper-none")
      computer[1].classList.remove("rock")
      computer[1].classList.add("rock-none")
      computer[2].classList.remove("scissors-none")
      computer[2].classList.add("scissors")
      console.log(computer[2])
    }, 450)



    endShuffle++
    console.log(endShuffle)
    setTimeout(shuffleOptions, 600)
  }

  computerWinOption()
}



function computerWinOption() {

  console.log(getRandom0To2())
  randomNumber = getRandom0To2()

  //paper
  if (randomNumber === 0) {
    computer[1].classList.remove("rock")
    computer[1].classList.add("rock-none")
    computer[2].classList.remove("scissors")
    computer[2].classList.add("scissors-none")
    computer[0].classList.remove("paper-none")
    computer[0].classList.add("paper")
  } else
    //rock
    if (randomNumber === 1) {
      computer[0].classList.remove("paper")
      computer[0].classList.add("paper-none")
      computer[2].classList.remove("scissors")
      computer[2].classList.add("scissors-none")
      computer[1].classList.remove("rock-none")
      computer[1].classList.add("rock")
    } else
      //scissors
      if (randomNumber === 2) {
        computer[0].classList.remove("paper")
        computer[0].classList.add("paper-none")
        computer[1].classList.remove("rock")
        computer[1].classList.add("rock-none")
        computer[2].classList.remove("scissors-none")
        computer[2].classList.add("scissors")
      }
}




function getRandom0To2() {
  return Math.floor(Math.random() * 3);
}