const el = document.getElementById('box')
let i = 0
const a = setInterval(move, 10)

function move() {
  if (i < 150) {
    el.style.left = i + "px"
    i++
  } else {
    clearInterval(a)
  }
}