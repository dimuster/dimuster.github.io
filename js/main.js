var el = document.getElementById('box')
var i = 0
var a = setInterval(move, 10)

function move() {
  if (i < 150) {
    el.style.left = i + "px;"
    i++
  } else {
    clearInterval(a)
  }
}