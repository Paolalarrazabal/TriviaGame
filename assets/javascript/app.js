
$(document).ready(function() {

let number = 45;
let countdown;


let trivia = {
right: 0, 
wrong: 0, 



questions: {
    question1: "What is the name of the hotel in the movie The Shining?",
    question2: "Who has murdered the most people in a slasher film?",
    question3: "Which actor played Pennywise in the 1990 miniseries?",
    question4: "Which horror movie was the first to be nominated for an oscar?"
}
,
choices: {
    question1: ["The Stanley Hotel", "Timberline Lodge", "Ahwahnee Hotel", "Overlook Hotel"],
    question2: ["Jason Voorhees", "Freddy Krueger", "Freddy Krueger", "Leatherface"],
    question3: ["Alice Cooper","Roddy McDowall", "Malcolm McDowell","Tim Curry"],
    question4: ["The Omen", "The Exorcist", "The Shining", "Texas Chain Saw Massacre"],
}
,
rightAnswers: {
    question1: "Overlook Hotel",
    question2: "Jason Voorhees",
    question3: "Tim Curry",
    question4: "The Exorcist",
}
}



$(".question1").on('click', function(){
    if (this.id === "rightAnswer") {
        console.log("right answer pressed");
        $(".question1").prop('disabled', true);
        trivia.right++;
        console.log(trivia.right);
        
    }
    else if (this.id === "wrongAnswer") {
        console.log("wrong answer pressed")
        $(".question1").prop('disabled', true);
        trivia.wrong++;
        console.log(trivia.wrong);
    }

});



$(".question2").on('click', function(){
    if (this.id === "rightAnswer") {
        console.log("right answer pressed")
        $(".question2").prop('disabled', true);
        trivia.right++;
        console.log(trivia.right);
    }
    else if (this.id === "wrongAnswer") {
        console.log("wrong answer pressed")
        $(".question2").prop('disabled', true);
        trivia.wrong++;
        console.log(trivia.wrong);
    }

});

$(".question3").on('click', function(){
    if (this.id === "rightAnswer") {
        console.log("right answer pressed")
        $(".question3").prop('disabled', true);
        trivia.right++;
        console.log(trivia.right);
    }
    else if (this.id === "wrongAnswer") {
        console.log("wrong answer pressed")
        $(".question3").prop('disabled', true);
        trivia.wrong++;
        console.log(trivia.wrong);
    }

});

$(".question4").on('click', function(){
    if (this.id === "rightAnswer") {
        console.log("right answer pressed")
        $(".question4").prop('disabled', true);
        trivia.right++;
        console.log(trivia.right);
    }
    else if (this.id === "wrongAnswer") {
        console.log("wrong answer pressed")
        $(".question4").prop('disabled', true);
        trivia.wrong++;
        console.log(trivia.wrong);
    }

});


$('#showQuestions').on('click',function(){
    document.getElementById('start-button').style.display = "none"; 
    document.getElementById('trivia-page').style.display = "block";
    countdown = setInterval(decrement, 1000);

});

function decrement() { 
    number--;
    $('#show-number').html("<p>" + number + "<p>");

    if (number === 0) {
    stop(); 
    showResults();
    }
}

function stop () {
    clearInterval(countdown);
}

function showResults () {
    document.getElementById('trivia-page').style.display = "none";
    document.getElementById('results-page').style.display = "block";
    let answersTotal = trivia.wrong + trivia.right; 
    unanswered = 4 - answersTotal;
    
    $('#correct').text("correct: " + trivia.right);
    $('#incorrect').text("Incorrect: " + trivia.wrong);
    $('#unanswered').text("Unanswered: " + unanswered);

    console.log('right answers: '+ trivia.right);
    console.log('wrong answers: '+ trivia.wrong);
    console.log('unanswered: ' + unanswered);
}







});


