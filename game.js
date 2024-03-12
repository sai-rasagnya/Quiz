const question=document.getElementById("questions");
const choices=Array.from(document.getElementsByClassName("choice-text"));
console.log("Coming choices", choices,document.getElementsByClassName("choice-text"));
let currentQuestion={};
let acceptingAnswers= true;
let score=0;
let questionCounter=0;
let availableQuestions=[];
 let questions=[
    {
        question:"What are special structures in seahorses' skin cells that allow them to change color are called?",
        choice1:"Tentacles",
        choice2:"Chromotophores",
        choice3: "Oscillis",
        choice4: "Oscinnos",
        answer:2
    },
{
   question:"What do Starfish primarily eat?",
   choice1:"Moss",
   choice2:"Mollusks",
   choice3:"Sand worms",
   choice4:"Tuna",
   answer:2
},
{
question:"How many eggs do green sea turtles lay at a time?",
   choice1:"50-100",
   choice2:"150-300",
   choice3:"100-200",
   choice4:"400-500",
   answer:3
},
{
   question:"What is a group of wolves called?",
   choice1:"Pack",
   choice2:"Herd",
   choice3:"School",
   choice4:"Colony",
   answer:1

},
{
   question:"What is a baby hippo called?",
   choice1:"Hiplet",
   choice2:"Piglet",
   choice3:"Hippie",
   choice4:"Calf",
   answer:4
},
{
   question:"What is a baby seahorse called?",
   choice1:"Pup",
   choice2:"Fry",
   choice3:"Seacalf",
   choice4:"Cub",
   answer:2
},
{
 question:"What do red pandas mostly eat?",
 choice1:"Bamboo",
 choice2:"Moss",
 choice3:"Grass",
 choice4:"Fish",
 answer:1
},
{
   question:"What is a bald eagle's nest called?",
   choice1:"An eyerie",
   choice2:"An igloo",
   choice3:"A scrape nest",
   choice4:"An earth hole",
   answer:1
},
{
   question:"Which bird is the symbol of peace?",
   choice1:"Dove",
   choice2:"Parrot",
   choice3:"Eagle",
   choice4:"Crow",
   answer:1
},
{
   question:"What is the group of crows called?",
   choice1:"A murder",
   choice2:"A colony",
   choice3:"A convoy",
   choice4:"A band",
   answer:1
},
]; 
const CORRECT_BONUS=10;

const MAX_QUESTIONS=5;
startGame=() => {
   questionCounter=0;
score=0;
availableQuestions=[...questions];
console.log(availableQuestions);
getNewQuestion();
};
getNewQuestion=()=>{
   if (questionCounter >= MAX_QUESTIONS) {
      // End the game or show a results screen
      return;
  }
  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];
  question.innerText = currentQuestion.question;
  choices.forEach(choice => {
      const choiceNumber = choice.dataset['number'];
      choice.innerText = currentQuestion['choice' + choiceNumber];
  });
  availableQuestions.splice(questionIndex, 1);

};
startGame();

