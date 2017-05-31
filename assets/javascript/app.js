// Pseudo code -TEST ALL THE TIME

//Document ready
//Name variables (answered, unanswered, correct, wrong)
//on click Start button function
// hide button
// Objects with questions and answers
// time function
// start onclick if answered and unanswered === 0

$( document ).ready(function() {
    console.log( "ready!" );

    var place = answered + unanswered;
    var correct = 0;
    var wrong = 0;
    var unanswered = 0;
    var answered = 0;
    var timer = 0;

    var q1 = {
        question: "Did Ross deserve Rachel",
        answer1: ["No", 1],
        answer2: ["Not at all", 1],
        answer3: ["Yeah....lmao no", 1],
        answer4: ["In what world?", 1]
    };
    console.log(q1);

    var q2 = {
        question: "In 1995, the theme song reached number 1 in the Billboard Hot 100 Airplay chart for how long?.",
        answer1: ["2 weeks", 0],
        answer2: ["4 weeks", 0],
        answer3: ["8 weeks", 1],
        answer4: ["5 weeks", 0]
        };
        console.log(q2);

    var q3 = {
        question: "What was Phoebe's twin sisters name?",
        answer1: ["Phobo", 0],
        answer2: ["Ursula", 1],
        answer3: ["Erika", 0],
        answer4: ["Ursa", 0]
        };
        console.log(q3);

    var q4 = {
        question: "What question did Monica and Rachel miss, which ended up in them losing their apartment?",
        answer1: ["According to Chandler, what phenomenon scares the bejesus out of him?", 0],
        answer2: ["Every week the TV Guide comes to Chandler and Joey's apartment. What name appears on the address label?", 0],
        answer3: ["What is the name of Chandler's father's Las Vegas all-male burlesque?", 0],
        answer4: ["What is Chandler Bing's job?", 1]
        };
        console.log(q4);

    var q5 = {
        question: "Who played Monica's character?",
        answer1: ["Jennifer Aniston", 0],
        answer2: ["Lisa Kudrow", 0],
        answer3: ["Matthew Perry", 0],
        answer4: ["Courtney Cox", 1]
        };
        console.log(q5);

    var q6 = {
        question: "What tv show was Phoebes doctor watching during her delivery?",
        answer1: ["Laverne & Shirley", 0],
        answer2: ["The Brady Bunch", 0],
        answer3: ["Happy Days", 1],
        answer4: ["That '70s Show", 0]
        };
        console.log(q6);

    var q7 = {
        question: "Joey found his twin in Las Vegas, but what kind of twin was it?",
        answer1: ["Hand Twin", 0],
        answer2: ["Foot Twin", 0],
        answer3: ["Voice Twin", 0],
        answer4: ["Hair Twin"]
        };
        console.log(q7);

    // timer

    var clock;


     // Instantiate a counter
     clock = new FlipClock($('.clock'), 12, {
     clockFace: 'Counter',
     autoStart: true,
     countdown: true
     });

});
