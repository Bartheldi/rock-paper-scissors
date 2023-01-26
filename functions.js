function clicked (element, elementDel1, elementDel2) {

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