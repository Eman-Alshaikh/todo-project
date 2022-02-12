
'use strict';

 
var UserName= prompt('Please enter your name here : ');

var gender = prompt('Please enter your gender here : you must enter(Male or Female').toUpperCase();

if (gender !== 'MALE' && gender !== 'FEMALE') {

  alert('you can only enter Male or Female');

  gender = prompt('Please enter your gender here : you must enter(Male or Female').toUpperCase();
}

var age = prompt('Please enter your age here :');
if (age <= 0) {
  alert('the age must be bigger than 0 ');
  age = prompt('Please enter your age here:');

}


var x = prompt('do you want to skip the welcoming Message?').toUpperCase();
if (x=== 'YES') {

   var confirmation = confirm('Are you sure?');
}
else {
  if (gender === 'MALE') {
    alert(`Welcome to Mr. ${UserName}`);
  }
  else if (gender === 'FEMALE') {
    alert(`Welcome to Mrs. ${Username}`);
  }
  else {
    alert(`You are Welcome `);  }

}



function theQuestions (q) {
  let arrAnswer= [];
  for (let i= 0;i<q.length; i++) {

 
    let theAns= prompt(q[i]).toLowerCase();
    if (theAns === ' '){
     arrAnswer.push('in valid');}
    else if(theAns === 'yes' || theAns === 'no'){
    arrAnswer.push(theAns);}
    else{
      alert('In valid answer');
    }
 
  }
  for (let i = 0 ; i < arrAnswer.length; i++) {
    console.log(`the answer is ${i+1}: ${arrAnswer[i]}`);

  }

}

theQuestions(['please Enter your last name here : ',
'please Enter your lucky digit number : ','please Enter your birthday   : ']);

