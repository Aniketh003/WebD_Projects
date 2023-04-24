let input = document.getElementById('inputbtn');
let text = document.getElementById('hint');
let cnt = 0;
let guesscnt = document.getElementById('cnt');
let buttons = document.querySelectorAll('button');

const guess = Math.floor(Math.random() * 50) + 1;
let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click',(e) =>{
        if(e.target.innerHTML == 'DONE'){
            if (parseInt(string) == guess) {
                text.value = "Correct";
            }
            else{
                if (parseInt(string) > guess) {
                    text.value = "InCorrect.The number is less than " + parseInt(string);
                }
                else if(parseInt(string) < guess){
                    text.value = "InCorrect.The number is greater than " + parseInt(string);
                }
                cnt++;
                guesscnt.value = "Guess count is: " + cnt;
                string="";
                input.value = string;
            }
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0,string.length-1);
            input.value = string;
        }
        else{
            string += e.target.innerHTML;
            input.value = string;
        }

    })
})

