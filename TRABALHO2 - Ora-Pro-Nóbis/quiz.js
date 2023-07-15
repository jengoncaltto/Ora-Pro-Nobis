// Array com todas as perguntas e respostas
var questions = [
    {
      question: "Qual é o nome científico da espécie mais comum de ora-pro-nóbis??",
      choices: ["pereskia-aculeata", "pereskia-grandifolia", "pereskia-bleo"],
      correctAnswer: 1
    },
    {
      question: "Qual o principal elemento com maior destaque dessa planta??",
      choices: ["proteina ", "carboidratos", "lipidios"],
      correctAnswer: 1
    },
    {
        question: "Qual local do Brasil é mais consumido a ora-pro-nóbis?",
        choices: ["Amazônia ", "Bahia", "Minas Gerais"],
        correctAnswer: 3
      },
      {
        question: "Qual mineral tem maior quantidade na pereskia-aculeata? (em 100g)",
        choices: ["Cálcio ", "Iodo ", " Ferro"],
        correctAnswer: 1
      },
      {
        question: "Qual tipo de pareskia tem propriedades medicinais?",
        choices: ["  pereskia-aculeata", "pereskia-grandifolia ", "pereskia-bleo "],
        correctAnswer: 3
      },
      {
        question: "Sobre a história do nome Ora-pro-Nóbis: é verdadeiro que nasceu por causa de uma antiga música medieval?",
        choices: [" Verdadeiro", "Falso"],
        correctAnswer: 2
      },
      {
        question: "Sobre o nome Ora-Pro-Nóbis: vem da origem de qual lingua?",
        choices: ["Alemão ", "Latim", "Francês"],
        correctAnswer: 2
      },
      {
        question: "Qual especie é nativa da América Central?",
        choices: ["pereskia-aculeata ", "  pereskia-grandifolia", " pereskia-bleo"],
        correctAnswer: 3
      },
      {
        question: "Qual vitamina é destaque na planta Pereskia Aculeata",
        choices: ["Vitamina C", "Vitamina A" , "Vitamina D"],
        correctAnswer: 2
      },
      {
        question: "Por que a ora-pro-nobis é conhecida como 'bife de pobre'?",
        choices: [" Porque é unicamente barato", " Porque além de barato é rica em proteinas", " Isto é falso, na real é conhecido como bife de rico"],
        correctAnswer: 2
      },
      {
        question: "A planta Ora-Pro-Nobis é facilmente encontrada em mercados ou lojas especializadas?",
        choices: ["Sim", "Não"], 
        correctAnswer: 1
      },
      {
        question: "A Ora-Pro-Nobis pode ser utilizada na fabricação de produtos cosméticos?",
        choices: ["Sim", "Não",],
        correctAnswer: 1
      },
      {
        question: "A planta Ora-Pro-Nobis possui alguma importância cultural ou simbólica?",
        choices: ["Sim", "Não"],
        correctAnswer: 1
      },
      {
        question: "Qual a porcentagem de proteina da ora-pro-nóbis?",
        choices: [" 5%", "10%", "25%"],
        correctAnswer: 3
      },
      {
        question: "A vitamina A presente na planta ajuda na(o):",
        choices: ["Saúde dos ganglios", "Saúde ocular", " Não ajuda em nada"],
        correctAnswer: 2
      },

      {
        question: "Qual especie é menos encontrada no Brasil",
        choices: [ "pereskia-aculeata", "pereskia-grandifolia ", " pereskia-bleo "],
        correctAnswer: 3
      },
      {
        question: "Qual especie é conhecida com Rosa-Madeira?",
        choices: [" pereskia-aculeata", " pereskia-grandifolia", " pereskia-bleo "],
        correctAnswer: 3
      },
      {
        question: "Como pode ser consumida?",
        choices: ["Farinha", "chá", "todos acima"],
        correctAnswer: 3
      },
      {
        question: "Qual especie é mais consumido na culinaria mineira? ",
        choices: ["pereskia-aculeata", " pereskia-grandifolia", "pereskia-bleo"],
        correctAnswer: 1
      },
      {
        question: "Qual é mais usada ornamentalmente?",
        choices: ["pereskia-aculeata", " pereskia-grandifolia", "pereskia-bleo"],
        correctAnswer: 2
      }
  ];
  
  var quizContainer = document.getElementById("quizContainer");
  var questionList = document.getElementById("questionList");
  var submitBtn = document.getElementById("submitBtn");
  var currentQuestion = 0;
  var score = 0;
  var isFirstAttempt = true;
  
  // Função para embaralhar as perguntas
  function shuffleQuestions() {
    for (var i = questions.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = questions[i];
      questions[i] = questions[j];
      questions[j] = temp;
    }
  }
  
  // Função para exibir as próximas perguntas
  function showNextQuestions() {
    var numQuestionsToShow = 5; // Número de perguntas a serem mostradas por vez
    var end = currentQuestion + numQuestionsToShow;
    if (end >= questions.length) {
      end = questions.length;
      submitBtn.innerText = "Finalizar";
    }
    
    questionList.innerHTML = "";
    
    for (var i = currentQuestion; i < end; i++) {
      var question = questions[i];
      var listItem = document.createElement("li");
      
      listItem.innerHTML = "<p>" + question.question + "</p>";
      
      for (var j = 0; j < question.choices.length; j++) {
        var choice = question.choices[j];
        var input = document.createElement("input");
        input.type = "radio";
        input.name = "q" + (i + 1);
        input.value = choice;
        input.id = "q" + (i + 1) + "_opcao" + (j + 1);
        
        var label = document.createElement("label");
        label.htmlFor = "q" + (i + 1) + "_opcao" + (j + 1);
        label.innerText = choice;
        
        listItem.appendChild(input);
        listItem.appendChild(label);
        listItem.appendChild(document.createElement("br"));
      }
      
      questionList.appendChild(listItem);
    }
    
    currentQuestion = end;
  }
  
  // Função para verificar as respostas e calcular a pontuação
  function checkAnswers() {
    var inputs = questionList.getElementsByTagName("input");
    var numCorrect = 0;
    
    for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].checked) {
        var questionIndex = parseInt(inputs[i].name.slice(1)) - 1;
        var choiceIndex = parseInt(inputs[i].id.slice(-1)) - 1;
        
        if (questions[questionIndex].correctAnswer === choiceIndex) {
          numCorrect++;
        }
      }
    }
    
    score += numCorrect;
    
    if (isFirstAttempt) {
      var percentCorrect = (numCorrect / (currentQuestion - 1)) * 100;
      alert("Na sua primeira tentativa, você acertou " + percentCorrect.toFixed(2) + "% das questões.");
      isFirstAttempt = false;
    }
    
    if (currentQuestion >= questions.length) {
      var percentScore = (score / questions.length) * 100;
      var playAgain = confirm("Você acertou " + percentScore.toFixed(2) + "% das questões. Quer jogar novamente?");
      
      if (playAgain) {
        currentQuestion = 0;
        score = 0;
        shuffleQuestions();
        showNextQuestions();
      } else {
        quizContainer.innerHTML = "<h2>Obrigado por jogar!</h2>";
      }
    } else {
      showNextQuestions();
    }
  }
  
  // Adiciona o evento de clique ao botão de submeter
  submitBtn.addEventListener("click", checkAnswers);
  
  // Embaralha as perguntas e mostra as primeiras perguntas
  shuffleQuestions();
  showNextQuestions()