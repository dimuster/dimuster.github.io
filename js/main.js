const move = () => pos <= 150 ? document.getElementById('box').style.left = pos++ + 'px' : clearInterval(t)
let pos = 0
const t = setInterval(move, 10)