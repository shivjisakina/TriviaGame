// Pseudo code -(TEST ALL THE TIME)

//Document ready
//Name variables (answered, unanswered, correct, wrong)
//On click Start button function
//Hide button
//Time function
//Push everything into HTML
//Create radio buttons so the user is limited to one option
//Take information from button clicks to see how many are correct/incorrect/unanswered
//Create the endgame screen


// Document ready function
$(document).ready(function() {

    console.log( "ready!" );

//-----------Variables--------------------------------------------------------------------------------------------------

    var place = answered + unanswered;
    var correct = 0;
    var wrong = 0;
    var unanswered = 0;
    var answered = 0;
    var timer = 0;
    var startGame = 0;

//----------All of the Question & Answer variables/objects--------------------------------------------------------------


    var q1 = {
        question: "Did Ross deserve Rachel",
        answer1: ["No", 1],
        answer2: ["Not at all", 1],
        answer3: ["Yeah....lmao no", 1],
        answer4: ["In what world?", 1]
    };
        console.log(q1);
        console.log(q1.question);
        console.log(q1.answer1[0]);
        console.log(q1.answer2[0]);
        console.log(q1.answer3[0]);
        console.log(q1.answer4[0]);

    var q2 = {
        question: "In 1995, the theme song reached number 1 in the Billboard Hot 100 Airplay chart for how long?.",
        answer1: ["2 weeks", 0],
        answer2: ["4 weeks", 0],
        answer3: ["8 weeks", 1],
        answer4: ["5 weeks", 0]
        };
        //I console logged everything to make sure I was calling them out properly
        console.log(q2);
        console.log(q2.question);
        console.log(q2.answer1[0]);
        console.log(q2.answer2[0]);
        console.log(q2.answer3[0]);
        console.log(q2.answer4[0]);

    var q3 = {
        question: "What was Phoebe's twin sisters name?",
        answer1: ["Phobo", 0],
        answer2: ["Ursula", 1],
        answer3: ["Erika", 0],
        answer4: ["Ursa", 0]
        };
        console.log(q3);
        console.log(q3.question);
        console.log(q3.answer1[0]);
        console.log(q3.answer2[0]);
        console.log(q3.answer3[0]);
        console.log(q3.answer4[0]);

    var q4 = {
        question: "What question did Monica and Rachel miss, which ended up in them losing their apartment?",
        answer1: ["According to Chandler, what phenomenon scares the bejesus out of him?", 0],
        answer2: ["Every week the TV Guide comes to Chandler and Joey's apartment. What name appears on the address label?", 0],
        answer3: ["What is the name of Chandler's father's Las Vegas all-male burlesque?", 0],
        answer4: ["What is Chandler Bing's job?", 1]
        };
        console.log(q4);
        console.log(q4.question);
        console.log(q4.answer1[0]);
        console.log(q4.answer2[0]);
        console.log(q4.answer3[0]);
        console.log(q4.answer4[0]);

    var q5 = {
        question: "Who played Monica's character?",
        answer1: ["Jennifer Aniston", 0],
        answer2: ["Lisa Kudrow", 0],
        answer3: ["Matthew Perry", 0],
        answer4: ["Courtney Cox", 1]
        };
        console.log(q5);
        console.log(q5.question);
        console.log(q5.answer1[0]);
        console.log(q5.answer2[0]);
        console.log(q5.answer3[0]);
        console.log(q5.answer4[0]);

    var q6 = {
        question: "What tv show was Phoebes doctor watching during her delivery?",
        answer1: ["Laverne & Shirley", 0],
        answer2: ["The Brady Bunch", 0],
        answer3: ["Happy Days", 1],
        answer4: ["That '70s Show", 0]
        };
        console.log(q6);
        console.log(q6.question);
        console.log(q6.answer1[0]);
        console.log(q6.answer2[0]);
        console.log(q6.answer3[0]);
        console.log(q6.answer4[0]);

    var q7 = {
        question: "Joey found his twin in Las Vegas, but what kind of twin was it?",
        answer1: ["Hand Twin", 1],
        answer2: ["Foot Twin", 0],
        answer3: ["Voice Twin", 0],
        answer4: ["Hair Twin"]
        };
        console.log(q7);
        console.log(q7.question);
        console.log(q7.answer1[0]);
        console.log(q7.answer2[0]);
        console.log(q7.answer3[0]);
        console.log(q7.answer4[0]);


//----------Everything to do with the Timer-----------------------------------------------------------------------------

    // Hide Timer
    $("#timer").hide();


    // Countdown timer variable
    var clock;


     // Added the countdown library and set the seconds to 140 (took this from http://flipclockjs.com/)
     clock = new FlipClock($('.clock'), 140, {
         clockFace: 'Counter',
         autoStart: true,
         countdown: true

     });


    // Hide and Show the start button and timer
    $(".startbtn").on("click", function(startbtn){
        $("#timer").show();
        $(".startbtn").hide();
        $('#htmlquestions').removeClass('htmlquestions');
    });

    // Start clock AFTER start button is pushed
    clock.start(function() {
        startbtn();
    });

//----------Transfer Content to HTML------------------------------------------------------------------------------------

    // var output = [];


    // This is a M E S S
    /*$(".q1").html("<h1> Question 1" + q1.question + q1.answer1[0] + q1.answer2[0] + q1.answer3[0] + q1.answer4[0] + "</h1>");
    $(".q2").html("<h1> Question 1" + q2.question + q2.answer1[0] + q2.answer2[0] + q2.answer3[0] + q2.answer4[0] + "</h1>");
    $(".q3").html("<h1> Question 2" + q3.question + q3.answer1[0] + q3.answer2[0] + q3.answer3[0] + q3.answer4[0] + "</h1>");
    $(".q4").html("<h1> Question 3" + q4.question + q4.answer1[0] + q4.answer2[0] + q4.answer3[0] + q4.answer4[0] + "</h1>");
    $(".q5").html("<h1> Question 4" + q5.question + q5.answer1[0] + q5.answer2[0] + q5.answer3[0] + q5.answer4[0] + "</h1>");
    $(".q6").html("<h1> Question 5" + q6.question + q6.answer1[0] + q6.answer2[0] + q6.answer3[0] + q6.answer4[0] + "</h1>");
    $(".q7").html("<h1> Question 6" + q7.question + q7.answer1[0] + q7.answer2[0] + q7.answer3[0] + q7.answer4[0] + "</h1>");*/


    // Trying and failing at using for loops
    /*for(var i = 0; i < q1.length; i++){
     printThis += "<br>" + q1[0][0] + "<br>" + "<br>" +
     ('<label><input type="radio" name="choices" value="' + choices[i] + '" /> ' + choices[i] + '</label>') + "<br>";

     }*/


    //Inspiration source: (https://simplestepscode.com/javascript-quiz-tutorial/#step2)

    /*var questions = [
     {
     question: "What tv show was Phoebes doctor watching during her delivery?",
     answers: {
     a: "Laverne & Shirley",
     b: "The Brady Bunch",
     c: "Happy Days",
     d: "That '70s Show" }
     },
     correctAnswer: 'c'
     },
     {
     question: "Joey found his twin in Las Vegas, but what kind of twin was it?",
     answers: {
     a: "Hand Twin",
     b: "Foot Twin",
     c: "Voice Twin",
     d: "Hair Twin"
     },
     correctAnswer: 'a'
     },

     ];

     for(var i=0; i<questions.length; i++){

     answers = [];

     for(letter in questions[i].answers){
     answers.push(
     '<label>'
     + '<input type="radio" name="question'+i+'" value="'+letter+'">'
     + letter + ': '
     + questions[i].answers[letter]
     + '</label>'
     );
     }
     output.push(
     '<div class="question">' + questions[i].question + '</div>'
     + '<div class="answers">' + answers.join('') + '</div>'
     );
     }

     quizContainer.innerHTML = output.join('');
     }*/


//----------------------------------------------------------------------------------------------------------------------

    // tried looking at documentation on the clock but I couldnt find anything that showed what happens when the value = 0
    if (timer === 0) {
        alert("Game over!!")
    }

    // reset function not working

    /*$(".reset").click(function(){
        location.reload();*/



});






