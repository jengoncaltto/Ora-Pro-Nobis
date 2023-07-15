// Array com todas as perguntas e respostas
var questions = [
    {
      question: "Pergunta 1?",
      choices: ["Opção 1", "Opção 2", "Opção 3"],
      correctAnswer: 1
    },
    {
      question: "Pergunta 2?",
      choices: ["Opção 1", "Opção 2", "Opção 3"],
      correctAnswer: 1
    },
    {
        question: "Pergunta 3?",
        choices: ["Opção 1", "Opção 2", "Opção 3"],
        correctAnswer: 3
      },
      {
        question: "Pergunta 4?",
        choices: ["Opção 1", "Opção 2", "Opção 3"],
        correctAnswer: 1
      },
      {
        question: "Pergunta 5?",
        choices: ["Opção 1", "Opção 2", "Opção 3"],
        correctAnswer: 3
      },
      {
        question: "Pergunta 6?",
        choices: ["Opção 1", "Opção 2", "Opção 3"],
        correctAnswer: 2
      },
      {
        question: "Pergunta 7?",
        choices: ["Opção 1", "Opção 2", "Opção 3"],
        correctAnswer: 2
      },
      {
        question: "Pergunta 8?",
        choices: ["Opção 1", "Opção 2", "Opção 3"],
        correctAnswer: 3
      },
      {
        question: "Pergunta 9?",
        choices: ["Opção 1", "Opção 2", "Opção 3"],
        correctAnswer: 2
      },
      {
        question: "Pergunta 10?",
        choices: ["Opção 1", "Opção 2", "Opção 3"],
        correctAnswer: 2
      },
      {
        question: "Pergunta 11?",
        choices: ["Opção 1", "Opção 2", "Opção 3"],
        correctAnswer: 1
      },
      {
        question: "Pergunta 12?",
        choices: ["Opção 1", "Opção 2", "Opção 3"],
        correctAnswer: 1
      },
      {
        question: "Pergunta 13?",
        choices: ["Opção 1", "Opção 2", "Opção 3"],
        correctAnswer: 1
      },
      {
        question: "Pergunta 14?",
        choices: ["Opção 1", "Opção 2", "Opção 3"],
        correctAnswer: 3
      },
      {
        question: "Pergunta 15?",
        choices: ["Opção 1", "Opção 2", "Opção 3"],
        correctAnswer: 2
      },

      {
        question: "Pergunta 16?",
        choices: ["Opção 1", "Opção 2", "Opção 3"],
        correctAnswer: 3
      },
      {
        question: "Pergunta 17?",
        choices: ["Opção 1", "Opção 2", "Opção 3"],
        correctAnswer: 3
      },
      {
        question: "Pergunta 18?",
        choices: ["Opção 1", "Opção 2", "Opção 3"],
        correctAnswer: 3
      },
      {
        question: "Pergunta 19?",
        choices: ["Opção 1", "Opção 2", "Opção 3"],
        correctAnswer: 1
      },
      {
        question: "Pergunta 20?",
        choices: ["Opção 1", "Opção 2", "Opção 3"],
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