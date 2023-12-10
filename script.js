// Christmas Questions!
const questions = [
        {
          question: "Film about a train's magical journey?",
          options: ["Elf", "The Polar Express", "Home Alone", "A Christmas Carol"],
          correctAnswer: "The Polar Express"
        },
        {
          question: "What movie tells the story of Buddy?",
          options: ["A Christmas Carol", "The Polar Express", "Elf", "Home Alone"],
          correctAnswer: "Elf"
        },
        {
          question: "Film about a boy's Red Ryder wish?",
          options: ["Elf", "A Christmas Carol", "The Grinch", "A Christmas Story"],
          correctAnswer: "A Christmas Story"
        },
        {
          question: "What animated film is set in Whoville?",
          options: ["Elf", "The Polar Express", "Home Alone", "How the Grinch Stole Christmas"],
          correctAnswer: "How the Grinch Stole Christmas"
        },
        {
          question: "Who released the song 'I Wish It Could Be Christmas Everyday'?",
          options: ["Slade", "Wizzard", "The Pogues", "East 17"],
          correctAnswer: "Wizzard"
        },
        {
          question: "Which film features a triple-dog dare?",
          options: ["The Santa Clause", "Elf", "A Christmas Story", "The Grinch"],
          correctAnswer: "A Christmas Story"
        },
        {
          question: "Film with Tim Allen?",
          options: ["Elf", "The Santa Clause", "A Christmas Carol", "Home Alone"],
          correctAnswer: "The Santa Clause"
        },
        {
          question: "In 'Do They Know It's Christmas?', who sings the opening line?",
          options: ["Paul McCartney", "Bono", "Elton John", "Bob Geldof"],
          correctAnswer: "Bono"
        },
        {
          question: "Which film tells the story of Scrooge?",
          options: ["A Christmas Carol", "Home Alone", "The Grinch", "Miracle on 34th Street"],
          correctAnswer: "A Christmas Carol"
        },
        {
          question: "Who performed 'Step Into Christmas'?",
          options: ["Elton John", "Cliff Richard", "Paul McCartney", "George Michael"],
          correctAnswer: "Elton John"
        },
        {
          question: "What film is about a magical snowman?",
          options: ["Frosty the Snowman", "Elf", "Miracle on 34th Street", "A Christmas Carol"],
          correctAnswer: "Frosty the Snowman"
        },
        {
          question: "Film where Kevin defends his home from burglars?",
          options: ["Home Alone", "A Christmas Carol", "The Grinch", "Rudolph the Red-Nosed Reindeer"],
          correctAnswer: "Home Alone"
        },
        {
          question: "Classic film featuring George Bailey's life story?",
          options: ["It's a Wonderful Life", "A Christmas Carol", "Miracle on 34th Street", "Home Alone"],
          correctAnswer: "It's a Wonderful Life"
        },
        {
          question: "Who sings 'Last Christmas'?",
    options: ["Wham!", "Madonna", "George Michael", "Elton John"],
    correctAnswer: "Wham!"
        },
        {
          question: "Which tradition involves counting the days?",
          options: ["Advent Calendar", "Yule Log Ceremony", "Caroling", "Mistletoe Hanging"],
          correctAnswer: "Advent Calendar"
        },
        {
          question: "What is the act of singing Christmas songs?",
          options: ["Carving", "Caroling", "Chiming", "Serenading"],
          correctAnswer: "Caroling"
        },
        {
          question: "Which artist wants 'You' for Christmas?",
          options: ["Mariah Carey", "Whitney Houston", "Celine Dion", "Adele"],
          correctAnswer: "Mariah Carey"
        },
        {
          question: "What's commonly used as a Snowman's nose?",
          options: ["Cucumber", "Sausage", "Carrot", "Twig"],
          correctAnswer: "Carrot"
        },
        {
          question: "What is used to decorate the front door?",
          options: ["Wreath", "Bow", "Lights", "Garland"],
          correctAnswer: "Wreath"
        },
        {
          question: "What drink is associated with holiday cheer?",
          options: ["Eggnog", "Hot Cocoa", "Mulled Wine", "Cider"],
          correctAnswer: "Eggnog"
        },
        {
          question: "What tradition involves hanging mistletoe?",
          options: ["Gift Exchange", "Kissing", "Caroling", "Tree Decorating"],
          correctAnswer: "Kissing"
      },
      {
        question: "What is the purpose of a Yule Log?",
        options: ["Decoration", "Gift", "Light", "Sing"],
        correctAnswer: "Light"
      },
      {
        question: "Who famously sang 'White Christmas'?",
    options: ["Bing Crosby", "Frank Sinatra", "Elvis Presley", "Michael Bublé"],
    correctAnswer: "Bing Crosby"
      },
      {
        question: "Which holiday movie is based on a Dr. Seuss story?", 
        options: ["Elf", "The Polar Express", "The Grinch", "A Christmas Carol"],
        correctAnswer: "The Grinch"
      },
      {
        question: "What symbol represents peace during the holiday season?",
        options: ["Dove", "Snowflake", "Bell", "Candle"],
        correctAnswer: "Dove"
      },
      {
        question: "What's hidden in the Christmas pudding?",
    options: ["Coins", "Candy", "Toys", "Notes"],
    correctAnswer: "Coins"
      },
      {
        question: "What festive meal is eaten on Christmas Day?",
        options: ["Turkey", "Ham", "Roast Beef", "Lamb"],
        correctAnswer: "Turkey"
      },
      {
        question: "Which reindeer has a red nose?",
    options: ["Dasher", "Rudolph", "Blitzen", "Cupid"],
    correctAnswer: "Rudolph"
      },
      {
        question: "What is commonly left out for Santa?",
        options: ["Milk", "Hot Chocolate", "Eggnog", "Apple Cider"],
        correctAnswer: "Milk"
      },
      {
        question: "What is placed under the Christmas tree?",
        options: ["Ornaments", "Presents", "Lights", "Candy Canes"],
        correctAnswer: "Presents"
      },
      {
        question: "Which tradition involves hanging by the fireplace?",
        options: ["Stockings", "Gloves", "Scarves", "Hats"],
        correctAnswer: "Stockings"
      },
      {
        question: "What's Santa checking twice?",
        options: ["Gifts", "List", "Cookies", "Reindeer"],
        correctAnswer: "List"
      },
      {
        question: "How many reindeer does Santa Claus have?",
        options: ["7", "8", "9", "10"],
        correctAnswer: "8"
      }
];

// Shuffle function, Fisher-Yates shuffle algorithm
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
    if (array[i].options) {
      // Shuffle answer options if present
      shuffleArray(array[i].options);
    }
  }
};

shuffleArray(questions);

const quizContainer = document.getElementById('quiz-container');
const questionBox = document.getElementById('question-box');
const answerButtons = document.getElementsByClassName('answer-box');
const plusThree = document.getElementById('green-plus');
const minusFive = document.getElementById('red-minus');
const finalScore = document.getElementById('final-score');
const finalTime = document.getElementById('final-time');
const secs = document.getElementById('secs');
const endMessage = document.getElementById('end-message');
const endMessage1 = document.getElementById('end-message1');

let currentQuestionIndex = 0;
let count = 0;

// Load current question and options
const loadQuestion = () => {
  const currentQuestion = questions[currentQuestionIndex];

  // Display question
  questionBox.textContent = currentQuestion.question;

  // Remove existing event listeners on answer buttons
  Array.from(answerButtons).forEach((button) => {
    button.removeEventListener('click', checkAnswer);
  });

  // Display answer options
  Array.from(answerButtons).forEach((button, i) => {
    button.textContent = currentQuestion.options[i];
    // Add event listener
    button.addEventListener('click', checkAnswer);
  });
};

// Check selected answer
const checkAnswer = (event) => {
  const selectedAnswer = event.target.textContent;
  const correctAnswer = questions[currentQuestionIndex].correctAnswer;

  // Check selected answer is correct
  if (selectedAnswer === correctAnswer) {
    count++;
    timerDuration += 3;
    plusThree.style.display = 'block';
    setTimeout(() => {
      plusThree.style.display = 'none';
    }, 500);

  } else {
    timerDuration -= 6;
    minusFive.style.display = 'block';
    setTimeout(() => {
      minusFive.style.display = 'none';
    }, 500);
  };

  // Move to next question
  currentQuestionIndex++;

  // Check if there are more questions
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    // Congratulations end quiz
    clearInterval(timer); // Stop the timer
    endContainer.style.display = "block";
    quizContainer.style.display = "none";
    secs.style.display = "block";
    finalScore.textContent = count;
    finalTime.textContent = timerDuration; 
    endMessage.innerText = "Congratulations!";
    endMessage1.innerText = "You've Completed all 33 questions!";
  }
};

const timerElement = document.getElementById('timer');
let timer;
let timerDuration = 22; // Initial timer duration in seconds

// Update and display timer
function updateTimer() {
  const minutes = Math.floor(timerDuration / 60);
  const seconds = timerDuration % 60;
  timerElement.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  updateTimerColor()
};

// Start timer
function startTimer() {
  timer = setInterval(function () {
    if (timerDuration > 0) {
      timerDuration--;
      updateTimer();
    } else {
      // Time is up, end the quiz
      clearInterval(timer); // Stop the timer
      endContainer.style.display = "block";
      quizContainer.style.display = "none"; 
      // Display final score and time
    finalScore.textContent = count;
    finalTime.textContent = timerDuration;
    endMessage.innerText = "Out of Time!"
    endMessage1.innerText = "";
    secs.style.display = "none";
    }
  }, 1000);
  count = 0;
};

// 3, 2, 1 timer red function
function updateTimerColor() {
  if (timerDuration <= 5 && timerDuration >= 0) {
    timerElement.classList.add("text-red-500", "brightness-125");
  } else {
    timerElement.classList.remove("text-red-500", "brightness-125");
  }
};

// Reset timer
function resetTimer() {
  clearInterval(timer);
  timerDuration = 22; // Reset the timer duration
  updateTimer();
};

// Reset quiz and timer
function resetQuiz() {
  currentQuestionIndex = 0;
  count = 0;
  shuffleArray(questions);
  loadQuestion();
  resetTimer(); // Reset the timer when resetting the quiz
};

// AUDIO
const audio = document.querySelector('audio');
const audioOn = document.getElementById('audioOn');
const audioOff = document.getElementById('audioOff');

// Turn audio off
audioOn.addEventListener('click', () => {
  audioOn.style.display = "none";
  audioOff.style.display = "block";
  audio.pause();
});

// Turn audio on
audioOff.addEventListener('click', () => {
  audioOn.style.display = "block";
  audioOff.style.display = "none";
  audio.play();
});

// Instructions

// Welcome

const welcomeContainer = document.getElementById('welcome-container');
const welcomeNext = document.getElementById('welcome-next');

welcomeNext.addEventListener('click', () => {
  audioOn.style.display = "block";
  audioOff.style.display = "none";
   welcomeContainer.style.display = "none";
   instruction1Container.style.display = "block";
});

// Instruction 1
const instruction1Container = document.getElementById('instruction1-container');
const instruction1Next = document.getElementById('instruction1-next');
const instruction1Previous = document.getElementById('instruction1-previous');

instruction1Next.addEventListener('click', () => {
   instruction1Container.style.display = "none";
   instruction2Container.style.display = "block";
});

instruction1Previous.addEventListener('click', () => {
  instruction1Container.style.display = "none";
  welcomeContainer.style.display = "block";
});

// Instruction 2

const instruction2Container = document.getElementById('instruction2-container');
const instruction2Next = document.getElementById('instruction2-next');
const instruction2Previous = document.getElementById('instruction2-previous');

instruction2Next.addEventListener('click', () => {
   instruction2Container.style.display = "none";
   startContainer.style.display = "block";
});

instruction2Previous.addEventListener('click', () => {
  instruction2Container.style.display = "none";
  instruction1Container.style.display = "block";
});

// Start container

const startContainer = document.getElementById('start-container');
const startNext = document.getElementById('start-next');
const startPrevious = document.getElementById('start-previous');

startNext.addEventListener('click', () => {
   startContainer.style.display = "none";
   quizContainer.style.display = "block";
loadQuestion(); // Initial load of the first question and start timer
updateTimer(); // Display initial timer value
startTimer(); // Start the timer
});

startPrevious.addEventListener('click', () => {
  startContainer.style.display = "none";
  instruction2Container.style.display = "block";
});

// End Quiz

const endContainer = document.getElementById('end-container');
const endNext = document.getElementById('end-next');

endNext.addEventListener('click', () => {
   startContainer.style.display = "block";
   endContainer.style.display = "none";
resetQuiz();
});
