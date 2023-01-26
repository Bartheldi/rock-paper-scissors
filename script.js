let paper = document.querySelector(".player-side")

let player = new Array(3)
player["paper"] = paper.children[0]
player["rock"] = paper.children[1]
player["scissors"] = paper.children[2]

let goThrow = 0


player["paper"].addEventListener("click", function (e) {

    if (goThrow == 0) {
        player["paper"].classList.add("player-side-paper")
        player["rock"].classList.add("player-side-rock-none")
        player["scissors"].classList.add("player-side-scissors-none")

        clicked(player["paper"], player["rock"], player["scissors"])
    }
    goThrow = 1
})



player["rock"].addEventListener("click", function (e) {

    if (goThrow == 0) {
        player["paper"].classList.add("player-side-paper-none")
        player["rock"].classList.add("player-side-rock")
        player["scissors"].classList.add("player-side-scissors-none")

        clicked(player["rock"], player["paper"], player["scissors"])
    }
    goThrow = 1
})



player["scissors"].addEventListener("click", function (e) {

    if (goThrow == 0) {
        player["paper"].classList.add("player-side-paper-none")
        player["rock"].classList.add("player-side-rock-none")
        player["scissors"].classList.add("player-side-scissors")

        clicked(player["scissors"], player["rock"], player["paper"])
    }
    goThrow = 1
})