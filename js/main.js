let pos = 0
const box = document.getElementById('box')
const t = setInterval(move, 10)

function move() {
  if (pos >= 150) {
     clearInterval(t)
  } else {
    pos++
    box.style.left = pos + 'px'
  }
}