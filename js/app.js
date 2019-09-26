'use strict';


var guessAttempts = 0;
var score = 0
var userName = prompt('Please tell us who you are!');
function gameOne(){
  alert( 'hello ' + userName + '! Welcome to my About Me html. Hope you enjoy it!');

  var one = prompt('Are you grading this today?');

  if (one.toLowerCase() === 'yes') {
    // console.log('great! Please let me know how I did!'); 
    // I have used the comment on this log but I did alter the other console.logs into alerts. 
    alert( 'great! Please let me know how I did!');
    score++;
  }else  { 
    alert( 'Well, ' + userName + ' you are pretty great for being in this class. We should work together to make more of this cool stuff!');
  }

  var two = prompt('did you do the reading yesterday?');
  if (two.toLowerCase() === 'yes') {
    alert('Great work!');
    score++;
  }   else  {
    alert('hmm, you probaby should complete that,' + userName);
  }



  var three = prompt('did it take you a long time to get to class today? ');
  if (three.toLowerCase() === 'yes') {
    alert('Hmm, well we all cannot live as close as Calvin!');
    score++;
  }   else   {
    alert('I bet you slept in then, huh ' + userName);
  }



  var four = prompt ('Did you bring lunch today? ');
  if (four.toLowerCase() === 'yes') {
    alert('Yeah, I think I should bring lunch more often like you!');
    score++;
  }   else {
    alert('I bet you could save a lot of money if you did,  ' + userName);
  }

  var five = prompt ('Are you getting tired of these questions? ');
  if (five.toLowerCase() === 'yes') {
    alert('You and me both, ' + userName);
    score++;
  }    else  {
    alert('oh really? I can make some more for you if you think you can handle it,  ' + userName); 

  } 
  alert('Sooo I want to play a game');
}

var answer = 5;
var isCorrect =false;
var responseSix =parseInt(prompt('guess what number between one and ten i\'m thinking of. You have 4 tries!'));
//  console.log(responseSix);
function gameTwo(){
  for (var i=1; i<5; i++){
    if (responseSix === answer){
    // console.log'Wow great guess! That is it!'
      alert('Wow great guess! That is it!');
      isCorrect = true;
      score++;
      alert('Hey you got '+ score + ' correct answers. great job!');
      break;
    }
    if(responseSix < answer) alert('Too low! Try something higher!');
    if(responseSix > answer) alert('Too high! Try something lower!');
    responseSix= parseInt(prompt('That\'s not it! Guess again'));
  }

  if(!isCorrect) {
    alert('Sorry, no more tries!');
    alert('The correct answer was 5 by the way!');
  }
}
//  This begins question seven. I am going to leave this here as this was much of my work attempting to figure out how to loop propely
//  In the future, I understand and will be deleting this much code. I am going to leave this here as proof of my work this time though. 

// var sixAttemps = 6;
// var isAnswer =   [
//         2,
//         12,
//         46
// ];


//  alert('alright! now we get to play one last game! I\'ll pick three numbers between one and fifty');
//  var responseSeven =parseInt(prompt('Can you guess one of them? You only have six guesses this time!'));
 
//  for(i=1; i<6;i++) {
//         if(isAnswer === false); {
//                  alert('Sorry, that is not one of the numbers I was thinking of');
// }       else if(isAnswer === true); {
//                  alert('congradulations! That is one of the right answers!');
//                 break;
// }
// }
  
// // var colors = ['red', 'white', 'blue'];
// var comment;

// for (var tries = 6; tries >= 0; --tries) {
//         comment = prompt('what\'s you\'re fav color');
//         for (var i = 0; i < colors.length; ++i) {
//                 if (comment === colors[i]) {
//                         alert('congrats!');
//                         break;
//                 } else {
//                         alert('wrong!');
//                 }

//         }
// }

// while (tries > 0) {
//         for (var i = 0; i < colors.length; ++i) {
//                 if (comment === colors[i]) {
//                         alert('congrats!');
//                         break;
//                 } else {
//                         alert('wrong!');
//                         prompt('what\'s you\'re fav color');
//                         tries -= 1;
//                 }
//         }
        
// }


// for (var i = 0; i < colors.length; ++i) {
//         prompt('what\'s you\'re fav color');
//         if (comment !== colors[i]) {
//                         alert('wrong!');
//                         while (tries >6) {
//                         tries += 1;
//                         }  
//                 } else if (comment !== colors[i]) {
//                         alert('wrong! The answer was either Red, White, or blue!');
//                 } else {
//                 alert('congrats!');
//                 break;
//         }
// }

var colors = ['red', 'white', 'blue'];
var count = 0



while(count < 6 ) {
  var question = prompt('name that color');
  var comment = false;        
  for(var i=0; i<6; i++) {
    if(question === colors[i]) {
      comment = true;
    }

  }
  if( comment === true){
    alert('congrats');
    score++
    break;
  }
  if(comment === false){
    alert('sorry, try again');
    count++;
    if (count === 6) {
      alert('sorry, the right answers were red, white, or blue!');
    }
  }
}
alert('Hey you got '+ score + ' correct answers. great job!');
gameOne();
gameTwo();
