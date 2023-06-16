const container = document.querySelector('.container')
const unsplashURL = 'https://source.unsplash.com/random?film,4k';
const rows = 10

for(let i=0;i<rows*3;i++){
    const img = document.createElement('img')
    img.setAttribute('loading', 'lazy');
    img.src = `${unsplashURL}${randomsize()}`
    container.appendChild(img)
}
function randomsize(){
    return `${getRandom()}x${getRandom()}`
}
function getRandom(){
    return Math.floor(Math.random() * 10) + 300
}
