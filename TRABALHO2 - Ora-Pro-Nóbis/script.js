//posicionado na index

function createJSON(){
        localStorage.setItem('style', JSON.stringify({
            background: 'beige',
            fontSize: '1.1em', 
            fontFamily: 'Montserrat'}));                        
        console.log("Instanciado com sucesso");
}
console.log(createJSON());


function mudaBackground(background) {
    console.log(background.options[background.selectedIndex].value)

    if(background.value == "PaleGoldenrod"){
        document.body.style.background = "PaleGoldenrod";
        localStorage.getItem('style').background = "PaleGoldenrod";    
        console.log("ola")        
    }
    else if(background.value == "DarkKhaki"){
        console.log("ola") 
        document.body.style.background = "DarkKhaki";  
        console.log("ola") 
        localStorage.getItem('style').background = "DarkKhaki";    
    }
        else if(background.value == "Honeydew"){
            document.body.style.background = "Honeydew";
            localStorage.getItem('style').background = "Honeydew";
        }
        document.body.style.background = background;
}


function mudaFonte(fonte) {
    console.log(fonte.options[fonte.selectedIndex].value)

    if(fonte.value == "Rajdhani"){
        document.body.style.fontFamily = "Rajdhani";
        localStorage.getItem('style').fonte = "Rajdhani";
    }
    else if(fonte.value == "Arial"){
        document.body.style.fontFamily = "Arial";
        localStorage.getItem('style').fonte = "Arial";
    }
    else if(fonte.value == "Montserrat"){
        document.body.style.fontFamily = "Montserrat";
        localStorage.getItem('style').fonte = "Montserrat";
    }
    document.body.style.fonte = fonte;
}

function mudaTamanho(tam) {
    console.log(tam.options[tam.selectedIndex].value)

    if(tam.value == "pequeno"){
        document.body.style.fontSize = "1.1em";
        localStorage.getItem('style').tam = "1.1em"
    }
    else if(tam.value == "medio"){
        document.body.style.fontSize = "1.2em";
        localStorage.getItem('style').tam = "1.2em"
    }
    else if(tam.value == "grande"){
        document.body.style.fontSize = "1.3em";
        localStorage.getItem('style').tam = "1.3em"
    }
    document.body.style.tam = tam;
}

function allPages(){
    mudaBackground()
    mudaFonte()
    mudaTamanho()
}



//posicionado em quiz


//memory card
const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip');

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;

    return;
  }

  secondCard = this;
  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  resetBoard();
}

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
  }, 1500);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();

cards.forEach(card => card.addEventListener('click', flipCard));