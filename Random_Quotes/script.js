const quoteDisplayElement = document.getElementById('quoteDisplay');
const quoteAuthorElement = document.getElementById('quoteAuthor');
const quoteBtn = document.getElementById('quoteBtn');

quoteBtn.addEventListener('click', getQuote);

getQuote()

function getQuote() {
  fetch('https://api.quotable.io/random')
    .then(response => response.json())
    .then(data => {
      quoteDisplayElement.innerHTML = data.content;
      quoteAuthorElement.innerHTML = "- " + data.author;
    })
    .catch(error => console.log(error));
}
