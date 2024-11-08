let questions = [
  {
    question: "Quel est le temps verbal dans 'Il avait mangé' ?",
    answers: [
      {
        text: "Imparfait",
        correct: false
      },
      {
        text: "Plus-que-parfait",
        correct: true
      },
      {
        text: "Passé composé",
        correct: false
      },
      {
        text: "Passé simple",
        correct: false
      }
    ]
  },
  {
    question: "Quelle est la bonne orthographe ?",
    answers: [
      {
        text: "Je peux leurs dire",
        correct: false
      },
      {
        text: "Je peut leur dire",
        correct: false
      },
      {
        text: "Je peux leur dire",
        correct: true
      },
      {
        text: "Je peut leurs dire",
        correct: false
      }
    ]
  },
  {
    question: "Quel est le féminin de 'directeur' ?",
    answers: [
      {
        text: "Directrice",
        correct: true
      },
      {
        text: "Directeuse",
        correct: false
      },
      {
        text: "Directeure",
        correct: false
      },
      {
        text: "Directresse",
        correct: false
      }
    ]
  },
  {
    question: "Comment s'écrit le pluriel de 'festival' ?",
    answers: [
      {
        text: "Festivals",
        correct: true
      },
      {
        text: "Festivaux",
        correct: false
      },
      {
        text: "Festivalles",
        correct: false
      },
      {
        text: "Festivales",
        correct: false
      }
    ]
  },
  {
    question: "Quelle phrase contient une erreur d'accord ?",
    answers: [
      {
        text: "Les enfants sont allés au parc",
        correct: false
      },
      {
        text: "Elles se sont lavées les mains",
        correct: true
      },
      {
        text: "Nous nous sommes vues hier",
        correct: false
      },
      {
        text: "Elle s'est préparée rapidement",
        correct: false
      }
    ]
  },
  {
    question: "Quel est le participe passé du verbe 'résoudre' ?",
    answers: [
      {
        text: "Résoudu",
        correct: false
      },
      {
        text: "Résout",
        correct: false
      },
      {
        text: "Résolu",
        correct: true
      },
      {
        text: "Résolvé",
        correct: false
      }
    ]
  },
  {
    question: "Quelle est la bonne conjugaison au subjonctif présent ?",
    answers: [
      {
        text: "Il faut que tu fasses",
        correct: true
      },
      {
        text: "Il faut que tu fais",
        correct: false
      },
      {
        text: "Il faut que tu fasses",
        correct: false
      },
      {
        text: "Il faut que tu fait",
        correct: false
      }
    ]
  },
  {
    question: "Identifiez le COD dans : 'Marie mange une pomme'",
    answers: [
      {
        text: "Marie",
        correct: false
      },
      {
        text: "mange",
        correct: false
      },
      {
        text: "une pomme",
        correct: true
      },
      {
        text: "Il n'y a pas de COD",
        correct: false
      }
    ]
  },
  {
    question: "Quel mot est un adverbe ?",
    answers: [
      {
        text: "Gentil",
        correct: false
      },
      {
        text: "Doucement",
        correct: true
      },
      {
        text: "Douceur",
        correct: false
      },
      {
        text: "Doux",
        correct: false
      }
    ]
  },
  {
    question: "Quelle phrase est au conditionnel présent ?",
    answers: [
      {
        text: "J'aimerais partir en voyage",
        correct: true
      },
      {
        text: "J'aime partir en voyage",
        correct: false
      },
      {
        text: "J'aimerai partir en voyage",
        correct: false
      },
      {
        text: "J'aimais partir en voyage",
        correct: false
      }
    ]
  }
];

questions = shuffleArray(questions);


// get from html
let hideCounter = document.getElementById('header-timer');
let count = document.getElementById('time-left');
let firstPage = document.querySelector('.last_game');
let playerScore = document.getElementById('header_score');
let Container = document.querySelector('.container');
let startGame = document.getElementById('start_game');
const questionElement = document.getElementById('question');
const answerBtn  = document.getElementById('answer-buttons')
const nextBtn = document.getElementById('next');
let scoreHistory = [];
let gradeHistory = [];
let currentQuestionIndex = 0;
let buttonState;
let score = 0;
let counter;
let timeSet;
Container.classList.add("addRemove");
startGame.addEventListener('click', ()=>{
    Container.classList.remove("addRemove");
    startGame.classList.add("addRemove");
    firstPage.classList.add("addRemove");
    playerScore.innerHTML = `score : ${score}/${questions.length}`;  
    countY();
})
function shuffleArray(array){
  for (let i = array.length - 1; i > 0; i--){
    const random = Math.floor( Math.random() * (i+1));
    [array[i], array[random]] = [array[random], array[i]];
  }
  return array;
}
// quiz page 
function startQuiz(){
  currentQuestionIndex = 0;
  score = 0;
  nextBtn.innerHTML = "Suivant";
  showQuestion();
  clearInterval(timeSet);
  countY();
}
//   counter function
function countY() {
clearInterval(timeSet);
buttonState = false;
counter = 10;
timeSet = setInterval(() => {
    count.textContent = `temps restant : ${counter} sec.`;
    counter--;
    if (counter < 0) {
        clearInterval(timeSet);
        showCorrectAnswer();
        nextBtn.style.display = "block";
    }
    if (buttonState) {
        clearInterval(timeSet);
    }
}, 1000);
}

function showCorrectAnswer() {
Array.from(answerBtn.children).forEach(button => {
    if (button.dataset.correct === "true") {
        button.classList.add("correctStyle");
    } else {
        button.classList.add("wrongStyle");
    }
    button.disabled = true;
});
}
// show question in the form
function showQuestion(){
  removeQuestion()
  const currentQuestion = questions[currentQuestionIndex];
  const currentQuestionNumber = currentQuestionIndex + 1;
  questionElement.innerHTML = currentQuestionNumber +". "+currentQuestion.question;
  currentQuestion.answers.forEach((element) =>{
    const button = document.createElement("button");
    button.innerHTML = element.text;
    button.classList.add("btn");
    button.dataset.correct = element.correct;
    answerBtn.appendChild(button);
    button.addEventListener('click', selectedAnswer);
  })

}
// remove 
function removeQuestion(){
  nextBtn.style.display = "none";
  while(answerBtn.firstChild){
    answerBtn.removeChild(answerBtn.firstChild);
  }
}
// 
function selectedAnswer(e){
  const selectedBtn = e.target;
  const answerState = selectedBtn.dataset.correct === "true";
  if (answerState){
    selectedBtn.classList.add("correctStyle");
    score++;
    playerScore.innerHTML = `score : ${score}/${questions.length}`;
    clearInterval(timeSet);
  }else{
    selectedBtn.classList.add("wrongStyle");
    clearInterval(timeSet);
  }
  Array.from(answerBtn.children).forEach(button =>{
    if(button.dataset.correct === "true"){
      button.classList.add("correctStyle");
    }
    button.disabled = true;
  })
  nextBtn.style.display = "block"; 
}
nextBtn.addEventListener("click", ()=>{ 
   
  if(currentQuestionIndex < questions.length){
    nextQuestion();
  }else{
    score = 0;
    playerScore.innerHTML = `score : ${score}/${questions.length}`;
    hideCounter.classList.remove("addRemove");
    startQuiz();
  }
})
function nextQuestion(){
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length){
    countY();
    showQuestion();
  }else{
    showScore();
  }
}
function showScore(){
 
  removeQuestion();
  hideCounter.classList.add("addRemove");
  nextBtn.innerHTML = "Reffaire le test";
  nextBtn.style.display ="block";
  playerScore.innerHTML = `score : ${score}/${questions.length}`;
  
  scoreGrad();
}
let grade;
function scoreGrad(){
  
  if (score <= 2){
    grade = "A1"
  }else if(score > 2 && score <= 6){
    grade = "B1"
  }else if(score > 6 && score <= 8){
    grade = "B2"
  }else if(score == 9){
    grade = "C1"
  }
  else if(score == 10){
    grade = "C2"
  }
  questionElement.innerHTML = `votre moyenne ${score}/${questions.length} et votre niveau est :  ${grade}`;
  localStorage.setItem("lastScore", score);
  localStorage.setItem("lastGrade", grade);
  scoreHistory.push(score);
  gradeHistory.push(grade);
  localStorage.setItem("score history", JSON.stringify(scoreHistory));
  localStorage.setItem("grade history", JSON.stringify(gradeHistory));
}
// history
 
let firstPageScore = document.getElementById('last-score');
let firstPageGrade  = document.getElementById('last-grade');
let scoreInLocal = localStorage.getItem("lastScore");
let gradeInLocal = localStorage.getItem("lastGrade");
if (scoreInLocal === null){
  firstPageScore.innerHTML = `last score : 0 `;
}else{
  firstPageScore.innerHTML = `dernier moyenne: ${localStorage.getItem("lastScore")}/${questions.length}.`;
}
if (gradeInLocal === null){
  firstPageGrade.innerHTML = `Pas Encore evalue`
}else{
  firstPageGrade.innerHTML = `dernier niveau: ${localStorage.getItem("lastGrade")}.`;
}
startQuiz();



