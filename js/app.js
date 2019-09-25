'use strict';
var score = 0

var userName = prompt('Please tell us who you are!');

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

//} do I need this here or should i remove the } ???
alert('Hey congradulations! You answered ' + score + ' correctly!');
}
