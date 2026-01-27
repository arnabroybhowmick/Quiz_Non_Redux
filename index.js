document.addEventListener("DOMContentLoaded",()=>{
const quizContainer=document.getElementsByClassName("quiz-container");
const questionContainer=document.getElementById("question-container");
const questionText=document.getElementById("question-text");
const choicesList=document.getElementById("choices-list");
const nextBtn=document.getElementById("next-btn");
const resultContainer=document.getElementById("result-container");
const scor=document.getElementById("score");
const restartBtn=document.getElementById("restart-btn");
const startBtn=document.getElementById("start-btn");
const scoreValue=document.getElementById("score_value");


let currentQuestionindex=0;
let score=0;


const questions = [
    {
      question: "What is the capital of France?",
      choices: ["Paris", "London", "Berlin", "Madrid"],
      answer: "Paris",
    },
    {
      question: "Which planet is known as the Red Planet?",
      choices: ["Mars", "Venus", "Jupiter", "Saturn"],
      answer: "Mars",
    },
    {
      question: "Who wrote 'Hamlet'?",
      choices: [
        "Charles Dickens",
        "Jane Austen",
        "William Shakespeare",
        "Mark Twain",
      ],
      answer: "William Shakespeare",
    },
  ];



startBtn.addEventListener("click",startquiz);
 function startquiz(){
startBtn.classList.add("hidden");
resultContainer.classList.add("hidden");

 console.log(questionContainer);
 questionContainer.classList.remove("hidden");
showQuestion();
}
function showQuestion(){
    nextBtn.classList.add("hidden");
    questionText.textContent=questions[currentQuestionindex].question;
    choicesList.innerHTML="";
    questions[currentQuestionindex].choices.forEach((choice)=>{
         const li = document.createElement("li");
      li.textContent = choice;
      li.addEventListener("click", () => selectAnswer(choice));
      choicesList.appendChild(li);
    });

}
function selectAnswer(choice){
    if(choice===questions[currentQuestionindex].answer){
        score++;
    }
    nextBtn.classList.remove("hidden");
}
restartBtn.addEventListener("click",()=>{
    currentQuestionindex=0;
    score=0;
    resultContainer.classList.add("hidden");
    startquiz();
})
nextBtn.addEventListener("click",()=>{
    currentQuestionindex++;
    if(currentQuestionindex<questions.length){
showQuestion();
    }
    else{
       showResult(); 
    }
});
function showResult(){
resultContainer.classList.remove("hidden");
questionContainer.classList.add("hidden");
nextBtn.classList.add("hidden");
scoreValue.textContent=`Your Score value is:${score} out of ${questions.length}}`;
}
});



 
 