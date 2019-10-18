


let number = 180
let countdown;
let right = 0;
let wrong = 0; 



console.log(wrong);
console.log(right);


$('#wrongAnswer').on('click',function () {
wrong++;

});

$('#rightAnswer').on('click',function() {
right++;

});



function showtriviaPage() {
    document.getElementById('start-button').style.display = "none"; 
    document.getElementById('trivia-page').style.display = "block";
    countdown = setInterval(decrement, 1000);

}

function decrement() { 
    number--;
    $('#show-number').html("<p>" + number + "<p>");

    if (number === 0) {

    stop(); 

    }
}

function stop () {
    clearInterval(countdown);
}