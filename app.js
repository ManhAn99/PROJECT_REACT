const yes = document.getElementById('yes')
const no = document.getElementById('no')

no.addEventListener('mouseover', mouseHover)
function mouseHover() {
    let x = Math.floor(Math.random()*600) + 1
    let y = Math.floor(Math.random()*600) + 1

    no.style.left = x+'px'
    no.style.top = y+'px'
}
yes.addEventListener('click', mouseClick)

function mouseClick() {
    alert('Anh cũng yêu em❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️!')
}