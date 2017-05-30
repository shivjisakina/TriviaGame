// Pseudo code -TEST ALL THE TIME

//Document ready
//Name variables (answered, unanswered, correct, wrong)
//on click Start button function
// hide button
// Objects with questions and answers
// time function
// start onclick if answered and unanswered === 0

var place = answered + unanswered;
var correct = 0;
var wrong = 0;
var unanswered = 0;
var answered = 0;

var q1 = {
    question: "Did Ross deserve Rachel",
    correct: "No",
    incorrect: "Not at all",
    incorrect1: "Yeah....lmao no",
    incorrect2: "In what world?"
};
console.log(q1);

var q2 = {
    question: "In 1995, the theme song reached number 1 in the Billboard Hot 100 Airplay chart for how long?.",
incorrect1: "2 weeks",
incorrect: "4 weeks",
correct: "8 weeks",
incorrect2: "5 weeks"
};
console.log(q2);

var q3 = {
    question: "What was Phoebe's twin sisters name?",
incorrect: "Phobo",
correct: "Ursula",
incorrect1: "Erika",
incorrect2: "Ursa"
};
console.log(q3);

var q4 = {
    question: "What question did Monica and Rachel miss, which ended up in them losing their apartment?",
incorrect2: "According to Chandler, what phenomenon scares the bejesus out of him?",
incorrect: "Every week the TV Guide comes to Chandler and Joey's apartment. What name appears on the address label?",
incorrect1: "What is the name of Chandler's father's Las Vegas all-male burlesque?",
correct: "What is Chandler Bing's job?"
};
console.log(q4);

var q5 = {
    question: "Who played Monicas character?",
incorrect2: "Jennifer Aniston",
incorrect: "Lisa Kudrow",
incorrect1: "Matthew Perry",
correct: "Courtney Cox"
};
console.log(q5);

var q6 = {
    question: "What tv show was Phoebes doctor watching during her delivery?",
incorrect1: "Laverne & Shirley",
incorrect: "The Brady Bunch",
correct: "Happy Days",
incorrect2: "That '70s Show"
};
console.log(q6);

var q7 = {
    question: "Joey found his twin in Las Vegas, but what kind of twin was it?",
correct: "Hand Twin",
incorrect: "Foot Twin",
incorrect1: "Voice Twin",
incorrect2: "Hair Twin"
};
console.log(q7);

$( document ).ready(function() {
    console.log( "ready!" );
});

