let playerSide = document.querySelector(".player-side")
let computerSide = document.querySelector(".computer-side")

let player = new Array(3)
player["paper"] = playerSide.children[0]
player["rock"] = playerSide.children[1]
player["scissors"] = playerSide.children[2]

let computer = []
for (let i = 0; i < 3; i++) {
    computer.push(computerSide.children[i])
}


let goThrow = false
let randomNumber
let endShuffle = 0



player["paper"].addEventListener("click", function (e) {

    if (goThrow === false) {
        player["paper"].classList.add("player-side-paper")
        player["rock"].classList.add("player-side-rock-none")
        player["scissors"].classList.add("player-side-scissors-none")

        clicked(player["paper"], player["rock"], player["scissors"])

        setTimeout(() => {
            shuffleOptions()
        }, 4000)
    }
    goThrow = true
})



player["rock"].addEventListener("click", function (e) {

    if (goThrow === false) {
        player["paper"].classList.add("player-side-paper-none")
        player["rock"].classList.add("player-side-rock")
        player["scissors"].classList.add("player-side-scissors-none")

        clicked(player["rock"], player["paper"], player["scissors"])

        setTimeout(() => {
            shuffleOptions()
        }, 4000)
    }
    goThrow = true
})



player["scissors"].addEventListener("click", function (e) {

    if (goThrow === false) {
        player["paper"].classList.add("player-side-paper-none")
        player["rock"].classList.add("player-side-rock-none")
        player["scissors"].classList.add("player-side-scissors")

        clicked(player["scissors"], player["rock"], player["paper"])

        setTimeout(() => {
            shuffleOptions()
        }, 4000)
    }
    goThrow = true
})
