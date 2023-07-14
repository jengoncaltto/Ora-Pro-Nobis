function mostrarPergunta() {
    var linhas = 0;
    for( var i = linhas; i < 5; i++) {
        Math.random()
        document.getElementById('perguntas').innerHTML += i + '<br>'

    }
} 

// Definição das perguntas do quiz
const questions = [
    {
      question: "Qual é a capital da França?",
      options: ["Paris", "Londres", "Madri", "Berlim"],
      answer: 0
    },
    {
      question: "Qual é o maior planeta do sistema solar?",
      options: ["Júpiter", "Saturno", "Terra", "Netuno"],
      answer: 0
    },
    // Adicione as demais perguntas aqui
  ];
  
  let score = 0;
  let playedOnce = false;
  
  // Função para exibir uma pergunta aleatória
  function displayQuestion() {
    const randomIndex = Math.floor(Math.random() * questions.length);
    const question = questions[randomIndex];
  
    console.log(question.question);
  
    for (let i = 0; i < question.options.length; i++) {
      console.log(`${i + 1}. ${question.options[i]}`);
    }
  
    const userAnswer = parseInt(prompt("Digite o número da sua resposta:"));
  
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