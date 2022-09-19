// grab buttons
const prevBtnSm = document.getElementById('prevBtnSm')
const nextBtnSm = document.getElementById('nextBtnSm')
const prevBtnLg = document.getElementById('prevBtnLg')
const nextBtnLg = document.getElementById('nextBtnLg')
const mobileImgs = document.getElementsByClassName('imgs')
const desktopImgs = document.getElementsByClassName('imgs-large')
const desktopImgContainer = document.getElementById('large-screen-imgs')

const getPics = () => {
    return window.getComputedStyle(desktopImgContainer).display === 'none'
        ? mobileImgs
        : desktopImgs
}

const getPrev = () => {
    return window.getComputedStyle(desktopImgContainer).display === 'none'
        ? prevBtnSm
        : prevBtnLg
}

const getNext = () => {
    return window.getComputedStyle(desktopImgContainer).display === 'none'
        ? nextBtnSm
        : nextBtnLg
}

// init pics & buttons
const pics = getPics()
const prevBtn = getPrev()
const nextBtn = getNext()

let currentPic = 0

const displayPic = current => {
    for(let i of pics) {
        i.classList.remove('active')
    }
    pics[current].classList.add('active')
}

const nextPic = () => {
    if(currentPic === pics.length -1) {
        currentPic = 0
    } else {
        currentPic++
    }
    displayPic(currentPic)
}

const prevPic = () => {
    if(currentPic === 0) {
        currentPic = pics.length - 1
    } else {
        currentPic--
    }
    displayPic(currentPic)
}

// init displayed pic
displayPic(currentPic)

prevBtn.addEventListener('click', nextPic)
nextBtn.addEventListener('click', nextPic)

// change pic every 3 seconds
setInterval(()=>{
    nextPic()
}, 3000)