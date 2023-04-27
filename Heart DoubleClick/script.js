const loveme = document.querySelector('.LoveMe')
let clickTime = 0
loveme.addEventListener('click',(e) =>{
    if(clickTime === 0){
        clickTime = new Date().getTime()
    }else{
        if((new Date().getTime() - clickTime) < 800){
            createHeart(e)
            clickTime = 0
        }else{
            clickTime = new Date().getTime()
        }
    }
})

const createHeart = (e) => {
    const heart = document.createElement('i')
    heart.classList.add('fas')
    heart.classList.add('fa-heart')

    const x = e.clientX
    const y = e.clientY

    const leftOff = e.target.offsetLeft
    const topOff = e.target.offsetTop

    const xInside = x-leftOff
    const yInside = y-topOff

    heart.style.top = `${yInside}px`
    heart.style.left = `${xInside}px`

    loveme.appendChild(heart)

    setTimeout(() => heart.remove(),1000)
}