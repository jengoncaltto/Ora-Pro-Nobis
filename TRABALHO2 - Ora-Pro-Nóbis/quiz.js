var pergunta =  document.getElementsByClassName('pergunta');
var opcoes = document.getElementsByClassName('opcoes');
var resposta = document.querySelectorAll('input');

function createJSON(){
    let questionOBJ = {
        question: 'pergunta',
        options: 'opcoes',
        answer: 'resposta'
    } 
    let questionJSON = JSON.stringify(questionOBJ);
    localStorage.setItem('quiz', questionJSON);                     
    console.log("Instanciado com sucesso");
}
console.log(createJSON)

function startStorage(){
    //Cria o starge se ele não existe na memória.
      if(localStorage.getItem('quiz') === null || localStorage.getItem('quiz') === undefined){
        createJSON();
        console.log("started")
      }
      else{
        console.log("Once started")
      }
    }

    
function buscaPerguntas(){
   
}

  let score = 0;
  let playedOnce = false;
  
  // Função para exibir uma pergunta aleatória
  function displayQuestion() {
    const randomIndex = Math.floor(Math.random() * buscaPerguntas.length);
    const question = buscaPerguntas[randomIndex];
  
    console.log(question.buscaPerguntas);
  
    for (let i = 0; i < question.options.length; i++) {
      console.log(`${i + 1}. ${question.options[i]}`);
    }
  
    const userAnswer = parseInt();
  
    if (userAnswer === question.answer + 1) {
      score++;
    }
    
    questions.splice(randomIndex, 1);
  
    if (questions.length > 0) {
      displayQuestion();
    } else {
      const percentage = (score / 20) * 100;
      
      if (playedOnce) {
        console.log(`Na sua tentativa, você acertou ${percentage}% das questões. Quer jogar novamente?`);
      } else {
        playedOnce = true;
        console.log(`Na sua primeira tentativa, você acertou ${percentage}% das questões. Quer jogar novamente?`);
      }
      
      // Reinicia o jogo
      resetQuiz();
    }
  }
  
  // Função para reiniciar o quiz
  function resetQuiz() {
    score = 0;
    questions = [...questions];
    displayQuestion();
  }
  
  // Inicia o jogo
  displayQuestion();