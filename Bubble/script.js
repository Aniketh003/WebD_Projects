var sec = 60
var hitValue = 0;
var score = 0
document.getElementById("start").addEventListener("click", (e) => {
    e.preventDefault()
    function getHit() {
        hitValue = Math.floor(Math.random() * 10);
        document.getElementById("hit").textContent = hitValue;
    }
    function CreateBubbles() {
        var clutter = ""
        for (let i = 1; i <= 240; i++) {
            let rn = Math.floor(Math.random() * 10);
            clutter += `<div id="bubble">${rn}</div>`;
        }
        document.getElementById("bottom").innerHTML = clutter
    }
    function Timer() {
        let timer = setInterval(function () {
            if (sec > 0) {
                document.querySelector("#timer").textContent = sec
                sec--;
            } else {
                clearInterval(timer)
                alert("game over!!")
            }
        }, 1000);
    }
    document.getElementById("bottom").addEventListener("click", (e) => {
        let hit = Number(e.target.textContent)
        if (hit === hitValue) {
            UpdateScore(1)
        } else {
            UpdateScore(0)
        }
    })
    function UpdateScore(output) {
        if (output) {
            score += 10
            document.getElementById("score").textContent = score
        } else {
            score -= 15
            document.getElementById("score").textContent = score
        }
        if (score < 0 || sec < 0) {
            sec = 60
            score = 0
            document.getElementById("score").textContent = score
            alert("game over!!!!")
        }
        getHit()
        CreateBubbles()
    }
    CreateBubbles()
    Timer()
    getHit()
})
